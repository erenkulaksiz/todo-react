import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.scss';
//API
import axios from 'axios'

import { createStore } from 'redux';
import reducer from './reducers/index.js';

import styles from './styles/todoapp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faCheckCircle, faLightbulb } from '@fortawesome/free-solid-svg-icons';

// components
import Card from './modules/card/card.jsx';
import AddTaskBtn from './modules/addtask/addtask.jsx';
import AddBanner from './modules/addbanner/addbanner.jsx';

const store = createStore(reducer);

const apiRoute = "https://5fca12143c1c220016441a5f.mockapi.io/app/api/tasks/";

class TodoApp extends Component {

    refresh = async () => {

        console.log("@refresh");
        try {
            await axios.get(apiRoute)
                .then(res => {
                    const data = res.data;
                    //console.log(data);
                    store.dispatch({ type: 'SET_TASKS', payload: data });
                })
                .catch(err => {
                    console.log(err.response.status);
                    if (err.response.status === 429) {
                        throw new Error('429');
                    }
                    throw err;
                })
        } catch (err) {
            console.log("%cCant refresh tasks:" + err, "color:red");
        }

    }

    componentDidMount() {
        this.refresh();
    }

    render() {

        const storeTasks = store.getState().tasks;
        const storeEdit = store.getState().edit;

        // Return a task's id depending on index input.
        /*
        const findID = (tasks, taskIndex) => {
            let foundID = -1;
            tasks.map(function (key, index) {
                if (index == taskIndex) {
                    foundID = parseInt(key.id)
                }
            })
            return foundID;
        }*/

        const findIndex = (tasks, taskId) => {
            let foundIndex = -1;
            tasks.map(function (key, index) {
                if (parseInt(key.id) == taskId) {
                    foundIndex = index;
                }
            })
            return foundIndex;
        }

        const editMode = (taskId) => {
            console.log("edit mode: " + taskId);
            store.dispatch({ type: 'EDIT_MODE', payload: taskId });
        }

        const addTask = async (taskTarget) => {
            console.log("add task click target: " + taskTarget);
            store.dispatch({ type: 'ADD_TASK', payload: taskTarget });

            const newTask = {
                taskName: "New Task",
                taskDesc: "Description (Optional)",
                taskTarget: taskTarget
            }

            await axios.post(apiRoute, newTask)
                .then(res => {
                    const data = res.data;
                    console.log(data);
                })

            await this.refresh(); // refresh so new task gets a id.
        }

        const delTask = async (taskId) => {
            console.log("del task click id: " + taskId);
            store.dispatch({ type: 'DEL_TASK', payload: taskId });

            await axios.delete(apiRoute + taskId)
                .then(res => {
                    const data = res.data;
                    console.log("deleted: ", data);
                })
        }

        const cancelEdit = () => {
            store.dispatch({ type: 'EDIT_MODE', payload: -1 });
        }

        const submitEdit = async (data, id) => {

            let taskIndex = findIndex(storeTasks, id);

            console.log("findIDfromIndex: ", taskIndex);

            store.dispatch({ type: 'EDIT_SUBMIT', payload: { data, taskIndex } });
            store.dispatch({ type: 'EDIT_MODE', payload: -1 });

            try {
                await axios.put(apiRoute + id, storeTasks[taskIndex])
                    .then(res => {
                        const data = res.data;
                        //console.log(data);
                        console.log("%cSend task index: " + taskIndex, "color:green");
                    })
                    .catch(err => {
                        if (err.response.status === 404) {
                            throw new Error('404');
                        }
                        throw err;
                    })
            } catch (err) {
                console.log("%cCant send tasks:" + err, "color:red");
            }

        }

        const changeTarget = async (target, id) => {
            store.dispatch({ type: 'CHANGE_TARGET', payload: { target, id } });

            try {
                await axios.put(apiRoute + id, storeTasks[findIndex(storeTasks, id)])
                    .then(res => {
                        const data = res.data;
                        console.log(data);
                        console.log("%cSend task index: " + findIndex(storeTasks, id), "color:green");
                    })
                    .catch(err => {
                        if (err.response.status === 404) {
                            throw new Error('404');
                        }
                        throw err;
                    })
            } catch (err) {
                console.log("%cCant send task:" + err, "color:red");
            }
        }

        const todoTasks = [], laterTasks = [], doneTasks = [];

        storeTasks.map(function (task, index) {

            const cardTemplate = <Card
                key={index}
                taskName={task.taskName}
                taskDesc={task.taskDesc}
                isEditing={storeEdit.id == index && storeEdit.editing}
                onEditClick={() => { editMode(index) }}
                onCancel={() => { cancelEdit() }}
                onSubmit={(data) => { submitEdit(data, task.id) }} // indexi idye
                onDelTask={() => { delTask(task.id) }}
                onMove={(side) => { changeTarget(side, task.id) }} // indexi id ye çevirdim
            />

            switch (task.taskTarget) {
                case 0:
                    todoTasks.push(cardTemplate);
                    break;
                case 1:
                    doneTasks.push(cardTemplate);
                    break;
                case 2:
                    laterTasks.push(cardTemplate);
                    break;
            }
        })

        return (
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.content__todo}>
                        <div className={styles.header}>
                            <div className={styles.header_content}>
                                <div className={styles.title}>
                                    <FontAwesomeIcon icon={faHeartbeat} className={styles.headerIcon} /> To-Do
                                </div>
                                <div className={styles.count}>
                                    {todoTasks.length != 0 && todoTasks.length}
                                </div>
                            </div>
                        </div>
                        <div className={styles.todo_content}>
                            {todoTasks}
                            <AddTaskBtn onAddTask={() => { addTask(0) }} />
                            {todoTasks.length == 0 && <AddBanner />}
                        </div>
                    </div>
                    <div className={styles.content__done}>
                        <div className={styles.header}>
                            <div className={styles.header_content}>
                                <div className={styles.title}>
                                    <FontAwesomeIcon icon={faCheckCircle} className={styles.headerIcon} /> Done
                                </div>
                                <div className={styles.count}>
                                    {doneTasks.length != 0 && doneTasks.length}
                                </div>
                            </div>
                        </div>
                        <div className={styles.done_content}>
                            {doneTasks}
                            <AddTaskBtn onAddTask={() => { addTask(1) }} />
                            {doneTasks.length == 0 && <AddBanner />}
                        </div>
                    </div>
                    <div className={styles.content__later}>
                        <div className={styles.header}>
                            <div className={styles.header_content}>
                                <div className={styles.title}>
                                    <FontAwesomeIcon icon={faLightbulb} className={styles.headerIcon} /> To-Do Someday
                                </div>
                                <div className={styles.count}>
                                    {laterTasks.length != 0 && laterTasks.length}
                                </div>
                            </div>
                        </div>
                        <div className={styles.later_content}>
                            {laterTasks}
                            <AddTaskBtn onAddTask={() => { addTask(2) }} />
                            {laterTasks.length == 0 && <AddBanner />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const render = () => ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
)

render()
store.subscribe(render)

if (module.hot) {
    module.hot.accept();
}
