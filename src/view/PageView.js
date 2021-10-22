import React, { Component } from "react";
import TaskList from "../ToDoDb/ToDoList";
import Task from "../Models/TaskModel";


export default class PageView extends Component {

    Date() {
        let today = new Date();
        return (`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)
    }

    ResetValues() {
        document.querySelector('.task-title').value = ''
        document.querySelector('.task-content').value = ''
        document.querySelector('.task-date').value = ''
    }




    render() {

        function AddTask(e) {
            e.preventDefault();
            const title = document.querySelector('.task-title').value;
            const content = document.querySelector('.task-content').value;
            const date = document.querySelector('.task-date').value;

            TaskList.unshift(new Task(title, content, new Date(date)));

            return (console.log(TaskList));

        }

        return (
            <div>
                <div className='to-do-app'>

                    <input type='checkbox' id='click' />
                    <label className='create-btn' htmlFor='click'> Create New Task</label>
                    <div id='overlay'></div>


                    <div className='pop-up'>
                        <form className='input-field'>
                            <label htmlFor='task-title' > </label>
                            <input type='text' className='task-title' name='task-title' placeholder='Title' autoComplete='off' required />

                            <label htmlFor='task-content'> </label>
                            <input type='text' className='task-content' name='task-content' placeholder='Content' autoComplete='off' required />

                            <label htmlFor='task-date'> </label>
                            <input type='date' className='task-date' name='task-date' min={this.Date()} required />

                            <button type='submit' className='btn-add' onClick={AddTask} > Create </button>
                            <label htmlFor='click' className='btn-close' onClick={this.ResetValues}>Close</label>

                        </form>
                    </div>



                    <div className='task-list'>

                        <ul>
                            {TaskList.map(task =>
                                <li className='a-task'>
                                    <div className='container'>
                                        <div className='card'>
                                            <label>
                                                <input type='checkbox' id='task-click' />
                                                <div className='box'>
                                                    <div className='content' >
                                                        <h2 className='task-h2'>{task.taskCaption}</h2>
                                                        <p className='task-p'>{task.taskContent}</p>
                                                        <p className='task-ex-date'  >{task.executionDate.getDate() + '-' + task.executionDate.getMonth() + '-' + task.executionDate.getFullYear()}</p>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>

                    </div>

                </div>
            </div>
        )
    }
}

