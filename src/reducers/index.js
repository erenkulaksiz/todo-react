

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
      // buraya edite giren payload gelecek
      // indexte edit modu okuyacağim eğer edit modda index varsa ve o anki maplenen indexle uyuşuyosa edit moda alıcak
      return state
    default:
      return state
  }
}
