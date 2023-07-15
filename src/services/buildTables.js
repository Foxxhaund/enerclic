export function buildLabels(included){
    let l = []
    included.map((i) =>{
        i.attributes.content.map((con) =>{
            con.attributes.values.map((v) =>{
                if (!l.filter((val) => val === v.datetime).length) {
                    l.push(v.datetime);
                }
            })
            
        })
    })
    return l
}
export function buildLineValues(included) {
    let l = [];
    let v = []
    included.forEach((i) => {
        i.attributes.content.forEach((con) => {
            con.attributes.values.forEach((v) => {
                l = l.concat(v.value);
            });
        });
        v.push(l)
        l = []
    });
    return v;
}
export function buildColores(included) {
    let l = []
    included.map((i) =>{
        i.attributes.content.map((con) =>{
            l.push(con.attributes.color)
            
        })
    })
    return l
}
export function  buildValueLabels(included) {
    let l = []
    included.map((i) =>{
        i.attributes.content.map((con) =>{
            l.push(con.attributes.title)
            
        })
    })
    return l
}
export function  buildTotales(included) {
    let l = []
    included.map((i) =>{
        i.attributes.content.map((con) =>{
            l.push(con.attributes.total)   
        })
    })
    return l
}

export function  buildDescription(included) {
    let l = []
    included.map((i) =>{
        i.attributes.content.map((con) =>{
            l.push(con.attributes.description)   
        })
    })
    return l
}





