export function manipularTecla(evento, tecla, acao){
    if(evento.key === tecla){
        acao()
    }
}

export function manipularTeclaComAlt(evento, tecla, acao){
    if(evento.key === tecla.toLowerCase() && evento.altKey){
        acao()
    }
}

export function manipularTeclaComControl(evento, tecla, acao){
    if(evento.key === tecla.toLowerCase() && evento.controlKey){
        acao()
    }
}

export function manipularTeclaComShift(evento, tecla, acao){
    if(evento.key === tecla.toLowerCase() && evento.shiftKey){
        acao()
    }
}