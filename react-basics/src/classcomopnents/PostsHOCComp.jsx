import React, { Component } from 'react'

export default class PostsHOCComp extends Component {
    // constructor(props) {
    //   super(props)
    //   this.state = { posts:[] }
    // }
    
    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res)=>{
    //         res.json().then((data)=>{
    //             this.setState({posts:data})
    //         })
    //     })
    //     .catch(err=>console.log(err))
    // }

  render() {
    return (
      <div>
        {/* post data <hr/>
        <div class="table-responsive" >
            <table  class="table table-primary"  >
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">userId</th>
                        <th scope="col">title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.posts.length==0 && <tr><td colSpan={4}>No post found</td></tr>}
                    {this.state.posts.map((post,i)=>
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.userId}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>)}
                </tbody>
            </table>
        </div> */}
        
      </div>
    )
  }
}
