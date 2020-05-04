<?php
    if(isset($_POST['client']) || isset($_POST['review'])){
        $client = strip_data($_POST['client']);
        $review = strip_data($_POST['review']);
        if($client!="" && $review!=""){
            $message = "
            <html>
            <head>
            </head>
            <body>
                <h2>Отзыв с arhfit.ru</h2>
                <h4>$client</h4>
                <p>$review</p>
            </body>
            </html>
            ";
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
