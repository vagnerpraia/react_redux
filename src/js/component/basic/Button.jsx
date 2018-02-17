import React from 'react'

export default props => (
    <div id='Button'>
        <input type='button' id={props.id} className={props.class} value={props.value} onClick={props.onClick}/>
    </div>
)