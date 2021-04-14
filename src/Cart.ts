import Item from "./Item";

export default class Cart {
    items: Item[] = [];
    totalPrice: number = 0;

    isEmpty() {
        return this.items.length == 0;
    }

    add(newItem: Item) {
        if (this.isEmpty()) {
            this.items.push(newItem);
        } else {
            this.updateItems(newItem)
        }
        this.totalPrice += newItem.price * newItem.quantity;
    }

    itemizedList() {
        return this.items.map((item) => {
            return `${item.name} - ${item.quantity} - $${item.price}`;
        });
    }

    updateItems(newItem: Item) {
        for (const item of this.items) {
            if (item.name == newItem.name) {
                item.quantity += newItem.quantity;
            } else {
                this.items.push(newItem);
                break;  // for of will loop back on itself without this!
            }
        }
    }

    remove(newItem: Item) {
        this.items = this.items.filter(current => current.name != newItem.name);
    }

}
