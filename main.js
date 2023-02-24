
let jugar=document.getElementById('Jugar')
let piedra2=document.getElementById('piedra')
let papel2=document.getElementById('papel')
let tijera2=document.getElementById('tijera')
let usuario2=document.getElementById('usuario')
let maquina2=document.getElementById('maquina')
let empate2=document.getElementById('empate')

jugar.addEventListener('click',Jugar)




function Jugar(){
    lista=['piedra','papel','tijera']
    contrin =Math.floor(Math.random()*3);
    jugar=parseInt(prompt('Cuantas veces quiere jugar'))
    document.getElementById('piedra').style.display = 'inline-block';
    document.getElementById('papel').style.display = 'inline-block';
    document.getElementById('tijera').style.display = 'inline-block';
 
    cont=jugar
    contU=0
    contM=0
    contE=0
    
        piedra2.addEventListener('click',piedra)
        papel2.addEventListener('click',papel)
        tijera2.addEventListener('click',tijera)
        function piedra() {
            if (lista[contrin]=== 'piedra'){
                alert('empate,la maquina saco piedra ')
                contE++
                cont--
                

            }else if(lista[contrin]==='tijera'){
                alert('ganaste,la maquina saco tijera')
                contU++
                cont--

            }else if(lista[contrin]==='papel'){
                alert('perdiste,la maquina saco papel ')
                contM++
                cont--

            }
            contrin =Math.floor(Math.random()*3);

      
            if(cont == 0){
                document.getElementById('piedra').style.display = 'none';
                document.getElementById('papel').style.display = 'none';
                document.getElementById('tijera').style.display = 'none';
            }
 
        }  
            function papel(){
            if (lista[contrin]=== 'papel'){
                alert('empate,la maquina saco papel ')
                contE++
                ont--

            }else if(lista[contrin]==='piedra'){
                alert('ganaste,la maquina saco piedra')
                contU++
                cont--

            }else if(lista[contrin]==='tijera'){
                alert('perdiste,la maquina saco tijera ')
                contM++
                cont--

            }
       
            contrin =Math.floor(Math.random()*3);
            if(cont == 0){
                document.getElementById('piedra').style.display = 'none';
                document.getElementById('papel').style.display = 'none';
                document.getElementById('tijera').style.display = 'none';
            }

        }
    
        function tijera(){
            if (lista[contrin]=== 'tijera'){
                alert('empate,la maquina saco tijera ')
                contE++
                cont--

            }else if(lista[contrin]==='papel'){
                alert('ganaste,la maquina saco papel')
                contU++
                cont--

            }else if(lista[contrin]==='piedra'){
                alert('perdiste,la maquina saco piedra')
                contM++
                cont--

            }
           
            contrin =Math.floor(Math.random()*3);
            if(cont == 0){
                document.getElementById('piedra').style.display = 'none';
                document.getElementById('papel').style.display = 'none';
                document.getElementById('tijera').style.display = 'none';
            }
        }   
        
  
    
    
}

