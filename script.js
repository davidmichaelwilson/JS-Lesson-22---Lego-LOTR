// <!-- BRING IN THE WIZARD CARD FROM YOUR JAVASCRIPT HERE -->
// <div id="hero">
//   <div class="character-card">
//   <h4 class="name"> Gandalf </h4>
//     <img class="avatar" src="images/wizard.png" alt="A studious wizard">
//       <p class="health">health: <b> 60 </b></p>
//     <div class="dice-container"><div class="dice"> 6 </div></div>
//     </div>
// </div>

// <!-- BRING IN THE ORC CARD FROM YOUR JAVASCRIPT HERE -->
// <div id="monster">
//   <div class="character-card">
//   <h4 class="name"> Orc </h4>
//     <img class="avatar" src="images/orc.png" alt="An orc with digestive problems">
//       <p class="health">health: <b> 10 </b></p>
//     <div class="dice-container"><div class="dice"> 4 </div></div>
//     </div>  
// </div> 

// ============ JAVASCRIPT ============

// ===== Exercise ONE =====
// const heroDiv = document.getElementById("hero")
// heroDiv.innerHTML = `
//   <div class="character-card">
//   <h4 class="name"> Gandalf </h4>
//     <img class="avatar" src="images/wizard.png" alt="A studious wizard">
//       <p class="health">health: <b> 60 </b></p>
//     <div class="dice-container"><div class="dice"> 6 </div></div>
//   </div>
// `

// document.getElementById("monster").innerHTML = `
//   <div class="character-card">
//   <h4 class="name"> Orc </h4>
//     <img class="avatar" src="images/orc.png" alt="An orc with digestive problems">
//       <p class="health">health: <b> 10 </b></p>
//     <div class="dice-container"><div class="dice"> 4 </div></div>
//     </div>  
// `

// ===== PART TWO =====
// const heroElementId = "hero"
// const heroName = "Gandalf"
// const heroAvatar = "images/wizard.png"
// const heroHealth = "60"
// const heroDiceRoll = 7

// const monsterElementId = "monster"
// const monsterName = "Orc"
// const monsterAvatar = "images/orc.png"
// const monsterHealth = "10"
// const monsterDiceRoll = 5

// function renderCharacter(elementId, name, avatar, health, diceRoll) {
//   document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//     <h4 class="name"> ${name} </h4>
//       <img class="avatar" src="${avatar}" alt="A studious wizard">
//         <p class="health">health: <b>${health}</b> </p>
//       <div class="dice-container"><div class="dice"> ${diceRoll} </div></div>
//     </div>
// ` 
// }

// renderCharacter(heroElementId, heroName, heroAvatar, heroHealth, heroDiceRoll)
// renderCharacter(monsterElementId, monsterName, monsterAvatar, monsterHealth, monsterDiceRoll)

// ===== Exercise TWO =====
// const hero = {
//   elementId: "hero",
//   name: "Gandalf",
//   avatar: "images/wizard.png",
//   health: 60,
//   diceRoll: 7,
// }
// const monster = {
//   elementId: "monster",
//   name: "Orc",
//   avatar: "images/orc.png",
//   health: 10,
//   diceRoll: 5,
// }

// function renderCharacter(data) {
//   document.getElementById(data.elementId).innerHTML = `
//     <div class="character-card">
//     <h4 class="name"> ${data.name} </h4>
//       <img class="avatar" src="${data.avatar}" alt="A studious wizard">
//         <p class="health">health: <b>${data.health}</b> </p>
//       <div class="dice-container"><div class="dice"> ${data.diceRoll} </div></div>
//     </div>
// ` 
// }

// renderCharacter(hero)
// renderCharacter(monster)

// ===== Exercise THREE =====
// const dreamVacation = {
//   destination: "Ireland",
//   activity: "sightseeing",
//   companion: "Neely"
// }

// const {destination, activity, companion} = dreamVacation

// // const destination = dreamVacation.destination
// // const activity = dreamVacation.activity
// // const companion = dreamVacation.companion

// console.log(`My dream vacation is in ${destination} doing the typical ${activity} with my favorite human, ${companion}.`)


// ===== PART 4 =====
// const hero = {
//   elementId: "hero",
//   name: "Gandalf",
//   avatar: "images/wizard.png",
//   health: 60,
//   diceRoll: [3,1,4],
//   diceCount: 3,
// }
// const monster = {
//   elementId: "monster",
//   name: "Orc",
//   avatar: "images/orc.png",
//   health: 10,
//   diceRoll: [2],
//   diceCount: 1,
// }

// function renderCharacter(data) {
//   const {elementId, name, avatar, health, diceRoll, diceCount} = data
  
//   const diceHtml = diceRoll.map(function(number) {
//     return `<div class="dice">${number}</div>`
//   }).join("")
  
//   // for (let i = 0; i < diceRoll.length; i++) {
//   //   diceHtml += `<div class="dice">${diceRoll[i]}</div>`
//   // }

//   document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//     <h4 class="name"> ${name} </h4>
//       <img class="avatar" src="${avatar}" alt="A studious wizard">
//         <p class="health">health: <b> ${health} </b> </p>
//       <div class="dice-container"> ${diceHtml} </div>
//     </div>
//    `
// }

