const units = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01
};

function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let output = {
        status: null,
        change: [],
    }

    let register = cid.reduce((total, currentUnit) => {
        total.TOTAL += currentUnit[1];
        total.TOTAL = Number(total.TOTAL.toFixed(2));
        total[currentUnit[0]] = currentUnit[1];
        return total;
    }, {"TOTAL": 0});

    if (change > register.TOTAL) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    if (change === register.TOTAL) {
        output.status = "CLOSED";
        output.change = cid;
        return output;
    }

    output.status = "OPEN";
    for (const unit in units) {
        let amount = 0;
        while (change >= units[unit] && register[unit] > 0) {
            change -= units[unit];
            change = Number(change.toFixed(2));
            register[unit] -= units[unit]
            amount += units[unit]
        }
    
        if (amount > 0) {
            output.change.push([unit, amount]);
        }
    };

    if (change > 0) {
        output.change = [];
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }
    return output;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);