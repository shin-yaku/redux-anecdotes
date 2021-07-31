const initialInvisibleNotification = {
  message: '',
  visible: false,
  timeoutId: null
}

// const reducer = (state = initialInvisibleNotification, action) => {
const reducer = (state = initialInvisibleNotification, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'NOTIFICATION_ON':
      clearTimeout(state.timeoutId)
      return action.data
    case 'NOTIFICATION_OFF':
      return initialInvisibleNotification
    default:
      return state
  }
}

export const newNotification = (message, deleteSecond) => {
  return async dispatch => {
    const timeoutId = setTimeout(() => {
      dispatch({
          type: 'NOTIFICATION_OFF'
        })
    }, deleteSecond * 1000)

    dispatch( {
        type: 'NOTIFICATION_ON',
        data: {
          message: message,
          visible: true,
          timeoutId: timeoutId
        }
      }
    )
  }
}

export default reducer