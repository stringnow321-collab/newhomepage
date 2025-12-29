const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbymAkhFUyeqmtg-8sJqyxwILpGlPJiXq_43VS6jcv-HK4L4q3EGcon1pFUAU9L6qwSO/exec";

document.getElementById("checkout-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        zip: document.getElementById("zip").value,
        total: document.getElementById("payment-total").value
    };

    try {
        await fetch("https://script.google.com/macros/s/AKfycbymAkhFUyeqmtg-8sJqyxwILpGlPJiXq_43VS6jcv-HK4L4q3EGcon1pFUAU9L6qwSO/exec", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        alert("Shipping info saved!");

    } catch (err) {
        alert("Failed to save shipping info");
        console.error(err);
    }
});


