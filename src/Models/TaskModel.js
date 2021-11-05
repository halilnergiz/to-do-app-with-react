import React from "react";

class Task extends React.Component {
    constructor(taskCaption, taskContent, executionDate, address, isCompleted, id) {
        super();

        this.taskCaption = taskCaption;
        this.taskContent = taskContent;
        this.executionDate = executionDate;
        this.address = address;
        this.isCompleted = isCompleted;
        this.id = id;
    }

}

export default Task;