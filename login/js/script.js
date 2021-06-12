let email = document.getElementById('txtuser')
let senha = document.getElementById('txtpassword')
let button = document.querySelector('#btnlogin')
let form = document.querySelector('.c-login')


function checkInputs(inputs) {
  var filled = true
    
  inputs.forEach(function(input) {
        
    if(input.value === "") {
        filled = false
    }
    
  });
    
  return filled
    
}

var inputs = document.querySelectorAll("input")


inputs.forEach(function(input) {  
  input.addEventListener("keyup", function() {
    if(checkInputs(inputs)) {
      button.disabled = false
      document.getElementById("btnlogin").style.background = "#7c7c7c"
      document.getElementById("btnlogin").style.color = "#ffffff"  
    }else {
      button.disabled = true;
    }
  })
})

const mensagem = () =>{  
  alert(`Seu e-email é ${email.value} e sua senha é  ${senha}`)
}

