const generar = () => {
    let generadas = [];
    for (let index = 0; index < 10; index++) {
        let n = Math.floor(Math.random() * 10) + 1;
        if(generadas.length > 0){
            for (let j = 0; j < generadas.length; j++) {
                if(n == generadas[j]){
                    j = -1;
                    n = Math.floor(Math.random() * 10) + 1;
                }
            }
        }
        generadas[index] = n;
    }
    document.getElementById('tabla1').innerHTML = generadas[0];
    document.getElementById('incognita1').innerHTML = generadas[9];
    document.getElementById('resultado1').classList.remove('correcta');
    document.getElementById('resultado1').classList.remove('incorrecta');
    document.getElementById('tabla2').innerHTML = generadas[1];
    document.getElementById('incognita2').innerHTML = generadas[8];
    document.getElementById('resultado2').classList.remove('correcta');
    document.getElementById('resultado2').classList.remove('incorrecta');
    document.getElementById('tabla3').innerHTML = generadas[2];
    document.getElementById('incognita3').innerHTML = generadas[7];
    document.getElementById('resultado3').classList.remove('correcta');
    document.getElementById('resultado3').classList.remove('incorrecta');
    document.getElementById('tabla4').innerHTML = generadas[3];
    document.getElementById('incognita4').innerHTML = generadas[6];
    document.getElementById('resultado4').classList.remove('correcta');
    document.getElementById('resultado4').classList.remove('incorrecta');
    document.getElementById('tabla5').innerHTML = generadas[4];
    document.getElementById('incognita5').innerHTML = generadas[5];
    document.getElementById('resultado5').classList.remove('correcta');
    document.getElementById('resultado5').classList.remove('incorrecta');
    document.getElementById('tabla6').innerHTML = generadas[5];
    document.getElementById('incognita6').innerHTML = generadas[4];
    document.getElementById('resultado6').classList.remove('correcta');
    document.getElementById('resultado6').classList.remove('incorrecta');
    document.getElementById('tabla7').innerHTML = generadas[6];
    document.getElementById('incognita7').innerHTML = generadas[3];
    document.getElementById('resultado7').classList.remove('correcta');
    document.getElementById('resultado7').classList.remove('incorrecta');
    document.getElementById('tabla8').innerHTML = generadas[7];
    document.getElementById('incognita8').innerHTML = generadas[2];
    document.getElementById('resultado8').classList.remove('correcta');
    document.getElementById('resultado8').classList.remove('incorrecta');
    document.getElementById('tabla9').innerHTML = generadas[8];
    document.getElementById('incognita9').innerHTML = generadas[1];
    document.getElementById('resultado9').classList.remove('correcta');
    document.getElementById('resultado9').classList.remove('incorrecta');
    document.getElementById('tabla10').innerHTML = generadas[9];
    document.getElementById('incognita10').innerHTML = generadas[0];
    document.getElementById('resultado10').classList.remove('correcta');
    document.getElementById('resultado10').classList.remove('incorrecta');
}

let buenas = 0;

