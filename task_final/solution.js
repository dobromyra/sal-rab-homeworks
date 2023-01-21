function sendRequest(name, phone, address = {street, house, entrance, floor, flat}, goods, sum) {
        let data = {
            client: name + ' ' + phone,
            order: {
                address: `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв. ${address.flat}`,
                sum: sum
            },
            goods: []
        };

        let countOfGoods = goods.length;

        for (let i = 0; i < countOfGoods; i += 1) {

            let goodsData = {
                title: goods[i].title,
                count: goods[i].count
            }; 

            data.goods.push(goodsData);
        }

    let jsonData = JSON.stringify({data: data});;

    return jsonData;
}
