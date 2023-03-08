window.addEventListener("load", inicio, true);
    function inicio() {
        document.getElementById("texto").addEventListener("keyup", function () {
            this.value = this.value.toUpperCase();
        });

    }


var alfabeto= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N','Ñ', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var categoria;            
var categoriaSelect;      
var obtenerPista;         
var palabra;              
var adivinar;             
var adivina = [];         
var vidas;                
var contador;             
var espacio;              
var palabraNueva;
var newWord;


var verVidas = document.getElementById("Vidas");
var verPista = document.getElementById("Pista");


var botones =  function (){
    misBotones = document.getElementById("botones");
    letras = document.createElement("ul");

    for(var i=0; i< alfabeto.length; i++){
        letras.id = 'alfabeto';
        lista = document.createElement('li');
        lista.id = 'letras';
        lista.innerHTML = alfabeto[i];
        comprobar();
        misBotones.appendChild(letras);
        letras.appendChild(lista);
    };
};

var selectCat = function(){
 if(categoriaSelect ===  categoria[0]){
    NombreCategoria.innerHTML = "La categoria elegida es INFORMATICA";
    } else if (categoriaSelect === categoria[1]){
        NombreCategoria.innerHTML = "La categoria elegida  es ANIMALES";
    } else if (categoriaSelect === categoria[2]){
        NombreCategoria.innerHTML = "La categoria elegida es BEBIDAS";
    }else if (categoriaSelect === categoria[3]){
        NombreCategoria.innerHTML = "La categoria elegida es PARTES DEL CUERPO";
    }else if(categoriaSelect === categoria[4]){
        if(newWord.length===1){
            NombreCategoria.innerHTML = "La categoria elegida es PALABRAS USUARIO";  
        };
          
    };
 
};
var resultado = function(){
    palContainer = document.getElementById('PalContainer');
    letraCorrecta = document. createElement('ul');

    for (var i = 0; i <palabra.length; i++){
        letraCorrecta.setAttribute('id','mi-Palabra');
        adivinar = document.createElement('li');
        adivinar.setAttribute('class','adivinar');
        if(palabra[i]=== "-"){
            adivinar.innerHTML = "-";
            espacio = 1;
        }else{
            adivinar.innerHTML = "-";
        };
        adivina.push(adivinar);
        palContainer.appendChild(letraCorrecta);
        letraCorrecta.appendChild(adivinar);
    };
};

 var comentarios = function(){
    verVidas.innerHTML = "Tú tienes "+ vidas + " vidas";
    if(vidas<1){
        
        Swal.fire({
            title: 'Haz sido ahorcado,¡¡perdiste!!',
            text: 'La palabra era:  '+ palabra,
            color:'#000000',
            background:'#FC5D00',
            timer: 4000,
            timerProgressBar: true,
            showConfirmButton: false,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
         });
         
    };
    for (var i = 0; i < adivina.length; i++){
        if(contador + espacio === adivina.length){  
            Swal.fire({
                title: '¡¡Felicitaciones Ganaste!!',
                text: 'Dale al boton reiniciar para jugar de nuevo',
                color:'#000000',
                background:'#11998e',
                timer: 4000,
                timerProgressBar: true,
                showConfirmButton: false,
                showClass: {
                    popup: 'animate__heartBeat'
                  },
                  hideClass: {
                    popup: 'animate__bounceOut'
                  }
             });
        };
    };
 };

