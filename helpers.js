/* The fundamental idea of this game is to generate 16 kanji from 8 seed words,
    which the user must then discover. But, the pairs the user makes from those 
    16 kanji can also be compared against a dictionary of words. The user must 
    find all 8 seed words to win, but 
    This allows for unpredictable (natural) word-identification + challenge. */

let state = {
  "taps" : 0,                  // track user buttontaps
  "kanjiPair" : [],           // the user's currently-selected kanji pair
  "successes" : [],          // all successful kanji thus far
  "gridKanji" : [],         // the current grid's 16 kanji
  "prevButton" : "",       // the previously-tapped button's DOM-element ID
  "originalWords" : [],   // the original words for this gridKanji.
  "submittedWords" : [], // words that have been added to the list
  // "yellowWords"
};

let stats = {
  "thisGridPasses" : 0, // successful words found for a given grid
  "passCounter" : 0,   // the number of successful words found
  "gridCounter" : 0,  //  number of grids completed
  "errors" : 0,    // 2-kanji guesses made by the user
};


const numWords = 8; // results in double the number of kanji

!function main() {
  console.log("Cheater!")
  buildGrid(numWords);
}();



function buildGrid(){
  state.successes = [];
  state.gridKanji = [];
  stats.gridCounter++;
  stats.thisGridPasses = 0;
  
  let allowedWordList = wordList;
  // if the jouyouLimit is set, we must filter the wordList to allow only kanji that are in the correct grades
  const jouyouLimit = document.getElementById("jouyou-grade-limit-selector").value;
  if (jouyouLimit !== "none") {
    const maxGrade = parseInt(jouyouLimit);
    let allowedKanji = "";
    if (maxGrade >= 1) allowedKanji += grade1;
    if (maxGrade >= 2) allowedKanji += grade2;
    if (maxGrade >= 3) allowedKanji += grade3;
    if (maxGrade >= 4) allowedKanji += grade4;
    if (maxGrade >= 5) allowedKanji += grade5;
    if (maxGrade >= 6) allowedKanji += grade6;
    if (maxGrade >= 9) allowedKanji += grade9;
    allowedWordList = {};
    for (word in wordList) {
      if (allowedKanji.includes(word[0]) && allowedKanji.includes(word[1])) {
        allowedWordList[word] = wordList[word];
      }
    }
  }

  const kanjiList = getListOfKanji(allowedWordList, numWords); // must make const or shuffling operations do not work
  state.gridKanji = kanjiList;
  const shuffledList = shuffle(kanjiList);
  // buildButtons(kanjiList); // for debugging
  buildButtons(shuffledList); 
}

// Add an event listener to check when the grade limit selector has been changed
document.getElementById("jouyou-grade-limit-selector").addEventListener("change", function() {
  buildGrid();
});

// Helpers hereafter __________________________________

function getListOfKanji(words, limit)
{
  state.originalWords = [];

  const keys = Object.keys(words);
  let capturedKanjiList = [];
  let passer = new Array;
  
  for (i = 0; i < limit; i++) // build a string of kanji 
  {   
    do {
      // Get a random word by extracting a Key from the 'wordlist' Map
      passer = Array.from(keys[Math.floor(Math.random() * keys.length)]);
    } while (passer.some(e => capturedKanjiList.includes(e)) == true); // ensure that no key is repeated
    
    capturedKanjiList.push(...passer.map(String)); // get that Array as some strings  
    state.originalWords.push(passer.join("")); // store those strings as words
  }

  // For debugging
  // state.originalWords = ["膨張", "洋杯", "鼻孔", "改名", "中庭", "経文", "布教", "有罪"];
  // capturedKanjiList = ["膨", "張", "洋", "杯", "鼻", "孔", "改", "名", "中", "庭", "経", "文", "布", "教", "有", "罪"];
  
  console.log("Word List: " + state.originalWords)
  return capturedKanjiList;
}


function buildButtons(kanjiList){  
  document.getElementById("griddyboi").innerHTML = ""; // clear any buttons (buildButtons called by tryKanji)

  for (i = 0; i < 16; i++) 
  {
    const buttonID = 'kb' + i;
    const buildElem = '<button class="kanjiButton base" id="' + buttonID + '" onclick="tryKanji(this.innerHTML, this.id)">' + '</button>';
    document.getElementById("griddyboi").innerHTML += buildElem;
    document.getElementById(buttonID).innerHTML = kanjiList[i];
  }
}





