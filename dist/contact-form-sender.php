<?php
if(isset($_POST["email"]) && isset($_POST["imie"])&& isset($_POST["tel"]) && isset($_POST["wiadomosc"])){

    $to = 'asvarox93@gmail.com';
    $name = $_POST['imie'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $wiadomosc = $_POST['wiadomosc'];
    $temat = "Portfolio -> ".$email;
    $message = "
    Imie: ".$name."\n
    Tel: ".$tel."\n Wiadomość: ".$wiadomosc."\n\n\n\n Message was send from Your Portfolio Site!";
    
    $headers ='From: '.$email;


    if(mail($to, $temat, $message, $headers)){
    echo '1';
    }
    else{
    echo '2';
    }
    }else{
    echo '0';
} 
?>

