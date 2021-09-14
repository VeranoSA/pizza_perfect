module.exports = function pizzaPerfect() {

    var smallTotal = 0;
    var mediumTotal = 0;
    var largeTotal = 0;
    var smallQuantity = 0;
    var mediumQuantity = 0;
    var largeQuantity = 0;
    


    function addToCart(pizza) {
        if (pizza === "small") {
            smallTotal += 35.00;
            smallQuantity+=1;
            return cartTotals();
        } else if (pizza === "medium") {
            mediumTotal += 65.00;
            mediumQuantity+=1;
            return cartTotals();
        } else if (pizza === "large") {
            largeTotal += 85.00;
            largeQuantity+=1;
            return cartTotals();
        }
    }

    function grandTotal() {
        return smallTotal + mediumTotal+ largeTotal;
    }

    function cartTotals() {
        return {
            smallTotal: smallTotal.toFixed(2),
            smallQuantity: smallQuantity,
            mediumTotal: mediumTotal.toFixed(2),
            mediumQuantity: mediumQuantity,
            largeTotal: largeTotal.toFixed(2),
            largeQuantity: largeQuantity,
            cartTotal: grandTotal().toFixed(2)
        };
    }

    function modifyVals(param) {
        if (param === "smallAdd") {
            smallTotal += 35.00;
            smallQuantity+=1;
        } else if (param === "smallSubs") {
            if(smallQuantity !== 0) {
                smallTotal -= 35.00;
                smallQuantity-=1;
            }
        } else if (param === "mediumAdd") {
            mediumTotal += 65.00;
            mediumQuantity+=1;
        } else if (param === "mediumSubs") {
            if(mediumQuantity !== 0) {
                mediumTotal -= 65.00;
                mediumQuantity-=1;
            }
        } else if (param === "largeAdd") {
            largeTotal += 85.00;
            largeQuantity+=1;
        } else if (param === "largeSubs") {
            if(largeQuantity !== 0) {
                largeTotal -= 85.00;
                largeQuantity-=1;
            }
        }
        return cartTotals();
    }

    return {
        addToCart,
        grandTotal,
        cartTotals,
        modifyVals,
    }
}   