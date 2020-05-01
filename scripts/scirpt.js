$(document).ready(function(){
    // Slider
    if(window.location.href.indexOf("index") > -1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            pager: true
        });

        // Listado de posts
        var posts = [
            {
                title: "Prueba de titulo 1",
                date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare sit amet augue eu dictum. Donec diam diam, euismod eu sollicitudin ac, semper sed metus. Morbi vitae dolor gravida, feugiat leo ac, venenatis felis. Ut volutpat lorem ut turpis placerat, id tincidunt lectus egestas. Nulla eu nulla cursus, fermentum arcu a, iaculis enim. Sed gravida, ligula sit amet blandit pretium, leo ex ultricies velit, non viverra enim risus id tortor. Sed porta interdum fringilla. Etiam lectus nisl, dictum at felis a, lacinia ultricies ipsum. In vel libero nisi. Phasellus hendrerit nisl est, a finibus lorem malesuada quis. Ut quis pharetra lorem, et iaculis nisi. Proin rutrum cursus lacus, vitae mollis nisi lobortis sed. Praesent vel libero purus. Donec eu nulla porttitor, vestibulum lectus a, auctor nisl. Nulla eu iaculis mauris. Proin egestas ligula a dictum iaculis."
            },
            {
                title: "Prueba de titulo 2",
                date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare sit amet augue eu dictum. Donec diam diam, euismod eu sollicitudin ac, semper sed metus. Morbi vitae dolor gravida, feugiat leo ac, venenatis felis. Ut volutpat lorem ut turpis placerat, id tincidunt lectus egestas. Nulla eu nulla cursus, fermentum arcu a, iaculis enim. Sed gravida, ligula sit amet blandit pretium, leo ex ultricies velit, non viverra enim risus id tortor. Sed porta interdum fringilla. Etiam lectus nisl, dictum at felis a, lacinia ultricies ipsum. In vel libero nisi. Phasellus hendrerit nisl est, a finibus lorem malesuada quis. Ut quis pharetra lorem, et iaculis nisi. Proin rutrum cursus lacus, vitae mollis nisi lobortis sed. Praesent vel libero purus. Donec eu nulla porttitor, vestibulum lectus a, auctor nisl. Nulla eu iaculis mauris. Proin egestas ligula a dictum iaculis."
            },
            {
                title: "Prueba de titulo 3",
                date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare sit amet augue eu dictum. Donec diam diam, euismod eu sollicitudin ac, semper sed metus. Morbi vitae dolor gravida, feugiat leo ac, venenatis felis. Ut volutpat lorem ut turpis placerat, id tincidunt lectus egestas. Nulla eu nulla cursus, fermentum arcu a, iaculis enim. Sed gravida, ligula sit amet blandit pretium, leo ex ultricies velit, non viverra enim risus id tortor. Sed porta interdum fringilla. Etiam lectus nisl, dictum at felis a, lacinia ultricies ipsum. In vel libero nisi. Phasellus hendrerit nisl est, a finibus lorem malesuada quis. Ut quis pharetra lorem, et iaculis nisi. Proin rutrum cursus lacus, vitae mollis nisi lobortis sed. Praesent vel libero purus. Donec eu nulla porttitor, vestibulum lectus a, auctor nisl. Nulla eu iaculis mauris. Proin egestas ligula a dictum iaculis."
            },
            {
                title: "Prueba de titulo 4",
                date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare sit amet augue eu dictum. Donec diam diam, euismod eu sollicitudin ac, semper sed metus. Morbi vitae dolor gravida, feugiat leo ac, venenatis felis. Ut volutpat lorem ut turpis placerat, id tincidunt lectus egestas. Nulla eu nulla cursus, fermentum arcu a, iaculis enim. Sed gravida, ligula sit amet blandit pretium, leo ex ultricies velit, non viverra enim risus id tortor. Sed porta interdum fringilla. Etiam lectus nisl, dictum at felis a, lacinia ultricies ipsum. In vel libero nisi. Phasellus hendrerit nisl est, a finibus lorem malesuada quis. Ut quis pharetra lorem, et iaculis nisi. Proin rutrum cursus lacus, vitae mollis nisi lobortis sed. Praesent vel libero purus. Donec eu nulla porttitor, vestibulum lectus a, auctor nisl. Nulla eu iaculis mauris. Proin egestas ligula a dictum iaculis."
            },
            {
                title: "Prueba de titulo 5",
                date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare sit amet augue eu dictum. Donec diam diam, euismod eu sollicitudin ac, semper sed metus. Morbi vitae dolor gravida, feugiat leo ac, venenatis felis. Ut volutpat lorem ut turpis placerat, id tincidunt lectus egestas. Nulla eu nulla cursus, fermentum arcu a, iaculis enim. Sed gravida, ligula sit amet blandit pretium, leo ex ultricies velit, non viverra enim risus id tortor. Sed porta interdum fringilla. Etiam lectus nisl, dictum at felis a, lacinia ultricies ipsum. In vel libero nisi. Phasellus hendrerit nisl est, a finibus lorem malesuada quis. Ut quis pharetra lorem, et iaculis nisi. Proin rutrum cursus lacus, vitae mollis nisi lobortis sed. Praesent vel libero purus. Donec eu nulla porttitor, vestibulum lectus a, auctor nisl. Nulla eu iaculis mauris. Proin egestas ligula a dictum iaculis."
            },
        ];

        posts.forEach((item, index) =>{
        var post = `
                    <article class = "post">
                        <h2> ${ item.title } </h2>
                        <span class = "date"> ${ item.date } </span>
                        <p>
                            ${ item.content }
                        </p>

                        <a href = "#" class="boton_more">Leer más</a>
                    </article>
                `;

        $("#posts").append(post)
        });
    }

    if(window.location.href.indexOf("index") > -1){
        // Selector de tema
        var styles = $("#theme");

        // Guardar en Localstotage para saber que tema presinó anteriormente
        var prede = localStorage.getItem("tema");

        if(prede == "../styles/green.css" || prede == "styles/green.css"){
            styles.attr("href", "styles/green.css");


        }else if(prede == "styles/red.css" || prede == "../styles/red.css"){
            styles.attr("href", "styles/red.css");

        }else if(prede = "styles/blue.css" || prede == "../styles/green.css"){
            styles.attr("href", "styles/blue.css");
        }

        $("#to_green").click(function(){
            styles.attr("href", "styles/green.css");
            localStorage.setItem("tema", styles.attr("href"));
            prede = localStorage.getItem("tema");
        });

        $("#to_red").click(function(){
            styles.attr("href", "styles/red.css");
            localStorage.setItem("tema", styles.attr("href"));
            prede = localStorage.getItem("tema");
        });

        $("#to_blue").click(function(){
            styles.attr("href", "styles/blue.css");
            localStorage.setItem("tema", styles.attr("href"));
            prede = localStorage.getItem("tema");
        });
    }

    if(window.location.href.indexOf("index") < 1){
        // Selector de tema
        var styles = $("#theme2");

        // Guardar en Localstotage para saber que tema presinó anteriormente
        var prede = localStorage.getItem("tema");

        if(prede == "../styles/green.css" || prede == "styles/green.css"){
            styles.attr("href", "../styles/green.css");

        }else if(prede == "../styles/red.css" || prede == "styles/red.css"){
            styles.attr("href", "../styles/red.css");

        }else if(prede = "../styles/blue.css" || prede == "styles/blue.css"){
            styles.attr("href", "../styles/blue.css");
        }

        $("#to_green").click(function(){
            styles.attr("href", "../styles/green.css");
            localStorage.setItem("tema", styles.attr("href"));
            prede = localStorage.getItem("tema");
        });

        $("#to_red").click(function(){
            styles.attr("href", "../styles/red.css");
            localStorage.setItem("tema", styles.attr("href"));
            prede = localStorage.getItem("tema");
        });

        $("#to_blue").click(function(){
            styles.attr("href", "../styles/blue.css");
            localStorage.setItem("tema", styles.attr("href"));
            prede = localStorage.getItem("tema");
        });
    }

    // Scroll
    $('.subir').click(function(e){
        e.prevetDefault();

        $('html body').animate({
            scrollTop: 0
        }, 5000);

        return false;
    });

    // Login falso
    $("#login form").submit(function(){
        var name = $("#name").val();
        localStorage.setItem("nombre", name);
    });

    var form_name = localStorage.getItem("nombre");
    var about = $("#about p");

    if(form_name != null && form_name != "" && form_name != "undefined"){
        $("#about p").html("<br/><strong> Bienvenido, " + form_name + "</strong>");

        about.append("<a href='index.html' id='logout'>Cerrar sesión</a>");

        $("#logout").click(function(){
            localStorage.clear();
        });

        $("#login").hide();
    }


    // Acordeon de archivos
    if(window.location.href.indexOf("about") > -1){
        $("#acordeon").accordion();
    }


    // Reloj
    if(window.location.href.indexOf("reloj") > -1){
        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
    }


    // Validacion
    if(window.location.href.indexOf("contacto")){
        $("form input[name = 'fecha_contacto']").datepicker({
            dateFormat: 'dd/mm/yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
});