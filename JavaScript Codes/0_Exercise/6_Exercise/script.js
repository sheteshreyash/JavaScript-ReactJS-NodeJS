// Create a TODO List app capable of storing your TODOs in localStorage.
// Add an option to create, delete and access all the TODO’s.
// Try to make UI as good as possible

const element = document.getElementsByClassName("todos")[0]

//H:M time format to integer format
function stoi(str) {
    let int = parseInt(str) * 60;
    int = int + parseInt(str.slice(3, 5));
    return int
}
//integer time format to H:M format
function itos(int) {
    return `${(int / 60) > 12 ? Math.floor((int / 60) - 12) : Math.floor(int / 60)}:${int % 60} ${(int / 60) > 12 ? "PM" : "AM"}`
}

const animat = (abc, ind) => {
    let todos = localStorage.getItem("todo")
    todos = JSON.parse(todos)
    todos = Array.from(todos.todo);
    if (abc == 1) {

    } else if (abc == -1) {
        document.getElementsByClassName("card-todo")[ind].style.animation = `delSlide 1.5s 1 forwards`
    } else if (abc == 0) {

    } else {
        todos.forEach(async (item, indx) => {
            document.getElementsByClassName("card-todo")[indx].style.animation = `slide 1s ${indx * .2}s 1 forwards`
        })
    }
}

//function for display todos
const getTodo = (abc) => {
    let todos = localStorage.getItem("todo")
    if (todos == null) {
        localStorage.setItem("todo", `{"todo":[]}`)
        return
    } else {
        todos = JSON.parse(todos)
        if (todos.todo.length != 0) {
            document.getElementById("clr").classList.remove("d-none")
        } else {
            document.getElementById("clr").classList.add("d-none")
        }
        todos = Array.from(todos.todo);
        todos.forEach(async (item, indx) => {
            elm = document.createElement("div")
            elm.classList.add("card-todo", "border", "rounded", "my-2", "p-3", "d-flex", "justify-content-between")
            elm2 = document.createElement("div")

            h4 = document.createElement("h4")
            h4i = document.createTextNode(item.name)
            h4.appendChild(h4i)
            elm2.appendChild(h4)

            p = document.createElement("p")
            p.classList.add("text-muted")
            pi = document.createTextNode(itos(item.time))
            p.appendChild(pi)
            elm2.appendChild(p)

            elm.appendChild(elm2)
            elm2 = document.createElement("div")
            elm2.classList.add("d-flex")
            elm3 = document.createElement("div")
            elm3.classList.add("border", "rounded-circle", "mx-1", "bg-primary")


            img = document.createElement("img")
            img.src = "https://cdn-icons-png.flaticon.com/512/5996/5996831.png"
            img.height = 35
            img.setAttribute('onclick', `editTodo(${indx})`)
            elm3.appendChild(img)
            elm2.appendChild(elm3)
            elm3 = document.createElement("div")
            elm3.classList.add("border", "rounded-circle", "mx-1", "bg-danger")
            //elm3.setAttribute('onclick',`editTodo(${indx})`)

            img = document.createElement("img")
            img.src = "https://cdn-icons-png.flaticon.com/512/6467/6467134.png"
            img.height = 35
            img.setAttribute('onclick', `deleteTodo(${indx})`)
            elm3.appendChild(img)
            elm2.appendChild(elm3)
            elm.appendChild(elm2)
            element.appendChild(elm)

            if (abc) {
                document.getElementsByClassName("card-todo")[indx].classList.add("del")
            }
        })
    }
}

//function for delete todo
const deleteTodo = async (inx) => {
    let todo = localStorage.getItem("todo")
    todo = JSON.parse(todo)
    animat(-1, inx)
    await new Promise(res => setTimeout(res, 700))
    todo.todo.splice(inx, 1)
    await localStorage.setItem("todo", JSON.stringify(todo))
    element.innerHTML = ""
    getTodo(false)

}

//function for sort todos
const shortTodo = (arr) => {
    let copy = []
    for (let i = 0; i < arr.length; i++) {
        copy.push(arr[i].time)
    }

    var ind = Array.from(Array(copy.length).keys()).sort((a, b) => copy[a] - copy[b])
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[ind[i]])
    }
    return result
}

//function to add todo
const addTodo = async () => {
    let todos = localStorage.getItem("todo")
    todos = JSON.parse(todos);
    let name = document.getElementById("exampleFormControlInput1")
    let time = document.getElementById("exampleFormControlInput2")
    let t = document.getElementById("exampleFormControlInput3")
    if (t.value != -1) {
        todos.todo.splice(t, 1)
        t.value = -1
        document.getElementsByClassName("btn")[0].innerHTML = "Add"
    }
    let stat = false

    if (name.value != "") {
        todos.todo.push({
            "name": name.value,
            "time": stoi(time.value),
            "stat": stat
        })
    }
    todos.todo = shortTodo(todos.todo)
    await localStorage.setItem("todo", JSON.stringify(todos))
    element.innerHTML = ""
    getTodo(false)
}

//function for edit todo
const editTodo = (ind) => {
    let todo = localStorage.getItem("todo");
    todo = JSON.parse(todo);
    todo = todo.todo[ind]
    let input = document.getElementsByTagName("input");
    input[0].value = todo.name;
    input[1].value = `${Math.floor(todo.time / 60) < 10 ? "0" + Math.floor(todo.time / 60).toString() : Math.floor(todo.time / 60)}:${todo.time % 60 < 10 ? "0" + Math.floor(todo.time % 60).toString() : Math.floor(todo.time % 60)}`
    input[2].value = ind
    document.getElementsByClassName("btn")[0].innerHTML = "Edit"
    window.location.href = "#nav"
}

const clearAll = async () => {
    let todo = localStorage.getItem("todo");
    todo = JSON.parse(todo);
    for (let i = 0; i < todo.todo.length; i++) {
        animat(-1, i)
    }
    await new Promise(res => setTimeout(res, 500))
    todo.todo = []
    await localStorage.setItem("todo", JSON.stringify(todo))
    element.innerHTML = ""
    getTodo(false)
}


getTodo(true)
animat(null, null)