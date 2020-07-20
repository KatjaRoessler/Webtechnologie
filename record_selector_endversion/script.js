let xDir = "rotateY"
let yDir = "rotateX"
let box
var count = 0;
var i = 0;
var color = ["#222f3e", "#f368e0", "#ee5253", "#0abde3", "#10ac84", "#5f27cd"];

function init() {

  document.querySelector("button").addEventListener("click", function() {
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]
  })

  document.getElementById("toggle-button1").onclick = function() {
    box = document.querySelector(".chill")
    console.log("hello");
    if (count % 2 == 0) {
      document.getElementById("player1").play();
      document.getElementById("icons1").classList.remove("fa-play");
      document.getElementById("icons1").classList.add("fa-pause");
    } else {
      document.getElementById("player1").pause();
      document.getElementById("icons1").classList.add("fa-play");
      document.getElementById("icons1").classList.remove("fa-pause");
      document.querySelectorAll('.chill').forEach(el => el.remove());
    }

    count++;
  }

  document.getElementById("toggle-button2").onclick = function() {
    box = document.querySelector(".doma")
    if (count % 2 == 0) {
      document.getElementById("player2").play();
      document.getElementById("icons2").classList.remove("fa-play");
      document.getElementById("icons2").classList.add("fa-pause");
    } else {
      document.getElementById("player2").pause();
      document.getElementById("icons2").classList.add("fa-play");
      document.getElementById("icons2").classList.remove("fa-pause");
      document.querySelectorAll('.doma').forEach(el => el.remove());
    }
    count++;
  }

  document.getElementById("toggle-button3").onclick = function() {
    box = document.querySelector(".house")
    if (count % 2 == 0) {
      document.getElementById("player3").play();
      document.getElementById("icons3").classList.remove("fa-play");
      document.getElementById("icons3").classList.add("fa-pause");
    } else {
      document.getElementById("player3").pause();
      document.getElementById("icons3").classList.add("fa-play");
      document.getElementById("icons3").classList.remove("fa-pause");
      document.querySelectorAll('.house').forEach(el => el.remove());
    }

    count++;
  }




  document.addEventListener("click", function(event) {
    console.log(event.target)
  })
  document.addEventListener("mousemove", function(event) {
    const x = event.pageX
    const y = event.pageY

    const midX = x - window.innerWidth / 2
    const midY = y - window.innerHeight / 2

    box.style.left = x + "px"
    box.style.top = y + "px"

    box.style.transform = xDir + "(" + midX + "deg) " + yDir + "(" + midY + "deg)"
  })

  document.querySelectorAll("select").forEach(select => {
    select.addEventListener("change", function() {
      if (this.name == "xDir") {
        xDir = this.value
      } else {
        yDir = this.value
      }
    })
  })

  var music = document.getElementsByClassName("music");
  Array.from(music[0].children).forEach(e => {
    e.addEventListener('click', function() {
      console.log("CLICK", e)
    });
  });
}