import React from 'react'

export default (props) => (
    <form name='form'>
        {
            React.Children.map(
                props.children,
                child => React.cloneElement(child, {...props})
            )
        }
        <input type='submit' value='Entrar' />
    </form>
)