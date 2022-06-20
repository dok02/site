<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php'
require 'phpmailer/src/PHPMailer.php'

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('uk','phpmailer/language/');
$mail->IsHTML(true);


$mail->setFrom('fighttournament2@gmail.com', 'Sender')
$mail->addAddress('dymytryi.kiperchuk.knm.2020@lpnu.ua')
$mail->Subject = "Питання з сайту!!!"

$body = '<h1>Лист з сайту:</h1>'

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Ім\'я:</strong> '.$_POST['name'].'</p>'
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>'
}

if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Повідомлення:</strong> '.$_POST['message'].'</p>'
}


$mail->Body = $body;


//відправлення
if(!$mail->send()){
    $message = 'Помилка'
}else{
    $message = 'Дані відправлено!'
}


$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);