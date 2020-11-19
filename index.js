var codigo = 0;

document.querySelector("#enviar").addEventListener("click", (event)=>{
    
    
    var tabela = document.getElementById("itens");
    var row = tabela.insertRow();
    
    var cod = row.insertCell();
    var nome = row.insertCell();
    var sobrenome = row.insertCell();
    var nascimento = row.insertCell();
    var cpf = row.insertCell();
    var cep = row.insertCell();
    var rua = row.insertCell();
    var numero = row.insertCell();
    var bairro = row.insertCell();
    var cidade = row.insertCell();
    var estado = row.insertCell();  
    
    codigo++;
    cod.innerHTML = codigo;
    nome.innerHTML = document.getElementById("nome").value;
    sobrenome.innerHTML = document.getElementById("sobrenome").value;
    nascimento.innerHTML = document.getElementById("nascimento").value;
    cpf.innerHTML = document.getElementById("cpf").value;
    cep.innerHTML = document.getElementById("cep").value;
    rua.innerHTML = document.getElementById("rua").value;
    numero.innerHTML = document.getElementById("numero").value;
    bairro.innerHTML = document.getElementById("bairro").value;
    cidade.innerHTML = document.getElementById("cidade").value;
    estado.innerHTML = document.getElementById("estado").value;

    clear();
    event.preventDefault();
});

function clear(){
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("nascimento").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}
