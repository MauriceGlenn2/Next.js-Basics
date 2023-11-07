
//creating a dynamic route
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import React from 'react'

function user() {
    const router = useRouter()
    console.log(router.query)

    const {username} = router.query
  return (
    <h1>this is user:{username} </h1>
  )
}

export default user