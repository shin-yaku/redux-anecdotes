import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = () => {
    if (notification.visible) {
      return {
        border: 'solid',
        padding: 10,
        borderWidth: 1
      }
    } else {
      return {
        display: 'none',
      }
    }
  }
  return (
    <div style={style()}>
       {notification.message}
    </div>
  )
}

export default Notification