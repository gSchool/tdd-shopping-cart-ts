import Cart from './Cart';
import Item from "./Item";

describe('Cart', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    test('should be empty on initialization', () => {
        expect(cart.items).toEqual([]);
        expect(cart.totalPrice).toEqual(0);
    });

    // Even though 2nd AC says nothing about breaking it into multiple tests
    // it's not a bad idea to do so. This means add 2 methods: add and isEmpty
    test('should add items to cart', ()=> {
        let item = new Item('Laptop', 1000);
        cart.add(item);
        expect(cart.isEmpty()).toBeFalsy();
    });

    test('should return total price for all items in cart', ()=> {
        let item = new Item('Laptop', 1000);
        cart.add(item);
        expect(cart.totalPrice).toEqual(1000);
    });

    test('should return updated quantity when same item added more than once', () => {
        let item = new Item('Laptop', 1000);
        cart.add(item);
        expect(cart.itemizedList()).toEqual(['Laptop - 1 - $1000'])
        cart.add(item);
        expect(cart.itemizedList()).toEqual(['Laptop - 2 - $1000'])

    });

    test('should return an itemized list of items', () => {
        cart.add(new Item('Laptop', 1000));
        cart.add(new Item('Batteries', 5));
        expect(cart.itemizedList()).toEqual(['Laptop - 1 - $1000', 'Batteries - 1 - $5']);
    });

    test('should remove item and return updated itemized list', ()=> {
        cart.add(new Item('Laptop', 1000));
        cart.add(new Item('Batteries', 5));
        let hat = new Item('Hat', 12);
        cart.add(hat);
        expect(cart.itemizedList()).toEqual(['Laptop - 1 - $1000', 'Batteries - 1 - $5', 'Hat - 1 - $12']);
        cart.remove(hat);
        expect(cart.itemizedList()).toEqual(['Laptop - 1 - $1000', 'Batteries - 1 - $5']);
    });

});
