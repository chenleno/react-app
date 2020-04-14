import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const UserDetail = props => {
  const { id } = useParams()
  const location = useLocation()
  console.log(location.state)
  const data = location.state.data
  return(
    <div>
      这是userDetail页面
      {data.name}
    </div>
  )
}

export default UserDetail
