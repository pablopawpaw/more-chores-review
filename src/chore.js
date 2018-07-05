// {id: 1, title: "Wash Dishes", priority: "Important", duration: "15min"}

class Chore {
  constructor(choreObj){
    this.title = choreObj.title
    this.priority = choreObj.priority
    this.duration = choreObj.duration
    this.id = choreObj.id
  }


  createChoreDomObject(){
    // container div with the class "chore-card"
      // should have a delete button with a class "delete-button"
      // h3 with it's title
      // p with it's duration in minutes
      // input with it's priority

      const choreDiv = document.createElement("div")
      choreDiv.className = "chore-card"
      choreDiv.id = `chore-card-${this.id}`

      const button = document.createElement("button")
      button.className = "delete-button"
      button.innerText = "X"
      button.dataset.id = this.id

      button.addEventListener("click", ChoreController.onDelete )

      const choreTitle = document.createElement("h3")
      choreTitle.innerText = this.title

      const choreDuration = document.createElement("p")
      choreDuration.innerText = this.duration

      const chorePriorityInput = document.createElement("input")
      chorePriorityInput.type = "text"
      chorePriorityInput.value = this.priority
      chorePriorityInput.dataset.id = this.id

      chorePriorityInput.addEventListener("blur", ChoreController.onPriorityShift)

      choreDiv.append(button, choreTitle, choreDuration, chorePriorityInput)
      return choreDiv
    // return (`
    //   <div class="chore-card">
    //     <button class="delete-button">X</button>
    //     <h3>${this.title}</h3>
    //     <p>${this.duration}</p>
    //     <input type="text" value=${this.priority} />
    //   </div>
    // `)
  }

}
