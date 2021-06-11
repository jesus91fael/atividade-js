let email = document.getElementById('#txtuser')
let senha = document.querySelector('#txtpassword')
let button = document.querySelector('#btnlogin')

function checkInputs(inputs) {
    var filled = true;
    
    inputs.forEach(function(input) {
        
      if(input.value === "") {
          filled = false;
      }
    
    });
    
    return filled;
    
  }
  var inputs = document.querySelectorAll("input");

  inputs.forEach(function(input) {
      
    input.addEventListener("keyup", function() {
      if(checkInputs(inputs)) {
        button.disabled = false;
        document.getElementById("btnlogin").style.background = "#7c7c7c";
        document.getElementById("btnlogin").style.color = "#ffffff";
      } else {
        button.disabled = true;
      }
    });
  });


const login = () =>{
    alert(`Seu E-mail: ${email} <br>Sua Senha: ${senha}`)
}

console.log(email)