document.addEventListener("DOMContentLoaded", function () {
    // Toggle Menu Mobile
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Filter Pimpinan & Pembina
    const filterBtns = document.querySelectorAll(".filter-btn");
    const teamCards = document.querySelectorAll(".team-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Hapus kelas active dari semua tombol
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            teamCards.forEach(card => {
                if (filterValue === "all" || card.classList.contains(filterValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});