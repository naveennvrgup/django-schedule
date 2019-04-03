import React, { Component } from 'react'
import fuser from '../axios'
import {Link} from 'react-router-dom'

export default class list extends Component {
    axios = fuser()
    state = {
        todos: []
    }

    componentDidMount = () => {
        this.get_todos()
    }


    render() {
        const checkbtn = (id) => 
            <button
                onClick={e => this._done(e,id,true)}
                className="btn btn-sm btn-success mr-2 mt-3">
                <i className="fa fa-check"></i>
            </button>
        
        const uncheckbtn = (id) => 
            <button
                onClick={e => this._done(e,id,false)}
                className="btn btn-sm btn-danger mr-2 mt-3">
                <i className="fa fa-times"></i>
            </button>

        const todos = this.state.todos.map((ele,i) => 
                <div key={i} className={`todo d-flex mt-2 align-items-center ${ele.completed? 'done':''}` }>
                    <div>
                        {i+1}
                    </div>
                    <div className='mx-4 flex-grow-1'>
                        <div>
                            <Link to={`/view/${ele.id}/`}>{ele.task}</Link>
                        </div>
                        <div className="text-black-50">{ele.description.slice(0,20)}</div>
                    </div>
                    <div className='btns'>
                        {ele.completed?uncheckbtn(ele.id):checkbtn(ele.id)}
                    </div>
                </div>
            )

        return (
            <div>
                <h3>Tasks Schedule:</h3>
                <div className="mt-3">
                    <div className="d-flex 
                        justify-content-between align-items-center">
                        <div>
                            <span>Total tasks: </span>
                            {this.state.todos.length}
                        </div>
                        <button 
                        onClick={()=> this.props.history.push('/add/')}
                        className="btn btn-sm btn-warning">
                            <span>Add </span>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>

                <div className="mt-4">
                    {todos}
                </div>
            </div>
        )
    }

    get_todos = () => {
        this.axios('todo/')
            .then(d => {
                this.setState({
                    ...this.state,
                    todos: d.data
                })
            })
    }

    _done = (e,id, completed) => {
        this.axios.post(`todo/${id}/`,{
            completed
        }).then(d=>{
            this.get_todos()
        })
    }
}
