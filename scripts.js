let input = document.querySelectorAll("input");
console.log(input);
let task = "";
function addTask () {
  if (input[0].value == "") {
    alert("You need to provide input");
  } else {
    // 1 is date 2 is assigned to person
    if (input[1].value == "" && input[2].value == "") {
      // console.log('1');
      task = `
<div class="task">
 <div>
  <p class="task-description">${input[0].value}</p>
 </div>
<div class="button">
<button class="Complete-btn">Complete</button>
<button class="Delete-btn">Delete</button>
</div>
</div>
`;

    } else if (input[1].value != "" && input[2].value == "") {
      // console.log('2');
      task = `
<div class="task">
 <div>
  <p class="task-description">${input[0].value}</p>
  <p class="Date">Date: ${input[1].value}</p>
   </div>
<div class="button">
<button class="Complete-btn">Complete</button>
<button class="Delete-btn">Delete</button>
</div>
</div>
`;
    } else if (input[1].value == "" && input[2].value != "") {
      // console.log('3');
      task = `
      <div class="task">
       <div>
        <p class="task-description">${input[0].value}</p>
        <p class="assigned-to">Assigned to: ${input[2].value}</p>
       </div>
<div class="button">
<button class="Complete-btn">Complete</button>
<button class="Delete-btn">Delete</button>
</div>
      </div>
      `;
    } else{
      // console.log('4');
      task = `
    <div class="task">
     <div>
      <p class="task-description">${input[0].value}</p>
      <p class="Date">Date: ${input[1].value}</p>
      <p class="assigned-to">Assigned to: ${input[2].value}</p>
     </div>
<div class="button">
<button class="Complete-btn">Complete</button>
<button class="Delete-btn">Delete</button>
</div>
    </div>
    `;
    }
    // console.log(task);
    let pendingTasks = document.getElementsByClassName("pending-tasks")[0].innerHTML += task
  }
}

let addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", addTask);

let deleteItem = document.querySelector(".task-columns")
deleteItem.addEventListener("click", (e) => {
  if (e.target.className == "Delete-btn"){
    e.target.parentElement.parentElement.remove();
  }
})


pending_tasks = document.querySelector(".pending-tasks")

pending_tasks.addEventListener("click",(e)=>{
  if (e.target.className == "Complete-btn"){
    console.log("gvihjkertbnigtuhjnb");
    let task = e.target.parentElement.parentElement.innerHTML;
    console.log(task);
    e.target.parentElement.parentElement.remove();
    task = `<div class="task"> ${task} </div>`;
    let pendingTasks = document.querySelector(".completed-tasks ").innerHTML += task
  }
})
