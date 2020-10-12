import React, { useState } from 'react'
import Articles from '../modules/articles'

const CreateArticle = () => {
  const [message, setMessage] = useState("")
  const [image, setImage] = useState()

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = (error) => {
      reject(error)
    }
  })

  const selectImage = (event) => {
    setImage(event.target.files[0])
  }

  const submitArticle = async (event) => {
    event.preventDefault()
    let title = event.target.children.title.value
    let content = event.target.children.content.value
    let encodedImage
    if (image) {
      encodedImage = await toBase64(image)
    }

    const response = await Articles.create(title, content, encodedImage)
    setMessage(response)
  }

  return (
    <>
      <p data-cy="message">{message}</p>
      <h2>Submit a new article</h2>
      <form data-cy="article-form" onSubmit={submitArticle}>
        <input data-cy="title" placeholder="Title" id="title" />
        <input data-cy="content" placeholder="Content" type="text" id="content" />
        <input data-cy="image" onChange={selectImage} placeholder="Image" type="file" id="image" />
        <button data-cy="submit"> Create article</button>
      </form>

      { image && (
        <img src={URL.createObjectURL(image)} />
      )}
    </>
  )
}

export default CreateArticle
