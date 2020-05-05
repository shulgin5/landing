<?php
    if(isset($_POST['client']) && isset($_POST['phone']) ){
        $client = strip_data($_POST['client']);
        $phone = strip_data($_POST['phone']);
        if($client!="" && $phone!=""){
            $message = $client."\n".$phone."\n".$ip;
            mail('arhfit@mail.ru', 'Заказ', $message);
            echo 'Заказ принят';
        }else{
            echo 'Введены некорректные данные!';
        }
    }

    function strip_data($text)
    {
        $text = trim( strip_tags( $text ) );
        $text = htmlspecialchars($text);
        return $text;
    }
?>