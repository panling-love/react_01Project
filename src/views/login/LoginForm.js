import React, { Component } from 'react'
//CSS
import './index.scss'
//ANTD
import { Form, Input, Button ,Row, Col,message } from 'antd';
import { UserOutlined ,LockOutlined,PoweroffOutlined} from '@ant-design/icons';
//API
import {Login,GetCode} from '../../api/account'

export default class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            code_button_disabled:true,
            code_button_loading:false,
            code_button_text:'获取验证码'
        }
    }
    onFinish = ()=>{
        Login().then(res=>{
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
        if(username!==''){
            this.setState({
                code_button_disabled:false,
            })
        }else{
            this.setState({
                code_button_disabled:true
            })
        }
        this.setState({
            username
        })
    }
    getCode = ()=>{
        if(!this.state.username){
            message.warning('用户名不存在！',1);
            return false;
        }
        this.setState({
            code_button_text:'发送中',
            code_button_loading:true
        })
        const getCodeParams = {
            username:this.state.username,
            modele:'login'
        }
        GetCode(getCodeParams).then(res=>{
            console.log(60);
        }).catch(err=>{
            this.setState({
                code_button_text:'重新发送'
            })
        })
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
                            <Input value={this.state.username} onChange={this.setUsername} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                () => ({
                                    validator(rule, value) {
                                      if (!value || value.length>=6) {
                                        return Promise.resolve();
                                      }
                                      return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                  }),
                        ]}
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
                    <Col span={8}><Button type='danger' className='yzm' block disabled={this.state.code_button_disabled}  loading={this.state.code_button_loading} onClick={this.getCode}>{this.state.code_button_text}</Button></Col>
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
