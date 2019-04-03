import React, { Component } from 'react'
import fuser from '../axios'
import { Link } from 'react-router-dom'

export default class login extends Component {
    axios = fuser()

    _signup = e => {
        e.preventDefault()
        const data = {
            username: this.username.value,
            password: this.password.value,
            email: this.email.value
        }
        console.log(data);
        this.axios.post('signup/',data).then(d => {
            console.log(d.data);
            this.props.history.push('/login/')
        })
    }

    render() {
        return (
            <div className='text-center'>
                <h3>Signup</h3>
                <div className="mt-4">
                    <form>
                        <input type="text"
                            ref={e => this.username = e}
                            placeholder='username'
                            className="mt-2 form-control text-center" />
                        <input type="password"
                            ref={e => this.password = e}
                            placeholder='password'
                            className="mt-2 form-control text-center" />
                        <input type="email"
                            ref={e => this.email = e}
                            placeholder='email'
                            className="mt-2 form-control text-center" />
                        <div className="text-center">
                            <button
                                onClick={this._signup}
                                className="btn btn-sm btn-warning mt-3">
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-3">
                        <span>Already have an account? </span>
                        <Link to='/login/'>Login</Link>
                    </div>
                </div>
            </div>
        )
    }
}
