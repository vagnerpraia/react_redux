import React from 'react'

export default (props) => (
    <form name='form'>
        {props.children}
        <input type="submit" value="Entrar" />
    </form>
)