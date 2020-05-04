<?php
    if(isset($_POST['client']) || isset($_POST['review'])){
        $client = strip_data($_POST['client']);
        $review = strip_data($_POST['review']);
        if($client!="" && $review!=""){
            $message = $client."\n".$review;
            mail('arhfit@mail.ru', 'Отзыв', $message);
            echo 'Отзыв успешно отправлен! <br><span class="review-mark">После проверки модератором отзыв появится в блоке.</span>';
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
