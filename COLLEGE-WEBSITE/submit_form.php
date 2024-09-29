<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = json_decode(file_get_contents("php://input"), true);
    
    $name = $input["name"];
    $email = $input["email"];
    $message = $input["message"];
    
    $data = array(
        "date" => date("d/m/Y"),
        "time" => date("h:i:s A"),
        "name" => $name,
        "email" => $email,
        "message" => $message
    );
    
    $file_path = "submissions.json";
    
    if (file_exists($file_path)) {
        $current_data = file_get_contents($file_path);
        $submissions = json_decode($current_data, true);
    } else {
        $submissions = array("submissions" => array());
    }
    
    $submissions["submissions"][] = $data;
    
    if (file_put_contents($file_path, json_encode($submissions, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE))) {
        echo json_encode(array("success" => true, "message" => "Form submitted successfully!"));
    } else {
        echo json_encode(array("success" => false, "message" => "Error saving data."));
    }
} else {
    echo json_encode(array("success" => false, "message" => "Invalid request method."));
}
?>