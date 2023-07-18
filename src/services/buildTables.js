
//Función para extraer los colores de las leyendas
export function buildColores(included) {
    let l = []
        included.map((i)=>{
            if(i.attributes.content){
                i.attributes.content.map((con) =>{
                            l.push(con.attributes.color)
                })
            }else{
                l.push(i.attributes.color)
            }
        })
        return l
}

export function energias(included){
    let l = []
    included.map((i) =>{
        l.push(i.type)
    })
    return l
}
//Función que exxtrae los labels de las gráficas y la tabla
//corresponde a los campo datetime
export function labelsX(included){
    let l = []
        included.map((i)=>{
            if(i.attributes.content){
                i.attributes.content.map((con) =>{
                    con.attributes.values.map((val) =>{
                        if(!l.includes(val.datetime)){
                            l.push(val.datetime)
                        }
                    })
                    
                })
            }else{
                if(i.attributes.values != []){
                    i.attributes.values.map((con) =>{
                        if(con != []){
                            if(!l.includes(con.datetime)){
                                l.push(con.datetime)
                            }
                        }
                    })
                }
            }
        })
        if(l != []) return l
        else return 1
    }
//Función para obtener los valores a mostrar en tabla y gráfica de valores
export function valoresX(included){
    let l = []
    let v = []
        included.map((i)=>{
            if(i.attributes.content){
                i.attributes.content.map((con) =>{
                    con.attributes.values.map((val) =>{
                            v.push(val.value)
                    })
                    l.push(v)
                    v = []
                })
            }else{
                if(i.attributes.values != []){
                    i.attributes.values.map((con) =>{
                        if(con !=[]) v.push(con.value)
                    })
                    l.push(v)
                    v=[]
                }
            }
        })
        if(l != []) return l
        else return 1
    }
//Función para obtener los porcentajes gráfica de porcentajes
export function porcentajeX(included){
    let l = []
    let v = []
        included.map((i)=>{
            if(i.attributes.content){
                i.attributes.content.map((con) =>{
                    con.attributes.values.map((val) =>{
                            v.push(val.percentage)
                    })
                    l.push(v)
                    v = []
                })
            }else{
                if(i.attributes.values != []){
                    i.attributes.values.map((con) =>{
                        if(con !=[]) v.push(con.percentage)
                    })
                    l.push(v)
                    v=[]
                }
            }
        })
        if(l != []) return l
        else return 1
    }
//Funcion para obtener los nombres de los valores/porcentajes
export function nombreX(included){
    let l = []
        included.map((i)=>{
            if(i.attributes.content){
                i.attributes.content.map((con) =>{
                            l.push(con.type)
                })
            }else{
                l.push(i.type)
            }
        })
        return l
    }

    
    






