// This app was written over a 3-day period when I had the flu and was unable to sleep at night
//  if some of this code is Cursed or byzantine I apologise

/* The fundamental idea of this game is to generate 16 kanji from 8 seed words,
    but the pairs the user makes from those  16 kanji are then compared against
    a dictionary of words, and Not against the original 8 seed words. 
    This allows for unpredictable (natural) word-identification + challenge. */

let state = {
  "tries" : 0,
  "kanjiPair" : [],
  "prevButton" : "",
  "successes" : [],
  "gridKanji" : [],
};

let counter = 0;
const numWords = 8; // results in double the number of kanji

!function main() {
  console.log("Cheater!")
  buildGrid(numWords);
}();

// Helpers hereafter __________________________________

function buildGrid () {
  const kanjiList = getListOfKanji(wordList, numWords); // must make const or shuffling operations do not work
  state.gridKanji = kanjiList;
  const shuffledList = shuffle(kanjiList);
  // buildButtons(kanjiList);
  buildButtons(shuffledList);
}

function identifyRepeatUsableTiles(currentWord)
{
  /*  Because this program is built to let the user find words from kanji pairings
        the grid can quickly become seemingly unwinnable without expert knowledge.
      This function changes any already used (GREEN) kanji that can still be used with
      another GREY unused kanji button, to the colour Gold.
      It finds combinations where GOLD+GREY is a valid word. It does Not look for GREY+GOLD. */

  // 1. Get the kanji from within the buttons that aren't green yet
  let unPassedKanjis = []; // this will contain grey kanjiButton IDs
  const unPassedKanjiButtonIDs = document.getElementsByClassName("kanjiButton base");
  for (i = 0; i < unPassedKanjiButtonIDs.length; i++) {
    unPassedKanjis += unPassedKanjiButtonIDs[i].innerHTML;
  }
  
  // 2. Compare valid combinations of already-used (green) and unused (grey) kanji against a dictionary
  let allSuccessfulKanji = [];
  let viableUnusedKanji = [];  
  let viableSuccessfulKanji = [];    
  const successfulKanjiButtonIDs = Array.from(state.successes); // array of green kanjiButton IDs // TODO: can this be subbed in for state.successes?

  for (i = 0; i < successfulKanjiButtonIDs.length; i++) {
    // Get each kanji from the successful IDs list.
    const thisSuccessfulKanji = document.getElementById(successfulKanjiButtonIDs[i]).innerHTML;
    allSuccessfulKanji.push(thisSuccessfulKanji);
    // combine this ^ kanji with every kanji in unPassedKanjis & build words to check
    for (j = 0; j <= unPassedKanjis.length; j++)
    {
      const checkerWord = thisSuccessfulKanji + unPassedKanjis[j];
      // const invertedCheckerWord = checkerWord[1] + checkerWord[0]; 
      // N.B. including invertedCheckerWord in if() SIGNIFICANTLY increases difficulty.
      if (checkerWord != currentWord && checkerWord in wordList){
        viableUnusedKanji.push(unPassedKanjis[j]);
        viableSuccessfulKanji.push(thisSuccessfulKanji);
      }
    }    
  }

  // SYNTAX EXPLANATION: Set contains a value only once. Spread operator converts Set back to array. flatMap(xyz) splits each 2-char String in viableWords and returns it all as single char indexes
  viableUnusedSplit = [...new Set(viableUnusedKanji.flatMap(str => str.split('')))];  
  console.log("You can pair yellows with: " + viableUnusedSplit)

  // 3. Change colour of Green buttons that *can* be joined with Grey ones, to Gold (kanjiButton reSelected) 
  viableSuccessfulKanjiSplit = [...new Set(viableSuccessfulKanji.flatMap(str => str.split('')))];
  for (i = 0; i < successfulKanjiButtonIDs.length; i++) {
    let checker = document.getElementById(successfulKanjiButtonIDs[i]).innerHTML;
    if (viableSuccessfulKanjiSplit.includes(checker)){
      document.getElementById(successfulKanjiButtonIDs[i]).className = "kanjiButton reSelected"; // make Gold
    }
    else {
      document.getElementById(successfulKanjiButtonIDs[i]).className = "kanjiButton success"; // keep Green
    }
  } 

  /*  4. Let's say your user has gone through Gold+Greys & Grey+Greys until there's only 
         one Grey & no Gold's left. GOLD+GREY is valid but GREY+GOLD isn't! In this case, 
         they'd have to guess which of 15 Greens to add to the Grey. This makes it blue.    */

  if (unPassedKanjiButtonIDs.length == 1) 
  {
    for (a = 0; a < unPassedKanjis.length; a++) {
      let firstKanji = unPassedKanjis[a];
      for (b = 0; b < allSuccessfulKanji.length; b++){
        let secondKanji = document.getElementById(successfulKanjiButtonIDs[b]).innerHTML;
        let checkword = firstKanji + secondKanji;
        if (checkword in wordList) {
          // console.log("final word is: " + checkword)
          document.getElementById(successfulKanjiButtonIDs[b]).style.backgroundColor = "#146fca"; // make it blue
        }
      }  
    }
  }

}


function getListOfKanji(words, limit) {
  const keys = Object.keys(words);
  let list = [];
  let debugPairs = [];
  // build a string of kanji 
  for (i = 0; i < limit; i++) {
    do {
      // Get a random word by extracting a Key from the 'wordlist' Map
      passer = Array.from(keys[Math.floor(Math.random() * keys.length)]);
    } while (passer.some(e => list.includes(e)) == true); // ensure that no key is repeated
    debugPairs.push(passer.join(""));
    list.push(...passer.map(String)); // get that Array as some strings  
  }
  console.log("Original Kanji Pairs: " + debugPairs)
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
      document.getElementById(id).className = "kanjiButton success";
    } else {
      // user is pushing first button in a pair
      document.getElementById(id).className = "kanjiButton selected"; 
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
    // identifyRepeatUsableTiles(lookup);
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
      // if (state.successes.includes(state.prevButton) && document.getElementById(state.prevButton).className != "kanjiButton reSelected"){ 
      if (state.successes.includes(state.prevButton)){ // TODO this right? vvv
        document.getElementById(state.prevButton).className = "kanjiButton success";
      } else {
        document.getElementById(state.prevButton).className = "kanjiButton failure";
      }
      state.tries--;
      state.kanjiPair = [];
      identifyRepeatUsableTiles(lookup);
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

  document.getElementById("infolad").insertAdjacentHTML("afterbegin", buildElem);
  updateScroll();
}

function updateScroll() 
{
    var element = document.getElementById("infolad");
      element.scrollTop = 0; // scroll to top of element
}
