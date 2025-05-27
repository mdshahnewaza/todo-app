let todoInputE = document.querySelector('#todoInput');
let btnE = document.querySelector('#btn');
let contentE = document.querySelector('.content');

let todoList = [];

btnE.addEventListener('click', addTask);
todoInputE.addEventListener('keypress', (e)=>{
  if(e.key === 'Enter')
    console.log('enter')
    addTask()
})

 function addTask(){
  const todoText = todoInputE.value.trim();
  // Don't add empty tasks
  if(todoText === ''){
    alert('Please enter a task')
  }

  // create new task onject
  const newTask={
    id: Date.now(), // simple Id using timestamp
    text: todoText,
    completed : false,
  }

  // add task to the list
  todoList.push(newTask)

  // clear input field
  todoInputE.value = ''

  displayTasks()
 }

 const completeBtn = (taskId)=>{
  todoList = todoList.map((task) =>{
    if(task.id === taskId){
      task.completed = !task.completed
    }
    return task
  })
  // update the task status
  displayTasks()
 }

 const deleteBtn = (taskId) =>{
  todoList = todoList.filter(task => task.id !== taskId)

  // update the display
  displayTasks()
 }

 const displayTasks = ()=>{
  // clear the list
  contentE.innerHTML = ''

  // if no tasks, show empty message
  if(todoList.length === 0){
    contentE.innerHTML = `<li class='empty-message>No task available</li>`
    return
  }

  
  // create HTML for each task
  todoList.forEach((task)=>{
    const todoItems = document.createElement('li');
    todoItems .className = 'todo-item'

    
    todoItems.innerHTML = `
    <span class="todo-text ${task.completed ? 'completed' : ''}">${task.text}</span>
    <div class='task-buttons'>
    <button class="completeBtn"   onclick="completeBtn(${task.id})">${task.completed ? 'Undo': "Complete"}</button>
    <button class="deleteBtn"  onclick="deleteBtn(${task.id})">Delete</button
    </div>
    
    `
    contentE.appendChild(todoItems);
  })
 }