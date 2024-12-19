
const formElement = document.querySelector("form");
const inputElement = document.querySelector("input");
const apiKey = "6760e4dc60a208ee1fde3b17";
let allTodos = [];

getAllTodos();

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(inputElement.value);
    addTodos();
});

async function addTodos() {
    const todo = {
        title: inputElement.value,
        apiKey: apiKey,
    };
    const methodObject = {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            "content-type": "application/json"
        }
    };
    console.log('todo', todo);
    const response = await fetch("https://todos.routemisr.com/api/v1/todos", methodObject);
    if (response.ok) {
        const data = await response.json();
        // console.log("data", data);
        if (data.message === "success") {
            // GetAllTodooos
            // console.log("Added");
            getAllTodos();
            formElement.reset();
        }
    }

}

async function getAllTodos() {
    const responseAll = await fetch(`https://todos.routemisr.com/api/v1/todos/${apiKey}`);
    console.log("responseAll", responseAll);
    if(responseAll.ok){
        const data = await responseAll.json();
        console.log("data", data);
        if(data.message === "success"){
             allTodos = data.todos;
            console.log("allTodos", allTodos);
            displayData();
        }
        
    }
    
}

function displayData(){
    let cartona = "";

    for(const todo of allTodos){
        cartona+=`
         <li class="d-flex justify-content-between align-items-center border-bottom pb-2 my-2">
          <span style="${}" class="task-name">${todo.title}</span>
          <div class="d-flex align-items-center gap-3">
          ${todo.completed ? ` <span class=""
              ><i class="fa-solid fa-check" style="color: #63e6be"></i
            ></span>`:""}
           
            <span class="icon"><i class="fa-solid fa-trash-can"></i></span>
          </div>
        </li>
        `
    }
    document.querySelector(".task-container").innerHTML = cartona;
}
