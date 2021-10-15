import React from "react";

class Tasks extends React.Component {
    constructor(taskCaption, taskContent, executionDate, address, isCompleted) {
        super();
        
        this.taskCaption = taskCaption;
        this.taskContent = taskContent;
        this.executionDate = executionDate;
        this.address = address;
        this.isCompleted = isCompleted;
    }
}

export default Tasks;