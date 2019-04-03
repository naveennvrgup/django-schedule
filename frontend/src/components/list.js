import React, { Component } from 'react'
import fuser from '../axios'

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
                <div className="todo d-flex mt-3 align-items-center">
                    <div>
                        {i+1}
                    </div>
                    <div className='mx-3 flex-grow-1'>
                        <div>{ele.task}</div>
                        <div className="text-black-50">{ele.description}</div>
                    </div>
                </div>
            )

        return (
            <div>
                <h3>Tasks Schedule:</h3>
                <div className="mt-3">
                    <div className="d-flex 
                    text-cite
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
