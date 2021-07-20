<?php

//Campos
$contacto =$_POST['contacto'];
$email =$_POST['email'];
$tel =$_POST['tel'];
$mensaje =$_POST['mensaje'];


//Datos para el correo

$destinatario = "jeanx32@gmail.com", "jeanx1001@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $contacto \n";
$carta .= "Correo: $email \n";
$carta .= "Telefono: $tel \n";
$carta .= "Mensaje: $mensaje";

//Mensaje

mail($destinatario, $asunto, $carta);
header('Location:msg.html')

?>