function tryKanji(newKanji, id) {
  // console.log(state)
  resetButtons(id);

  if (state.taps == 0){ 

    // console.log(state.taps)
    // console.log(document.getElementById(id).className)
    
    document.getElementById(id).className = "kanjiButton selected"; 

    state.kanjiPair.push(newKanji);
    state.prevButton = id;
    state.taps++;

    return;
  }
  else if (state.taps == 1)
  {
      // user is pushing second button in the pair

      const previousKanji = state.kanjiPair[0];
      const lookup = previousKanji + newKanji;
  
      if (state.originalWords.includes(lookup)) 
      { 
        stats.passCounter++;
        stats.thisGridPasses++;

        if (! state.submittedWords.includes(lookup)){
          addToUserList(lookup);
          state.submittedWords.push(lookup);
        }

        // Colour the successful buttons
        document.getElementById(id).className = "kanjiButton success";
        document.getElementById(state.prevButton).className = "kanjiButton success";

        // add the pair of buttons to the state's success register (this used to maintain green tiles)
        state.successes.push(id);
        state.successes.push(state.prevButton);

        // reset state
        state.taps--; 
        state.prevButton = "";
        state.kanjiPair = [];
        // console.log("well done; you've identified a pair!");

        if (checkAllButtonsPassed()){ // the user has completed a grid -- make a new one!
          buildGrid(numWords);
        }
        
        changeStats();
        return;
    } 
    else if (lookup in wordList && !state.submittedWords.includes(lookup)) 
    {
        stats.passCounter++;
        stats.thisGridPasses++;

        if (! state.submittedWords.includes(lookup)){
          addToUserList(lookup);
          state.submittedWords.push(lookup);
        }

        // Colour the successful buttons
        document.getElementById(id).className = "kanjiButton partSuccess";
        document.getElementById(state.prevButton).className = "kanjiButton partSuccess";
        console.log("hahaha")

        // add the pair of buttons to the state's success register (this used to maintain green tiles)
        // state.successes.push(id);
        // state.successes.push(state.prevButton);

        // reset state
        state.taps--; 
        state.prevButton = "";
        state.kanjiPair = [];

        changeStats()
        return;
    } 
    else 
    {   // word NOT successful
        
      document.getElementById(id).className = "kanjiButton failure";

      if (state.successes.includes(state.prevButton)){
        document.getElementById(state.prevButton).className = "kanjiButton success";
      } else {
        document.getElementById(state.prevButton).className = "kanjiButton failure";
      }

      stats.errors++;
      state.taps--;
      state.kanjiPair = [];
      changeStats();
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


function resetButtons(thisId) { 
  // Cycle through every button in the grid
  for (i=0;i<(numWords * 2);i++) 
  {
    let cycleId = "kb" + i;

    if (cycleId == thisId){ 
      // if the user is just pressing the same button twice, ignore
      continue;
    }

    if (state.successes.includes(cycleId)) {
      // if the user has used an already-passed button, keep it green 
      document.getElementById(cycleId).className = "kanjiButton success";
      continue;
    }

    document.getElementById(cycleId).className = "kanjiButton base"; // reset the button
  }
}


function addToUserList(word) {

  // if (stats.passCounter == 1) {
  //   document.getElementById("title").remove();
  // }

  const kana = wordList[word].k;
  const definition = wordList[word].d;

  // let buildElem = "#" + stats.passCounter;
  let buildElem = "□ " + stats.gridCounter + "　○ " + stats.thisGridPasses;
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


function revealOnePair() {
  resetButtons(undefined);

  let validRevealPair = "";
  validRevealPair = state.originalWords.find(e => !(state.submittedWords.includes(e)));

  let buttons = document.querySelectorAll('.kanjiButton');  // bc checking against validRevealPair, only grey buttons get through loop
  let button1, button2;
  for (let i = 0; i < buttons.length; i++) {
    if (button1 == undefined && buttons[i].innerHTML.includes(validRevealPair[0])) {
      button1 = buttons[i].id;
      // console.log("button1:" + button1);
    }
    if(button2 == undefined && buttons[i].innerHTML.includes(validRevealPair[1])){
      button2 = buttons[i].id;
      // console.log("button2:" + button2);
    }
  }

  stats.thisGridPasses++;
  stats.errors += 3;

  addToUserList(validRevealPair);
  state.submittedWords.push(validRevealPair);
  state.successes.push(button1);
  state.successes.push(button2);

  state.taps = 0; 
  state.prevButton = "";
  state.hanziPair = [];

  document.getElementById(button1).className = "kanjiButton success";
  document.getElementById(button2).className = "kanjiButton success";

  if (checkAllButtonsPassed()) {
    buildGrid(numWords);
  }
  changeStats();
}


// Smaller functions continue __________________

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

function changeStats(){
  // ◯  ○ ◎  ╳ ᎒᎒᎒  ✕
  const buildHTML = "　□ " + (stats.gridCounter + "　○ " + stats.passCounter + "　⤫ " + stats.errors);
  let button = document.getElementById("statisticalfellow");
  button.innerHTML = buildHTML;
  button.style.visibility = 'visible';
}


function updateScroll() 
{
    var element = document.getElementById("infolad");
      element.scrollTop = 0; // scroll to top of element
}

