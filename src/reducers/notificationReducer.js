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

export const newNotification = (message) => {
  return {
    type: 'NOTIFICATION_ON',
    data: {
      message: message,
      visible: true
    }
  }
}

export const deleteNotification = () => {
  console.log("hoge");
  return {
    type: 'NOTIFICATION_OFF',
    data: initialInvisibleNotification
  }
}

export default reducer