const products = [
    {
        id: '1',
        title: "Jopa",
        image: 'person-icon.jpg',
        price: 9.99
    },
    {
        id: '2',
        title: "Jopa",
        image: 'mirror-icon.jpg',
        price: 9.99
    },
    {
        id: '3',
        title: "Jopa",
        image: 'room-icon.jpg',
        price: 9.99
    }
];

function renderProducts(products) {
    let productsDomString = '';
    
    for (let i = 0; i < products.length; i++) {
        const product = products[i]; 
        productsDomString += `
            <div class="goods-menu__item">
                <img src="${product.image}" alt="${product.title}" class="functionality__img">
            </div>
        `;
    }

    const productsContainer = document.querySelector('.product__list');
    productsContainer.innerHTML = productsDomString;
}

renderProducts(products);