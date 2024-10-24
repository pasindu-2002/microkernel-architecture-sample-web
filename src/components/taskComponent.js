class TaskComponent {
    constructor(kernel) {
        this.kernel = kernel;
    }

    init() {
        console.log("TaskComponent initialized");
        // Subscribe to the 'addTask' event when the component is initialized
        this.kernel.subscribe("addTask", this.addTask.bind(this));
    }

    destroy() {
        console.log("TaskComponent destroyed");
    }

    addTask(task) {
        console.log("Task added: ", task);
        const taskList = document.getElementById("taskList");
        const taskItem = document.createElement("div");
        taskItem.innerHTML = `${task.title} - Due: ${task.dueDate}`;
        taskList.appendChild(taskItem);
    }
}

