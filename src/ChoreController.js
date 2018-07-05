const choreList = document.getElementById("chore-list")

class ChoreController {

  static onNewChoreSubmission(e){
    e.preventDefault()

    const choreObj = {
      title: document.querySelector("#title").value,
      priority: document.querySelector("#priority").value,
      duration: document.querySelector("#duration").value
    }

    Adapter.createChore(choreObj)
      .then(ChoreController.renderSingleChore)
  }


  static renderSingleChore(chore){
    const newChore = new Chore(chore)
    choreList.append( newChore.createChoreDomObject() )
  }

  static onDelete(e){
    const id = e.target.dataset.id
    Adapter.deleteChore(id)
      .then(() => ChoreController.removeChoreCard(id))
  }

  static removeChoreCard(id){
    const choreCard = document.getElementById(`chore-card-${id}`)
    choreCard.remove()
  }

  static onPriorityShift(e){
    const updatedChore = {
      priority: e.target.value
    }
    const id = e.target.dataset.id
    Adapter.updateChore(id, updatedChore).then(console.log)
  }
}
