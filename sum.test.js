const sum = require('./sum')

 // Tests can be grouped together in test blocks using describe()
describe("example tests", () => {

 // ⬇️ Test Description ⬇️        ⬇️ Callback function ⬇️
it("should add 1 + 2 to equal 3", () => {
 const result = sum(1, 2)
 expect(result).toBe(3)
})
 
 // Example of case where toBe() doesn't work (objects / arrays etc)
 
 // ie. Objects & Arrays:  console.log([] === []) -> returns false
 // ie. String:  console.log("" === "") -> returns true
it("object assignment"), () => {
  const obj = {}
  expect(obj).toBe({})
}
 // Correct way would be to use toEqual() -> Throws error and I don't know why
it("object assignment"), () => {
  const obj = {}
  expect(obj).toEqual({})
}
})

 

