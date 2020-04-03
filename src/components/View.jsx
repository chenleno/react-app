import React from 'react'
const View = props => {
  console.log(props)
  return (
    <div>{props.children}</div>
  )  
}

export default View
