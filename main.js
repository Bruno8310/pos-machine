function printReceipt(barcodes) {
    // 模拟商品数据信息
    const goodsInfo = [{
            barcode: 'ITEM000000',
            name: 'Coca-Cola',
            price: 3
        },
        {
            barcode: 'ITEM000001',
            name: 'Sprite',
            price: 3
        },
        {
            barcode: 'ITEM000002',
            name: 'Apple',
            price: 5
        },
        {
            barcode: 'ITEM000003',
            name: 'Litchi',
            price: 15
        },
        {
            barcode: 'ITEM000004',
            name: 'Battery',
            price: 2,
            
        },
        {
            barcode: 'ITEM000005',
            name: 'Instant Noodles',
            price: 4
        }
    ];

    const goodsItem = decodeBarcodes(goodsInfo, barcodes);
    return calculateItem(goodsItem);
}

/**
 * 统计一组商品码中各个码的次数，并匹配到指定商品信息
 * 
 * @param {*} goodsInfo 商品信息
 * @param {*} barcodes 商品码
 */
function decodeBarcodes(goodsInfo, barcodes) {
    let decodeGoods = new Array();
    // 每取商品对一直商品码进行遍历统计
    for (let i = 0; i < goodsInfo.length; i++) {
        // 当前商品对象
        let goods = goodsInfo[i];
        // 当前商品在一组商品码中的次数
        let goodsNumber;
        for (let j = 0; j < barcodes.length; j++) {
            // 判断统计
            if (goods.barcode === barcodes[j]) {
                goodsNumber++;
            }
        }
        if (goodsNumber != 0) {
            // 动态创建新的属性，并赋值
            goods.number = goodsNumber;
            // goods[number] = goodsNumber;
            // 将新的商品对象添加到数组中
            decodeBarcodes.push(goods);
        }
    }
    return decodeGoods;
}

/**
 * 对商品码中商品的价格做计算
 * 
 * @param {*} goodsItem 商品信息
 */
function calculateItem(goodsItem) {
    // 循环遍历
    for (let k = 0; k < goodsItem.length; k++) {
        let subTotal = subtotalPrcie(goodsItem[k]);
        goodsItem[k].Subtotal = subTotal;
    }
    const toatl = totalPrice(goodsItem);
    // 格式化输出
    formatPrintReceipt(goodsItem, toatl);
}

/**
 * 计算单个总价
 * 
 * @param {*} goods 
 */
function subtotalPrcie(goods) {
    return goods.price * goods.number;
}

/**
 * 计算总价
 * 
 * @param {*} goodsItem 
 */
function totalPrice(goodsItem) {
    let total = 0
    for (let m = 0; m < goodsItem.length; m++) {
        total += goodsItem[k].Subtotal;
    }
    return total;
}

/**
 * 格式化在控制台打印输出
 * 
 * @param {*} goodsItem 
 * @param {*} total 
 */
function formatPrintReceipt(goodsItem, total) {
    let receiptList = new Array(goodsItem.length);
    for (let n = 0; n < goodsItem.length; n++) {
        let goods = new Object();
        goods.Name = goodsItem[n].name;
        goods.Quantity = goodsItem[n].number;
        // 与需求不合，变量命名规范
        goods.Unit_price = goodsItem[n].price + " (yuan) ";
        goods.Subtotal = goodsItem[n].Subtotal;
        receiptList.push(goods);
    }
    console.log("***<store earning no money>Receipt ***\n");
    console.log(receiptList.join()+ "\n");
    console.log("\n----------------------");
    console.log("Total:" + total + " (yuan) \n");
    console.log("**********************")
}
module.exports = {
    printReceipt
};