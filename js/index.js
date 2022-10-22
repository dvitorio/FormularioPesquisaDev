/*function validateEmail(email) {
     var re = /\S+@\S+\.\S+/;
     return re.test(email);
   }
       
   console.log(validateEmail('texto@texto.com')); // true
   console.log(validateEmail('texto@texto')); // false
   console.log(validateEmail('texto.com')); // false
   console.log(validateEmail('texto')); // false*/


//1 - DADOS PESSOAIS
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const tel_1 = document.getElementById('tel_1').value;
const tel_2 = document.getElementById('tel_2').value;
//2 - GÊNERO
const masculino = document.getElementById('masculino');
const feminino = document.getElementById('feminino');
const naoResponder = document.getElementById('naoResponder');
//3 - ESCOLARIDADE
const fundamental = document.getElementById('fundamental').value;
const medio = document.getElementById('medio').value;
const supIncompleto = document.getElementById('supIncompleto').value;
const supCompleto = document.getElementById('supCompleto').value;
const posGraduado = document.getElementById('posGraduado').value;
//4 - TRABALHANDO?
const sim = document.getElementById('sim');
const nao = document.getElementById('nao');
//5 - INTERESSE
const devops = document.getElementById('devops').value;
const frontend = document.getElementById('frontend').value;
const backend = document.getElementById('backend').value;
const mobile = document.getElementById('mobile').value;
//6 - JÁ DESENVOLVEU PROJETO?
const semProjeto = document.getElementById('semProjeto');
const comProjeto = document.getElementById('comProjeto');
//8 - REGIME DE TRABALHO ESCOLHIDO
const remoto = document.getElementById('remoto');
const presencial = document.getElementById('presencial');
const hibrido = document.getElementById('hibrido');
//9 - PRETENSÃO SALARIAL
const pretensao = document.getElementById('pretensao').value;

  