import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js"

function Character(data) {
  Object.assign(this, data)

  this.diceArray = getDicePlaceholderHtml(this.diceCount)

  this.maxHealth = this.health
  
  // this.getDiceHtml = function(diceCount) {
  //   return getDiceRollArray(diceCount).map(function(number) {
  //     return `<div class="dice">${number}</div>`
  //   }).join("")
  // }

  this.getDiceHtml = function(diceCount) {
    this.currentScore = getDiceRollArray(this.diceCount)
    this.diceArray = this.currentScore.map((number) => 
      `<div class="dice">${number}</div>`).join("")
  }

  this.takeDamage = function(attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((total, currentNumber) =>
      total + currentNumber
    )
    
    this.health -= totalAttackScore
    if(this.health <= 0) {
      this.health = 0
      this.dead = true
    }
    // console.log(getPercentage(this.health, this.maxHealth))
    
  }

  this.getHealthBarHtml = function() {
    const percent = getPercentage(this.health, this.maxHealth)

    return `
      <div class="health-bar-outer">
        <div class="health-bar-inner ${percent < 26 ? "danger" : ""}"
          style = "width: ${percent}%">
      </div>
    `
    
    // console.log(percent)
  }
  
  this.getCharacterHtml = function() {
    const {elementId, name, avatar, health, diceCount, diceArray} = this

    const healthBar = this.getHealthBarHtml()
    
    const diceHtml = this.getDiceHtml(diceCount)
    
    return `
      <div class="character-card">
      <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" alt="A studious wizard">
          <p class="health">health: <b> ${health} </b> </p>
          ${healthBar}
        <div class="dice-container"> ${diceArray} </div>
      </div>
     `
  }
}



export default Character

