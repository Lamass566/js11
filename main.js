var button = document.querySelector('.btn');
var input1 = document.querySelector('#inputPass1');
var input2 = document.querySelector('#inputPass2');
var icon1 = document.querySelector('#icon1');
var icon2 = document.querySelector('#icon2');
//лучше наверное через querySelectorAll(а не одиночно каждый элемент)
//и перебирать элементы но я не понял как правильно это сделать
console.log(button, input2);

function showPass(event) {
if(event.target.id=="icon1")
{
    if(input1.getAttribute('type') == 'password') {
        input1.removeAttribute('type');
        input1.setAttribute('type', 'text');
        event.target.className = 'fas fa-eye-slash';
        } else {
        input1.removeAttribute('type');
        input1.setAttribute('type', 'password');
        event.target.className = 'fas fa-eye';
    }
}else if(event.target.id=="icon2"){
    if(input2.getAttribute('type') == 'password') {
        input2.removeAttribute('type');
        input2.setAttribute('type', 'text');
         event.target.className = 'fas fa-eye-slash';
        } else {
        input2.removeAttribute('type');
        input2.setAttribute('type', 'password');
        event.target.className = 'fas fa-eye';
    }
    }
}

function esnum(){
    let span = document.createElement('span');
    span.textContent = "Потрібно ввести однакові значення";
    span.style.color = "red";

    var input1 = document.getElementById('inputPass1').value;
    var input2 = document.getElementById('inputPass2').value;

    if(input1 == input2){
    alert("You are welcome");
    }
    else{
        let lb = document.getElementById('label2');
        lb.after(span);
    }
    }
    icon1.addEventListener('click', showPass);
    icon2.addEventListener('click', showPass);
    button.addEventListener('click', esnum);