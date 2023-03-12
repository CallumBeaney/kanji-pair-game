
let state = {
  "tries" : 0,
  "kanjiPair" : [],
  "prevButton" : "",
  "successes" : [],
  "gridKanji" : [],
};

let counter = 0;
const numWords = 8; // results in double the number of kanji
// let screenState = isSmallScreen();

!function main() {
  buildGrid(numWords);
}();

// Helpers hereafter __________________________________

function buildGrid () {
  const kanjiList = getListOfKanji(wordList, numWords); // must make const or shuffling operations do not work
  state.gridKanji = kanjiList;
  // const shuffledList = shuffle(kanjiList);
  // buildButtons(shuffledList);
  buildButtons(kanjiList);
}

function identifyRepeatUsableTiles(currentWord)
{
  /*  The fundamental idea of this game is to generate 16 kanji from 8 seed words,
        but the pairs the user makes from those  16 kanji are then compared against
        a list of words, and Not against the original 8 seed words. The very purpose 
        of this is to allow unpredictable, natural word-identification + challenge.
      But this makes the game Damn hard to solve without expert knowledge.
      This function makes any kanji that ARE GREEN the colour Gold so that they have
      a hint as to what to do next. */

  const gridKanji = state.gridKanji; // array of kanji that appear in the grid
  const successes = state.successes; // array of green kanjiButton IDs
  let unPassedKanji = [];            // this will contain grey kanjiButton IDs
  let viableWords = [];              //  
  
  // Get the kanji from within the buttons that aren't green yet
  const unPassedButtons = document.getElementsByClassName("kanjiButton base");
  for (i = 0; i < unPassedButtons.length; i++) {
    unPassedKanji += unPassedButtons[i].innerHTML;
  }
  
  // Get a kanji from successes list.
  for (i = 0; i < successes.length; i++) {
    const element = document.getElementById(successes[i]).innerHTML;
    // Check this kanji against every element in state.gridKanji
    for (j = 0; j < unPassedKanji.length; j++)
    {
      let checkerWord = element + unPassedKanji[j];
      if (checkerWord != currentWord && checkerWord in wordList){
        viableWords.push(checkerWord);
      }
    }    
  } // Now have an array of 2-char words that can be built from 1 already-green button & grey ones.
  
  viableSplit = [...new Set(viableWords.flatMap(str => str.split('')))];
  // Set contains a value only once. Spread operator converts Set back to array. flatMap(xyz) splits each 2-char String in viableWords and returns it all as single char indexes
  console.log(viableSplit)

  // Change colours of viable buttons.
  for (i = 0; i < successes.length; i++) {
    let checker = document.getElementById(successes[i]).innerHTML;
    if (viableSplit.includes(checker)){
      document.getElementById(successes[i]).className = "kanjiButton reSelected";
    }
  }
  
}

function getListOfKanji(words, limit) {
  const keys = Object.keys(words);
  let list = [];
  // build a string of kanji 
  for (i = 0; i < limit; i++) {
    do {
      // Get a random word by extracting a Key from the 'wordlist' Map
      passer = Array.from(keys[Math.floor(Math.random() * keys.length)]);
    } while (passer.some(e => list.includes(e)) == true); // ensure that no key is repeated
    list.push(...passer.map(String)); // get that Array as some strings  
  }
  return list;
}

function buildButtons(kanjiList) 
{  
  document.getElementById("griddyboi").innerHTML = ""; // clear any buttons (buildButtons called by tryKanji)

  for (i = 0; i < 16; i++) {
    const buttonID = 'kb' + i;
    const buildElem = '<button class="kanjiButton base" id="' + buttonID + '" onclick="tryKanji(this.innerHTML, this.id)">' + '</button>';
    document.getElementById("griddyboi").innerHTML += buildElem;
    document.getElementById(buttonID).innerHTML = kanjiList[i];
  }
}

function shuffle (arr) {
  var j, x, index;
  for (index = arr.length - 1; index > 0; index--) {
      j = Math.floor(Math.random() * (index + 1));
      x = arr[index];
      arr[index] = arr[j];
      arr[j] = x;
  }
  return arr;
}




function tryKanji(newKanji, id) {
  // console.log(state)

  resetButtons(id, state.prevButton);

  if (state.tries == 0){ 

    // console.log(state.tries)
    // console.log(document.getElementById(id).className)

    if (document.getElementById(id).className == "kanjiButton success") {
      // user is re-pushing an already-successful button
      document.getElementById(id).className = "kanjiButton success"; // colour button
    } else {
      // user is pushing first button in a pair
      document.getElementById(id).className = "kanjiButton selected"; // colour button
    }

    state.kanjiPair.push(newKanji);
    state.prevButton = id;
    state.tries++;
    return;
  }
  else if (state.tries == 1){
    // user is pushing second button in the pair
    let previousKanji = state.kanjiPair[0];
    let lookup = previousKanji + newKanji;
    
    // word successful
    if ((lookup in wordList)) 
    { 
      counter++;
      addToUserList(lookup);

      // Colour the successful buttons
      document.getElementById(id).className = "kanjiButton success";
      document.getElementById(state.prevButton).className = "kanjiButton success";

      // add the pair of buttons to the state's success register (this used to maintain green tiles)
      state.successes.push(id);
      state.successes.push(state.prevButton);

      // reset state
      state.tries--; 
      state.prevButton = "";
      state.kanjiPair = [];
      // console.log("well done; you've identified a pair!");

      if (checkAllButtonsPassed()){ // the user has completed a grid -- make a new one!
        state.successes = [];
        state.gridKanji = [];
        buildGrid(numWords);
        return;
      }
      identifyRepeatUsableTiles(lookup);
      
      return;

    } else {  // word NOT successful
      // console.log("sorry, this isn't a pair!");
      document.getElementById(id).className = "kanjiButton failure";
      if (state.successes.includes(state.prevButton)){
        document.getElementById(state.prevButton).className = "kanjiButton success";
      } else {
        document.getElementById(state.prevButton).className = "kanjiButton failure";
      }
      state.tries--;
      state.kanjiPair = [];
      return;
    }
  }
}



