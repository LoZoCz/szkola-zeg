<?php
    // echo 'test';

    //echo($data . ", " . $ppl . ", " . $phone);

    $connect = mysqli_connect('localhost', 'root', '', 'baza');

    if($connect){
        // echo('Połączono z bazą');

        $data = $_POST["data"];
        $ppl = $_POST["ppl"];
        $phone = $_POST["phone"];

        $sql = "INSERT INTO `rezerwacje` (id, nr_stolika, data_rez, liczba_osob, telefon) VALUES (NULL, NULL, '$data', $ppl, '$phone');";

        $sqlQuery = mysqli_query($connect, $sql); 

        if($sqlQuery){
            echo('Dodano rezerwacje do bazy');
        } else{
            echo('Rezerwacja nie powiodła się');
        }

        mysqli_close($connect);
    } else {
        echo('Brak połączenia');
    }
?>