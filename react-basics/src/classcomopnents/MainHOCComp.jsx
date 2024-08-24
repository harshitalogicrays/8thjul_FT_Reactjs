import React, { Component } from 'react'
import UserHOCComp from './UserHOCComp'
import PostsHOCComp from './PostsHOCComp'

export default class MainHOCComp extends Component {
  render() {
    return (
     <>
        <UserHOCComp/><hr/>
        <PostsHOCComp/>
     </>
    )
  }
}
