function getRandomGreeting() {
  var greetings = [
  "Where are we dropin boys",
  "OHIO",
  "tortia slap boxing",  
  "What is up",
  "You are lucky if you see this",
  "GOATED",
  "The world just ended :(",
  "1+1=11 Simple maths",
  "Whats up CHAT",
  "HE He he",
  "What up Dogg ",
  "If robux was free ::)",
  "If You were mr beast",
  "Have you heard of Hyperspace x",
  "Get off the games sir",
  "SnapChat is oN Top ",
  "-_-",
  "TIkTokERs",
  "And Its GONE",
  "BriCkSter",
  "SSSSSSSPPPPPPPAAAAAAAAAMMMMMMM W in the chat",
  "Can I speak to your manager",
  "Known as the best game site",
  "What is Cheatcode",
  "Check out Hypervideo",
  "into Hyperspace",
  "If there was free food",
  "what about the snacks ",
  "The snack that smiles back",
  "FULL PIECE",
  "Who still plays fall guys",
  "What was he Yapin about",
  "Thats what she said ",
  "WE don't talk about that ",
  "He said he would win",
  "Got Chaa ha ha ",
  "He's on Fire",
  "swish/Brick",
  "Gaammeerr boy",
  "Playstation is better",
  "My phone passcode is '1234whydidyouask' btw",
  "We have a quiz tommorow",
  "I am a mind reader",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
