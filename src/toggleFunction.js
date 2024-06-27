
function toggleFunction(sortID, callBackFn, inputArray) {
    const newArray = [...inputArray]
    const cookedArray = callBackFn(sortID, newArray);
    return cookedArray;
}

function predicateFn(id, arr) {
    const finalArray = []
    for (let element of arr) {
        const newObj = { ...element }
        if (newObj.id === id) {
            newObj.isOn = true;
            finalArray.push(newObj);
        } else {
            finalArray.push(newObj);
        }
    }
    return finalArray;
}

export { toggleFunction, predicateFn }