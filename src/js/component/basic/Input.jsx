import React from 'react'

const adicionarLabel = (props) => {
    let componenteResposta = null

    if(props.label){
        componenteResposta = (
            <div>
                <label>{props.label + ': ' }</label>
                {adicionarTextoObrigatorio(props)}
            </div>
        )
    }

    return componenteResposta
}

const adicionarTextoObrigatorio = (props) => {
    let componenteResposta = null

    if(props.obrigatorio){
        componenteResposta = (
            <span>*(Campo Obrigatório)</span>
        )
    }

    return componenteResposta
}

const adicionarFonteDados = (props) => {
    let componenteResposta = null

    if(props.fonteDados){
        if(props.fonteDados == 'Representante de OSC'){
            componenteResposta = (
                <img src="img/fonte_representante_osc.png"/>
            )
        }else{
            componenteResposta = (
                <img src="img/fonte_base_dados.png"/>
            )
        }
    }

    return componenteResposta
}

export default props => (
    <div id='Input'>
        {adicionarLabel(props)}
        <div>
            <input type={props.type} id={props.id} name={props.name} className={props.class} placeholder={props.placeholder} 
                value={props.value} onChange={props.onChange}/>
            {adicionarFonteDados(props)}
        </div>
    </div>
)