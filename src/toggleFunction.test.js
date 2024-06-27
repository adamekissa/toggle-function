import { toggleFunction, predicateFn } from "./toggleFunction";

test("Toggle element with the specified ID's 'isOn' key to true and return a new array with the matutated abjects", () => {
    const id = 2;
    const vehicles = [{ id: 1, name: "Audi", type: "Car", isOn: false },
    { id: 2, name: "Nissan", type: "Car", isOn: false },
    { id: 3, name: "Vauxhaul", type: "Car", isOn: false }];
    expect(toggleFunction(id, predicateFn, vehicles)).toEqual([{ id: 1, name: "Audi", type: "Car", isOn: false },
    { id: 2, name: "Nissan", type: "Car", isOn: true },
    { id: 3, name: "Vauxhaul", type: "Car", isOn: false }]);
});