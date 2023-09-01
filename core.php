<?php
$miamail = "info@masjidattawhid.it";
$successo = $_POST['successo'];
$nome = $_POST['nome'];
$email = $_POST['email'];
$oggetto = $_POST['oggetto'];
$msg = $_POST['msg'];
$messaggio = "Nome: " . $nome . "\nEmail: " . $email . "\nOggetto: " . $oggetto . "\nMessaggio: " . $msg;
$headers = "From: " . $miamail . "\r\n" . "Reply-To: " . $miamail;
mail($miamail,"Messaggio dal sito",$messaggio,$headers);
header("location: " . $successo);
?>