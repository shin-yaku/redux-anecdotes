import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { newNotification, deleteNotification } from '../reducers/notificationReducer'
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch(createAnecdote(newAnecdote))

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