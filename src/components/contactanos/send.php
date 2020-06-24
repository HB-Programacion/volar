<?php
function send_email($from, $to, $subject, $message_html, $message_txt = '')
{

    $email = $to;

    //create a boundary for the email. This 
    $boundary = uniqid('np');

    //headers - specify your from email address and name here
    //and specify the boundary for the email
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: $from \r\n";
    $headers .= "To: $email\r\n";
    //'Reply-To: ' . $from,
    //'Return-Path: ' . $from,
    $headers .= 'Date: ' . date('r', $_SERVER['REQUEST_TIME']) . "\r\n";
    $headers .= 'Message-ID: <' . $_SERVER['REQUEST_TIME'] . md5($_SERVER['REQUEST_TIME'] . $subject) . '@' . $_SERVER['SERVER_NAME'] . '>' . "\r\n";
    $headers .= 'X-Mailer: PHP v' . phpversion() . "\r\n";
    $headers .= 'X-Originating-IP: ' . $_SERVER['SERVER_ADDR'] . "\r\n";

    $headers .= "Content-Type: multipart/alternative;boundary=" . $boundary . "\r\n";

    //here is the content body
    $message = "This is a MIME encoded message.";

    //Plain text body
    $message .= "\r\n\r\n--" . $boundary . "\r\n";
    $message .= "Content-type: text/plain;charset=iso-8859-1\r\n\r\n";


    if ($message_txt == '') {
        $message_txt = nl2br($message_html);
        $message_txt = strip_tags($message_txt);
    }
    $message .= $message_txt;
    //Html body
    $message .= "\r\n\r\n--" . $boundary . "\r\n";
    $message .= "Content-type: text/html;charset=uiso-8859-1\r\n\r\n";
    $message .= $message_html;

    $message .= "\r\n\r\n--" . $boundary . "--";

    //invoke the PHP mail function
    mail('', $subject, $message, $headers);
}

if ( ! isset($_POST['email']) ) {
	exit;
}

// Construimos el mensaje
$to = 'judith@henribarrett.com';
$reply2 = 'webinar@henribarrett.com';
$user_email = $_POST['email'];
$subject2 = 'CONTACTANOS VOLAR';

$message2 = '<div> <h3>Hay una persona que desea comunicarse con Volar .</h3><table> <tr><td>Nombre</td><td>' . $_POST['name'] . '</td></tr><tr><td>Email</td><td>' . $_POST['email'] . '</td></tr><tr><td>Empresa</td><td>' . $_POST['message'] . '</td></tr></table></div>';



echo '<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Refresh" content="4;url=http://volar.org.pe">
    <link  rel="icon"   href="favicon.jpeg" type="image/jpeg" />
    <title>Estas Registrado</title>


</head>
<body>
    <section>
        <div class="pop-up">
            <h1>
                ¡Gracias
                por comunicarse con Volar!
            </h1>
            <img src="linea.svg" alt="">
            <h2>Pronto estaremos comunicandos con usted.</h2>
        </div>

    </section>

</body>

</html>';



send_email($reply2, $to, $subject2, $message2);


?>
