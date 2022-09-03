const validate = require('validate.js');
const calcConstraint = require('./validate');


const calculo = {
    soma(valor1, valor2) {
        const validateCalc = validate({ valor1, valor2 },  calcConstraint.calcConstraint);        
        if(validateCalc !== undefined){
            return 'Error';
        }
        let p = valor1 + valor2 ;
        return p;
    },

    subtracao(valor1, valor2) {
        const validateCalc = validate({ valor1, valor2 },  calcConstraint.calcConstraint);        
        if(validateCalc !== undefined){
            return 'Error';
        }
        let p = valor1 - valor2 ;
        return p;
    },

    divisao(valor1, valor2) {
        const validateCalc = validate({ valor1, valor2 },  calcConstraint.calcConstraint);        
        if(validateCalc !== undefined){
            return 'Error';
        }
        let p = valor1 / valor2 ;
        return p;
    },

    multiplicacao(valor1, valor2) {
        const validateCalc = validate({ valor1, valor2 },  calcConstraint.calcConstraint);        
        if(validateCalc !== undefined){
            return 'Error';
        }
        let p = valor1 * valor2 ;
        return p;
    },

    raiz(valor) {
        const validateCalc = validate({ valor },  calcConstraint.calcConstraint);        
        if(validateCalc !== undefined){
            return 'Error';
        }
        let p = Math.sqrt(valor) ;
        return p;
    },
};

module.exports = calculo;