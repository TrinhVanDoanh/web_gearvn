const cart = {
    products: [
        {
            image: './assest/image/Giohang1.webp',
            name: 'Bộ Chuyển Đổi Ugreen 6 in 1 PD CM511',
            price: '1080000',
            pricecost:'',
            quantity: '2',
        },
        {
            image: './assest/image/Giohang2.webp',
            name: 'Bộ Chuyển Đổi Ugreen 4 in 1 CM219',
            price: '390000',
            pricecost:'',
            quantity: '5',
        },
        {
            image: './assest/image/Giohang3.webp',
            name: 'Màn hình ASUS VZ27EHE 27" IPS 75Hz viền mỏng',
            price: '3390000',
            pricecost:'4990000',
            quantity: '5',
        },
    ],
    render: function () {
    const htmls = this.products.map(product => {
        let priceCostHtml = '';
        if (product.pricecost) {
        priceCostHtml = `<div class="price-cost">${parseFloat(product.pricecost).toLocaleString('vi-VN')}đ</div>`;
        }
        return `
        <div class="cart_order">
            <div class="cart_oder-left">
            <img src="${product.image}" alt="" class="cart_oder-image">
            <div class="remove-oder"><i class="fa-solid fa-trash-can"></i>Xóa</div>
            </div>
            <div class="cart_oder-name">${product.name}</div>
            <div class="cart_oder-price"> 
            <div class="price">${parseFloat(product.price).toLocaleString('vi-VN')}đ</div>
            ${priceCostHtml}
            <input class="quantity" type="number" value="${product.quantity}" name="" id="" min="0" max="100">
            </div>
        </div>
        `;
    });
    document.querySelector('.cart_infos').innerHTML = htmls.join('');
    },
    calculateTotalPrice: function () {
        let totalPrice = 0;
        for (let i = 0; i < this.products.length; i++) {
            const product = this.products[i];
            const productPrice = parseFloat(product.price) * parseFloat(product.quantity);
            totalPrice += productPrice;
        }
        document.querySelector('.total-price').textContent = totalPrice.toLocaleString('vi-VN') + 'đ'
    },
   
    start: function () {
        this.render()
        this.calculateTotalPrice()
       
    },
}

cart.start();

// Hiện mã giảm giá
document.querySelector('.cart_use-coupon').onclick = function () {
    if (document.querySelector('.selection-coupon').style.display == 'flex') {
        document.querySelector('.selection-coupon').style.display = 'none'
    }
    else {
        document.querySelector('.selection-coupon').style.display = 'flex'
    }
}
console.log(new Intl.NumberFormat('vi-VN').format(1000000));