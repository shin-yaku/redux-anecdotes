import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notification
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

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification