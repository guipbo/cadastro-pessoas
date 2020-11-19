
var codigo = 0;
var pessoa;
var pErros = {
    erroNome: document.getElementById("erroNome"),
    erroSobrenome: document.getElementById("erroSobrenome"),
    erroNascimento: document.getElementById("erroNascimento"),
    erroCpf: document.getElementById("erroCpf"),
    erroCep: document.getElementById("erroCep"),
    erroRua : document.getElementById("erroRua"),
    erroNumero: document.getElementById("erroNumero"),
    erroBairro: document.getElementById("erroBairro"),
    erroCidade: document.getElementById("erroCidade"),
    erroEstado: document.getElementById("erroEstado")
}

document.querySelector("#enviar").addEventListener("click", (event)=>{
    event.preventDefault();
    
    pessoa = capturarForm();
    limparErros();
    if(!validar())
        return;
    novaLinha();
    clear();
});

function capturarForm(){

    var temp = {
        nome: document.getElementById("nome"),
        sobrenome: document.getElementById("sobrenome"),
        nascimento: document.getElementById("nascimento"),
        cpf: document.getElementById("cpf"),
        cep: document.getElementById("cep"),
        rua : document.getElementById("rua"),
        numero: document.getElementById("numero"),
        bairro: document.getElementById("bairro"),
        cidade: document.getElementById("cidade"),
        estado: document.getElementById("estado")
    }
    return temp;
}

function limparErros(){
    var x = document.getElementsByClassName("erros");

    for(var i=0; i<x.length; i++){
        x[i].innerHTML = "";
    }

    x = document.getElementsByTagName("input");
    for(var i=0; i<x.length; i++){
        x[i].style = "";
    }
}

function validar(){

    var listaErros = [
        "Campo obrigatório", 
        "CPF inválido",
        "CEP inválido",
        "Entre com a sigla do estado"
    ];

	if(pessoa.nome.value == ""){
        pessoa.nome.focus();
        pessoa.nome.style = "border-color:red;";
        pErros.erroNome.innerHTML = listaErros[0];
        return false;
    }

    if(pessoa.sobrenome.value == ""){
        pessoa.sobrenome.focus();
        pessoa.sobrenome.style = "border-color:red;";
        pErros.erroSobrenome.innerHTML = listaErros[0];
        return false;
    }

    if(pessoa.cpf.value == ""){
        pessoa.cpf.focus();
        pessoa.cpf.style = "border-color:red;";
        pErros.erroCpf.innerHTML = listaErros[0];
        return false;
    }

    if(!(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(pessoa.cpf.value)) 
        && !(/^\d{11}$/.test(pessoa.cpf.value))){
        pessoa.cpf.focus();
        pessoa.cpf.style = "border-color:red;";
        pErros.erroCpf.innerHTML = listaErros[1];
        return false;
    }

    if(!(/^\d{8}$/.test(pessoa.cep.value))
        && !(/^\d{5}\-\d{3}$/.test(pessoa.cep.value))
        && !(/^$/.test(pessoa.cep.value))){
        pessoa.cep.focus();
        pessoa.cep.style = "border-color:red;";
        pErros.erroCep.innerHTML = listaErros[2];
        return false;
    }

    if(pessoa.rua.value == ""){
        pessoa.rua.focus();
        pessoa.rua.style = "border-color:red;";
        pErros.erroRua.innerHTML = listaErros[0];
        return false;
    }

    if(pessoa.bairro.value == ""){
        pessoa.bairro.focus();
        pessoa.bairro.style = "border-color:red;";
        pErros.erroBairro.innerHTML = listaErros[0];
        return false;
    }

    if(pessoa.cidade.value == ""){
        pessoa.cidade.focus();
        pessoa.cidade.style = "border-color:red;";
        pErros.erroCidade.innerHTML = listaErros[0];
        return false;
    }

    if(pessoa.estado.value == ""){
        pessoa.estado.focus();
        pessoa.estado.style = "border-color:red;";
        pErros.erroEstado.innerHTML = listaErros[0];
        return false;
    }

    if(!(/^\b[A-z]{2}$/.test(pessoa.estado.value))){
        pessoa.estado.focus();
        pessoa.estado.style = "border-color:red;";
        pErros.erroEstado.innerHTML = listaErros[3];
        return false;
    }

    return true;
}

function novaLinha(){
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

    var cpfFormatado = document.getElementById("cpf").value.replace(".", "");
    cpfFormatado = cpfFormatado.replace(".", "");
    cpfFormatado = cpfFormatado.replace("-", "");
    var cepFormatado = document.getElementById("cep").value.replace("-", "");
    
    codigo++;
    cod.innerHTML = codigo;
    nome.innerHTML = pessoa.nome.value;
    sobrenome.innerHTML = pessoa.sobrenome.value;
    nascimento.innerHTML = pessoa.nascimento.value;
    cpf.innerHTML = cpfFormatado;
    cep.innerHTML = cepFormatado;
    rua.innerHTML = pessoa.rua.value;
    numero.innerHTML = pessoa.numero.value;
    bairro.innerHTML = pessoa.bairro.value;
    cidade.innerHTML = pessoa.cidade.value;
    estado.innerHTML = pessoa.estado.value;
}

function clear(){
    pessoa.nome.value = "";
    pessoa.sobrenome.value = "";
    pessoa.nascimento.value = "";
    pessoa.cpf.value = "";
    pessoa.cep.value = "";
    pessoa.rua.value = "";
    pessoa.numero.value = "";
    pessoa.bairro.value = "";
    pessoa.cidade.value = "";
    pessoa.estado.value = "";
}
