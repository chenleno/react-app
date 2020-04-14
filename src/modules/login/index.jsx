import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components'
import './login.less'
// import { login } from 'reducers/actions'
// import * as actionCreaters from 'reducers/actions'
import { login } from 'reducers/login'
import _ from 'lodash'

const StyledFormWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: linear-gradient(to bottom right, #9fb8ad, #2cb5e8);
  h2 {
    text-align: center;
  }
`

@connect(({ profile }) => ({ profile }), {
  login
})
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      const { login } = this.props
      try {
        const resp = await login(values)
        if(resp) {
          const fromPath = _.get(this.props.location, 'from.pathname', '')
          let redirectURL = (fromPath && fromPath !== '/login') ? fromPath : '/'

          this.props.history.push(redirectURL)
        }
      } catch(err) {
        console.log(err)
      }
      
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <StyledFormWrap>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <h2>React YES!</h2>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </StyledFormWrap>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm
