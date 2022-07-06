import { calculatePow } from "../../utils/calculatePow.js";

describe("tests for  calculatePow function", () => {
    const degree = 0;
    const footing 100

    it("calculatePow 1 ^ 0 to equal 1", () => {
        expect(calculatePow(footing, degree)).toBe(1);
    });
})