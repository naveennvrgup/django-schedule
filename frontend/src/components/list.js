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

    get_todos = () => {
        this.axios('todo/')
            .then(d => {
                console.log(d.data)
                this.setState({
                    ...this.state,
                    todos: d.data
                })
            })
    }

    render() {
        const todos = this.state.todos.map((ele,i) => 
                <div key={i} className="todo d-flex mt-2 align-items-center">
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
                        <button
                            onClick={this._login}
                            className="btn btn-sm btn-success mr-2 mt-3">
                            <i className="fa fa-check"></i>
                        </button>
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
}
