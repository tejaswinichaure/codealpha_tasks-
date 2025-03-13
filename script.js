document.addEventListener("DOMContentLoaded", async () => {
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Price: $${product.price}</strong></p>
        `;
        productList.appendChild(div);
    });
});