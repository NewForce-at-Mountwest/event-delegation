const todoNavItem = document.querySelector("#nav-to-do");

todoNavItem.addEventListener("click", function() {
  // Build HTML string to load to do form
  const formHTML = `<section id="task-form">
<form>
  <input type="text" id="task-name-input" placeholder="Name of task" />
  <input
    type="text"
    id="task-details-input"
    placeholder="Description of task"
  />
</form>
<button id="task-submit-btn">Add Task</button>
</section>
<section id="task-output">
  <!--Print tasks dynamically here-->
</section>
`;
  // insert HTML string into the DOM
  document.querySelector("#container").innerHTML = formHTML;
});

document
  .querySelector("#nav-weekly-progress")
  .addEventListener("click", function() {
    // Build an H1 html string
    const h1ForWeeklyProgress = `<h1>Weekly Progress</h1>`;
    // insert into DOM
    document.querySelector("#container").innerHTML = h1ForWeeklyProgress;
  });

// const submitButton = document.querySelector("#task-submit-btn");
// console.log(submitButton);

// submitButton.addEventListener("click", function() {
//   // Get values of both task inputs
//   const taskNameValue = document.querySelector("#task-name-input").value;
//   const taskDescriptionValue = document.querySelector("#task-details-input")
//     .value;
//   // console.log(taskNameValue, taskDescriptionValue)

//   // Build HTML string to represent a task
//   const taskHTMLString = `<section class="task-item">
//         <h5>${taskNameValue}</h5>
//         <p>${taskDescriptionValue}</p>
//     </section>`;

//   // Print HTML string to #task-output section
//   const taskOutputSection = document.querySelector("#task-output");
//   taskOutputSection.innerHTML += taskHTMLString;

//   // Clear the text field
//   document.querySelector("#task-name-input").value = "";
//   document.querySelector("#task-details-input").value = "";
// });

const containerSection = document.querySelector("#container");
containerSection.addEventListener("click", function() {
  if (event.target.id === "task-submit-btn") {
    // Get values of both task inputs
    const taskNameValue = document.querySelector("#task-name-input").value;
    const taskDescriptionValue = document.querySelector("#task-details-input")
      .value;
    // console.log(taskNameValue, taskDescriptionValue)

    // Build HTML string to represent a task
    const taskHTMLString = `<section class="task-item">
        <h5>${taskNameValue}</h5>
        <p>${taskDescriptionValue}</p>
    </section>`;

    // Print HTML string to #task-output section
    const taskOutputSection = document.querySelector("#task-output");
    taskOutputSection.innerHTML += taskHTMLString;

    // Clear the text field
    document.querySelector("#task-name-input").value = "";
    document.querySelector("#task-details-input").value = "";
  }
});