var animar = function(){
    var dibijarme = vidas;
    arregloDibujo[dibijarme]();
};

    var canvas = function(){
        myStickman = document.getElementById("stickman");
        ctx = myStickman.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;

    };

    var cabeza = function(){
        myStickman = document.getElementById("stickman");
        ctx = myStickman.getContext('2d');
        ctx.beginPath();
        ctx.arc(190, 36, 10, 0, Math.PI*2, true);
        ctx.stroke();
    };

    var dibujar = function($pathFromx, $pathFromy, $pathTox, $pathToy){
    ctx.moveTo($pathFromx, $pathFromy);
    ctx.lineTo($pathTox, $pathToy);
    ctx.stroke(); 
    };

    var marco1 = function(){
        dibujar (70, 150, 220, 150);
    };

    var marco2 = function(){
        dibujar (100, 0, 100, 600);
    };

    var marco3 = function(){
        dibujar (90, 5, 190, 5);
    };

    var marco4 = function(){
        dibujar (190, 5, 190, 25);
    };

    var torso = function(){
        dibujar (190, 45, 190,100);
    };

    var brazoDerecho = function(){
        dibujar (170, 80, 190, 50);
    };

    var brazoIzquierdo = function(){
        dibujar (210, 80, 190, 50);
    };

    var piernaDerecha = function(){
        
        dibujar (190, 100, 220, 126);
    };

    var piernaIzquierda = function(){
        dibujar (160, 125, 190, 100);
    };

   
    arregloDibujo = [piernaIzquierda,piernaDerecha,brazoIzquierdo,brazoDerecho,torso,cabeza,marco4,marco3,marco2,marco1];
   
    var comprobar = function(){
       lista.onclick = function(){
        var adivinar1 = (this.innerHTML);
        this.setAttribute("class","active");
        this.onclick = null;
        for (var i =0; i< palabra.length; i++){
            if(palabra[i] === adivinar1){
                adivina[i].innerHTML = adivinar1;
                contador += 1;
            };
        };
         var d = (palabra.indexOf(adivinar1));
         if(d === -1){
            vidas -= 1;
            comentarios();
            animar();
         } else {
            comentarios();
         };

       };
    };

    var jugar = function(){
        let informatica=["PROGRAMAR","INTERFAZ","JAVASCRIPT","SOFTWARE","LOGICA"];
        let animales=["PERRO","GATO","LEON","HIPOPOTAMO","ARAÑA"];
        let bebidas=["CERVEZA","CAFE","GASEOSA","ENERGIZANTE","JUGONATURAL"];
        let cuerpo=["PIEL","CEREBRO","CORAZON","CINTURA","DIENTES"];
        newWord=["newword"];
        if(newWord.length=0){
            categoria = [informatica,animales,bebidas,cuerpo];
        }else {
         categoria = [informatica,animales,bebidas,cuerpo,newWord];
        };
        palabraNueva = localStorage.getItem('NuevaPalabra');
        newWord.push(palabraNueva);  
        categoriaSelect = categoria[Math.floor(Math.random() * categoria.length)];
        palabra = categoriaSelect[Math.floor(Math.random() * categoriaSelect.length)];
        palabra = palabra.replace("-");
        console.log(palabra);
        botones();
        adivina = [ ];
        vidas = 10;
        contador = 0;
        espacio = 0;
        resultado();
        comentarios();
        selectCat();
        canvas();
        
    };

    jugar();

    Sugerencia.onclick = function() {
        let pistaIngresada = localStorage.getItem('NuevaPista');
        hints = [
            ["Dar las instrucciones necesarias a una máquina o aparato para que realice su función de manera automática",
                    "La conexión física y funcional que se establece entre dos aparatos, dispositivos o sistemas que funcionan independientemente uno del otro",
                    "Lenguaje de programación ligero, interpretado, o compilado",
                    "Conjunto de programas y rutinas que permiten a la computadora realizar determinadas tareas",
                    "Es una ciencia formal que estudia la estructura o formas del pensamiento humano"],
                    ["Mejor amigo del hombre",
                    "Animal que ronronea",
                    "Rey de la selva",
                    "Mamífero herbívoro de gran tamaño",
                    "Animal que pico a Peter Parker"],
                    ["Bebida alcohólica elaborada con cebada",
                    "Bebida que tiene cafeina",
                    "Bebida elaborada con colorantes y saborizantes artificiales",
                    "Bebida sin alcohol, que contienen sustancias estimulantes, y que ofrecen al consumidor disminuir temporalmente la sensación de fatiga y el agotamiento",
                    "Bebida hecha a partir del zumo de las frutas"],
                    ["Órgano más grande del cuerpo",
                    "Órgano que centraliza la actividad del sistema nervioso y existe en la mayor parte de los animales",
                    "Es el órgano principal del sistema circulatorio de los animales",
                    "Es una parte del abdomen situada entre el coxal y la cadera",
                    "Gracias a ellos podemos triturar alimentos para ser ingeridos"],
                    [pistaIngresada]
             
      ];
   
      var catagoryIndex = categoria.indexOf(categoriaSelect);
      var hintIndex = categoriaSelect.indexOf(palabra);
      verPista.innerHTML = "Pista: - " +  hints [catagoryIndex][hintIndex];
      
    };
    function reinicar() {  
        location.reload();
    };
   
    function agregar(){
     document.getElementById('input_palabra').style.display = 'block';  
    };

    function SoloLetras(e) {
        key = e.keyCode || e.which;
        tecla = String.fromCharCode(key).toString();
        letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        especiales = [8, 222, 188, 190, 189, 186, 187, 191, 221, 219, 226, 220, 110, 107, 109, 106, 111, 167];
        tecla_especial = false
        for (var i in especiales) {
            if (key == especiales[i]) {
                tecla_especial = true;
                break;
            }
        }

        if (letras.indexOf(tecla) == -1 && !tecla_especial) {
           
            Swal.fire({
                title: 'ERROR',
                text:'Ingresar solo letras',
                icon:'error',
                color:'#000000',
                background:'#FC5D00',
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
                iconColor: '#ffffff',
                
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                
             });
            return false;
        }
    }
    function SoloLetrasP(d){
       
        var regex = new RegExp("^[a-zA-Z ]+$");
        var key = String.fromCharCode(!d.charCode ? d.which : d.charCode);
        if (!regex.test(key)) {
        d.preventDefault();
        return false;
    }
    } 
    function agregarP(){
        
        var input = document.querySelector("#texto");
        palabraNueva = input.value

        if (palabraNueva === "") {
            Swal.fire({
                title: 'ERROR',
                text:'El campo texto no puede estar vacio',
                icon:'error',
                color:'#000000',
                background:'#FC5D00',
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
                iconColor: '#ffffff',
                
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                
             });
        }else if (palabraNueva.length > 12) {
            
            Swal.fire({
                title: 'ERROR',
                text:'La palabra no puede ser mayor a 12 caracteres',
                icon:'error',
                color:'#000000',
                background:'#FC5D00',
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
                iconColor: '#ffffff',        
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                
             });
        }else if(palabraNueva.length > palabraNueva.length <= 12){
            
            localStorage.setItem('NuevaPalabra', palabraNueva);
            input.value = "";
            
            Swal.fire({
                title: 'Palabra Guardada',
                text:'Tú palabra ha sido agregada exitosamente',
                icon:'success',
                color:'#000000',
                background:'#11998e',
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
                iconColor: '#ffffff',
                
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                
             });
            
            document.getElementById('texto').style.display = 'none';
            console.log(palabraNueva);           
            document.getElementById('btnAgregarPalabra').style.display = 'none';
        }       
    };
    function agregarPis(){
        var inputD = document.getElementById("textoPis")    
        var pistaNueva;
        pistaNueva = inputD.value
        if (pistaNueva == "") {
            Swal.fire({
                title: 'ERROR',
                text:'Error el campo texto no puede estar vacio',
                icon:'error',
                color:'#000000',
                background:'#FC5D00',
                timer: 3000,
                timerProgressBar: true,
                showConfirmButton: false,
                iconColor: '#ffffff',
                
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                
             });
        }else{
                (inputD)
                localStorage.setItem('NuevaPista', pistaNueva);
                inputD.value = "";
                Swal.fire({
                    title: 'Pista Guardada',
                    text:'Tú pista ha sido agregada exitosamente',
                    icon:'success',
                    color:'#000000',
                    background:'#11998e',
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    iconColor: '#ffffff',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      }
                    
                 });
                document.getElementById('textoPis').style.display = 'none';
                console.log(pistaNueva);
                document.getElementById('btnAgregarPista').style.display = 'none';
         }
       
         
    };
function redirec(){
    location.href = "index.html";
};