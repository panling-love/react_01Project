import React, { Component } from 'react'
import { Form, Input, Button ,Row, Col } from 'antd';
import { UserOutlined ,LockOutlined} from '@ant-design/icons';
import './index.scss'


export default class RegisterForm extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    onFinish = ()=>{
        console.log('Received values of form: ');
    }
    toggleFrom = ()=>{
        this.props.chaneFrom('login');
    }
    render() {
        return (
            <div className='form_wrap'>
                <div>
                    <div className='form_header'>
                        <span className='login_button'>注册</span>
                        <span className='new' onClick={this.toggleFrom}>登录</span>
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
                            name="tel"
                            rules={[{ required: true, message: 'Please input your tel!' }]}
                        >
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="tel" />
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
                            <Button type="primary" htmlType="submit" className='submit' className="login-form-button" block>
                            注册
                            </Button>
                        </Form.Item>
                        </Form>
                    
                    </div>
                </div>
            </div>
        )
    }
}
