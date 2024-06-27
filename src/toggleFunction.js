
function toggleFunction(sortID, inputArray) {
    const newArray = [];
    for (let element of inputArray) {
        if (element.id === sortID) {
            element.isOn = true;
            newArray.push(element);
        } else {
            newArray.push(element);
        }
    }
    return newArray;
}

export { toggleFunction }