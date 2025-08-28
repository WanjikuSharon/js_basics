var voxel = { x: 3.5, y: 1.2, z: 5.1 };

const { x: a, y: b, z: c } = voxel;

//Get temperature
const AVG_TEMPERATURE = {
    today: 77.0,
    tomorrow: 79.5
};//Declared variable

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow: tempOfTomorrow } = avgTemperatures;//deconstructing operator
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURE)); // Outputs: 79.5


//nested objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 75, max: 88 }
};

function getAvgTemp(forecast) {
    "use strict";

    const { tomorrow: { max: getAvgTemp } } = forecast;
    return getAvgTemp;
}