/**************************************************************/
/*                          Consigne                          */
/**************************************************************/
/*

Il s'agit de plusieurs petits exercices indépendants.

*/
/**************************************************************/
/*                        Main Program                        */
/**************************************************************/

document.addEventListener("DOMContentLoaded", () => {
  console.log("Play with pets");

  let modal = document.getElementById("popup-help");
  let help = document.getElementById("help-button");
  let closePopup = document.querySelector(".js-close-button");
  let imgCover = document.querySelector(".js-main-cover img");
  let btnBulle = document.querySelector(".js-race-chat-cover > button");
  let imgAngora = document.querySelector(".js-race-chat-cover img");
  let element = document.querySelector(".race-chat-cover");
  let sacre = document.querySelector(".js-race-chat-list li:nth-of-type(6)");
  let tigre = document.querySelector(".js-race-chat-list li:last-of-type");

  function openModal() {
    help.addEventListener("click", () => {
      modal.classList.add("visible");
      removeModal();
    });
  }

  function removeModal() {
    closePopup.addEventListener("click", () => {
      modal.classList.remove("visible");
    });
  }

  function moveImg() {
    function moveLeft() {
      imgCover.style.position = "relative";
      imgCover.style.left = parseInt(imgCover.style.left || 0) - 50 + "px";
    }

    function moveRight() {
      imgCover.style.position = "relative";
      imgCover.style.left = parseInt(imgCover.style.left || 0) + 50 + "px";
    }

    document.addEventListener("keydown", (event) => {
      console.log("Key pressed:", event.key, " | KeyCode:", event.keyCode);
      if (event.keyCode === 37) {
        moveLeft();
      } else if (event.keyCode === 39) {
        moveRight();
      }
    });
  }

  function bulleActiv() {
    btnBulle.addEventListener("click", () => {
      element.classList.toggle("visible");
    });
  }

  function changeImg() {
    imgAngora.addEventListener("click", () => {
      console.log("7");
      imgAngora.src = "images/chat-mignon.png";
    });
  }

  sacre.style.fontWeight = "bold";
  tigre.style.fontWeight = "bold";

  changeImg();
  bulleActiv();
  moveImg();
  openModal();

  // TODO : Les races de chat
  // Dans la liste, Mettre en gras le Sacré de Birmanie et le Tigré
  // La liste est accessible via la classe .js-race-chat-list
});
