// Code your solution in this file!
const returnFirstTwoDrivers = function (arrDrivers){
    return (arrDrivers.slice(0,2));
}

function  returnLastTwoDrivers(arrDrivers){
    return arrDrivers.slice(-2);
}  

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function  createFareMultiplier(number) {
    return function (fare){
        return number * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const  fareTripler = createFareMultiplier(3);

const  selectDifferentDrivers = function (arrayOfDrivers, selectedFunction){
    return selectedFunction(arrayOfDrivers);
}