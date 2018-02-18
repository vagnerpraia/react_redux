import React from 'react';
import PropTypes from 'prop-types';

export default props => {
    if(props.teste){
        return props.children
    }else{
        return false
    }
}