document.getElementsByClassName("close-button").onclick = function() {
    document.getElementById("modal").style.display = "none";
}

// סגירת החלון גם אם לוחצים מחוץ לחלון
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}