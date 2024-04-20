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
//Slider
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
	clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        active = key;
        reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

async function postData(data) {
const formData = new FormData()
formData.append("entry.239137663", data.zoneInput);
formData.append("entry.55633458", data.quantity);
formData.append("entry.556351331", data.email);
fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeralYiJ7OVH3l7lnTnoqGsZc6ko-OlxwzmvYVi4dnPU-Q0pQ/formResponse", {
    method: "POST",
    body: formData,
    mode: "no-cors",
})
;}

var mobileMenu = document.getElementById('mobile-menu');
var header = document.getElementById('header');
var headerHeight= header.clientHeight;
mobileMenu.onclick=function(){
	//Open and close mobile menu
	var isClosed = header.clientHeight === headerHeight;
	if(isClosed){
		header.style.height='auto';
	}else{
		header.style.height=nu;	
	}
}
//closes automatically when menu is selected
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i=0;i<menuItems.length;i++){
	var menuItem = menuItems[i];
	menuItem.onclick=function(){
		var isParentMenu= this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
		if (isParentMenu){
			Event.preventDefault();
		}
		else{
			header.style.height=null;
		}
	};
}
//Ticket purchasing section
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal=document.querySelector('.js-modal')
const modalContainer=document.querySelector('.js-modal-container')
const modalClose=document.querySelector('.js-modal-close')
const modalSuccess=document.querySelector('.js-modal-success')
function showBuyTickets(){
modal.classList.add('open')
}
for(const buyBtn of buyBtns){
	buyBtn.addEventListener('click',showBuyTickets)
}
function hideBuyTickets(){
	modal.classList.remove('open')
}
modalClose.addEventListener('click',hideBuyTickets)
modalSuccess.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)
modalContainer.addEventListener('click',function(event){
	event.stopPropagation()
})

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

