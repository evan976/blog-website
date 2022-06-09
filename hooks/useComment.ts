import * as React from 'react'
import * as mainApi from '../api'

function useComment (refreshComments: () => void) {
  const [nickname, setNickname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [site, setSite] = React.useState('')
  const [comment, setComment] = React.useState('')

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSite(event.target.value)
  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mainApi.commentService.create({
      name: nickname,
      email,
      site,
      content: comment
    })
      .then(() => {
        setNickname('')
        setEmail('')
        setSite('')
        setComment('')
        refreshComments()
      })
    // refreshComments()
  }

  return {
    nickname,
    email,
    site,
    comment,
    handleNicknameChange,
    handleEmailChange,
    handleSiteChange,
    handleCommentChange,
    handleSubmit
  }
}

export default useComment
