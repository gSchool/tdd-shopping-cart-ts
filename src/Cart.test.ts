import Cart from './Cart';

describe('Cart', () => {
    test('should initialize as empty', () => {
        const cart = new Cart();
        expect(cart.items).toEqual([]);
        expect(cart.totalPrice).toEqual(0);
    })
});
