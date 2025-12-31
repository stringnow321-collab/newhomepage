document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".main-img").forEach(img => {
        img.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.className = "fullscreen-img";
            overlay.innerHTML = `<img src="${img.src}">`;
            overlay.addEventListener("click", () => overlay.remove());
            document.body.appendChild(overlay);
        });
    });
});
