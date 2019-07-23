
let numberOfVideos = 4;
let IDs = [];
let overlay = [];
let buttons = [];

console.log('media.js ');

// AR testing
let anchorRef = document.querySelector("a-anchor");
anchorRef.addEventListener("markerFound", (e)=>{
  alert(e);
});
//markerFound, markerLost
console.log()

//Select UIs
//Select overlays
for (var i = 1; i <= numberOfVideos; i++) {
  IDs.push(".o" + i);
}

let overlays = document.querySelectorAll(".overlay");

let menus = document.querySelectorAll(".menu>button");

function checkHidden(id) {
  let el = document.querySelector(".overlay" + id);
  return el.style.display=="none"? false : true;
};

let closeBtns = IDs.map(id => {
  let closeBtn = document.querySelector(id+">.modal>.overlay-header>.closeModal");
  let modal = document.querySelector(".overlay"+id);
  closeBtn.addEventListener("click", function() {
      modal.style = "display: none;"
  });
  return closeBtn;
});

const openButtons = IDs.map(id => {
  let button = document.querySelector(".menu>button"+id);
  let overlay = document.querySelector(".overlay"+id);
  button.addEventListener("click", function() {
    let hidden = IDs.map(function() {
      return checkHidden(id);
    });
    overlay.style = "display: block;"
  });
  return button;
});



function init() {


}
