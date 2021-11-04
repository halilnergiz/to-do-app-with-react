import React, { Component } from "react";
import TaskList from "../ToDoDb/ToDoList";
import Task from "../Models/TaskModel";


export default class PageView extends Component {
    constructor(props) {
        super(props);
        this.state = { currentTaskList: TaskList };
    }

    Date = () => {
        let today = new Date();
        return (`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)
    }

    ResetValues = () => {
        document.querySelector('.task-title').value = ''
        document.querySelector('.task-content').value = ''
        document.querySelector('.task-date').value = ''
    }


    openMap = (e) => {
        const taskList = document.querySelector('.taskList');
        const map = document.querySelector('.map');
        // const control = document.querySelector('#task-click')
        if (e.target.checked === true) {
            taskList.style.position = 'relative'
            taskList.style.left = '350px'

            map.style.left = '-20rem'
            map.style.opacity = '1'
        }
        else {
            taskList.style.position = 'relative'
            taskList.style.left = '0'
            map.style.left = '-75rem'
            map.style.opacity = '0'

        }
    }

    AddTask = (e) => {
        e.preventDefault();
        const title = document.querySelector('.task-title');
        const content = document.querySelector('.task-content');
        const date = document.querySelector('.task-date');
        const newTask = new Task(title.value, content.value, new Date(date.value));

        if (title.value.trim() === '' || content.value.trim() === '' || date.value.trim() === '') {
            alert('You Must Enter All Values')
        } else {
            TaskList.unshift(newTask);
            this.setState({ currentTaskList: TaskList });
            alert('Task Created Successfully')
        }


        // if (title.textContent.length > 2) {
        //     console.log(title.value);
        // }
        // console.log(title.textContent);
    }


    deleteAllTasks = (e) => {
        e.preventDefault();
        const control = window.confirm('Do You Want to Delete All Tasks');
        if (control === true) {
            TaskList.length = 0;
            this.setState({ currentTaskList: TaskList });
            setTimeout( () => { window.alert('Deleted All Tasks') }, 70)
        }
    }

    showMore = (e) => {
        const thisContent = e.target.previousElementSibling;
        const thisBox = e.target.parentElement.parentElement.parentElement.parentElement
        thisContent.classList.toggle('active')
        thisBox.classList.toggle('active')
        console.log(thisBox);

        if (thisContent.classList == 'content active') {
            e.target.textContent = 'Read Less'
        } else {
            e.target.textContent = 'Read More'
        }

    }

    render() {
        return (
            <div>
                <div className='to-do-app'>
                    <div className='main'>
                        <input type='checkbox' id='crt-click' />
                        <label className='create-btn' htmlFor='crt-click'> Create New Task</label>
                        <div id='overlay'></div>


                        <div className='pop-up'>
                            <form className='input-field'>
                                <label htmlFor='task-title' > </label>
                                <input type='text' className='task-title' name='task-title' placeholder='Title' autoComplete='off' maxLength='30' />

                                <label htmlFor='task-content'> </label>
                                <input type='text' className='task-content' name='task-content' placeholder='Content' autoComplete='off' maxLength='360' />

                                <label htmlFor='task-date'> </label>
                                <input type='date' className='task-date' name='task-date' min={this.Date()} />

                                <button type='submit' className='btn-add' onClick={this.AddTask}> Create </button>
                                <label htmlFor='crt-click' className='btn-close' onClick={this.ResetValues}>Close</label>

                            </form>
                        </div>



                        <div className='task-list'>

                            <ul className='taskList'>
                                {TaskList.map((task,index)=>
                                    <li className='a-task'>
                                        <div className='container'>

                                            <p className='task-ex-date'>{task.executionDate.getDate() + '-' + task.executionDate.getMonth() + '-' + task.executionDate.getFullYear()}</p>

                                            <label>
                                                <input type='checkbox' id='task-click' className='open-map' onClick={this.openMap} />
                                                <div className='box' >

                                                    <div className='content'>
                                                        <h2 className='task-h2'>{task.taskCaption}</h2>
                                                        <p className='task-p'>{task.taskContent}</p>
                                                    </div>
                                                    <label className='more' id='read-more' htmlFor='down-icon' onClick={this.showMore}>Read More</label>

                                                </div>
                                            </label>

                                        </div>
                                    </li>
                                )}
                            </ul>


                            <div className='map'>
                                <div className='map-content'>

                                </div>
                            </div>

                        </div>

                        <input type='checkbox' id='delete-all' onClick={this.deleteAllTasks} />
                        <label className='delete-all-btn' htmlFor='delete-all'> Delete All Tasks</label>

                    </div>



                </div>
            </div>
        )
    }
}

