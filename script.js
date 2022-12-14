// Implement the ButtonClicked() function below.
// The function shoud make a GET request to
// a link that looks like
// https://pokeapi.co/api/v2/pokemon/pikachu
// where 'pikachu' is any pokemon name.
// You can use the async/await syntax or the 
// .then() and .catch() syntax.


// async function ButtonClicked() {
  
//   try {
//     const userInput = document.getElementById("userInput").value
//     const rawRes = await fetch("https://pokeapi.co/api/v2/pokemon/" + userInput)
//     const json = await rawRes.json()
    
//     document.getElementById('name').innerText = json.name
//     document.getElementById('type').innerText = ""
    
//     for (let i=0; i<json.types.length; i++) {
//       document.getElementById('type').textContent += json.types[i].type.name + " "
//     }
    
//     document.getElementById('sprite').src = json.sprites.front_default
//     document.getElementsByClassName('error')[0].innerText = ""
//   }
  
//   catch (err) {
  
//     console.log(err)
//     //document.getElementsByClassName('error')[0].innerText = "Error!"

//     document.querySelector(".error").innerText = "Error! That is not a pokemon."
//   }
  
// }

async function ButtonClicked() {
  try {
    const userInput = document.getElementById("userInput").value
    const rawRes = await fetch("https://pokeapi.co/api/v2/pokemon/" + userInput)
    const json = await rawRes.json()

    document.getElementById("name").innerText = json.name
    document.getElementById("type").innerText = ""
      for (let i = 0; i < json.types.length; i++) {
        document.getElementById("type").textContent += json.types[i].type.name + " "
      }
    
    document.getElementById("sprite").src = json.sprites.front_default
    document.getElementsByClassName("error")[0].innerText = ""
    
  }
    
  catch (err) {
    console.log(err)
    document.getElementsByClassName("error")[0].innerText = "You Suck!"
    // document.querySelector(".error").innerText = "Error! That is not a pokemon."

  }
}