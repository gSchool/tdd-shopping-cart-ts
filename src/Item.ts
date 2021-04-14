export default class Item {
    public name: string;
    public price: number;
    public quantity: number;
    public onSale: boolean;

    constructor(name: string, price: number, onSale: boolean, quantity: number = 1) {
        this.name = name;
        this.price = price;
        this.onSale = onSale;
        this.quantity = quantity;
    }
}
