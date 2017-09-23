console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1

// create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
function makeMiddleEarth() {
  var middleEarth = document.createElement('section');
    for(var i=0; i<lands.length; i++) {
      var land = document.createElement("article");
      var textNode = document.createTextNode(lands[i]);
      var h1 = document.createElement("h1");
      h1.appendChild(textNode);
      land.appendChild(h1);
      middleEarth.appendChild(land);
    }
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
var theShire = body.querySelectorAll('article')[0];
var rivendell = body.querySelectorAll('article')[1];
var mordor = body.querySelectorAll('article')[2];

function makeHobbits() {
  var hobbitList = document.createElement('ul');
  for(var i=0; i<hobbits.length; i++) {
    var createList = document.createElement('li');
    createList.className = 'hobbit';
    var textNode = document.createTextNode(hobbits[i]);
    createList.appendChild(textNode);
    hobbitList.appendChild(createList);
  }
  theShire.appendChild(hobbitList);
}

makeHobbits();

// Part 3
// create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

function keepItSecretKeepItSafe() {
  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  theRing.addEventListener('click', nazgulScreech);
  var frodo = body.querySelectorAll('li')[0];
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();



// Part 4
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell


function makeBuddies() {
  var aside = document.createElement('aside');
  var buddyList = document.createElement('ul');
  for(var i = 0, len = buddies.length; i < len; i++){
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
  }
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
}
makeBuddies();



// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  buddies[3] = "Aragorn";
}

beautifulStranger();

// Part 6

let movingHobbits = theShire.querySelectorAll('li');

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  for (let i=0; i<movingHobbits.length; i++) {
    rivendell.appendChild(movingHobbits[i]);
  }
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
