<?php
$logo = ($_SERVER['SERVER_NAME']);
$ips = $_SERVER['REMOTE_ADDR'];
$ipl = "http://ipgeobase.ru/?address=";


$referer2 = $_SERVER['HTTP_REFERER'];

$referer2 = urldecode($referer2); 
$referer2 = substr($referer2, 7, 20);
$user_name = htmlspecialchars($_POST['name']);
$user_phone = htmlspecialchars($_POST['phone']);
$size = htmlspecialchars($_POST['subj']);
$where = htmlspecialchars($_POST['where']);
$where2 = substr($where, 7, 16);

$where3 = substr($where, 50, 70);
$where3 = urldecode($where3); 
$prod_name = htmlspecialchars($_POST['prod_name']);
$ref = $_SERVER['HTTP_REFERER'];
parse_str($ref, $output);
$slova = $output['utm_term'];  // ключевые слова
$kompania = $output['utm_campaign']; // название компании
$p = $output['utm_source']; // название поисковика
$zagolovok = $output['utm_medium']; // заголовок обьявления
$text = $output['utm_text']; // текст обьявления 1
$text2 = $output['utm_text2']; // текст обьявления 2      l-comfort@mail.ru
$phrase = urldecode($where); 

 $to  = 'l-comfort@mail.ru,vitaminiby@ya.ru'; 
$subject = 'шкафы-купе.назаказ.бел '.$phone.'';
$from = "$name";
// текст письма
$message = '
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	</head>
	<body>

<p><strong>Имя: &nbsp;</strong> '.$user_name.'</p>
<p><strong>Тел. : &nbsp;</strong> '.$user_phone.'</p>
<p><strong>модель шкафа : &nbsp;</strong> '.$size.'</p>

<p> '.$where2.'</p>
<p> '.$where3.'</p>


<p> '.$slova.'</p>
<p> '.$p.'</p>
<p> '.$ips.'</p>
<p> '.$prod_name_otz.'</p>
<p> '.$kompania.'</p>
<p> '.$zagolovok.'</p>
<!--<p> '.$text.'</p>
<p> '.$text2.'</p>-->



	</body>
</html>

';

$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= "From: vitaminiby@ya.ru";

mail($to, $subject, $message, $headers);
$URL="index_otpr.html";
header ("Location: $URL");

	?>
	