function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let twicePi;
    let aCube;
    let a;
    let periodOrb;

    arr = arr.map((obj) => {
        twicePi = 2 * Math.PI;
        a = obj.avgAlt + earthRadius
        aCube = Math.sqrt(a ** 3 / GM)

        periodOrb = twicePi * aCube;

        delete obj.avgAlt;
        obj.orbitalPeriod = Math.round(periodOrb);
        return obj;
    })
    return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);