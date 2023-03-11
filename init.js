let state = {
  "tries" : 0,
  "kanji" : [],
  "prevButton" : "",
  "successes" : [],
};

const numWords = 8; // results in double the number of kanji

!function main() {
  buildGrid(numWords);
}();

// Helpers hereafter __________________________________

function buildGrid () {
  const kanjiList = getListOfKanji(wordList, numWords); // must make const or shuffling operations do not work
  // console.log(kanjiList) // debug
  // const shuffledList = shuffle(kanjiList);
  // console.log(shuffledList) // debug
  buildButtons(kanjiList);
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
    const buildElem = '<button class="kanjiButton" id="' + buttonID + '" onclick="tryKanji(this.innerHTML, this.id)">' + '</button>';
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
      document.getElementById(id).className = "kanjiButton reSelected"; // colour button
    } else {
      // user is pushing first button in a pair
      document.getElementById(id).className = "kanjiButton selected"; // colour button
    }

    state.kanji.push(newKanji);
    state.prevButton = id;
    state.tries++;
    return;
  }
  else if (state.tries == 1){
    // user is pushing second button in the pair
    let previousKanji = state.kanji[0];
    let lookup = previousKanji + newKanji;
    
    // word successful
    if ((lookup in wordList)) 
    { 
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
      state.kanji = [];
      console.log("well done; you've identified a pair!");

      if (checkAllButtonsGreen()){ // the user has completed a grid -- make a new one!
        state.successes = [];
        buildGrid(numWords);
        return;
      }
      
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
      state.kanji = [];
      return;
    }
  }
}

function checkAllButtonsGreen() 
{
    var allButtonsHaveClass = true;
    for (var i = 0; i < (numWords * 2); i++) {
      let cycid = "kb" + i;    
      if (document.getElementById(cycid).className != 'kanjiButton success') {
        allButtonsHaveClass = false;
        break;
      }
    }
    return allButtonsHaveClass;
}

function resetButtons(thisId, prevId){
  // Cycle through every button in the grid
  for (i=0;i<(numWords * 2);i++){
    cycid = "kb" + i;
    if (cycid == thisId){ // if the user is just pressing the same button twice, ignore
      continue;
    }
    if (state.successes.includes(cycid)){ // if the user has used an already-passed button, keep it green
      document.getElementById(cycid).className = "kanjiButton success";
      continue;
    }
    document.getElementById(cycid).className = "kanjiButton"; // reset the button
  }
}


function addToUserList(word){
  // state.wordCount++;
  // document.getElementById("wordcount").innerHTML = state.wordCount;
  // const buttonID = "rb" + state.wordCount;

  let buildElem = '<div><h3>' + word + '</h3></div>';

  document.getElementById("infolad").innerHTML += buildElem;


  
}
