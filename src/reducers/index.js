
const defaultState = {
  tasks: [
    {
      taskName: "buy groceries",
      taskDesc: "",
      taskTarget: 0
    },
    {
      taskName: "deez nuts",
      taskDesc: "",
      taskTarget: 2,
    }
  ],
  edit: {
    editing: false,
    id: 0,
  }
}

const addTaskDefault = (target) => {
  const gerkcanbuven = {
    taskName: "Title",
    taskDesc: "Description",
    taskTarget: target
  }
  return gerkcanbuven
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      let bmw320ci = {...state};
      bmw320ci.tasks.push(addTaskDefault(action.payload));
      return bmw320ci /*[...state.tasks, addTaskDefault(action.payload)];*/
    case 'DEL_TASK':
      
      /* id ile sil
      let newState = [...state];
      newState.map(function(key, index) {
        console.log(key);
        if(key.id == action.payload){
          newState.splice(index, 1);
        }
      })
      */
      // indexe göre sil
      let newTasks = {...state};
      newTasks.tasks.splice(action.payload, 1);
      console.log(newTasks);
      return newTasks
    case 'CHANGE_TARGET':
      if(action.payload.target == 'left'){
        console.log(state.tasks[action.payload.id].taskTarget);
        if(state.tasks[action.payload.id].taskTarget > 0){
          state.tasks[action.payload.id].taskTarget--;
        }
      }else if(action.payload.target == 'right'){
        if(state.tasks[action.payload.id].taskTarget < 2){
          state.tasks[action.payload.id].taskTarget++;
        }
      }
      return state
    case 'EDIT_MODE':
      console.log("inside edit mode");
      state.edit.editing = !state.edit.editing;
      state.edit.id = action.payload;
      return state
    case 'EDIT_SUBMIT':
      console.log(action.payload.id);
      if(action.payload.data.title){
        state.tasks[action.payload.id].taskName = action.payload.data.title;
        console.log("changed title to: "+action.payload.data.title);
      }
      if(action.payload.data.desc){
        state.tasks[action.payload.id].taskDesc = action.payload.data.desc;
        console.log("changed desc to: "+action.payload.data.desc);
      }
      return state
    default:
      return state
  }
}
