const form = document.getElementById("create-task-form")
const taskInput = document.getElementById("new-task-description")
const taskList = document.getElementById("tasks")
const dropdown = document.getElementById("dropdown")
// // const submitButton = document.querySelector(".submit")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const li = document.createElement("li")
  taskList.append(li)
  li.innerText = taskInput.value
  const dB = document.createElement("button")
  li.append(dB)
  dB.textContent = "x"

  dB.addEventListener("click", () =>{
    li.remove()
  })
  
  if(dropdown.value === "hi") {
      li.style.color = "red"
    }
  
  if(dropdown.value === "med") {
    li.style.color = "orange"
  }

  if(dropdown.value === "lo") {
    li.style.color = "lime"
  }
  })

// const form = document.getElementById("create-task-form")
// const input = document.getElementById("new-task-description")
// const ul = document.getElementById("tasks")

// form.addEventListener("submit", (e)=>{
// e.preventDefault()
// const li = document.createElement("li")
// ul.append(li)
// li.innerText = input.value
// const button = document.createElement("button")
// li.append(button)
// button.innerText = ":white_square_button:"
// button.addEventListener("click", ()=>{
// li.remove()
// })
// })






