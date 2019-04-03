import React, { Component } from 'react'
import fuser from '../axios'
import { Link } from 'react-router-dom'

export default class view extends Component {
    axios = fuser()
    state = {}

    componentDidMount = () => {
        this.id = this.props.match.params['id']

        this.axios.get(`/todo/${this.id}`)
            .then(d => {
                this.setState({
                    ...this.state,
                    ...d.data
                })
            })
    }


    render() {
        const time = this.state.start || ''

        return (
            <div>
                <button
                    onClick={() => this.props.history.goBack()}
                    className="btn btn-sm mb-4 mr-3 btn-warning">
                    <i className="fa fa-arrow-left"></i>
                </button>
                <h3>Task {this.state.id}</h3>
                <div className="mt-4">
                    <div className="font-weight-bold">
                        <span>Task: </span>{this.state.task}
                    </div>
                    <div>
                        <span>Description: </span>{this.state.description}
                    </div>
                    <div>
                        <span>Date: </span>{time.slice(0, 10)}
                    </div>
                    <div>
                        <span>Time: </span>{time.slice(11, 16)}
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button
                        onClick={() => this.props.history.push(`/edit/${this.id}/`)}
                        className="btn btn-sm mr-3 btn-primary">
                        <i className="fa fa-pen"></i> Edit
                    </button>
                    <button
                        onClick={this._delete}
                        className="btn btn-sm btn-danger">
                        <i className="fa fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        )
    }

    _delete = e => {
        e.preventDefault()
        this.axios.delete(`/todo/${this.id}`)
            .then(d => {
                this.props.history.goBack()
            })
    }
}
