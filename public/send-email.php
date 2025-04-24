<?php
// Hataları göster
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "sales@sagewflowers.com";
    $subject = "New Contact Form Submission";

    // Form verilerini güvenli hale getir
    $name = htmlspecialchars($_POST['name'] ?? '');
    $company = htmlspecialchars($_POST['company'] ?? '');
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message'] ?? '');

    // Eksik alan kontrolü
    if (empty($name) || empty($company) || empty($email) || empty($message)) {
        echo "Please fill in all required fields.";
        exit;
    }

    // E-posta içeriği
    $body = "Name: $name\n";
    $body .= "Company: $company\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    // Başlıklar
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Gönderim
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Message failed to send. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
