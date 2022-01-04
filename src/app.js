const body = document.querySelector("body")
const input = document.querySelector("input")
const saveBtn = document.querySelector("#saveBtn")
const toDoList = document.querySelector(".to_do_list")
const header = document.querySelector("h2")

const id_to_add =["del_btn"]

saveBtn.addEventListener("click",addList)
body.addEventListener("keypress",(e)=>{
    if(e.keyCode == 13){
        addList()
    }
})

body.addEventListener("click",function(){
    if(document.activeElement !== input){
        input.value = ""
    }
});

function addList(){
    var unorder_list = document.createElement("ul")
    var list = document.createElement("li")
    var inputValue = input.value.trim()  
    
    
    if(inputValue !== ""){
        header.classList.add("dsp_none")
        list.classList.add("to_do_items")
        unorder_list.classList.add("operation_list")
        
        list.textContent = input.value.trim()
        input.value = ""        
        
        toDoList.append(list)

        list.append(unorder_list)
        addHeader()
        
        id_to_add.forEach((item)=>{
            unorder_list.append(addChild(item))
        })
        character()
    }     
}
function character(){
    const del_btn = document.querySelectorAll("#del_btn")

    del_btn.forEach((del)=>{
        del.addEventListener("click",function(){            
            this.parentNode.parentNode.remove();
            var toDoItems = document.querySelectorAll(".to_do_items")
            if(toDoItems.length == 0){
                header.classList.remove("dsp_none") 
            }else{
                header.classList.add("dsp_none")
            }
        },{once:true})  
    })
}
function addHeader(){
    const toDoItems = document.querySelectorAll(".to_do_items")
        
    if(toDoItems.length == 0){
        header.classList.reamove("dsp_none") 
    }else{
        header.classList.add("dsp_none")
    }
}
function addChild(value){
    var operation_list = document.createElement("li")
    operation_list.classList.add("operation")
    operation_list.setAttribute("id",value)
    return operation_list
}


// ---------add later

// localStorage.setItem("toDos",JSON.stringify(list))
// const existingToDo = JSON.parse(localStorage.getItem("todos"))
// const toDo = existingToDo || []