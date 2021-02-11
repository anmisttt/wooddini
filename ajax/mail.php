<?php
    $email = trim($_POST['email']);
    if (mail("mebelwooddini@yandex.ru", "Узнать об открытии", "Email: ".$email ,"From: 111nnn862@gmail.com \r\n"))
    {     echo "сообщение успешно отправлено";
    } else {
        echo "при отправке сообщения возникли ошибки";
    }
?>