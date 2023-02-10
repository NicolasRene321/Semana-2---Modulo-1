let genero = window.prompt("Qual o seu sexo? (Digite 'Masculino' ou 'Feminino') ");
let idade = window.prompt("Você tem quantos anos de idade? (Digite um numero!)")
let lab365Student = window.prompt("Você é estudante do LAB365? ('S' para sim/ 'N' para não)")

if(idade >= 60 || lab365Student == 'S' || lab365Student == 'Sim' ){
    window.alert("Você terá acesso gratuito, parabéns!")
}else if(idade < 14 && lab365Student == 'N' || lab365Student == 'Não'){
    window.alert("Não é permitido obter acesso para pessoas que são menores de 14 anos e não são estudantes do LAB365! ")
}else{
    if(genero == 'Feminino'){
        window.alert("Você terá que pagar R$50 reais para obter acesso.")
    }else{
        window.alert("Você terá que pagar R$80 reais para obter acesso.")
    }
    
}