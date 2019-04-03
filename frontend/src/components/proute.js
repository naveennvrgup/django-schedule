import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

class proute extends Component {
    componentWillMount = () => {
        const token = localStorage['token']
        if(!token){
            this.props.history.push('/login/')
        }
    }
    
    
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(proute)