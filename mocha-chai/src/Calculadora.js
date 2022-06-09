export default class Calculadora{
    static soma(a,b){
    return a+b;
}


    static subtracao(a,b){
    return a-b;
}


    static mult(a,b){
    return a*b;
}


    static div(a,b){
    return a/b;
}

    static perc(a,b){
        let valorpercentual = a/100; 
        return valorpercentual*b; 
    }

    static pot(a,b){
        let resultado = 0;
        let op = a;
        for (let i = b; b > 1; b--){
           resultado = op*a
           op = resultado
        }return resultado;
    }

    static raiz(a){
        return Math.sqrt(a);
    }

    static raizc(a){
        return Math.cbrt(a);
    }
}
