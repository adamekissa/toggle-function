
function toggleFunction(sortID, callBackFn, inputArray) {
    const newArray = [...inputArray]
    const cookedArray = callBackFn(sortID, newArray);
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