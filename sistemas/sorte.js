
// comentario

/**
 *  Função que recebe o que eu quiser.
 * 
 * @param {*} chance 
 * @returns se a sorte é menor que a chance de algo acontecer
 */
function sortear(chance) {
    const TESTE = false; // constante de teste do mecanismo de sorte
    let sorte = Math.random();
    // console.log(sorte)
    if (TESTE) {
        sorte = 0.2;
    }
    return sorte < chance
}


// let teste = sorte(0.4)
// console.log(teste)

module.exports = sortear;