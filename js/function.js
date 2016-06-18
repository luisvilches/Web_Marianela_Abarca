$(document).ready(function(){

    var menu1 = $("#menu1");
    var menu2 = $("#menu2");
    var menu3 = $("#menu3");
    var menu4 = $("#menu4");
    var boton = $("#botonContacto");
    var arriba = $("#irArriba");


    $(".div-left-up, .div-center-up, .div-right-up, .div-left-down, .div-center-down, .div-right-down").hide();
    irArriba();
    $(window).scroll(function () {
    //$("#e").html($(window).scrollLeft());
    //Se crean las animaciones segun la posicion el scroll
        if($(window).scrollTop() >= 90){
            $(".div-left-up").show().addClass('animated fadeInLeft');
            $(".div-center-up").show().addClass('animated fadeInDown');
            $(".div-right-up").show().addClass('animated fadeInRight');
            $(".div-left-down").show().addClass('animated fadeInLeft');
            $(".div-center-down").show().addClass('animated fadeInUp');
            $(".div-right-down").show().addClass('animated fadeInRight');
        };
    });

    //-----------------Inicio Model----------------------
    $("#mod1").click(function(){
        $("#img-model").attr("src","img/22.svg");
        $("#myModalLabel").html("Perfil Psicopedagogico:");
        $("#ln1").html("Prevenir, evaluar e intervenir psicopedagógicamente a personas que presenten dificultades en sus aprendizajes.");
        $("#ln2").html("Detectar y evaluar dificultades de aprendizaje.");
        $("#ln3").html("Proponer y aplicar estrategias de intervención considerando tanto al individuo como su entorno.");
        $("#ln4").html("Elaborar y orientar respecto a la construcción y selección de materiales didácticos específicos para niños con necesidades educativas especiales.");
        $("#ln5").html("Utilizar estrategias para los proyectos de la escuela y la comunidad.");
        $("#ln6").html("Asesoramiento a padres de familias y alumnos.");
        $("#ln7").html("Realizar visitas domiciliarias en caso de ser necesario");
        $("#ln8").html("Los datos del cliente son confidenciales y solo se comparten con los implicados en el proceso de tratamiento o intervención");
        $("#ln9").hide();
        $("#ln10").hide();
        $("#ln11").hide();
    });

    $("#mod2").click(function(){
        $("#img-model").attr("src","img/24.svg");
        $("#myModalLabel").html("Tratamientos:");
        $("#ln1").html("Dificultades de Aprendizaje tales como Dislexia, Digrafía...");
        $("#ln2").html("Dificultades en el inicio de la lectoescritura.");
        $("#ln3").html("Dificultades en el área de las matemáticas.");
        $("#ln4").html("Problemas en el Estudio: motivación, técnicas de estudio, organización, clases de apoyo individualizadas.");
        $("#ln5").html("Clases particulares (desde infantil hasta adolescentes).");
        $("#ln6").html("Necesidades educativas especiales: Autismo, Déficit de Atención, Hiperactividad.");
        $("#ln7").html("Orientación vocacional");
        $("#ln8").html("Habilidades sociales");
        $("#ln9").html("Problemas de psicomotricidad");
        $("#ln10").html("Modificación de conducta");
        $("#ln11").html("Ayuda y asesoramiento para padres");
    });

        //------------------Fin Model------------------------

    //ciere automatico del menu movil
    $(".tgr").click(function(){
        $("#menu").trigger('click');
    });


    menu1.click(function() {
        desplazarUp(0);
    });

    menu2.click(function() {
        desplazarDown($("#perfil"));
    });

    menu3.click(function() {
        desplazarDown($("#contacto"));
    });

    boton.click(function() {
        desplazarDown($("#contacto"))
    });

    arriba.click(function() {
        desplazarUp(0);
    });



	


    

});

function miFunction(){
    alert("¡Mensaje enviado con exito!");
};



function desplazarDown(ubicacion){
    var posicion = ubicacion.offset().top;
    event.preventDefault()
    $("html, body").animate({
        scrollTop: posicion
    }, 2000);
};

function desplazarUp(position){
    event.preventDefault()
    $("html, body").animate({
        scrollTop: position
    }, 2000);
};

function irArriba(){
    $(document).on("scroll", function(){
        var desplazamientoActual = $(document).scrollTop();
        var controlArriba = $("#irArriba");
        console.log("Estoy en " , desplazamientoActual); 
        if(desplazamientoActual > 100 && controlArriba.css("display") == "none"){
            controlArriba.fadeIn(500);
        }
        if(desplazamientoActual < 100 && controlArriba.css("display") == "block"){
            controlArriba.fadeOut(500);
        }
    });
};