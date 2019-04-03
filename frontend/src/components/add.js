import React, { Component } from 'react'
import fuser from '../axios';

export default class add extends Component {
    axios = fuser()
    add_task = e => {
        e.preventDefault()
        console.log(this.date.value,this.time.value)
        const data = {
            task: this.task.value,
            description: this.des.value,
            start: `${this.date.value} ${this.time.value}`
        }
        console.log(data);
        this.axios.post('/todo/', data).then(d => {
            this.props.history.push('/list/')
        })
    }

    componentDidMount = () => {
        const dt = new Date().toISOString()
        this.date.value = dt.slice(0, 10)
        this.time.value = dt.slice(11,16)
    }


    render() {
        return (
            <div>
                <h3>Add new Task</h3>
                <form className="mt-4">
                    <input type="text"
                        ref={e => this.task = e}
                        placeholder='Taskname'
                        className="mt-2 form-control text-center" />
                    <textarea type="text"
                        rows={3}
                        ref={e => this.des = e}
                        placeholder='Description'
                        className="mt-2 form-control text-center" />
                    <div className="row">
                        <div className="col">
                            <input type="date"
                                ref={e => this.date = e}
                                className="mt-2 form-control text-center" />
                        </div>
                        <div className="col">
                            <input type="time"
                                ref={e => this.time = e}
                                className="mt-2 form-control text-center" />

                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            onClick={this.add_task}
                            className="btn btn-sm btn-warning mt-3">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
