<?php

require_once 'db.php';


$user_id = $_GET['user_id']; 


$query = $conn->prepare("SELECT a.* FROM articles a 
                         JOIN favorites f ON a.id = f.article_id 
                         WHERE f.user_id = :user_id");

$query->execute(['user_id' => $user_id]);
$articles = $query->fetchAll(PDO::FETCH_ASSOC);


echo json_encode($articles);
?>
