import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.scss';

import { createStore } from 'redux'
import todostate from './reducers/index.js'

import styles from './styles/todoapp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat, faCheckCircle, faLightbulb } from '@fortawesome/free-solid-svg-icons'

// components
import Card from './modules/card/card.jsx';
import AddTaskBtn from './modules/addtask/addtask.jsx';

const store = createStore(todostate)

class TodoApp extends Component {
    
  render() {

    const addTask = () => {
        console.log("add task click");
        store.dispatch({ type: 'ADD_TASK' });
    }

    const delTask = (taskId) => {
        console.log("del task click id: "+taskId);
        store.dispatch({ type: 'DEL_TASK', payload: taskId });
    }

    const todoTasks = [], laterTasks = [], doneTasks = [];
    
    
    store.getState().map(function(task, index){
        switch(task.taskTarget){
            case 'todo':
                todoTasks.push(<Card key={index} taskName={task.taskName} taskDesc={task.taskDesc} /* index instead of id */ onDelTask={() => {delTask(index)}} />);
            break;
            case 'later':
                laterTasks.push(<Card key={index} taskName={task.taskName} taskDesc={task.taskDesc} /* index instead of id */ onDelTask={() => {delTask(index)}} />);
            break;
            case 'done':
                doneTasks.push(<Card key={index} taskName={task.taskName} taskDesc={task.taskDesc} /* index instead of id */ onDelTask={() => {delTask(index)}} />);
            break;
        }
    })

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
                              5
                          </div>
                      </div>
                  </div>
                  <div className={styles.todo_content}>
                      {todoTasks}
                      <AddTaskBtn onAddTask={addTask}/>
                  </div>
              </div>
              <div className={styles.content__done}>
                  <div className={styles.header}>
                      <div className={styles.header_content}>
                          <div className={styles.title}>
                              <FontAwesomeIcon icon={faCheckCircle} className={styles.headerIcon}/> Done
                          </div>
                          <div className={styles.count}>
                              5
                          </div>
                      </div>
                  </div>
                  <div className={styles.done_content}>
                      {doneTasks}
                      <AddTaskBtn onAddTask={addTask}/>
                  </div>
              </div>
              <div className={styles.content__later}>
                  <div className={styles.header}>
                      <div className={styles.header_content}>
                          <div className={styles.title}>
                              <FontAwesomeIcon icon={faLightbulb} className={styles.headerIcon}/> To-Do Someday
                          </div>
                          <div className={styles.count}>
                              5
                          </div>
                      </div>
                  </div>
                  <div className={styles.later_content}>
                      {laterTasks}
                      <AddTaskBtn onAddTask={addTask}/>
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
