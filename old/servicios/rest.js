
export class Rest{
    static get(url ,params,callback){
        let paramsGET='?'
        for(let param in params){
            paramsGET +=param +'='
            paramsGET +=params[param] +'&'
        }
        fetch(encodeURI(url + paramsGET.substring(0,paramsGET.length-1))).then(respuesta => respuesta.text()).then(texto =>{
            if (callback)
                callback(texto)
        })
    }

}

console.log("Hola buenos dias")