var gameData = {
    soulCount: 0,
    soulsPerClick: 1,
    SoulsPerClickCost: 10
}

function buySoulsPerClick() {
  if (gameData.soulCount >= gameData.SoulsPerClickCost) {
    gameData.soulCount -= gameData.SoulsPerClickCost
    gameData.soulsPerClick += 1
    gameData.SoulsPerClickCost *= 2
    document.getElementById("soulCount").innerHTML = gameData.soulCount + " Souls"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Soul Collector (Currently Level " + gameData.soulsPerClick + ") Cost: " + gameData.SoulsPerClickCost + " Gold"
  }
}


function collectSouls() {
    gameData.soulCount += gameData.soulsPerClick
    document.getElementById("soulCount").innerHTML = gameData.soulCount + " Souls"
}


function autoUpgradeSoulCollector() {
  if (gameData.soulCount >= gameData.SoulsPerClickCost * 2) {
    buySoulsPerClick()
  }
}

function soulInterest(){
  gameData.soulCount += Math.floor(gameData.soulCount) * 0.01
}


var mainGameLoop = window.setInterval(function() {
  collectSouls()
  soulInterest()
  autoUpgradeSoulCollector()
}, 1000)