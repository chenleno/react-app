import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { fetchUsers, addUser, deleteUser } from '../../reducers/user'
import styled from 'styled-components'

const View = styled.div`
  width: 100%;
`

// const dataSource = [
//   {
//     id: '111',
//     key: '1',
//     name: '胡彦斌',
//     age: 32,
//     address: '西湖区湖底公园1号',
//   },
//   {
//     id: '222',
//     key: '2',
//     name: '胡彦祖',
//     age: 42,
//     address: '西湖区湖底公园1号',
//   },
// ];

const UserList = props => {
  const history = useHistory()
  const { userList } = props
  const { fetchUsers, addUser, deleteUser } = props
  // const [data, setData] = useState([])

  // const fetchData = async () => {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(dataSource)
    //   }, 1000)
    // })
  // }

  useEffect(() => {
    fetchUsers()
    // fetchData().then(resp => {
    //   setData(resp)
    // })
  }, [])

  const handleClick = user => {
    history.push(`/user/detail/${user.id}`, { data: user })
  }
  const handleDelete = (user, e) => {
    e.stopPropagation()
    try {
      deleteUser(user.id)
      // setData(data.filter(i => i.id !== user.id))
    } catch(err) {
      console.log(err)
    }
  }
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      key: 'action',
      render: user => {
        return (
          <Button onClick={e => handleDelete(user, e)}>删除</Button>
        )
      }
    }
  ];
  return (
    <View>
      <Button onClick={() => addUser()}>新增人员</Button>
      <Table 
        onRow={user => ({ onClick: () => handleClick(user) })}
        dataSource={userList}
        columns={columns}
      />
    </View>
  )
}

export default connect(({ user }) => ({ userList: user.userList }), {
  fetchUsers, 
  addUser, 
  deleteUser
})(UserList)