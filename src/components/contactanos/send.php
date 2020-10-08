
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
$to = 'narda@henribarrett.com,judith@henribarrett.com';
$reply1 = 'hola@volar.org.pe';
$reply2 = 'CONTÁCTANOS - VOLAR';
$user_email = $_POST['email'];
$subject1 = 'CONTÁCTANOS - VOLAR';
$subject2 = 'CONTÁCTANOS - VOLAR';

$message1 = '  <table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse; background-color: #fff;">
<tr>
    <td style=" text-align: left; padding-top: 2rem;">
            <img width="85%" style="display:block; margin: auto" src="https://henribarrett.com/unidos-en-la-mesa/banner1.png">
    </td>
</tr>

<tr>
    <td style="">
        <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
            <h2 style="color: #9C252D; text-align: center;">¡Hola ' . $_POST['name'] . '  Confirmamos tu  participación!</h2>
            <p style="text-align: center; font-size: 0.8rem; color:#A99354; font-weight: 700;font-style: italic;">
                Pronto nos estaremos comunicando contigo para enviarte el link del evento.
            </p>
        
            <p style="text-align: center; font-size: 0.7rem; color:#A99354; font-weight: 700;font-style: italic;">
                Para mas información puedes escribir a <a href="mailto:hola@henribarrett.com">hola@henribarrett.com</a> o a través de nuestras redes sociales.
            </p>
            <hr>
        </div>
    </td>
</tr>
    
<tr>
    <td style="padding-bottom: 2rem;">
        <img style="padding: 0; display: block; margin: auto;" src="https://henribarrett.com/unidos-en-la-mesa/footer.png" width="85%">
    </td>
</tr>

</table>';

$message2 = '<div> <h3>Hay una persona que desea comunicarse con Volar .</h3><table> <tr><td>Nombre</td><td>' . $_POST['name'] . '</td></tr><tr><td>Email</td><td>' . $_POST['email'] . '</td></tr><tr><td>Empresa</td><td>' . $_POST['message'] . '</td></tr></table></div>';

echo '<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Refresh" content="4;url=https://volar.org.pe">
    <link  rel="icon"   href="favicon.jpeg" type="image/jpeg" />
    <title>Estas Registrado</title>
<style media="screen">
body { background: #2e335e; color: rgba(0,0,0,0.87); font-family: Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0;}
#message {
background: white;
width: 360px;
margin: 100px auto 16px;
padding: 32px 24px 16px;
border-radius: 3px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
#message h3 { color: #1e1e1e; font-weight: normal; font-size: 1rem; margin: 16px 0 12px; }
#message h1 { font-size: 1.5rem; font-weight: 700; color: #2e335e; margin: 0 0 16px;text-align: center;}
#img-logo{

  margin:auto
}
#load { color: rgba(0,0,0,0.4); text-align: center; font-size: 13px; }
@media (max-width: 600px) {
  #message { margin-top: 0; background: white; box-shadow: none; width: 300px; margin: 10rem auto 1rem; border-top: 16px solid #ef8b44;}

}
</head>
</style>
</head>
<body>
<div id="message">
<h1>GRACIAS POR CONTACTARSE CON VOLAR</h1>
<h3>Pronto nos estaremos comunicando contigo.</h3>
<img id="img-logo" src="https://volar.org.pe/logo-volar.png" alt="">
</div>
</body>

</html>';

send_email($reply1, $user_email, $subject1, $message1);


send_email($reply1, $to, $subject2, $message2);



?>

