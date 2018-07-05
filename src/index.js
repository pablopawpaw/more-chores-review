document.addEventListener("DOMContentLoaded", function(){

  const choreForm = document.getElementById("new-chore-form")

  choreForm.addEventListener("submit", ChoreController.onNewChoreSubmission)

  Adapter.getChores()
    .then( (chores) => {
      chores.forEach(ChoreController.renderSingleChore)
    })




})
