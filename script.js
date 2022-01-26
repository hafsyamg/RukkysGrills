const navIcon = document.querySelector(".nav_icon");
const navTab = document.querySelector(".menu_tab");
const loginContainer = document.querySelector(".login_container");
const dishSection = document.querySelector(".dishes_section_1");
const orderContainer = document.querySelector(".dishes_section_2");
const signInBtn = document.querySelector(".sign_in_btn");
const userName = document.querySelector("#login_username");
const userPassword = document.querySelector("#login_password");
const logInIcon = document.querySelector(".log_in_icon");
const orderPage = document.querySelector(".cart");
const menuIcon = document.querySelector(".menu_display");
const placeOrder = document.querySelectorAll(".place_order");
const orderSection = document.querySelector(".orders_container");
const paymentContainer = document.querySelector(".payment_container");
const paymentBtn = document.querySelector(".payment_btn");
const makePayment = document.querySelector(".payment");
const aboutBtn = document.querySelector(".about_btn");
const aboutSection = document.querySelector(".about_section");

let currentUser;
let inputUser;
let users = {
    User1: {
        name: "nameOfUser1",
        password: "12341",
    },
    User2: {
        name: "nameOfUser2",
        password: "123412",
    },
};
const menu = {
    chicken: {
        image: "img-2.jpg",
        itemPrice: "3000",
        itemName: "Full grilled chicken with vegitables",
    },
    pizza: {
        image: "img-3.jpg",
        itemPrice: "2500",
        itemName: "Hot Pizza",
    },
};
let orders = [];
loginContainer.style.display = "none";
dishSection.style.display = "block";
orderContainer.style.display = "none";
paymentContainer.style.display = "none";
aboutSection.style.display = "none";

const displaySec = function (sec) {
    if (sec === dishSection) {
        loginContainer.style.display = "none";
        dishSection.style.display = "block";
        orderContainer.style.display = "none";
        aboutSection.style.display = "none";
    }
    if (sec === loginContainer) {
        loginContainer.style.display = "block";
        dishSection.style.display = "none";
        orderContainer.style.display = "none";
        aboutSection.style.display = "none";
    }
    if (sec === orderContainer) {
        loginContainer.style.display = "none";
        dishSection.style.display = "none";
        orderContainer.style.display = "block";
        aboutSection.style.display = "none";
    }
    if (sec === paymentContainer) {
        loginContainer.style.display = "none";
        dishSection.style.display = "none";
        orderContainer.style.display = "none";
        aboutSection.style.display = "none";
        paymentContainer.style.display = "block";
    }
    if (sec === aboutSection) {
        loginContainer.style.display = "none";
        dishSection.style.display = "none";
        orderContainer.style.display = "none";
        aboutSection.style.display = "block";
        paymentContainer.style.display = "none";
    }
};
const runLogin = function () {
    inputUser = userName.value;
    if (!userName.value) return;
    if (users[inputUser]) {
        if (userPassword.value) {
            console.log(users[inputUser]);
            if (users[inputUser].password === userPassword.value) {
                displaySec(dishSection);
            } else alert("Invalid Password");
        } else alert("No Password Inputed");
    } else alert("Invalid User");
};
const renderOrders = function (orders) {
    orders.forEach((e) => {
        const markup = ` 
        <div class="dish_item">
            <img class="dish_img" src="${e.image}" alt="" />
            <p class="dish_name">
                ${e.itemName}
            </p>
            <p class="dish_price">${e.itemPrice} Naira</p>
        </div>`;
        orderSection.insertAdjacentHTML("beforeend", markup);
    });
};
navIcon.addEventListener("click", function (e) {
    e.preventDefault();
    navTab.classList.toggle("tab_view");
});
makePayment.addEventListener("click", function (e) {
    e.preventDefault();
});
paymentBtn.addEventListener("click", function (e) {
    e.preventDefault();
    displaySec(paymentContainer);
});
signInBtn.addEventListener("click", function (e) {
    e.preventDefault();
    runLogin();
});
aboutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    displaySec(aboutSection);
});
placeOrder.forEach((e) => {
    e.addEventListener("click", function (f) {
        f.preventDefault();
        orders.push(menu[f.target.dataset.item]);
        console.log(orders);
    });
});

logInIcon.addEventListener("click", function (e) {
    e.preventDefault();
    displaySec(loginContainer);
});
orderPage.addEventListener("click", function (e) {
    e.preventDefault();
    displaySec(orderContainer);
    renderOrders(orders);
});
menuIcon.addEventListener("click", function (e) {
    e.preventDefault();
    displaySec(dishSection);
});
