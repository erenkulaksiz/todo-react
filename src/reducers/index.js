

const defaultState = [
  {
    id: 1,
    taskName: "Buy Gro",
    taskDesc: "haha",
    taskTarget: "todo",
  },
  {
    id: 2,
    taskName: "deez nuts",
    taskDesc: "ahadsa",
    taskTarget: "todo",
  },
  {
    id: 3,
    taskName: "not done",
    taskDesc: "ahadsa",
    taskTarget: "later",
  }
]

const addTaskDefault = {
  id: 4,
  taskName: "Default",
  taskDesc: "Default",
  taskTarget: "todo",
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, addTaskDefault];
    case 'DEL_TASK':
      /* DEL BY USING ID
      let newState = [...state];
      newState.map(function(key, index) {
        console.log(key);
        if(key.id == action.payload){
          newState.splice(index, 1);
        }
      })
      */

      // Del by using index

      let newState = [...state];
      newState.splice(action.payload, 1);
      console.log(newState);
      return newState;
    default:
      return state
  }
}
