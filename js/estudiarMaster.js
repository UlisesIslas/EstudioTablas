const setTabla = (n) => {
    localStorage.setItem('tabla', n);
}

const getTabla = () => {
    console.log(localStorage.getItem('tabla'));
    return tabla;
}

const resultados = () => {
    var r1 = document.getElementById('resultado1').value;
    var correcta1 = document.getElementById('incognita1').textContent * 1;
    if(r1 == correcta1){
        document.getElementById('resultado1').classList.remove('incorrecta');
        document.getElementById('resultado1').classList.add('correcta');
    }else{
        document.getElementById('resultado1').classList.remove('correcta');
        document.getElementById('resultado1').classList.add('incorrecta');
    }
    var r2 = document.getElementById('resultado2').value;
    var correcta2 = document.getElementById('incognita2').textContent * 2;
    if(r2 == correcta2){
        document.getElementById('resultado2').classList.remove('incorrecta');
        document.getElementById('resultado2').classList.add('correcta');
    }else{
        document.getElementById('resultado2').classList.remove('correcta');
        document.getElementById('resultado2').classList.add('incorrecta');
    }
    var r3 = document.getElementById('resultado3').value;
    var correcta3 = document.getElementById('incognita3').textContent * 3;
    if(r3 == correcta3){
        document.getElementById('resultado3').classList.remove('incorrecta');
        document.getElementById('resultado3').classList.add('correcta');
    }else{
        document.getElementById('resultado3').classList.remove('correcta');
        document.getElementById('resultado3').classList.add('incorrecta');
    }
    var r4 = document.getElementById('resultado4').value;
    var correcta4 = document.getElementById('incognita4').textContent * 4;
    if(r4 == correcta4){
        document.getElementById('resultado4').classList.remove('incorrecta');
        document.getElementById('resultado4').classList.add('correcta');
    }else{
        document.getElementById('resultado4').classList.remove('correcta');
        document.getElementById('resultado4').classList.add('incorrecta');
    }
    var r5 = document.getElementById('resultado5').value;
    var correcta5 = document.getElementById('incognita5').textContent * 5;
    if(r5 == correcta5){
        document.getElementById('resultado5').classList.remove('incorrecta');
        document.getElementById('resultado5').classList.add('correcta');
    }else{
        document.getElementById('resultado5').classList.remove('correcta');
        document.getElementById('resultado5').classList.add('incorrecta');
    }
    var r6 = document.getElementById('resultado6').value;
    var correcta6 = document.getElementById('incognita6').textContent * 6;
    if(r6 == correcta6){
        document.getElementById('resultado6').classList.remove('incorrecta');
        document.getElementById('resultado6').classList.add('correcta');
    }else{
        document.getElementById('resultado6').classList.remove('correcta');
        document.getElementById('resultado6').classList.add('incorrecta');
    }
    var r7 = document.getElementById('resultado7').value;
    var correcta7 = document.getElementById('incognita2').textContent * 7;
    if(r7 == correcta7){
        document.getElementById('resultado7').classList.remove('incorrecta');
        document.getElementById('resultado7').classList.add('correcta');
    }else{
        document.getElementById('resultado7').classList.remove('correcta');
        document.getElementById('resultado7').classList.add('incorrecta');
    }
    var r8 = document.getElementById('resultado8').value;
    var correcta8 = document.getElementById('incognita8').textContent * 8;
    if(r8 == correcta8){
        document.getElementById('resultado8').classList.remove('incorrecta');
        document.getElementById('resultado8').classList.add('correcta');
    }else{
        document.getElementById('resultado8').classList.remove('correcta');
        document.getElementById('resultado8').classList.add('incorrecta');
    }
    var r9 = document.getElementById('resultado9').value;
    var correcta9 = document.getElementById('incognita9').textContent * 9;
    if(r9 == correcta9){
        document.getElementById('resultado9').classList.remove('incorrecta');
        document.getElementById('resultado9').classList.add('correcta');
    }else{
        document.getElementById('resultado9').classList.remove('correcta');
        document.getElementById('resultado9').classList.add('incorrecta');
    }
    var r10 = document.getElementById('resultado10').value;
    var correcta10 = document.getElementById('incognita10').textContent * 10;
    if(r10 == correcta10){
        document.getElementById('resultado10').classList.remove('incorrecta');
        document.getElementById('resultado10').classList.add('correcta');
    }else{
        document.getElementById('resultado10').classList.remove('correcta');
        document.getElementById('resultado10').classList.add('incorrecta');
    }
}

document.getElementById('incognita1').innerHTML = localStorage.getItem('tabla');
document.getElementById('incognita2').innerHTML = localStorage.getItem('tabla');
document.getElementById('incognita3').innerHTML = localStorage.getItem('tabla');
document.getElementById('incognita4').innerHTML = localStorage.getItem('tabla');
document.getElementById('incognita5').innerHTML = localStorage.getItem('tabla');
document.getElementById('incognita6').innerHTML = localStorage.getItem('tabla');
document.getElementById('incognita7').innerHTML = localStorage.getItem('tabla');
document.getElementById('incognita8').innerHTML = localStorage.getItem('tabla');
document.getElementById('incognita9').innerHTML = localStorage.getItem('tabla');
document.getElementById('incognita10').innerHTML = localStorage.getItem('tabla');