// ===== Exercise FOUR =====
// function getDiceRollArray(diceCount) {
//   const newDiceRolls = []
//   for (let i = 0; i < diceCount; i++) {
//     newDiceRolls.push(Math.floor(Math.random()*6)+1)
    
//   // diceHtml.textContent += diceCount[i]
//   }
//   return newDiceRolls
// }
// console.log(getDiceRollArray(3))

// renderCharacter(hero)
// renderCharacter(monster)


// ===== PART FIVE =====
// const hero = {
//   elementId: "hero",
//   name: "Gandalf",
//   avatar: "images/wizard.png",
//   health: 60,
//   diceRoll: [3,1,4],
//   diceCount: 3,
// }
// const monster = {
//   elementId: "monster",
//   name: "Orc",
//   avatar: "images/orc.png",
//   health: 10,
//   diceRoll: [2],
//   diceCount: 1,
// }

// function renderCharacter(data) {
//   const {elementId, name, avatar, health, diceRoll, diceCount} = data
  
//   const diceHtml = getDiceHtml(diceCount)
  
//   // const diceHtml = diceRoll.map(function(number) {
//   //   return `<div class="dice">${number}</div>`
//   // }).join("")

//   document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//     <h4 class="name"> ${name} </h4>
//       <img class="avatar" src="${avatar}" alt="A studious wizard">
//         <p class="health">health: <b> ${health} </b> </p>
//       <div class="dice-container"> ${diceHtml} </div>
//     </div>
//    `
// }

// function getDiceRollArray(diceCount) {
//   const newDiceRolls = []
//   for (let i = 0; i < diceCount; i++) {
//     newDiceRolls.push(Math.floor(Math.random()*6)+1)
//   }
//   return newDiceRolls
// }

// // ===== Exercise FIVE =====
// function getDiceHtml(diceCount) {
//   return getDiceRollArray(diceCount).map(function(number){
//     return `<div class="dice">${number}</div>`
//   }).join("")
// }

// renderCharacter(hero)
// renderCharacter(monster)


// ===== PART SIX =====
// const hero = {
//   elementId: "hero",
//   name: "Gandalf",
//   avatar: "images/wizard.png",
//   health: 60,
//   // diceRoll: [3,1,4],
//   diceCount: 3,
// }
// const monster = {
//   elementId: "monster",
//   name: "Orc",
//   avatar: "images/orc.png",
//   health: 10,
//   // diceRoll: [2],
//   diceCount: 1,
// }

// function renderCharacter(data) {
//   const {elementId, name, avatar, health, diceCount} = data
  
//   const diceHtml = getDiceHtml(diceCount)
  
//   // const diceHtml = diceRoll.map(function(number) {
//   //   return `<div class="dice">${number}</div>`
//   // }).join("")

//   document.getElementById(elementId).innerHTML = `
//     <div class="character-card">
//     <h4 class="name"> ${name} </h4>
//       <img class="avatar" src="${avatar}" alt="A studious wizard">
//         <p class="health">health: <b> ${health} </b> </p>
//       <div class="dice-container"> ${diceHtml} </div>
//     </div>
//    `
// }

// function getDiceRollArray(diceCount) {
//   const newDiceRolls = []
//   for (let i = 0; i < diceCount; i++) {
//     newDiceRolls.push(Math.floor(Math.random()*6)+1)
//   }
//   return newDiceRolls
// }

// function getDiceHtml(diceCount) {
//   return getDiceRollArray(diceCount).map(function(number){
//     return `<div class="dice">${number}</div>`
//   }).join("")
// }

// // ===== Exercise SIX =====
// function getDiceRollArray(diceCount) {
//   // const newDiceRolls = []
//   // for (let i = 0; i < diceCount; i++) {
//   //   newDiceRolls.push(Math.floor(Math.random()*6)+1)
//   // }
//   // return newDiceRolls

//   return new Array(diceCount).fill(0).map(function() {
//     return Math.floor(Math.random()*6)+1
//   })
// }

// renderCharacter(hero)
// renderCharacter(monster)


// ===== PART SEVEN =====
// const hero = {
//   elementId: "hero",
//   name: "Gandalf",
//   avatar: "images/wizard.png",
//   health: 60,
//   // diceRoll: [3,1,4],
//   diceCount: 3,
// }
// const monster = {
//   elementId: "monster",
//   name: "Orc",
//   avatar: "images/orc.png",
//   health: 10,
//   // diceRoll: [2],
//   diceCount: 1,
// }

// // function renderCharacter(data) {
// //   const {elementId, name, avatar, health, diceCount} = data
  
// //   const diceHtml = getDiceHtml(diceCount)
  
// //   document.getElementById(elementId).innerHTML = `
// //     <div class="character-card">
// //     <h4 class="name"> ${name} </h4>
// //       <img class="avatar" src="${avatar}" alt="A studious wizard">
// //         <p class="health">health: <b> ${health} </b> </p>
// //       <div class="dice-container"> ${diceHtml} </div>
// //     </div>
// //    `
// // }

