var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;

}

var TaskService = function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log('Completing task: ' + task.name);

        },
        setCompletedDate: function (task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);

        },
        notifyCompletion: function (task, user) {
            console.log('Notifying ' + user + ' of completion of ' + task.name);

        },
        save: function (task) {
            console.log('Saving task: ' + task.name)

        }
    }

}();

var TaskServiceWrapper = function () {
    var completeAndNotify = function (task) {
        TaskService.complete(myTask);
        if (myTask.completed === true) {
            TaskService.setCompletedDate(myTask);
            TaskService.notifyCompletion(myTask, myTask.user);
            TaskService.save(myTask);
        }
    }
    return {
        completeAndNotify: completeAndNotify
    }

}()
var myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Courses',
    user: 'Steve',
    completed: false
});

//console.log(myTask);
TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);