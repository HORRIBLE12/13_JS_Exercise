const { expect } = require("chai");
const {
    getCaptainAmerica,
    getSpiderMan,
    getScarletWitch,
    avengers,
    removeFive
} = require("../index");


describe("Array of Super Heroes", () => {
    it("'getSpiderMan' function should return Spider-Man", () => {
        expect(getSpiderMan(avengers)).to.equal("Spider-Man")
    })
    it("'getCaptianAmerica' function should return Captain America", () => {
        expect(getCaptainAmerica(avengers)).to.equal("Captain America")
    })
    it("'getScarletWitch' function should return Scarlet Witch", () => {
        expect(getScarletWitch(avengers)).to.equal("Scarlet Witch")
    })
    it("'removeFive' function should return the entire array without number 5", () => {
        expect(removeFive(avengers)).to.have.members(["Hulk", "Iron Man", "Spider-Man", "Captain America", "Scarlet Witch"])
    })
})