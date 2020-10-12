import React, { useState } from 'react'
import Articles from '../modules/articles'

const CreateArticle = () => {
  const [message, setMessage] = useState("")

  const submitArticle = async (event) => {
    event.preventDefault()
    let title = event.target.children.title.value
    let content = event.target.children.content.value

    let response = await Articles.create(title, content)
    setMessage(response)
  }

  return (
    <>
      <p data-cy="message">{message}</p>
      <h2>Submit a new article</h2>
      <form data-cy="article-form" onSubmit={submitArticle}>
        <input data-cy="title" placeholder="Title" id="title" />
        <input data-cy="content" placeholder="Content" type="text" id="content" />
        <button data-cy="submit" >Create article</button>
      </form>
    </>
  )
}

export default CreateArticle
