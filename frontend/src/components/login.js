import React, { Component } from 'react'
import fuser from '../axios'
import {Link} from 'react-router-dom'

export default class login extends Component {
    axios = fuser()

    _login = e => {
        e.preventDefault()
        const data = {
            username: this.username.value,
            password: this.password.value
        }

        this.axios.post('login/', data).then(d => {
            console.log(d.data)
        })
    }
    
    render() {
        return (
            <div className='text-center'>
                <h3>Login</h3>
                <div className="mt-4">
                    <form>
                        <input type="text"
                            ref={e => this.username = e}
                            placeholder='username'
                            className="mt-2 form-control text-center" />
                        <input type="text"
                            ref={e => this.password = e}
                            placeholder='password'
                            className="mt-2 form-control text-center" />
                        <div className="text-center">
                            <button 
                            onClick={this._login}
                            className="btn btn-sm btn-warning mt-3">
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-3">
                        <span>New user? </span>
                        <Link to='/signup/'>Singup</Link>
                    </div>
                </div>
            </div>
        )
    }
}
