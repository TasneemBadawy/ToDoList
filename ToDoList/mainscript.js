const input = document.getElementById("add");
const addbutton = document.getElementById("submit");
const ultasks = document.getElementById("taskadd");
const totaltasks = document.getElementById("total");
const checkbutton = document.getElementById("checkbox");
const totaldonetasks = document.getElementById("done");

var countdone = 0;
var count = 0;
// function that add tasks
const addTasks = (event)=>{
    event.preventDefault();
    var textvalue = input.value.trim();
    if(!textvalue){
        window.alert("enter a text");
    }else{
        count++;
        const li = document.createElement('li');
        li.innerHTML = `
                 <input type="checkbox" class="check" id = "checkbox">
                 <span class="task-text">${textvalue}</span>
                 <div class="icons">
                  <button id = "edit"><i class="fa-regular fa-pen-to-square" style="color: rgb(132, 128, 128);"></i></button>
                  <button class = "delete"><i class="fa-regular fa-trash-can" style="color: rgb(132, 128, 128);"></i></button>
                 </div>
                `;

const checkbox = li.querySelector(".check");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      countdone++;
    } else {
      countdone--;
    }
    totaldonetasks.textContent = countdone;
  });  

   li.querySelector('.delete').addEventListener("click" , ()=>{
        li.remove();
        count--;
        if(checkbox.checked){
         countdone--;
        totaldonetasks.textContent = countdone;
        }
        totaltasks.textContent = count;
    }); 
       const editbutton = li.querySelector("#edit");
       const taskText = li.querySelector(".task-text");

       editbutton.addEventListener("click" , ()=>{
        const inputedit = document.createElement("input");
        inputedit.type = "text";
        inputedit.value = taskText.textContent;
        inputedit.classList.add("edit-input");
        li.replaceChild(inputedit, taskText);
        inputedit.focus();
       
        inputedit.addEventListener("blur", () => {
         taskText.textContent = inputedit.value || taskText.textContent;
         li.replaceChild(taskText, inputedit);
        });
           inputedit.addEventListener("keydown", (e) => {
           if (e.key === "Enter") {
            inputedit.blur();
            }
          });

        });
        ultasks.appendChild(li);
        input.value='';
        totaltasks.textContent = count;
    }

   
}
// count tasks
var checktasks = (event)=>{
    countdone++;
    totaldonetasks.textContent = countdone;
}



addbutton.addEventListener("click" , addTasks);
