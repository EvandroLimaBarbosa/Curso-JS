<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primeiro Sistema em PHP</title>
</head>
<body>

    <form method="post">
        <input type="text" name= "nome" placeholder="Digite o seu nome...">
        <input type="hidden" name="acao_form1">
        <input type="submit" values="Enviar!">
    </form>
    
</body>
</html>