function checkAllButtonsPassed() 
{   //this is a cursed way of doing this but it's 2am and I'm dying

    const successes = state.successes.map(element => parseInt(element.replace("kb", ""))).sort((a, b) => a - b);
    const sortedSuccesses = [...new Set(successes)] // now contains an array of integers no duplicates [0, 1, 2, ..., 15]
    const checkArray = [...Array(16).keys()]; // get 16-long array of ints
    
    if (checkArray.length !== sortedSuccesses.length) {
      // console.log('The arrays are not identical');
      return false;
    } else {
      // Loop through each element of the arrays and compare them
      for (let i = 0; i < checkArray.length; i++) {
        if (checkArray[i] !== sortedSuccesses[i]) {
          // console.log('The arrays are not identical');
          return false;
        }
      }
      // console.log('The arrays are identical');
      return true;
    }
}

function resetButtons(thisId, prevId){
  // Cycle through every button in the grid
  for (i=0;i<(numWords * 2);i++){
    cycid = "kb" + i;
    if (cycid == thisId){ // if the user is just pressing the same button twice, ignore
      continue;
    }
    if (state.successes.includes(cycid)){ // if the user has used an already-passed button, keep it green
      if(document.getElementById(cycid).className != "kanjiButton reSelected"){
      document.getElementById(cycid).className = "kanjiButton success";
    }
      continue;
    }
    document.getElementById(cycid).className = "kanjiButton base"; // reset the button
  }
}


function addToUserList(word){

  if (counter == 1) {
    document.getElementById("title").remove();
  }

  const kana = wordList[word].k;
  const definition = wordList[word].d;

  let buildElem = "#" + counter;
  buildElem  += '<table class="tg"><colgroup><col style="width: 25%"><col style="width: 50%"><col style="width: 50%">'
              + '<thead><tr>' 
              +   '<th class="tg-nrix" style="font-size: x-large;">' + word + '</th>'
              +   '<th class="tg-nrix medium">' + kana + '</th>';
  if (definition.length >= 10) {
    buildElem += '<th class="tg-nrix" style="font-size: 18px;">' + definition + '</th></tr></thead>';
  } else {              
    buildElem += '<th class="tg-nrix medium">' + definition + '</th></tr></thead>';
  }              
              

  const kanji1eng  = dictionary[word[0]].eigo;
  const kanji1kana = dictionary[word[0]].hatsuon;

  buildElem  += '<tbody><tr>' 
              + '<th class="tg-nrix medium">' + word[0] + '</td>';

  if (kanji1eng.length >= 20) {
    buildElem += '<td class="tg-nrix smaller">' + kanji1eng + '</td>';
  } else {
    buildElem += '<td class="tg-nrix medium">' + kanji1eng + '</td>';
  }

  if (kanji1kana.length >= 30) {
    buildElem += '<td class="tg-nrix" style="font-size:13px;">' + kanji1kana + '</td></tr>';
  } else if (kanji1kana.length >= 15) {
    buildElem += '<td class="tg-nrix smaller">' + kanji1kana + '</td></tr>';
  } else {
    buildElem += '<td class="tg-nrix medium">' + kanji1kana + '</td></tr>';
  }
  
  const kanji2eng  = dictionary[word[1]].eigo;
  const kanji2kana = dictionary[word[1]].hatsuon;

  buildElem  += '<tbody><tr>' 
              + '<th class="tg-nrix medium">' + word[1] + '</td>';

  if (kanji2eng.length >= 20) {
    buildElem += '<td class="tg-nrix smaller">' + kanji2eng + '</td>';
  } else {
    buildElem += '<td class="tg-nrix medium">' + kanji2eng + '</td>';
  }

  if (kanji2kana.length >= 30) {
    buildElem += '<td class="tg-nrix" style="font-size:13px;">' + kanji2kana + '</td></tr>';
  } else if (kanji2kana.length >= 15) {
    buildElem += '<td class="tg-nrix smaller">' + kanji2kana + '</td></tr>';
  } else {
    buildElem += '<td class="tg-nrix medium">' + kanji2kana + '</td></tr>';
  }
                          
  buildElem  += '</tbody></table><br>';

  // if (screenState == true) {
    document.getElementById("infolad").insertAdjacentHTML("afterbegin", buildElem);
  // } else {
  //   document.getElementById("infolad").insertAdjacentHTML("beforeend", buildElem);
  // }

  updateScroll();

}

function updateScroll() 
{
    var element = document.getElementById("infolad");
    // if (screenState == true){
      element.scrollTop = 0; // todo: fix thisun
    // } else {
    //   element.scrollTop = element.scrollHeight;
    // }
}

// don't want
// function isSmallScreen() {
//   // return true if the screen width is less than 800 pixels
//   const screenWidth = window.innerWidth;
//   return screenWidth < 800;  
// }
