const tasksDOM = document.querySelector(".tasks");
const formDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
const formAlertDOM = document.querySelector(".form-alert");


const showTasks = async () => {
    try {
        const { data: tasks } = await axios.get("/api/v1/tasks");
        console.log(tasks);

        const alltasks = tasks.map((task) => {
            const { completed, _id, name } = task;
            return `<div class="single-task ${completed && "task-completed"}">
          <h5>
            <span>
              <i class="fas fa-check-circle"></i>
            </span>
            ${name}
          </h5>
          <div class="task-links">
            <a href="edit.html?id=${_id}" class="edit-link">
              <i class="fas fa-edit"></i>
            </a>

            <button type="button" class="delete-btn" data-id="${_id}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>`
        }).join("");
        tasksDOM.innerHTML = alltasks;
    } catch (err) {
        console.log(err)
    }
}

showTasks();

formDOM.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = taskInputDOM.value;

    try {
        await axios.post("/api/v1/tasks", { name: name });
        showTasks();
    } catch (err) {
        console.log(err);
        formAlertDOM.innerHTM = `無効です。もう一度やり直してください。`

    }
})

tasksDOM.addEventListener("click", async (event) => {
    const element = event.target;
    if (element.parentElement.classList.contains("delete-btn")) {
        const id = element.parentElement.dataset.id;
        try {
            await axios.delete(`/api/v1/tasks/${id}`);
            await showTasks();
        } catch (err) {
            console.log(err)
        }
    }
})