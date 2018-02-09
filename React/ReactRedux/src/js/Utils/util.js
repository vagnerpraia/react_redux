import React from 'react'

export function clonarObjeto(objeto){
    return {...objeto}
}

export function clonarChildrenProps(props){
    return React.Children.map(
        props.children,
        child => React.cloneElement(child, {...props})
    )
}