
let jugar=document.getElementById('Jugar')
let piedra2=document.getElementById('piedra')
let papel2=document.getElementById('papel')
let tijera2=document.getElementById('tijera')
let usuario2=document.getElementById('usuario')
let maquina2=document.getElementById('maquina')
let empate2=document.getElementById('empate')
let ganador3=document.getElementById('ganador')



jugar.addEventListener('click',Jugar)



piedra2.addEventListener('click',piedra)
papel2.addEventListener('click',papel)
tijera2.addEventListener('click',tijera)

lista=['piedra','papel','tijera']
contrin =Math.floor(Math.random()*3);
piedra2.style.display = 'none';
papel2.style.display = 'none';
tijera2.style.display = 'none';

function Jugar(){
   


    jugar=parseInt(prompt('Cuantas veces quiere jugar'))
    piedra2.style.display = 'inline-block';
    papel2.style.display = 'inline-block';
    tijera2.style.display = 'inline-block';
    ganador3.innerHTML=''
    cont=jugar
    contU=0
    contM=0
    contE=0
    usuario2=document.getElementById('usuario').innerHTML=contU
     maquina2=document.getElementById('maquina').innerHTML=contM
     empate2=document.getElementById('empate').innerHTML=contE
    
    
     
     
    }
    
    
function piedra() {
    if (lista[contrin]=== 'piedra'){
        ganador3.innerHTML='empate,el contrincate saco piedra'
        contE++
 
    }else if(lista[contrin]==='tijera'){
        ganador3.innerHTML='ganaste,el contrincante saco tijera'
        contU++
    }else if(lista[contrin]==='papel'){
        ganador3.innerHTML='perdiste,el contrincante saco papel'
        contM++
    }
    contrin =Math.floor(Math.random()*3);
    usuario2=document.getElementById('usuario').innerHTML=contU
    maquina2=document.getElementById('maquina').innerHTML=contM
    empate2=document.getElementById('empate').innerHTML=contE
    cont--
  
    if(cont == 0){
      
        piedra2.style.display = 'none';
        papel2.style.display = 'none';
        tijera2.style.display = 'none';
        
        if(contU > contM){
            document.getElementById('ganador').innerHTML='el ganador es el usuario'
        }else if(contU <contM){
            document.getElementById('ganador').innerHTML='el ganador es la maquina'
        }else{
            document.getElementById('ganador').innerHTML='quedaron empatados'

        }
        

}
        
} 

function papel(){
    if (lista[contrin]=== 'papel'){
        ganador3.innerHTML='empate,el contrincante saco papel'
        contE++

    }else if(lista[contrin]==='piedra'){
    ganador3.innerHTML='ganaste,el contrincante saco piedra'
        contU++


    }else if(lista[contrin]==='tijera'){
        ganador3.innerHTML='perdiste,el contrincante saco tijera'
        contM++


    }
    usuario2=document.getElementById('usuario').innerHTML=contU
    maquina2=document.getElementById('maquina').innerHTML=contM
    empate2=document.getElementById('empate').innerHTML=contE
    contrin =Math.floor(Math.random()*3);
    cont--
    if(cont == 0){
        piedra2.style.display = 'none';
        papel2.style.display = 'none';
        tijera2.style.display = 'none';
        if(contU > contM){
            ganador3.innerHTML='el ganador es el usuario'
        }else if(contU <contM){
            ganador3.innerHTML='el ganador es la maquina'
        }else{
            ganador3.innerHTML='quedaron empatados'

        }
    

    }
        
}

function tijera(){
    if (lista[contrin]=== 'tijera'){
        ganador3.innerHTML='empate,el contrincante saco tijera'
        contE++
           

    }else if(lista[contrin]==='papel'){
        ganador3.innerHTML='ganaste,el contrincante saco papel'
        contU++
      

    }else if(lista[contrin]==='piedra'){
        ganador3.innerHTML='perdiste,el contrincate saco piedra'
        contM++

    }
    usuario2=document.getElementById('usuario').innerHTML=contU
    maquina2=document.getElementById('maquina').innerHTML=contM
    empate2=document.getElementById('empate').innerHTML=contE
    contrin =Math.floor(Math.random()*3);
    cont--
    if(cont == 0){
        piedra2.style.display = 'none';
        papel2.style.display = 'none';
        tijera2.style.display = 'none';

        if(contU > contM){
            ganador3.innerHTML='el ganador es el usuario'
        }else if(contU <contM){
            ganador3.innerHTML='el ganador es la maquina'
        }else{
            ganador3.innerHTML='quedaron empatados'

        }



    }
}   