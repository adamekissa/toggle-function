
function toggleFunction(sortID, callBackFn, inputArray) {
    const cookedArray = callBackFn(sortID, inputArray);
    return cookedArray;
}

function predicateFn(id, arr) {
    const finalArray = []
    for (let element of arr) {
        if (element.id === id) {
            element.isOn = true;
            finalArray.push(element);
        } else {
            finalArray.push(element);
        }
    }
    return finalArray;
}

export { toggleFunction, predicateFn }