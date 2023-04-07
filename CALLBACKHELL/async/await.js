let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
let is_shop_open = true;
// async function always returns a promise
function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("SHOP IS CLOSED"));
        }
    });
}

async function kitchen() {
    try {
        console.log("Order was placed");

        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected`);

        await time(0000);
        console.log("productions has been started");

        await time(2000);
        console.log("fruit was chopped");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);

        await time(1000);
        console.log(`machine was started`);

        await time(2000);
        console.log(`${stocks.holder[1]} was selected`);

        await time(3000);
        console.log(`${stocks.toppings[0]} was selected as the toppings`);

        await time(2000);
        console.log(`ice cream was served`);
    } catch (err) {
        console.log("Customer left", err);
    } finally {
        console.log("day ended! shop is closed");
    }
}

kitchen();