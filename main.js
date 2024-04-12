// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");

// Event listener
document.getElementById("btn").addEventListener("click", btn);

function btn() {
  //INPUT
  let name = document.getElementById("char-in").value.toLowerCase();

  // If Statments - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the Bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-quote").innerHTML = "We should hand out!";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name === "crane") {
    document.getElementById("char-name").innerHTML = "Crane";
    document.getElementById("char-quote").innerHTML = "Wings of Justice!";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "viper") {
    document.getElementById("char-name").innerHTML = "Viper";
    document.getElementById("char-quote").innerHTML =
      "I don't need to bite to fight!";
    document.getElementById("char-img").src = "img/viper.png";
  } else {
    document.getElementById("char-name").innerHTML = "?";
    document.getElementById("char-quote").innerHTML = "Invalid response";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}

//Theme Event Listener
document.getElementById("theme-btn").addEventListener("click", theme);

function theme() {
  let color = document.getElementById("theme-in").value.toLowerCase();

  if (color == "dark" || color == "black") {
    document.getElementById("background").style.backgroundColor =
      "rgba(0, 0, 0, 0.7)";
    document.getElementById("title").style.color = "rgba(255, 255, 255)";
  } else if (color == "white" || color == "light") {
    document.getElementById("background").style.backgroundColor =
      "rgba(255, 255, 255, 0.7)";
    document.getElementById("title").style.color = "rgba(0, 0, 0)";
  }
}
