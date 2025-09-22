function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0e93e42412aact309f35c9990ed8oba3";
  let prompt = `User instructions: Write a poem about ${instructionsInput.value} in Spanish with Ecuadorian words`;
  let context =
    "You are an Ecuadorian romantic expert to write poems. Your mission is to generate a 4 line in basic HTML poem divide by <br/>. Do not put the word html. Higlight the word with <strong/> that the propmt says in the poem. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#instructions");
poemFormElement.addEventListener("submit", generatePoem);
