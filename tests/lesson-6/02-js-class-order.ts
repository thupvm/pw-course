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
    totalAmount: number;

    constructor(orderID: number, customerName: string, items: orderItem[], totalAmount: number = 0) {
        this.orderID = orderID;
        this.customerName = customerName;
        this.items = items;
        this.totalAmount = totalAmount;
    }

    addItems(newItem: orderItem) {
        this.items.push(newItem);
    };

    calculateTotal() {
        // total Price
        const totalPrice = this.items.reduce((sum, item) => { // cộng dồn vào biến sum, item là duyện từng giá trị trong mang items
            const unitPrice = item.amount * item.price * (1 - item.discount);
            return sum + unitPrice;
        }, 0); // giá trị khởi đầu cua sum = 0
        console.log(`Total price of the order: ${totalPrice}`);

        //Total Amount
        this.totalAmount = this.items.reduce((totalAmount, item) => { 
            return totalAmount + item.amount
        }, 0)
       console.log(`Total amount of the order: ${this.totalAmount}`);
    }
}

const orderItems = [
    { name: 'Mango', price: 100, amount: 1, discount: 0 },
    { name: 'Longan', price: 100, amount: 2, discount: 0 },
    { name: 'Kebab', price: 100, amount: 1, discount: 0.5 },
]
const newItem = {
    name: 'Rambutan',
    price: 100,
    amount: 2,
    discount: 0.1
}

const order = new Order(1, 'Alibaba', orderItems);
console.log(order);

order.addItems(newItem);
console.log(order);

order.calculateTotal();