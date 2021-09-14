const assert = require("assert");
const perfectPizza = require("../perfect-pizza");

    describe('Pizza Perfect', function () {
    const pizzaBill = perfectPizza();

    it('should be able to add two small pizzas and return Total cost of R70 on the cart.', function () {
        pizzaBill.addToCart("small");
        pizzaBill.addToCart("small");
        assert.equal(70, pizzaBill.grandTotal());
    }); 
    it('should be able to add three more meduim pizzas and return Grand Total cost of R265 on the cart.', function () {
        pizzaBill.addToCart("medium");
        pizzaBill.addToCart("medium");
        pizzaBill.addToCart("medium");
        assert.equal(265, pizzaBill.grandTotal());
    });
    it('should be able to add three more large pizzas and return Grand Total cost of R520 on the cart.', function () {
        pizzaBill.addToCart("large");
        pizzaBill.addToCart("large");
        pizzaBill.addToCart("large");
        assert.equal(520, pizzaBill.grandTotal());
    });
    it('should be able to count 2 small pizzas and return a Quantity of 2 pizzas orderd on the cart.', function () {
        pizzaBill.cartTotals().smallTotal;
        assert.equal(2, pizzaBill.cartTotals().smallQuantity);
    });

    it('should be able to count 3 medium pizzas and return a Quantity of 3 pizzas orderd on the cart.', function () {
        pizzaBill.cartTotals().mediumTotal;
        assert.equal(3, pizzaBill.cartTotals().mediumQuantity);
    });

    it('should be able to count 3 medium pizzas and return a Quantity of 3 pizzas orderd on the cart.', function () {
        pizzaBill.cartTotals().mediumTotal;
        assert.equal(3, pizzaBill.cartTotals().mediumQuantity);
    });

    it('should be able to count 3 large pizzas and return a Quantity of 3 pizzas orderd on the cart.', function () {
        pizzaBill.cartTotals().largeTotal;
        assert.equal(3, pizzaBill.cartTotals().largeQuantity);
    });
});