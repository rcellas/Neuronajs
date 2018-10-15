//una neurona es la suma de sus synapsis que por defecto sera un array vacio,
// después tendrá el umbra de disparo que por defecto será 1
const neuron= ({synapses =[], thresould =1} ={}) =>({
    synapses,thresould
});

//cada synapse un peso de 0 a 1 y un valor de corriente de 1 a menos -1
const synapse =({weight =.1,value =0}={})=>({
    weight,value
});

//ahora haremos una funcion donde controlamos si se pasa del umbral de disparo o no.
//Para ello sumará todos los valores para determinar si se pasa o no
const shouldTrigger = ({thresould,synapses})=>{
    //suma dentro de la sinapsi el valor anterior conjunto con el nuevo valor y devolvemos la suma de ello.
    const sum =synapses.reduce((amplitude,{weight,value})=>amplitude+(weight*value),0);
    //si la suma sobre pasa el valor.
    return sum >= thresould;
}

//neurona
const neuron1 =neuron({
    //array de sinapsis con los valores
    synapses:[
        synapse({value:-.2}),
        synapse({weight:0,value:1}),
        synapse({weight:0.5,value:.8})
    ],
    //umbral. Aqui salta el umbral
    thresould:0.3
});

const neuron2 =neuron({
    synapses:[
        synapse({value:-.2}),
        synapse({weight:0,value:1}),
        synapse({weight:0.5,value:.8})
    ],
    //aqui sobrepasa el umbral
    thresould:0.5
});

//nos muestra el resultado
console.log(shouldTrigger(neuron1)); //true
console.log(shouldTrigger(neuron2));//false