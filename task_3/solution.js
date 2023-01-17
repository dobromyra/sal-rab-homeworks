function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    // product - объект вида {id: id, title: title, count: count, price: price}
    // например, {id: 1, title: 'Пицца', count: 5, price: '500.00'}, где
    // id - идентификатор
    // title - наименование
    // price - цена
    // count - количество

    let itemCountText = ''; 
    itemCountText += product.count;
    itemCountText += ' × ';
    itemCountText += product.price;
    itemCountText += ' ₽ = ';
    
    let sum = product.price * product.count;

    itemCountText += sum.toString();
    itemCountText += ' ₽'; 
    
    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
