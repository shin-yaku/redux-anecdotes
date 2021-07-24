import React from 'react'
import { useDispatch } from 'react-redux'
import { getId } from '../reducers/anecdoteReducer'
import { newNotification, deleteNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch({
      type: 'NEW_ANECDOTE',
      data: {
        content,
        id: getId(),
        votes: 0
      }
    })
    dispatch(newNotification(`New Anecdote "${content}" Created.`))
    setTimeout(() => dispatch(deleteNotification()), 5000)
  }

    return(
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
            <div><input name="anecdote"/></div>
            <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm