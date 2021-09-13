module.exports = function () {

    var smallTotal = 0;
    var mediumTotal = 0;
    var largeTotal = 0;

    function getTotal(pizza) {

        if (pizza === "small") {
            smallTotal += 35.00;
        }
        else if (pizza === "meduim") {
            mediumTotal += 65.00;
        }

        else if (pizza === "large") {
            largeTotal += 85.00
        }
    }

    function grandTotal() {
        return smallTotal + mediumTotal + largeTotal;

    }
    function totals() {
        return smallTotal.toFixed(2),
            mediumTotal.toFixed(2),
            largeTotal.toFixed(2)
    }

    return {
        getTotal,
        grandTotal,
        totals
    }
}