// function getDiceRollArray(diceCount) {
//   const newDiceRolls = []
//   for (let i = 0; i < diceCount; i++) {
//     newDiceRolls.push(Math.floor(Math.random()*6)+1)
//   }
//   return newDiceRolls
// }

// // function getDiceHtml(diceCount) {
// //   return getDiceRollArray(diceCount).map(function(number){
// //     return `<div class="dice">${number}</div>`
// //   }).join("")
// // }

// function getDiceRollArray(diceCount) {
//   return new Array(diceCount).fill(0).map(function() {
//     return Math.floor(Math.random()*6)+1
//   })
// }

// // renderCharacter(hero)
// // renderCharacter(monster)

// // ===== Exercise SEVEN =====
// function Character(data) {
//   Object.assign(this, data)

//   this.getDiceHtml = function(diceCount) {
//     return getDiceRollArray(diceCount).map(function(number){
//       return `<div class="dice">${number}</div>`
//   }).join("")
// }
  
//   this.getCharacterHtml = function() {
//     const {elementId, name, avatar, health, diceCount} = this
  
//     const diceHtml = this.getDiceHtml(diceCount)
  
//     return `
//       <div class="character-card">
//       <h4 class="name"> ${name} </h4>
//         <img class="avatar" src="${avatar}" alt="A studious wizard">
//           <p class="health">health: <b> ${health} </b> </p>
//         <div class="dice-container"> ${diceHtml} </div>
//       </div>
//      `
//   }
// }
    
// const wizard = new Character(hero)

// const orc = new Character(monster)

// function display() {
//   document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml()
//   document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml()
// }
//   display()

// // wizard.getCharacterHtml()
// // orc.getCharacterHtml()


// ===== PART NINE =====
// import characterData from "./data.js"
// import Character from "./character.js"

// // function Character(data) {
// //   Object.assign(this, data)

// //   this.getDiceHtml = function(diceCount) {
// //     return getDiceRollArray(diceCount).map(function(number){
// //       return `<div class="dice">${number}</div>`
// //   }).join("")
// // }
// //   this.getCharacterHtml = function() {
// //     const {elementId, name, avatar, health, diceCount} = this
// //     const diceHtml = this.getDiceHtml(diceCount)
// //     return `
// //       <div class="character-card">
// //       <h4 class="name"> ${name} </h4>
// //         <img class="avatar" src="${avatar}" alt="A studious wizard">
// //           <p class="health">health: <b> ${health} </b> </p>
// //         <div class="dice-container"> ${diceHtml} </div>
// //       </div>
// //      `
// //   }
// // }
    
// // function getDiceRollArray(diceCount) {
// //   return new Array(diceCount).fill(0).map(function() {
// //     return Math.floor(Math.random()*6)+1
// //   })
// // }

// const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)

// function display() {
//   document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
//   document.getElementById("monster").innerHTML = orc.getCharacterHtml()
// }
//   display()


// // ===== PART TEN / Exercise TEN =====
// document.getElementById("attack-button").addEventListener("click", attack)
// function attack() {
//   display()
// }


// ===== PART ELEVEN / Exercise ELEVEN=====
import characterData from "./data.js"
import Character from "./character.js"

let monsterArray = ["orc", "smeagol", "cavetroll"]

const wizard = new Character(characterData.hero)
// const orc = new Character(characterData.monster)
let monster = getNewMonster()

function getNewMonster() {
  const nextMonsterData = characterData[monsterArray.shift()]
  return nextMonsterData ? new Character(nextMonsterData) : {}
}

document.getElementById("attack-button").addEventListener("click", attack)
function attack() {
  wizard.getDiceHtml()
  monster.getDiceHtml()
  wizard.takeDamage(monster.currentScore)
  monster.takeDamage(wizard.currentScore)
  display()

  if(wizard.dead) {
    endGame()
  } else if(monster.dead) {
      if(monsterArray.length > 0){
        monster = getNewMonster()
        display()
      } else {
        endGame()
      }
  }
}

function endGame(){
  let endMessage = wizard.health === 0 && monster.health === 0 ? "No one wins. Thermonuclear war!!!" : wizard.health > 0 ? "The monster has been defeated! Gandalf wins!" : `The ${monster.name} wins! The end is nigh!`
  
  // let endMessage = ""
  // if (wizard.health === 0 && orc.health === 0) {
  //   endMessage = "No one wins. Thermonuclear war!!!"
  // } else if (wizard.health > 0) {
  //   endMessage = "The monster has been defeated! Gandalf wins!"
  // } else {
  //   endMessage = `The ${name} wins! The end is nigh!`
  // }

  const endEmoji = wizard.health > 0 ? "🧙🏻‍♂️" : "💀"
  document.body.innerHTML = 
    `<div class="end-game">
      <h2>Game Over!</h2>
      <h3>${endMessage}</h3>
      <p class = "end-emoji">${endEmoji}</p>
    <button id="attack-button" onClick="window.location.reload();">Play Again</div>
</div>`
}
  
function display() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
  document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}
  display()

// ===== PART FOURTEEN / Exercise FOURTEEN =====

