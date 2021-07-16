import Item from "./Item";

export default class Cart {
    public items: Item[] = [];
    private _totalPrice: number = 0;

    get totalPrice(): number {
        return this._totalPrice;
    }

    isEmpty(): boolean {
        return this.items.length == 0;
    }

    add(newItem: Item): void {
        if (this.isEmpty()) {
            this.items.push(newItem);
        } else {
            this.updateItems(newItem)
        }
        this._totalPrice += newItem.price * newItem.quantity;
    }

    itemizedList(): string[] {
        return this.items.map((item) => {
            return `${item.name} - ${item.quantity} - $${item.price}`;
        });
    }

    updateItems(newItem: Item): void {
        for (const item of this.items) {
            if (item.name == newItem.name) {
                item.quantity += newItem.quantity;
            } else {
                this.items.push(newItem);
                break;  // for of will loop back on itself without this!
            }
        }
    }

    remove(newItem: Item): void {
        this.items = this.items.filter(current => current.name != newItem.name);
    }

}
