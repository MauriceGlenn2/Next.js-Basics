//go to pages folder, creat folder called post, 
//create file called index.js, export post

import React, { useEffect, useState } from 'react'

//server side rendering
export async function getServerSideProps(){
     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
     const data = await res.json();

     return {
        props:{
            posts : data
        }
     }
}



function Posts({posts}) {
  //client side rendering
//   const [posts, setPosts] = useState([])
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data = await res.json()
//       setPosts(data)
//       console.log(posts)
//     };
//     fetchData()
//   }, []);
  return (
    <>
      <h1>this is the Posts page</h1>
      {posts?.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })}
    </>
  );
}
export default Posts

// need to create 
// /post/sports/trending/jack