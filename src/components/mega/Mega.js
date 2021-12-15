function gerarNumeros(qtd){
    var acmNumeros = []
    var uniqueArr = []
    
    for(let i = 0; uniqueArr.length <= (qtd-1) ; i++){ 
        acmNumeros.push(Math.ceil(Math.random() * (60) + 1))
        // excluindo números iguais
        uniqueArr = [...new Set(acmNumeros)]
      
    }
    // ordenando array
    uniqueArr.sort(function(a,b){
        if(a > b) return 1
        if(b < a) return -1
        return 0
    })
    console.log(uniqueArr)
}

gerarNumeros(10)

