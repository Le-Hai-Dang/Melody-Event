//Apps Script contact section
const zoneInput = document.getElementById("zoneInput");
const quantity = document.getElementById("quantity");
const email = document.getElementById("email");
const submit = document.getElementById("buy-tickets");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const data = {
        zoneInput: zoneInput.value,
        quantity: quantity.value,
        email: email.value,
    };
    postData(data);
});

async function postData(data) {
    const formData = new FormData();
    formData.append("entry.239137663", data.zoneInput);
    formData.append("entry.55633458", data.quantity);
    formData.append("entry.556351331", data.email);
    await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeralYiJ7OVH3l7lnTnoqGsZc6ko-OlxwzmvYVi4dnPU-Q0pQ/formResponse", {
        method: "POST",
        body: formData,
        mode: "no-cors",
    });
}

// Toast function
function showSuccessToast() {
    toast({
        title: "Success",
        message: "You have successfully registered",
        type: "success",
        duration: 5000
    });
}
document.getElementById("buy-tickets").addEventListener("click", showSuccessToast);
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);
        toast.onclick = function (e) {
            if (e.target.closest(".toast-close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };
        const icons = {
            success: "fas fa-check-circle",
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add("toast", `toast-${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
        <div class="toast-icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast-body">
            <h3 class="toast-title">${title}</h3>
            <p class="toast-msg">${message}</p>
        </div>
        <div class="toast-close">
            <i class="fas fa-times"></i>
        </div>
        `;
        main.appendChild(toast);
    }
}