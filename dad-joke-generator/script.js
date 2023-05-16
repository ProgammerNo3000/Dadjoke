const generateButton= document.querySelector("#generateButton")
const jokeText = document.querySelector("#jokeText");

// console.log("generateButton")
// console.log("jokeText")

const getDadJokes = async() => {
    const response = await fetch("https://icanhazdadjoke.com/", {
    method:"GET",
    headers: {
Accept: "application/json"
    },

});
const jsonJokeData = await response.json();
console.log(jsonJokeData)   
jokeText.textContent = jsonJokeData.joke;
console.log(jsonJokeData.joke)
};
getDadJokes ();
getDadJokes() ;
getDadJokes();