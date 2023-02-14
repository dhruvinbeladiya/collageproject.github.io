const mobile_icon = document.querySelector(".mobile_icon");
const mobile_nav = document.querySelector(".mobile_nav");

const dhruvin = () => {
    mobile_icon.classList.toggle("mobile_bars");
    mobile_nav.classList.toggle("active");
}

mobile_icon.addEventListener("click", () => dhruvin());