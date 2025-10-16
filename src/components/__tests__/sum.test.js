import { sum } from "../sum";

test("Sum fn should calculate the sum", ()=> {

    const result = sum(3,8);
    //Assertion
    expect(result).toBe(11);
});