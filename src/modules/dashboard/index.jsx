import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { test } from 'reducers/dashboard'

const Dashboard = props => {
  console.log(props)
  return (
    <div>
      这是dashboard,
      我显示了
    </div>
  )
}

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard)
