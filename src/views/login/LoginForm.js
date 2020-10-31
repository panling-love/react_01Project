import React, { Component } from 'react'
//CSS
import './index.scss'
//ANTD
import { Form, Input, Button ,Row, Col } from 'antd';
import { UserOutlined ,LockOutlined} from '@ant-design/icons';
//API
import {Login} from '../../api/account'
//components
import Code from '../../components/code/index'
//MD5
import CryptoJs from 'crypto-js'

export default class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            modele:'login',
            code:'',
            password:''
        }
    }
    onFinish = ()=>{
        const LoginParams = {
            username:this.state.username,
            password:CryptoJs.MD5(this.state.password),
            code:this.state.code
        }
        console.log(this.state.password)
        Login(LoginParams).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    toggleFrom = ()=>{
        this.props.chaneFrom('resgister');
    }
    setUsername = (e)=>{
        let username = e.target.value;
        this.setState({
            username
        })
    }
    setPassword = (e)=>{
        let password = e.target.value;
        this.setState({
            password
        })
    }
    setCode = (e)=>{
        let code = e.target.value;
        this.setState({
            code
        })
    }
    render() {
        const {username,modele} = this.state;
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
                            <Input value={this.state.username} onChange={this.setUsername} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        > 
                            <Input type='password' onChange={this.setPassword} prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
                        </Form.Item>
             
                        <Form.Item
                            name="yzm" 
                            rules={[{ required: true, message: 'Please input your yzm!' }]}
                        >
                            <Row gutter={16}>
                                <Col span={16}>
                                <Input onChange={this.setCode} prefix={<LockOutlined className="site-form-item-icon"  />} placeholder="yzm" />
                                </Col>
                             <Col span={8}>
                        <Code username = {username} modele = {modele} />
                        </Col>
                            </Row>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className='submit' className="login-form-button" block>
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
