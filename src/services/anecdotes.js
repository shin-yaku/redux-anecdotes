import axios from 'axios'
import { getId } from '../reducers/anecdoteReducer'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 , id: getId()}
  const response = await axios.post(baseUrl, object)
  return response.data
}

const vote = async (id) => {
  const anecdotes = await getAll()
  const target = anecdotes.find(a => a.id === id)
  const changedAnecdote = {...target, votes: target.votes + 1}
  return axios.put(`${baseUrl}/${id}`, changedAnecdote).data
}

export default { getAll, createNew, vote }