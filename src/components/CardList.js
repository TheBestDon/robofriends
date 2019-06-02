import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {

  return (
    <div>
      { robots.map(robot => {
         const {id, name, username, email} = robot
         return <Card key={id} id={id} name={name} username={username} email={email}/>
       })}
    </div>
  )
}

export default CardList
