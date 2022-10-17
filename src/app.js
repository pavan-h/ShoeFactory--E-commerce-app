const wrapper = document.querySelector(".slider_wrapper"),
      productItems = document.querySelectorAll(".product_item"),
      navbar = document.querySelector(".top_navbar"),
      openMenu = document.querySelector(".open_menu"),
      closeMenu = document.querySelector(".close_menu"),
      navLinks = document.querySelectorAll(".menu_navlist");

const products = [
    {
        id:1,
        title: "Suede Classic",
        price: 2500,
        colors: [
            {
                code: "Dandelion",
                img: "./img/Suede-Classic-Dandelion.png"
            },
            {
                code: "tan",
                img: "./img/Suede-Classic-Tan.png"
            },
        ], 
    },
    {
        id:2,
        title: "Nike Zoom",
        price: 2800,
        colors: [
            {
                code: "black",
                img: "./img/Air_zoom_black.png"
            },
            {
                code: "cyan",
                img: "./img/Air_zoom_cyan.png"
            },
        ], 
    },
    {
        id:3,
        title: "Panthom",
        price: 2580,
        colors: [
            {
                code: "black",
                img: "./img/Nike_Phantom_black.png"
            },
            {
                code: "cyan",
                img: "./img/Nike_Phantom_cyan.png"
            },
        ], 
    },
    {
        id:4,
        title: "Viz Runner",
        price: 12500,
        colors: [
            {
                code: "blue",
                img: "./img/Viz-Runner-Repeat-Running-Shoes-blue.png"
            },
            {
                code: "red",
                img: "./img/Viz-Runner-Repeat-Running-Shoes-red.png"
            },
        ], 
    },
    {
        id:5,
        title: "Nike Air Force",
        price: 2900,
        colors: [
            {
                code: "black",
                img: "./img/Nike_air_force_black.png"
            },
            {
                code: "white",
                img: "./img/Nike_air_force_white.png"
            },
        ], 
    },
]      


// Top navbar 

openMenu.addEventListener("click", menu);

function menu() {
    openMenu.classList.add("active");
    closeMenu.classList.add("active");
    navbar.classList.add("active")
}

navLinks.forEach(n => n.addEventListener("click", closeMenuList));

function closeMenuList() {
    openMenu.classList.remove("active");
    navbar.classList.remove("active")
    closeMenu.classList.remove("active");
}

closeMenu.addEventListener("click", () => {
    openMenu.classList.remove("active");
    navbar.classList.remove("active")
    closeMenu.classList.remove("active");
});

// slider 
let chosenProduct = products[0];

const currentProductImg = document.querySelector(".product_img"),
      currentProductTitle = document.querySelector(".product_title"),
      currentProductColors = document.querySelectorAll(".color"),
      currentProductPrice = document.querySelector(".product_price"),
      currentProductSizes = document.querySelectorAll(".size");  



productItems.forEach((item,index) => {
    // change slider image 
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        
            // change product 
            chosenProduct = products[index]
        
            // change product text
            currentProductTitle.textContent = chosenProduct.title;
            currentProductPrice.textContent = chosenProduct.price;
            currentProductImg.src = chosenProduct.colors[0].img;

            currentProductColors.forEach((color, index) => {
                color.style.backgroundColor = chosenProduct.colors[index].code;
            });
    });
});

currentProductColors.forEach((color, index)=> {
   color.addEventListener("click", () => {
       currentProductImg.src = chosenProduct.colors[index].img
   }); 
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () =>{
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});