import React, { Component } from "react";
import TaskList from "../ToDoDb/ToDoList";
import Task from "../Models/TaskModel";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


export default class PageView extends Component {
    constructor(props) {
        super(props);
        this.state = { currentTaskList: TaskList };
    }

    date = () => {
        let today = new Date();
        return (`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)
    }

    resetValues = () => {
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
            taskList.style.left = '450px'

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

    addTask = (e) => {
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
            setTimeout(() => { window.alert('Deleted All Tasks') }, 70)
        }
    }

    showMore = (e) => {
        const thisContent = e.target.previousElementSibling;
        const thisLiTag = e.target.parentElement.parentElement.parentElement.parentElement;
        thisContent.classList.toggle('active')
        thisLiTag.classList.toggle('active')
        // console.log(thisBox);
        console.log(thisContent);

        if (thisContent.classList == 'content active') {
            e.target.textContent = 'Read Less'
        } else {
            e.target.textContent = 'Read More'
        }

    }

    // 
    dragDropEvent = (result) => {
        // console.log(result);
        const [removed] = TaskList.splice(result.source.index, 1) 
        TaskList.splice(result.destination.index, 0, removed);

        this.setState(TaskList)
        // SOURCE tasklist'i drag ile aldığımız indis, DESTİNATİON ise bıraktığımız indis 
    }

    render() {
        return (
            <div>
                <div className='to-do-app'>
                    <div className='main'>
                        <input type='checkbox' id='crt-click' />
                        <label className='create-btn' htmlFor='crt-click'> Create New Task </label>
                        <div id='overlay'></div>


                        <div className='pop-up'>
                            <form className='input-field'>
                                <label htmlFor='task-title' > </label>
                                <input type='text' className='task-title' name='task-title' placeholder='Title' autoComplete='off' maxLength='30' />

                                <label htmlFor='task-content'> </label>
                                <input type='text' className='task-content' name='task-content' placeholder='Content' autoComplete='off' maxLength='360' />

                                <label htmlFor='task-date'> </label>
                                <input type='date' className='task-date' name='task-date' min={this.date()} />

                                <button type='submit' className='btn-add' onClick={this.addTask}> Create </button>
                                <label htmlFor='crt-click' className='btn-close' onClick={this.resetValues}> Close </label>

                            </form>
                        </div>


                        <div className='task-list'>
                            <DragDropContext onDragEnd={this.dragDropEvent}>

                                <Droppable droppableId='droppable-area-1'>

                                    {(provided, snapshot) => (
                                        <ul className='taskList' ref={provided.innerRef}>

                                            {TaskList.map((task, index) =>

                                                <Draggable
                                                    draggableId={task.id} // must be string toString()
                                                    key={task.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <li
                                                            className='a-task'
                                                            key={task.id} ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps} >


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
                                                </Draggable>
                                            )}
                                            {provided.placeholder}
                                        </ul>

                                    )}
                                </Droppable>


                                <div className='map'>
                                    <div className='map-content'>
                                                            
                                    </div>
                                </div>

                            </DragDropContext>
                        </div>

                        <input type='checkbox' id='delete-all' onClick={this.deleteAllTasks} />
                        <label className='delete-all-btn' htmlFor='delete-all'> Delete All Tasks</label>

                    </div>



                </div>
            </div >
        )
    }
}

