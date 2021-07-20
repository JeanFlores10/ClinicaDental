$(document).ready(function () {

/* INDEX */
    menu = [
        {
            index1: 'index.html',
            index2: 'clinica.html',
            index3: 'odontologia.html',
            index4: 'tratamientos.html',
            index5: 'infraestructura.html',
            index6: 'bioseguridad.html',
            index7: 'casosclinicos.html',
            index8: 'contactenos.html'
        }
    ];
    menu.forEach((item, index) => {

        var menu = `
            <ul>
                <li><a href="${item.index1}">Inicio</a></li>
                <li><a href="${item.index2}">La clinica</a></li>
                <li><a href="${item.index3}">Odontologia</a></li>
                <li><a href="${item.index4}">Tratamientos</a></li>
                <li><a href="${item.index5}">Infraestructura</a></li>
                <li><a href="${item.index6}">Bioseguridad</a></li>
                <li><a href="${item.index7}">Casos Clinicos</a></li>
                <li><a href="${item.index8}">Contactenos</a></li>
            </ul>
        `;
        $('#menu').append(menu);
    });
    content = [
        {
            imglogo: 'img/logo.png',
            contact: 'TELEFONOS',
            telf: '458 9829',
            cel: '956 562 318',
            imgtelf: 'U',
            ubication: '?',
            title: 'Ubicacion',

            direction1: 'Av. Proceres de la independencia 2076-B',
            direction2: 'San Juan de Lurigancho',
            direccion3: ', Lima, Altura del paradero Los Posles',
            imgemail: '@',
            email: 'CORREOS',
            email1: 'clinicadentalsandiego@hotmail.com',
            email2: 'info@clinicadentalsandiego.com',
            youtube: 'img/youtube.png',
            facebook: 'img/facebook.png'
        }
    ];
    content.forEach((item, index) => {
        var contentlogo = `
            <div class="img-head"><img class="img-header" src="${item.imglogo}" alt="">
            </div>
            
            <div class= "infoheader">
                <div class="ubicacion ubic">
                <a class="icon" href="#">${item.ubication}</a>
                </div>
                <div class="text-ubi">
                    <h4>${item.title}</h4>
                    <p>${item.direction1}</p>
                    <p>${item.direction2}</p>
                </div>

                    <div class="ubicacion telf">
                    <a class="icon" href="#">${item.imgtelf}</a>
                    </div>
                    <div class="text-telf">
                        <h4>${item.contact}</h4>
                        <p>${item.telf}</p>
                        <p>${item.cel}</p>
                    </div>

                <div class="ubicacion email">
                <a class="icon" href="#">${item.imgemail}</a>
                </div>
                <div class="text-email">
                    <h4>${item.email}</h4>
                    <p>${item.email1}</p>
                    <p>${item.email2}</p>
                </div>
                
            </div>
        `;
        $('#content-logo').append(contentlogo);
    });
/* CLINICA */
    clinica = [
        {
            clinica: 'En la CLINICA DENTAL SAN DIEGO nos preocupamos por un control riguroso en la esterilzacion de los instrumentales de trabajo y equipos, para asegurar el estricto cumplimiento con los protocolos de BIOSEGURIDAD.',
            clinica1: 'Para ello contamos con equipos de última generación que garantizan una desinfección de alto nivel, lo que nos asegura una total asepsia sin riesgo de contaminación cruzada, cumpliendo asi con los estándares exigidos por las organizaciones de salud.',
            clinica2: 'Todo esto detro de ambientes acogedores y equipos modernos de vanguardia poniendo estricta atencion en la bioseguridad y garantizar a todos nuestros pacientes un tratamiento profesional.'
        }
    ];
    clinica.forEach((item, index) => {

        var contenedor1 = `

        <div class="contenedor1">
        <p>
            ${item.clinica}
        </p>
        <p>
            ${item.clinica1}
        </p>
        <p>
            ${item.clinica2}
        </p>
    </div>
    `;
        $('#clini').append(contenedor1);
    });
/* TRATAMIENTOS */
    tratamientos = [
        {
            titulo1: 'Rehabilitación Oral',
            titulo2: 'Estetica Dental',
            titulo3: 'Ortodoncia',
            titulo4: 'Odontopediatria',
            titulo5: 'Blanqueamiento Dental',
            titulo6: 'Endodoncia',
            titulo7: 'Operatoria Dental',
            titulo8: 'Cirugía Dental',

            tratamiento1: 'Es una rama de la Odontologia que combina de forma integral las áreas de prótesis fija(puentes fijo estéticos), prótesis removibles y prótesis totales, que se realiza mediante un diagnóstico y plan de tratamiento adecuado, para recuperar la salud bucal de los pacientes',
            tratamiento2: 'Es muy importante porque como su nombre lo sugiere cubre todo aquello que tenga que ver con la belleza, la estética o el embellecimiento de sus clientes en cuanto a forma, tamaño y color, empleando diversas tecnicas y lograr así una sonrisa bella.',
            tratamiento3: 'Es parte de la Odontología que se ocupa de corregir los defectos y las irregularidades de posicion de los clientes, mediante aparatos fijos(brackets) y removibles, para lograr recuperar la armonía facial y la correcta oclusión, pedida por anomalias de formación',
            tratamiento4: 'Es una rama de la Odontología que diagnostica y trata las enfermedades bucales de los niños y adolescentes. Tiene como objetivo principal la PREVENCION, enseñándoles desde pequeños a adoptar hábitos propios de una correcta higiene.',
            tratamiento5: 'Es un tratamiento estético con gran demanda. Logra aclarar varios tonos el color de las piezas dentales que han sufrido pigmentaciones debido al propio paso de los años, cierto alimentos, consumo de cigarrillos, entre otros; quedando los dientes más blancos y brillantes.',
            tratamiento6: 'Es el tratamiento de los conductos radiculares debido a infecciones o inflamaciones severas, que consiste en la extirpación del tejido pulpar y su posterior obturación para preservar la pieza dental en la cavidad oral.',
            tratamiento7: 'Es el procedimiento que consiste en la rehabilitación de un diente dañado por una lesión (Caries) o fractura, utilizando materiales cosméticos como las resinas fotocurables devolviendoles asi la anatomía y funcionalidad al diente.',
            tratamiento8: 'Es la más anyigua de las especialidades de la Odontología, que consiste en el diagnóstico y tratamiento quirurgico de las enfermedades, anomalías y lesiones de los dientes y tejidos contiguos, siendo la más común la extracción dental.',


            img1: 'img/tratamientos1.jpg',
            img2: 'img/tratamientos2.jpg',
            img3: 'img/tratamientos3.jpg',
            img4: 'img/tratamientos4.jpg',
            img5: 'img/tratamientos5.jpg',
            img6: 'img/tratamientos6.jpg',
            img7: 'img/tratamientos7.jpg',
            img8: 'img/tratamientos8.jpg'
        }
    ];
    tratamientos.forEach((item, index) => {
        var contenedor2 = `
        <div class="contenedor-flex">
                <div class="wrapper">
                    <div class="carousel owl-carousel">
                        <!-- CARD 1 -->
                        <div class="card">
                            <div class="card-header">
                                <img src="${item.img1}" alt="">
                            </div>
                            <div class="card-body">
                                <h4>${item.titulo1}</h4>
                                <p>${item.tratamiento1}</p>
                            </div>
                        </div>
                        <!-- CARD 2 -->
                        <div class="card">
                            <div class="card-header">
                                <img src="${item.img2}" alt="">
                            </div>
                            <div class="card-body">
                                <h4>${item.titulo2}</h4>
                                <p>${item.tratamiento2}</p>
                            </div>
                        </div>
                        <!-- CARD 3 -->
                        <div class="card">
                            <div class="card-header">
                                <img src="${item.img3}" alt="">
                            </div>
                            <div class="card-body">
                                <h4>${item.titulo3}</h4>
                                <p>${item.tratamiento3}</p>
                            </div>
                        </div>
                        <!-- CARD 4 -->
                        <div class="card">
                            <div class="card-header">
                                <img src="${item.img4}" alt="">
                            </div>
                            <div class="card-body">
                                <h4>${item.titulo4}</h4>
                                <p>${item.tratamiento4}</p>
                            </div>
                        </div>
                        <!-- CARD 5 -->
                        <div class="card">
                            <div class="card-header">
                                <img src="${item.img5}" alt="">
                            </div>
                            <div class="card-body">
                                <h4>${item.titulo5}</h4>
                                <p>${item.tratamiento5}</p>
                            </div>
                        </div>
                        <!-- CARD 6 -->
                        <div class="card">
                            <div class="card-header">
                                <img src="${item.img6}" alt="">
                            </div>
                            <div class="card-body">
                                <h4>${item.titulo6}</h4>
                                <p>${item.tratamiento6}</p>
                            </div>
                        </div>
                        <!-- CARD 7 -->
                        <div class="card">
                            <div class="card-header">
                                <img src="${item.img7}" alt="">
                            </div>
                            <div class="card-body">
                                <h4>${item.titulo7}</h4>
                                <p>${item.tratamiento7}</p>
                            </div>
                        </div>
                        <!-- CARD 8 -->
                        <div class="card">
                            <div class="card-header">
                                <img src="${item.img8}" alt="">
                            </div>
                            <div class="card-body">
                                <h4>${item.titulo8}</h4>
                                <p>${item.tratamiento8}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
            
                <script>
                    $(".carousel").owlCarousel({
                        margin: 10,
                        loop: true,
                        autoplay: false,
                        autoplatTimeout: 2000,
                        autoplayHoverpause: true,
                        responsive: {
                            0: {
                                items: 1,
                                nav: false
                            },
                            600: {
                                items: 2,
                                nav: false
                            },
                            1000: {
                                items: 3,
                                nav: false
                            },
                            1200: {
                                items: 4,
                                nav: false
                            }
            
                        }
            
                    });
                </script>
            </div>
    `;
        $('#Tratamientos').append(contenedor2);
    });


    
    /*BIOSEGURIDAD */
    bioseguridad = [
        {
            bioseguridad: 'En la CLINICA DENTAL SAN DIEGO nos preocupamos por un control riguroso en la esterilzacion de los instrumentales de trabajo y equipos, para asegurar el estricto cumplimiento con los protocolos de BIOSEGURIDAD.',
            bioseguridad1: 'Para ello contamos con equipos de última generación que garantizan una desinfección de alto nivel, lo que nos asegura una total asepsia sin riesgo de contaminación cruzada, cumpliendo asi con los estándares exigidos por las organizaciones de salud.'
        }
    ];
    bioseguridad.forEach((item, index) => {

        var contenedor3 = `
    <div class="contenedor1">
        <p>
            En la CLINICA DENTAL SAN DIEGO nos preocupamos por un control riguroso en la esterilzacion de los
            instrumentales de trabajo y equipos, para asegurar el estricto cumplimiento con los protocolos de
            BIOSEGURIDAD.
        </p>
        <p>
            Para ello contamos con equipos de última generación que garantizan una desinfección de alto nivel, lo
            que nos asegura una total asepsia sin riesgo de contaminación cruzada, cumpliendo asi con los estándares
            exigidos por las organizaciones de salud.
        </p>

    </div>
    `;
        $('#bioseg').append(contenedor3);
    });
    contactenos = [
        {
            title: 'CONTACTENOS',
            contacto: 'CONTÁCTO:',
            contacto2: 'CORREO:',
            contacto3: 'TELÉFONO:',
            contacto4: 'MENSAJE:',
            exitoso: 'MENSAJE ENVIADO EXITOSAMENTE.'
        }
    ];
    /*CONTACTENOS */
    contactenos.forEach((item, index) => {
        var contenedor4 = `
        <div class="contenedor4">
            <form action="mail.php" method="post">
                <h2>${item.title}</h2>
                <label for="">${item.contacto}</label>
                <input type="text" name="contacto" id="contacto" required placeholder=" Ingrese contacto..">

                <label for="">${item.contacto2}</label>
                <input type="email" name="email" id="email" required placeholder=" Ingrese el correo..">

                <label for="">${item.contacto3}</label>
                <input type="tel" name="tel" id="tel" required placeholder=" Ingrese el numero de telefono..">

                <label for="">${item.contacto4}</label>
                <textarea name="mensaje" id="mensaje" required placeholder=" Ingrese el mensaje.."></textarea>
              
                <input type="reset" value="Limpiar" class="boton4">
                <input type="submit" value="Enviar" class="boton4">
            </form>
        </div>
    `;
        $('#fondo4').append(contenedor4);
    });
    contactenos.forEach((item,index) =>{
        var mensaje = `
            <div class="msj">
                <h2>${item.exitoso}</h2>
                <p><a href="contactenos.html">Volver a Inicio</a></p>
            </div>
        `;
        $('#mensaje').append(mensaje);
    });


    /*FOOTER */

    footer = [
        {
            menu: 'MENU',
            location: '¿DONDE ESTAMOS?',
            social: 'REDES SOCIALES',
            contactos: 'CONTACTO',
            index1: 'index.html',
            index2: 'clinica.html',
            index3: 'odontologia.html',
            index4: 'tratamientos.html',
            index5: 'infraestructura.html',
            index6: 'bioseguridad.html',
            index7: 'casosclinicos.html',
            index8: 'contactenos.html'
        }
    ];
    footer.forEach((item, index) =>{
        var footer =
        `
        <div class="wrap">
        <div id="menu_footer">
            <h5>${item.menu}</h5>
            <ul>
                <li><a href="${item.index1}">Inicio</a></li>
                <li><a href="${item.index2}">Clinica</a></li>
                <li><a href="${item.index3}">Odontologia</a></li>
                <li><a href="${item.index4}">Infraestructura</a></li>
                <li><a href="${item.index5}">Bioseguridad</a></li>
                <li><a href="${item.index6}">Casos Clinicos</a></li>
                <li><a href="${item.index7}">Contactenos</a></li>
            </ul>
        </div>
        <div id="location">
            <h5>${item.location}</h5>
            <iframe
                src="https://www.google.com/maps/embed?pb=!4v1597385824100!6m8!1m7!1spJd0Xf--AfRQNxDseagyhA!2m2!1d-11.99769119624485!2d-77.0092900264868!3f75.67054917994147!4f17.62174297158745!5f0.7820865974627469"
                width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""
                aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div id="browsers">
            <h5>${item.social}</h5>
            <p>
                <a href="#" class="icon facebook">f</a>
                <a href="#" class="icon youtube">y</a>
            </p>
        </div>
        <div id="contactos">
            <h5>${item.contactos}</h5>


            <div class="infoheader infofooter">
                <div class="ubicacion ubic">
                    <a class="icon" href="#">?</a>
                    <div class="text-ubi">
                        <h4>Ubicacion</h4>
                        <p>Av. Proceres de la independencia 2076-B, San Juan de Lurigancho, Lima, Altura del
                            paradero Los Posles</p>
                    </div>
                </div>

                <div class="ubicacion telf">
                    <a class="icon" href="#">U</a>
                    <div class="text-telf">
                        <h4>TELEFONOS</h4>
                        <p>458 9829</p>
                        <p>956 562 318</p>
                    </div>
                </div>

                <div class="ubicacion email">
                    <a class="icon" href="#">@</a>

                    <div class="text-email">
                        <h4>CORREOS</h4>
                        <p>clinicadentalsandiego@hotmail.com</p>
                        <p>info@clinicadentalsandiego.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
        $('#footer').append(footer);
    });




});
