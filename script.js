let form = document.getElementById('formulario');

form.addEventListener('submit', function(e){


    e.preventDefault();


    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let peso = document.getElementById('peso').value;
    let telefone = document.getElementById('telefone').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let tipoSangue = document.getElementById('tipoSangue').value;



    //validações

    if(nome.split(" ").length < 2 ) return alert("Nome Inválido tem que ter nome e sobrenome");
    if(!email.includes('@')) return alert("Email Inválido");
    if(idade < 16) return alert("Deve ser maior de 16 anos!");
    if(peso <= 50) return alert("O peso minímo é de 50kg");
    if(telefone.length < 9) return alert("Telefone Inválido");
    if (cidade == "") return alert("Deve colocar obrigátorio a cidade!");
    if(estado =="") return alert("Deve colocar o obrigátoriamente o Estado!");
    
    switch (tipoSangue){
        
        case "A+" :
        
        alert("Você poderá doar sangue para os tipos: A+ e AB+"); 
        alert("E você podera receber Sangue do tipos: A+, A-, O+, O-");
        break;

        case "A-" :
        
        alert("Você poderá doar sangue para os tipos: A+, A-, AB+, AB-"); 
        alert("E você podera receber Sangue do tipos: A-, O-");
        break;

        case "B+" :

        alert("Você poderá doar sangue para os tipos: B+, AB+"); 
        alert("E você podera receber Sangue do tipos: B+, B-, O+, O-");
        break;

        case "B-" :

        alert("Você poderá doar sangue para os tipos: B+, B-, AB+, AB-"); 
        alert("E você podera receber Sangue do tipos: B-, O-");
        break;

        case "AB+" :

        alert("Você poderá doar sangue para os tipos: AB+"); 
        alert("E você podera receber Sangue do tipos: A+, A-, B+, B-, AB+, AB-, O+, O-");

        break;

        case "AB-" :

        alert("Você poderá doar sangue para os tipos: AB+, AB-"); 
        alert("E você podera receber Sangue do tipos: A-, B-, AB-, O-");
        break;

        case "O+" :

        alert("Você poderá doar sangue para os tipos: A+, B+, AB+, O+"); 
        alert("E você podera receber Sangue do tipos: O+, O-");
        break;


        case "O-" :

        alert("Você poderá doar sangue para os tipos: A+, A-, B+, B-, AB+, AB-, O+, O-"); 
        alert("E você podera receber Sangue do tipos: O-");
        break;

        default:

        alert("Tipo de Sangue Inválido");

    }

    



document.getElementById("resultado").innerHTML = 
    "Cadastro realizado com sucesso!<br>" +
    "Nome: " + nome + "<br>" +
    "Email: " + email + "<br>" +
    "Tipo Sanguíneo: " + tipoSangue;


})