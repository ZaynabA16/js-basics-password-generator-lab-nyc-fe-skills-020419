window.addEventListener("load", () => {
  //start your code here
});

function onSubmit(event){
  //prevent the default native behavior
  event.preventDefault()
  //get te thing that was entered
  const input = document.getElementById('password-length')
  const howManyCharacters = input.value
  if input.value =
  //ex. howManyCharacters = 10
  //we want to loop and make a random letter each time
  //start from 0, end at 9
  
  let startingString=' ';
}
for (let i - 0; i < howManyCharacters; i++){
//pick random letter 
//are we under the limit, add another howManyCharacters
let randomIndex = Math.floor(Math.random()*lowerCaseLetters.length)
startingString += lowerCaseLetters[randomIndex]
}
if startingString.length <howManyCharacters.length){
randomIndex = Math.floor(Math.random()*lowerCaseLetters.length)
startingString += lowerCaseLetters[randomIndex]

if startingString.length <howManyCharacters.length
randomIndex = Math.floor(Math.random()*lowerCaseLetters.length)
startingString += lowerCaseLetters[randomIndex]

if startingString.length <howManyCharacters.length
randomIndex = Math.floor(Math.random()*lowerCaseLetters.length)
startingString += lowerCaseLetters[randomIndex]



}