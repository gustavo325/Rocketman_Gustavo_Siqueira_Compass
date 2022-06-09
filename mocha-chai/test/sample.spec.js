import assert from 'assert'
import chai from 'chai'

describe('primeiro teste', () =>{
    it('verificando igualdade', () => {
        let numero = 25; 
        assert.strictEqual(numero,25)
    })
    it('teste 2', () => {
        let numero = 25; 
        assert.strictEqual(numero,25)
})
})
describe('segundo teste', () =>{
    it('verificando desigualdade', () => {
        let numero = 25; 
        assert.notStrictEqual(numero,'25')
    })
    it('teste 2', () => {
        let numero = 'vaca'; 
        assert.notEqual(numero,'luva')
})
})


