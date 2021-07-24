import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { upvote } from '../reducers/anecdoteReducer'
import { deleteNotification, newNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (id, content) => {
    console.log('vote', id)
    dispatch(upvote(id))
    dispatch(newNotification(`You Voted "${content}"`))
    setTimeout(() => dispatch(deleteNotification()), 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList