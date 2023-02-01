<?php
    // echo 'test';

    //echo($data . ", " . $ppl . ", " . $phone);

    $connect = mysqli_connect('localhost', 'root', '', 'baza');

    if($connect){
        // echo('Połączono z bazą');

        $data = $_POST["data"];
        $ppl = $_POST["ppl"];
        $phone = $_POST["phone"];

        mysqli_close($connect);
    } else {
        echo('Brak połączenia');
    }
?>