class Customer {
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    };

    displayInfo() {
        console.log(`ID: ${this.id} \nName ${this.name} \nEmail: ${this.email} \nPhone: ${this.phone}`)
    };

    updateEmail(newEmail: string) {
        this.email = newEmail;
        console.log(`Email is updated, new email is ${this.email}`);
    }
}

const customer = new Customer(123,'Alibaba', 'ali@gmail.com', '0909090909');
customer.displayInfo();
customer.updateEmail('newAli@gmail.com');