import React from "react";

class Task extends React.Component {
    constructor(taskCaption, taskContent, executionDate, address, isCompleted, index) {
        super();

        this.taskCaption = taskCaption;
        this.taskContent = taskContent;
        this.executionDate = executionDate;
        this.address = address;
        this.isCompleted = isCompleted;
        this.index = index;
    }

}

export default Task;