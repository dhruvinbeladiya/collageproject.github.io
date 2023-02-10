const mobile_nav = document.querySelector(".mobile_icon");
const header_nav = document.querySelector(".header");

const dhruvin = () => {
    header_nav.classList.toggle("active");
}

mobile_nav.addEventListener("click", () => dhruvin());