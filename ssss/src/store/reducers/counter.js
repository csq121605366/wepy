import { handleActions } from 'redux-actions'
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../types/counter'

export default handleActions({
  [INCREMENT](state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT](state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT](state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  },
  "ASYNC_INCREMENT_PENDING": (state, action) => {
    console.log('立即执行')
    return {
      ...state
    }
  }
}, {
    num: 0,
    asyncNum: 0
  })