const resultados = () => {
    buenas = 0;
    let r1 = document.getElementById('resultado1').value;
    let correcta1 = document.getElementById('incognita1').textContent * document.getElementById('tabla1').textContent;
    if(r1 == correcta1){
        buenas++;
        document.getElementById('resultado1').classList.remove('incorrecta');
        document.getElementById('resultado1').classList.add('correcta');
    }else{
        document.getElementById('resultado1').classList.remove('correcta');
        document.getElementById('resultado1').classList.add('incorrecta');
    }
    let r2 = document.getElementById('resultado2').value;
    let correcta2 = document.getElementById('incognita2').textContent * document.getElementById('tabla2').textContent;
    if(r2 == correcta2){
        buenas++;
        document.getElementById('resultado2').classList.remove('incorrecta');
        document.getElementById('resultado2').classList.add('correcta');
    }else{
        document.getElementById('resultado2').classList.remove('correcta');
        document.getElementById('resultado2').classList.add('incorrecta');
    }
    let r3 = document.getElementById('resultado3').value;
    let correcta3 = document.getElementById('incognita3').textContent * document.getElementById('tabla3').textContent;
    if(r3 == correcta3){
        buenas++;
        document.getElementById('resultado3').classList.remove('incorrecta');
        document.getElementById('resultado3').classList.add('correcta');
    }else{
        document.getElementById('resultado3').classList.remove('correcta');
        document.getElementById('resultado3').classList.add('incorrecta');
    }
    let r4 = document.getElementById('resultado4').value;
    let correcta4 = document.getElementById('incognita4').textContent * document.getElementById('tabla4').textContent;
    if(r4 == correcta4){
        buenas++;
        document.getElementById('resultado4').classList.remove('incorrecta');
        document.getElementById('resultado4').classList.add('correcta');
    }else{
        document.getElementById('resultado4').classList.remove('correcta');
        document.getElementById('resultado4').classList.add('incorrecta');
    }
    let r5 = document.getElementById('resultado5').value;
    let correcta5 = document.getElementById('incognita5').textContent * document.getElementById('tabla5').textContent;
    if(r5 == correcta5){
        buenas++;
        document.getElementById('resultado5').classList.remove('incorrecta');
        document.getElementById('resultado5').classList.add('correcta');
    }else{
        document.getElementById('resultado5').classList.remove('correcta');
        document.getElementById('resultado5').classList.add('incorrecta');
    }
    let r6 = document.getElementById('resultado6').value;
    let correcta6 = document.getElementById('incognita6').textContent * document.getElementById('tabla6').textContent;
    if(r6 == correcta6){
        buenas++;
        document.getElementById('resultado6').classList.remove('incorrecta');
        document.getElementById('resultado6').classList.add('correcta');
    }else{
        document.getElementById('resultado6').classList.remove('correcta');
        document.getElementById('resultado6').classList.add('incorrecta');
    }
    let r7 = document.getElementById('resultado7').value;
    let correcta7 = document.getElementById('incognita7').textContent * document.getElementById('tabla7').textContent;
    if(r7 == correcta7){
        buenas++;
        document.getElementById('resultado7').classList.remove('incorrecta');
        document.getElementById('resultado7').classList.add('correcta');
    }else{
        document.getElementById('resultado7').classList.remove('correcta');
        document.getElementById('resultado7').classList.add('incorrecta');
    }
    let r8 = document.getElementById('resultado8').value;
    let correcta8 = document.getElementById('incognita8').textContent * document.getElementById('tabla8').textContent;
    if(r8 == correcta8){
        buenas++;
        document.getElementById('resultado8').classList.remove('incorrecta');
        document.getElementById('resultado8').classList.add('correcta');
    }else{
        document.getElementById('resultado8').classList.remove('correcta');
        document.getElementById('resultado8').classList.add('incorrecta');
    }
    let r9 = document.getElementById('resultado9').value;
    let correcta9 = document.getElementById('incognita9').textContent * document.getElementById('tabla9').textContent;
    if(r9 == correcta9){
        buenas++;
        document.getElementById('resultado9').classList.remove('incorrecta');
        document.getElementById('resultado9').classList.add('correcta');
    }else{
        document.getElementById('resultado9').classList.remove('correcta');
        document.getElementById('resultado9').classList.add('incorrecta');
    }
    let r10 = document.getElementById('resultado10').value;
    let correcta10 = document.getElementById('incognita10').textContent * document.getElementById('tabla10').textContent;
    if(r10 == correcta10){
        buenas++;
        document.getElementById('resultado10').classList.remove('incorrecta');
        document.getElementById('resultado10').classList.add('correcta');
    }else{
        document.getElementById('resultado10').classList.remove('correcta');
        document.getElementById('resultado10').classList.add('incorrecta');
    }
    document.getElementById('buenas').innerHTML = buenas;
    document.getElementById('malas').innerHTML = 10 - buenas;
    document.getElementById('promedio').innerHTML = buenas;
}