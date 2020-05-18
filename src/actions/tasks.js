import { ARCHIVE_TASK, PIN_TASK , GET_TASKS} from './types';

export const archiveTask = id => (dispatch) =>
  dispatch({
    type: ARCHIVE_TASK,
    id
  })

export const pinTask = id => (dispatch) =>
  dispatch({
    type: PIN_TASK,
    id
  })

// GET TASKS
export const getTasks = () => (dispatch) =>
  dispatch({
    type: GET_TASKS
  })
