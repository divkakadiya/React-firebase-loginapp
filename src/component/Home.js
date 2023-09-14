import React from 'react'
import user from './img/user.png'

const Home = () => {
  return (
    <div className="wrapper wr">
      <div className="logo">
        <img src={user} />
      </div>
      <div className="text-center mt-4 name">
        You are registered
      </div>
    </div>
  )
}

export default Home