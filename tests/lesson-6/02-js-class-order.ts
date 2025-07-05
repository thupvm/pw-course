type orderItem = {
        name: string,
        price: number,
        amount: number,
        discount: number
};

class Order {
    orderID: number;
    customerName: string;
    items: orderItem[];
    totalAmount: number = 0;

    constructor(orderID: number, customerName: string, items: orderItem[]) {
        this.orderID = orderID;
        this.customerName = customerName;
        this.items = items;
    }

    addItems(item: orderItem) {
        this.items.push(item);
    };

    calculateTotal() {
        return this.totalAmount = this.items.reduce((sum, item) => { // cộng dồn vào biến sum, item là duyện từng giá trị trong magr i
            return sum + item.amount * item.price  * (1 - item.discount); 
        }, 0); // giá trị khởi đầu = 0
    }
}

const item1 = {
    name: 'product 1',
    price: 100,
    amount: 1,
    discount: 0
}

const item2 = {
    name: 'product 2',
    price: 100,
    amount: 2,
    discount: 0.1
}

const order = new Order(1,'Alibaba',[item1]);
order.addItems(item2);

console.log(order);

console.log(order.calculateTotal());