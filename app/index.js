import Elo from './Elo.js'

class User {
  constructor(name) {
    this.name = name
    this.elo = Elo.startingElo
  }

  updateElo (opR, gameR) {
    this.elo = Elo.getNewRating(this.elo, opR, gameR)
  }
}

function createUser () {
  let user = new User('Victor')
  window.currentUser = user
  console.log(window.currentUser)
  }

function updateUserElo () {
  if (!window.currentUser) {
    createUser()
  }

  window.currentUser.updateElo(1200, 2)
  console.log(window.currentUser)
}
