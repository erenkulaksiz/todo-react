import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.scss';

import { createStore } from 'redux';
import todostate from './reducers/index.js';

import styles from './styles/todoapp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faCheckCircle, faLightbulb } from '@fortawesome/free-solid-svg-icons';

// components
import Card from './modules/card/card.jsx';
import AddTaskBtn from './modules/addtask/addtask.jsx';
import AddBanner from './modules/addbanner/addbanner.jsx';

const store = createStore(todostate)

class TodoApp extends Component {
    
  render() {

    const editMode = (taskId) => {
        store.dispatch({ type: 'EDIT_MODE', payload: taskId });
    }

    const addTask = (taskTarget) => {
        console.log("add task click target: "+taskTarget);
        store.dispatch({ type: 'ADD_TASK', payload: taskTarget });
    }

    const delTask = (taskId) => {
        console.log("del task click id: "+taskId);
        store.dispatch({ type: 'DEL_TASK', payload: taskId });
    }

    const cancelEdit = () => {
        store.dispatch({ type: 'EDIT_MODE', payload: -1 });
    }

    const submitEdit = (data, id) => {
        store.dispatch({ type: 'EDIT_SUBMIT', payload: {data, id} });
        store.dispatch({ type: 'EDIT_MODE', payload: -1 });
    }

    const changeTarget = (target, id) => {
        store.dispatch({ type: 'CHANGE_TARGET', payload: {target, id} });
    }

    const todoTasks = [], laterTasks = [], doneTasks = [];

    store.getState().map(function(task, index){
        switch(task.taskTarget){
            case 0:
                if(store.getState()[0].editing && index == store.getState()[0].id){
                    // Editing
                    todoTasks.push(<Card 
                        key={index} 
                        taskName={task.taskName} 
                        taskDesc={task.taskDesc} 
                        isEditing={true}
                        onCancel={() => {cancelEdit()}} 
                        onSubmit={(data) => {submitEdit(data, index)}}/>);
                }else{
                    todoTasks.push(<Card 
                        key={index} 
                        taskName={task.taskName} 
                        taskDesc={task.taskDesc} 
                        onEditClick={() => {editMode(index)}} 
                        isEditing={false} 
                        onMove={(side) => {changeTarget(side, index)}} 
                        onDelTask={() => {delTask(index)}} />); /* index instead of id */ 
                }
            break;
            case 1:
                if(store.getState()[0].editing && index == store.getState()[0].id){
                    // Editing
                    doneTasks.push(<Card 
                        key={index} 
                        taskName={task.taskName} 
                        taskDesc={task.taskDesc} 
                        isEditing={true}
                        onCancel={() => {cancelEdit()}} 
                        onSubmit={(data) => {submitEdit(data, index)}}/>);
                }else{
                    doneTasks.push(<Card 
                        key={index} 
                        taskName={task.taskName} 
                        taskDesc={task.taskDesc} 
                        onEditClick={() => {editMode(index)}} 
                        isEditing={false} 
                        onMove={(side) => {changeTarget(side, index)}} 
                        onDelTask={() => {delTask(index)}} />); /* index instead of id */ 
                }
            break;
            case 2:
                if(store.getState()[0].editing && index == store.getState()[0].id){
                    // Editing
                    laterTasks.push(<Card 
                        key={index} 
                        taskName={task.taskName} 
                        taskDesc={task.taskDesc} 
                        isEditing={true}
                        onCancel={() => {cancelEdit()}} 
                        onSubmit={(data) => {submitEdit(data, index)}}/>);
                }else{
                    laterTasks.push(<Card 
                        key={index} 
                        taskName={task.taskName} 
                        taskDesc={task.taskDesc} 
                        onEditClick={() => {editMode(index)}} 
                        isEditing={false} 
                        onMove={(side) => {changeTarget(side, index)}} 
                        onDelTask={() => {delTask(index)}} />); /* index instead of id */ 
                }
            break;
        }
    })

    const todoCount = todoTasks.length, doneCount = doneTasks.length, laterCount = laterTasks.length;

    return(
      <div className={styles.wrapper}>
          <div className={styles.content}>
              <div className={styles.content__todo}>
                  <div className={styles.header}>
                      <div className={styles.header_content}>
                          <div className={styles.title}>
                            <FontAwesomeIcon icon={faHeartbeat} className={styles.headerIcon}/> To-Do
                          </div>
                          <div className={styles.count}>
                            {todoCount != 0 && todoCount}
                          </div>
                      </div>
                  </div>
                  <div className={styles.todo_content}>
                      {todoTasks}
                      <AddTaskBtn onAddTask={() => {addTask(0)}}/>
                      {todoTasks == 0 && <AddBanner />}
                  </div>
              </div>
              <div className={styles.content__done}>
                  <div className={styles.header}>
                      <div className={styles.header_content}>
                          <div className={styles.title}>
                            <FontAwesomeIcon icon={faCheckCircle} className={styles.headerIcon}/> Done
                          </div>
                          <div className={styles.count}>
                            {doneCount != 0 && doneCount}
                          </div>
                      </div>
                  </div>
                  <div className={styles.done_content}>
                      {doneTasks}
                      <AddTaskBtn onAddTask={() => {addTask(1)}}/>
                      {doneTasks == 0 && <AddBanner />}
                  </div>
              </div>
              <div className={styles.content__later}>
                  <div className={styles.header}>
                      <div className={styles.header_content}>
                          <div className={styles.title}>
                            <FontAwesomeIcon icon={faLightbulb} className={styles.headerIcon}/> To-Do Someday
                          </div>
                          <div className={styles.count}>
                            {laterCount != 0 && laterCount}
                          </div>
                      </div>
                  </div>
                  <div className={styles.later_content}>
                      {laterTasks}
                      <AddTaskBtn onAddTask={() => {addTask(2)}}/>
                      {laterCount == 0 && <AddBanner />}
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
