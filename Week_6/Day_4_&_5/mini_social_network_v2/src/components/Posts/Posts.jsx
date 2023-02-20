import React, { useEffect, useState} from 'react'
import { Post } from '../Post/Post';
import { CreatePostForm } from '../CreatePostForm/CreatePostForm';
import { useAtomValue } from 'jotai'
import { tokenAtom } from '../../atoms/atoms';

export const Posts = () => {

  const token = useAtomValue(tokenAtom)

  console.log(token)

  const [posts, setPosts] = useState([])

  const loadPost = () => {
    fetch("http://localhost:1337/api/posts", {
      method: "get",
    })
      .then((response) => response.json())
      .then((response) => {
        setPosts(response.data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    loadPost()
  }, [])

  return (
    <>
      {token ? <CreatePostForm loadPost={loadPost} /> : "Il faut se connecter pour poster"}
      
      <div>Posts</div>
      {posts.map( post => 
        <Post key={post.id} data={post}/>)}
    </>
  )
}
