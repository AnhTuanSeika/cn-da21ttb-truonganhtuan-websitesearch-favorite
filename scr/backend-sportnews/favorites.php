<?php

require_once 'db.php';


$data = json_decode(file_get_contents('php://input'), true);
$user_id = $data['user_id'];
$article_id = $data['article_id'];
$title = $data['title'];
$description = $data['description'];
$image_url = $data['image_url'];
$pubDate = $data['pubDate'];
$category = $data['category'];
$link = $data['link'];
$creator = $data['creator'];


$articleCheck = $conn->prepare("SELECT * FROM articles WHERE id = :article_id");
$articleCheck->execute(['article_id' => $article_id]);
$articleExists = $articleCheck->fetch();

if (!$articleExists) {

    $insertArticle = $conn->prepare("
        INSERT INTO articles (id, title, description, image_url, pubDate, category, link, creator) 
        VALUES (:article_id, :title, :description, :image_url, :pubDate, :category, :link, :creator)
    ");
    $insertArticle->execute([
        'article_id' => $article_id,
        'title' => $title,
        'description' => $description,
        'image_url' => $image_url,
        'pubDate' => $pubDate,
        'category' => $category,
        'link' => $link,
        'creator' => $creator,
    ]);
}

$query = $conn->prepare("SELECT * FROM favorites WHERE user_id = :user_id AND article_id = :article_id");
$query->execute(['user_id' => $user_id, 'article_id' => $article_id]);
$result = $query->fetch();

if ($result) {
    $deleteQuery = $conn->prepare("DELETE FROM favorites WHERE user_id = :user_id AND article_id = :article_id");
    $deleteQuery->execute(['user_id' => $user_id, 'article_id' => $article_id]);
    echo json_encode(['status' => 'removed']);
} else {
    $insertQuery = $conn->prepare("INSERT INTO favorites (user_id, article_id) VALUES (:user_id, :article_id)");
    $insertQuery->execute(['user_id' => $user_id, 'article_id' => $article_id]);
    echo json_encode(['status' => 'added']);
}
?>
