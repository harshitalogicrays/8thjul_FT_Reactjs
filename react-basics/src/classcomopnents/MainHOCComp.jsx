import React, { Component } from 'react'
import UserHOCComp from './UserHOCComp'
import PostsHOCComp from './PostsHOCComp'
import HOCLogic from './HOCLogic'

const User = HOCLogic(UserHOCComp , {url:'https://jsonplaceholder.typicode.com/users',columns:["id","name","username","email","phone","website"],heading:'User Data'})

const Post = HOCLogic(PostsHOCComp , {url:'https://jsonplaceholder.typicode.com/posts',columns:["userId","id","title","body"],heading:'Posts'})

export default class MainHOCComp extends Component {
  render() {
    return (
     <>
        <User/><hr/>
        <Post/>
     </>
    )
  }
}
