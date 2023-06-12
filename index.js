function tabuada (){
    var num = document.getElementById('num')
    var end = document.getElementById('end')
    var n = Number(num.value) // convertendo o valor das variárias que estão em string para number
    var e = Number(end.value)

    if(n == ' ' || e == ' ') {
        alert('Preencha todos os campos!')
    } else {
            var r = ' ' //variável vazia
            var res = document.getElementById('resposta')
            var x = 0
                res.innerHTML = `A tabuada do ${n} é: <br>`
                do{
                    r = n*x 
                    res.innerHTML += `${n} x ${e} = ${r} <br>`
                    x++
                } while (x <= e)
    }

}