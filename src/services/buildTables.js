

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
// export function  buildValueLabels(included,energias) {
//     let l = []
    
  
//     included.map((i) =>{
//         if(i.type == energias){
//         i.attributes.content.map((con) =>{
//             l.push(con.attributes.title) 
//             })}
//         })
  
//     return l
//}
// export function buildTotales(included,energias) {
//     let l = []
    
   
//         included.map((i) =>{
//             if(i.type == energias){
//             i.attributes.content.map((con) =>{
//                 l.push(con.attributes.total)   
//             })}
//         })
    
//     return l
// }



export function energias(included){
    let l = []
    included.map((i) =>{
        l.push(i.type)
    })
    return l
}
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

    
    






