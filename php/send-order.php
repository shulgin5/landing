<?php
    if(isset($_POST['client']) && isset($_POST['phone']) 
    && isset($_POST['address']) && isset($_POST['home'])
    && isset($_POST['korpus']) && isset($_POST['room']) && isset($_POST['city'])){
        $client = strip_data($_POST['client']);
        $phone = strip_data($_POST['phone']);
        $city = strip_data($_POST['city']);
        $address = strip_data($_POST['address']);
        $home = strip_data($_POST['home']);
        $korpus = strip_data($_POST['korpus']);
        $room = strip_data($_POST['room']);
        if($client!="" && $phone!="" && $city!="" 
        && $address!="" && $home!="" && $korpus!="" && $room!=""){
            $message = $client."\n".$phone."\n".$city."\n".$address."\n".$home."\n".$korpus."\n".$room;
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
