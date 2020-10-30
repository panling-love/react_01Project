import React, { Component } from 'react'
import { Form, Input, Button ,Row, Col } from 'antd';
import { UserOutlined ,LockOutlined} from '@ant-design/icons';
import './index.scss'


export default class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    onFinish = ()=>{
        console.log('Received values of form: ');
    }
    loginHandler(){
        alert('111')
    }
    toggleFrom = ()=>{
        this.props.chaneFrom('resgister');
    }
    render() {
        return (
            <div className='form_wrap'>
                <div>
                    <div className='form_header'>
                        <span className='login_button'>登录</span>
                        <span className='new' onClick={this.toggleFrom}>注册</span>
                    </div>
                    <div className='form_content'>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
                        </Form.Item>
             
                        <Form.Item
                            name="yzm"
                            rules={[{ required: true, message: 'Please input your yzm!' }]}
                        >
                            <Row gutter={16}>
                                <Col span={16}>
                                <Input prefix={<LockOutlined className="site-form-item-icon"  />} placeholder="yzm" />
                                </Col>
                                <Col span={8}><Button type='danger' className='yzm' block>获取验证码</Button></Col>
                            </Row>
                        </Form.Item>

                        <Form.Item>
                            <Button onClick={this.loginHandler} type="primary" htmlType="submit" className='submit' className="login-form-button" block>
                            登录
                            </Button>
                        </Form.Item>
                        </Form>
                    
                    </div>
                </div>
            </div>
        )
    }
}
