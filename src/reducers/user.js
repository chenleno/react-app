import Api from 'conf/APIS'
import reducerRegistry from 'utils/reducerRegistry'

const dataSource = [
  {
    id: '111',
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    id: '222',
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const randomId = Math.floor(Math.random() * 100)+''
const newUser = {
  id: randomId,
  key: randomId,
  name: '李师师',
  age: 29,
  address: '北京市五道口'
}

const initState = {
  userList: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      action.data = dataSource // mock代码
      return {
        ...state,
        userList: action.data
      }
    case 'CREATE_USER':
      action.data = newUser // mock代码
      return {
        ...state,
        userList: [
          ...state.userList,
          action.data
        ]
      }
    case 'DELETE_USER':
      return {
        ...state,
        userList: state.userList.filter(u => u.id !== action.args.id)
      }
    default:
      return state
  }
}
export default reducer

export const fetchUsers = () => ({
  type: 'FETCH_USER',
  promise: client => client.get(Api) // 模拟请求
})

export const addUser = data => ({
  type: 'CREATE_USER',
  promise: client => client.get(Api, { ...data }) // 模拟请求
})

export const deleteUser = id => ({
  type: 'DELETE_USER',
  promise: client => client.get(Api, { id }), // 模拟请求
  args: { id }
})

reducerRegistry.register('user', reducer)