<?php
header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));
echo "Сервер получил следующие данные: поле 1 — $data->fieldOne, поле 2 — $data->fieldTwo";