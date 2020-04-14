import React from 'react'
import { useParams } from 'react-router-dom'

const Dashboard = props => {
  const id = useParams()
  console.log(id)
  return (
    <div>
      这是dashboard,
      我显示了
    </div>
  )
}

export default Dashboard
