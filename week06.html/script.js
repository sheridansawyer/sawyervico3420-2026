// ---------- Section 1: Sorted List ----------
let fruits = ["Banana", "Apple", "Orange", "Mango", "Grapes"];
fruits.sort();

let listContainer = document.getElementById("sorted-list");

for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    listContainer.appendChild(li);
}


// ---------- Section 2: Thumbnail Gallery ----------
let images = [
    "https://via.placeholder.com/400x300?text=Image+1",
    "https://via.placeholder.com/400x300?text=Image+2",
    "https://via.placeholder.com/400x300?text=Image+3",
    "https://via.placeholder.com/400x300?text=Image+4",
    "https://via.placeholder.com/400x300?text=Image+5"
];

let galleryContainer = document.getElementById("thumbnail-gallery");

for (let i = 0; i < images.length; i++) {
    let img = document.createElement("img");
    img.src = images[i];
    img.alt = "Thumbnail " + (i + 1);
    img.width = 200; // IMPORTANT for assignment (thumbnail size)

    // Bonus: click to open full-size image
    img.onclick = function () {
        window.open(images[i], "_blank");
    };

    galleryContainer.appendChild(img);
}


// ---------- Section 3: Menu Links ----------
let menuItems = [
    ["Home", "https://example.com/home"],
    ["About", "https://example.com/about"],
    ["Services", "https://example.com/services"],
    ["Portfolio", "https://example.com/portfolio"],
    ["Contact", "https://example.com/contact"]
];

let menuContainer = document.getElementById("menu-links");

for (let i = 0; i < menuItems.length; i++) {
    let a = document.createElement("a");
    a.textContent = menuItems[i][0];
    a.href = menuItems[i][1];
    a.target = "_blank";

    menuContainer.appendChild(a);
    menuContainer.appendChild(document.createElement("br")); // spacing (important visually)
}