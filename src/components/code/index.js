import React, { Component,Fragment } from 'react'
//antd
import { Button ,message } from 'antd';
//API
import {GetCode} from '../../api/account'


//定时器
let timer = null;

export default class Code extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:props.username,
            code_button_disabled:true,
            code_button_loading:false,
            button_text:'获取验证码',
            modele:props.modele
        }
    }
    componentWillReceiveProps({username}){
        console.log(username)
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
    componentWillUnmount(){
        clearInterval(timer);
    }
    getCode = ()=>{
        if(!this.state.username){
            message.warning('用户名不存在！',1);
            return false;
        }
        this.setState({
           button_text:'发送中',
           code_button_loading:true
        })
        const getCodeParams = {
            username:this.state.username,
            modele:this.state.modele
        }
        let time = 60;
            timer = setInterval(()=>{
                this.setState({
                    code_button_loading:false,
                    code_button_disabled:true,
                    button_text:`${time}S`
                 })
                time -= 1;
                if(time<=0){
                    this.setState({
                        button_text:'重新获取',
                        code_button_disabled:false
                    })
                    clearInterval(timer);
                    return false;
                }
            },1000)
        GetCode(getCodeParams).then(res=>{
            message.success(res.data.message);
        }).catch(err=>{
            this.setState({
                button_text:'重新发送'
            })
        })
    }
    render() {
        return (
            <Fragment>
                <Button type='danger' className='yzm' block disabled={this.state.code_button_disabled}  loading={this.state.code_button_loading}  onClick={this.getCode}>{this.state.button_text}</Button>
            </Fragment>
        )
    }
}
