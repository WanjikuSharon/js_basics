var voxel = { x: 3.5, y: 1.2, z: 5.1 };

const { x: a, y: b, z: c } = voxel;

//Get temperature
const AVG_TEMPERATURE = {
    today: 77.0,
    tomorrow: 79.5
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow: tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURE)); // Outputs: 79.5