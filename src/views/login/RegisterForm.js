import React, { Component } from 'react'
import { Form, Input, Button ,Row, Col } from 'antd';
import { UserOutlined ,LockOutlined,WhatsAppOutlined} from '@ant-design/icons';
import './index.scss'
//components
import Code from '../../components/code/index'
//API
import {Register} from '../../api/account'
//MD5
import cryptoJs from 'crypto-js'

export default class RegisterForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            code:'',
            password:'',
            modele:'register'
        }
    }
    onFinish = ()=>{
        const regParams = {
            username:this.state.username,
            password:cryptoJs.MD5(this.state.password),
            code:this.state.code
        }
        Register(regParams).then(res=>{
            let data = res.data;
            if(data.resCode==0){
                this.toggleFrom();
            }
        }).catch(err=>{
            return Promise.reject(err);
        })
    }
    toggleFrom = ()=>{
        this.props.chaneFrom('login');
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
                            <Input value={this.state.username} onChange={this.setUsername} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        //     rules={[
                        //         () => ({
                        //             validator(rule, value) {
                        //               if (!value || value.length>6) {
                        //                 return Promise.resolve();
                        //               }
                        //               return Promise.reject('The two passwords that you entered do not match!');
                        //             },
                        //           }),
                        // ]}
                        >
                            <Input  type='password' onChange={this.setPassword} prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
                        </Form.Item>

                        <Form.Item
                            name="confirmPassword"
                            rules={[{ required: true, message: 'Please input your password!' },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject('The two passwords that you entered do not match!');
                                },
                              }),]}
                        >
                            <Input  type='password' prefix={<LockOutlined className="site-form-item-icon" />} placeholder="confirmPassword" />
                        </Form.Item>

                        <Form.Item
                            name="tel"
                            rules={[{ required: true, message: 'Please input your tel!' }]}
                        >
                            <Input prefix={<WhatsAppOutlined className="site-form-item-icon" />} placeholder="tel" />
                        </Form.Item>
             
                        <Form.Item
                            name="yzm"
                            rules={[{ required: true, message: 'Please input your yzm!' }]}
                        >
                            <Row gutter={16}>
                                <Col span={16}>
                                <Input prefix={<LockOutlined  className="site-form-item-icon"  />} onChange={this.setCode} placeholder="yzm" />
                                </Col>
                                <Col span={8}><Code username = {username} modele = {modele} /></Col>
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
