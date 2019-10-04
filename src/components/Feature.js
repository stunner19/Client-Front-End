import React, { Component} from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
    render(){
        return(
            <div>
                Hi, this is the Feature Page!!
            </div>
        );
    }
}

export default requireAuth(Feature);