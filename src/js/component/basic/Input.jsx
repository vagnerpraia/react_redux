import React from 'react'

import If from 'helper/If'

export default props => (
    <div id='Input'>
        <If teste={props.label}>
            <div>
                <label>{props.label + ': ' }</label>
                <If teste={props.obrigatorio}>
                    <span>*(Campo Obrigatório)</span>
                </If>
            </div>
        </If>
        <div>
            <input type={props.type} id={props.id} name={props.name} className={props.class} placeholder={props.placeholder} 
                value={props.value} onChange={props.onChange}/>
            <If teste={props.fonteDados}>
                <If teste={props.fonteDados == 'Representante de OSC'}>
                    <img src="img/fonte_representante_osc.png"/>
                </If>
                <If teste={props.fonteDados != 'Representante de OSC'}>
                    <img src="img/fonte_base_dados.png"/>
                </If>
            </If>
        </div>
    </div>
)