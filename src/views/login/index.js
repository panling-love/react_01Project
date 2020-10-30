import React, { Component } from 'react'
import './index.scss'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            formType:'login'
        }
    }
    switchFrom = (val)=>{
        this.setState({
            formType:val
        })
    }
    render() {
        return (
          <div>
              {this.state.formType==='login'?  <LoginForm chaneFrom={this.switchFrom}></LoginForm>:<RegisterForm chaneFrom={this.switchFrom}></RegisterForm>}
          </div>
        )
    }
}
