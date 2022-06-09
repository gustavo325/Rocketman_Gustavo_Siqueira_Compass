import chai from 'chai'
import assert from 'assert'
import Calculadora from '../src/Calculadora.js'
const expect = chai.expect

describe('teste soma', () => {
    it('soma entre 11 e 12, resposta esperada 23', () => {
        let resultado = Calculadora.soma(11,12)
        expect(resultado).to.be.eq(23)
    })
    it('soma entre 30 e -25, resposta esperada 5', () => {
        let resultado = Calculadora.soma(30,-25)
        expect(resultado).to.be.eq(5)
    })
})
describe('teste subtração', () => {
    it('subtração entre 10 e 25, resultado esperado -15', () => {
        let resultado = Calculadora.subtracao(10,25)
        expect(resultado).to.be.eq(-15)
    })
    it('subtração entre 45 e 32, resultado esperado 13', () => {
        let resultado = Calculadora.subtracao(45,32)
        expect(resultado).to.be.eq(13)
    })
    it('subtração entre 30 e -10, resultado esperado 40', () => {
        let resultado = Calculadora.subtracao(30,-10)
        expect(resultado).to.be.eq(40)
    })
})
describe('teste multiplicação', () => {
    it('multiplicação entre 10 e 5, resultado esperado 50',() => {
        let resultado = Calculadora.mult(10,5)
        expect(resultado).to.be.eq(50)
    })
    it('multiplicação entre 10 e -2, resultado esperado -20', () => {
        let resultado = Calculadora.mult(10,-2)
        expect(resultado).to.be.eq(-20)
})
})
describe('teste de divisão', () => {
    it('divisão entre 25 e 5, resultado esperado 5', () => {
        let resultado = Calculadora.div(25,5)
        expect(resultado).to.be.eq(5)
    })
    it('divisão entre 30 e -5, resultado esperado -6', () => {
        let resultado = Calculadora.div(30,-5)
        expect(resultado).to.be.eq(-6)
    })
})
describe('percentual de um número', () => {
    it('calculando 30% do número 100, resultado esperado 30', () => {
        let resultado = Calculadora.perc(30,100)
        expect(resultado).to.be.eq(30)
    })
    it('calculando 40% de -200, resultado esperado -80', ()=> {
        let resultado = Calculadora.perc(40,-200)
        expect(resultado).to.be.eq(-80)
    })
})
describe('potencia de um número', () => {
    it('calculando 3³, resultado esperado 27', () => {
        let resultado = Calculadora.pot(3,3)
        expect(resultado).to.be.eq(27)
    })
    it('calculando 25³, resultado esperado 15625', () => {
        let resultado = Calculadora.pot(25,3)
        expect(resultado).to.be.eq(15625)
    })
})
describe('raiz quadrada de um número', () => {
    it('Calculando a raiz quadrada de 64, resultado esperado 8', () => {
        let resultado = Calculadora.raiz(64)
        expect(resultado).to.be.eq(8)
    })
    it('Calculando raiz quadrada de 111, resultado esperado: 10.535653752852738', () => {
        let resultado = Calculadora.raiz(111)
        expect(resultado).to.be.eq(10.535653752852738)
    })
})
describe('raiz cúbica de um número', () => {
    it('Calculando a raiz cúbica de 8, resultado esperado 2', () => {
        let resultado = Calculadora.raizc(8)
        expect(resultado).to.be.eq(2)
    })
    it('Calculando a raiz cúbica de 10, resultado esperado: 2.154434690031884 ', () => {
        let resultado = Calculadora.raizc(10)
        expect(resultado).to.be.eq(2.154434690031884)
    })
    })
