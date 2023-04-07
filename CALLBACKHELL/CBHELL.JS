// FREE CODE CAMP
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, start_production) => {
    console.log("ORDER HAS BEEN PLACED");
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} WAS SELECTED`);
        start_production();
    }, 2000);
};

let production = () => {
    setTimeout(() => {
        console.log("PRODUCTION HAS BEEN STARTED");

        setTimeout(() => {
            console.log("FRUIT HAS BEEN CHOPPED");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} AND ${stocks.liquid[1]} WAS ADDED`);

                setTimeout(() => {
                    console.log("MACHINE HAS BEEN STARTED");

                    setTimeout(() => {
                        console.log(`${stocks.holder[1]} WAS SELECTED`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[1]} WAS SELECTED`);

                            setTimeout(() => {
                                console.log("ICE CREAM WAS SERVED");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
};

order(0, production);