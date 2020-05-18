import { GET_TASKS, ARCHIVE_TASK, PIN_TASK } from '../actions/types.js';

// El estado inicial de nuestro store cuando la app carga.
// Usualmente obtendrías esto de un servidor.
const initialState = {
  tasks: [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ]
}

// Todos nuestros reducers simplemente cambian el estado de una sola tarea.
function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

// El reducer describe como los contenidos del store cambian por cada acción.
export default function(state= initialState, action){
  switch (action.type) {
    case GET_TASKS:
      return{
        ...state,
        tasks: state.tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED')
      };
    case ARCHIVE_TASK:
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    case PIN_TASK:
      return taskStateReducer('TASK_PINNED')(state, action);
    default:
      return state;
  }
};
