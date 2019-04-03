import React, { Component } from 'react'
import fuser from '../axios'

export default class list extends Component {
    axios = fuser()

    componentDidMount = () => {
        this.axios.post('todo/',{
            'msg': 'god'
        })
            .then(d => {
                console.log(d.data);
            })
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}
