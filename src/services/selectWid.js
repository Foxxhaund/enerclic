import {DEMANDA, BALANCE, GENERACION, INTERCAMBIOS, TRANSPORTE, MERCADOS} from "../const/const"

export function selectWid(categoria){
    switch(categoria){
        case "balance":
            return BALANCE
        case "demanda":
            return DEMANDA
        case "generacion":
            return GENERACION
        case "intercambios":
            return INTERCAMBIOS
        case "transporte":
            return TRANSPORTE
        case "mercados":
            return MERCADOS
        default:
            return null
    }
}