document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i <= 6; i++) {
    let btn = document.getElementById(`btn-${i}`);
    if (btn) {
      btn.addEventListener("click", function () {
        handleTaskCompletion(`btn-${i}`);
      });
    }
  }

 
  let clearHistoryBtn = document.getElementById("clear-history");
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", function () {
      let activityLog = document.getElementById("activity-logs");
      activityLog.innerHTML = "";
      alert("Activity Log Cleared Successfully!");
    });
  }
});

function handleTaskCompletion(taskId) {
  alert("Updated Successfully");

  let taskEle = document.getElementById("task-as");
  let taskEleValue = parseInt(taskEle.innerText);
  taskEle.innerText = taskEleValue - 1;

  let navValue = document.getElementById("nav-increase");
  let navValueInt = parseInt(navValue.innerText);
  let navValuePlus = navValueInt + 1;
  navValue.innerText = navValuePlus;

  let btn = document.getElementById(taskId);
  btn.style.opacity = "0.3";
  btn.style.backgroundColor = "#4F46E5";
  btn.style.pointerEvents = "none";

  if (navValuePlus > 28) {
    alert("Congrats!!! You have completed all the current tasks");
  }

  let now = new Date();
  let formattedTime = now.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  let task = document.getElementById(`task-${taskId.charAt(4)}`);
  let taskName = task.innerText;
  let activityLog = document.getElementById("activity-logs");
  let newParagraph = document.createElement("p");

  newParagraph.classList.add("p-4", "bg-[#f4f7ff]", "rounded-lg", "shadow-md");
  newParagraph.innerText = `✔ Completed: ${taskName} at ${formattedTime}`;
  activityLog.appendChild(newParagraph);
}