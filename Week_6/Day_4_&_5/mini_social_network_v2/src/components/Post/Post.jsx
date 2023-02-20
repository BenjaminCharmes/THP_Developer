import React from 'react'

export const Post = ({data}) => {
  return (
    <h2>{data.attributes.text}</h2>
  )
}
