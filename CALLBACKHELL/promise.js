let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
let is_shop_open = false;
const order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log("SORRY THE SHOP IS CLOSED"));
        }
    });
};

order(2000, () => {
        console.log(`${stocks.Fruits[0]} was selected`);
    })
    .then(() => {
        return order(0000, () => {
            console.log("productions has been started");
        });
    })
    .then(() => {
        return order(2000, () => {
            console.log("fruit was chopped");
        });
    })
    .then(() => {
        return order(1000, () => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);
        });
    })
    .then(() => {
        return order(1000, () => {
            console.log(`machine was started`);
        });
    })
    .then(() => {
        return order(2000, () => {
            console.log(`${stocks.holder[1]} was selected`);
        });
    })
    .then(() => {
        return order(3000, () => {
            console.log(`${stocks.toppings[0]} was selected as the toppings`);
        });
    })
    .then(() => {
        return order(2000, () => {
            console.log(`ice cream was served`);
        });
    })
    .catch(() => {
        console.log("customer left");
    });