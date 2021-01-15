

const defaultState = [
  {
    editing: false,
    id: 0,
  },
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

const addTaskDefault = (target) => {
  const gerkcanbuven = {
    id: 4,
    taskName: "Title",
    taskDesc: "Description",
    taskTarget: target
  }
  return gerkcanbuven
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, addTaskDefault(action.payload)];
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

      let newState = [...state];
      newState.splice(action.payload, 1);

      console.log(newState);
      return newState
    case 'EDIT_MODE':
      state[0].editing = !state[0].editing;
      state[0].id = action.payload;
      return state
    case 'EDIT_SUBMIT':
      console.log(action.payload.id);
      if(action.payload.data.title){
        // INDEXLE CALISIYORUMM!!!
        state[action.payload.id].taskName = action.payload.data.title;
        console.log("changed title to: "+action.payload.data.title);
        /// IDYE GECINCE DEGISTIR UYARIIII!!!
      }
      if(action.payload.data.desc){
        // !!!!!
        state[action.payload.id].taskDesc = action.payload.data.desc;
        console.log("changed desc to: "+action.payload.data.desc);
      }
      return state
    default:
      return state
  }
}
