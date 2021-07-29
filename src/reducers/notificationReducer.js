const initialInvisibleNotification = {
  message: '',
  visible: false
}

// const reducer = (state = initialInvisibleNotification, action) => {
const reducer = (state = initialInvisibleNotification, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'NOTIFICATION_ON':
      return action.data
    case 'NOTIFICATION_OFF':
      return action.data
    default:
      return state
  }
}

export const newNotification = (message, deleteSecond) => {
  return async dispatch => {
    console.log("hoge");
    dispatch( {
        type: 'NOTIFICATION_ON',
        data: {
          message: message,
          visible: true
        }
      }
    )
    await new Promise(() => setTimeout(() => deleteNotification(), deleteSecond * 1000))
    console.log("fuga");
  }
}

const deleteNotification = () => {
  console.log("hoge");
  return {
    type: 'NOTIFICATION_OFF',
    data: initialInvisibleNotification
  }
}

export default reducer