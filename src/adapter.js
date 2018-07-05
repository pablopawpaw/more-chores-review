const choresURL = "http://localhost:3000/chores"


class Adapter {

  static getChores(){
    return fetch(choresURL).then( r => r.json() )
  }

  static createChore(choreObj){
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(choreObj)
    }
    return fetch(choresURL, options).then( r => r.json())
  }

  static deleteChore(id){
    const options = {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    }
    return fetch(choresURL + `/${id}`, options).then( r => r.json())
  }

  static updateChore(id, updatedChore){
    const options = {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedChore)
    }
    return fetch(choresURL + `/${id}`, options).then( r => r.json())
  }

}
