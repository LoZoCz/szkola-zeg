<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sklep papierniczy</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>W naszym sklepie internetowym kupisz najtaniej</h1>
    </header>
    <div class="main-cont">
        <div class="left-section__cont">
            <h3>Promocja 15% obejmuje artykuły:</h3>
            <ul>
                <!-- SKRYPT PHP DO LISTY -->
                <?php
                    $name = 'localhost';
                    $login = 'root';
                    $paswd = '';
                    $base = 'papierniczy';

                    $conn = mysqli_connect($name, $login, $paswd, $base);

                    if(!$conn){
                        echo('Nie działa');
                    }else{
                        echo('Działa');
                    }
                ?>
            </ul>
        </div>
        <div class="mid-section__cont">
            <h4>Cena wybranego artykułu w promocji</h4>
            <form action="" method="post">
                <select name="products" id="prom_list">
                    <!-- SKRYPT PHP DO PRODUKTOW -->
                </select>
                <input type="submit" value="wybierz">
            </form>
        </div>
        <div class="right-section__cont">
            <h3>Kontakt</h3>
            <p>telefon: 123123123</p>
            <p>e-mail: <a href="bok@sklep.pl">bok@sklep.pl</a></p>
            <img src="zdj.png" alt="Promocja">
        </div>
    </div>
    <footer>
        <p>Autor strony: Mateusz Czernik (PESEL)</p>
    </footer>
</body>
</html>