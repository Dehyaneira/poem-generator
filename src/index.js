
function generatePoem(event) {
    event.preventDefault();
    

    new Typewriter('#poem', {
  strings: "Las rosas rojas son bonitas",
  autoStart: true,
  delay:1,
  cursor: "",
    });
}
let poemFormElement= document.querySelector("#instructions");
poemFormElement.addEventListener("submit", generatePoem);