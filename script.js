function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

function zoomIn(element) {
    element.style.transform = "scale(1.1)";
    element.style.transition = "transform 0.5s";
}

function zoomOut(element) {
    element.style.transform = "scale(1)";
    element.style.transition = "transform 0.5s";
}

function submitForm() {
    alert('Terima kasih! Pesan Anda telah dikirim.');
    // Tambahan: Handle pengiriman formulir ke server jika diperlukan.
}