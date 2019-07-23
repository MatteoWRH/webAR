
let numberOfVideos = 4;
let IDs = [];
let overlay = [];
let buttons = [];

console.log('media.js ');

//Select UIs
//Select overlays
for (var i = 1; i <= numberOfVideos; i++) {
  IDs.push(".o" + i);
}

let overlays = document.querySelectorAll(".overlay");

let menus = document.querySelectorAll(".menu>button");

function checkHidden(id) {
  let el = document.querySelector(".overlay" + id);
  return el.style.display=="none"? false:true;
};

let closeBtns = IDs.map(id => {
  let closeBtn = document.querySelector(id+">.modal>.overlay-header>.closeModal");
  let modal = document.querySelector(".overlay"+id);
  closeBtn.addEventListener("click", function() {
    //if (!checkHidden(id)) {
      modal.style = "display: none;"
    //}
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
    if(hidden) {
        console.log(hidden);
    }
    overlay.style = "display: block;"
  });
  return button;
});

// menus.map(button => {
//   let overlay = overlays;
//   button.addEventListener("click", function() {
//     overlay.style = "display: block;"
//   });
// });



function init() {


}
