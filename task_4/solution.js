// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    let data; 
    data = JSON.parse(json); 

    let products;
    products = data.products; 
    return products; 

}

function renderProductsCards(json){
    clearProducts();

    let products; 
    products = parseProducts(json);

    let length = products.length; 
    for (let i = 0; i < length; i += 1) {
        addProduct(products[i]);
    }

 }