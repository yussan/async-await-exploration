const ArrData = [3,4,5,6,6]

async function asyncFunction(n) {
  const result = n * 2
  console.log("result", result)
  return result
}

// expectation :
// result 6
// result 8
// result 10
// result 12
// result 12
ArrData.forEach(async n => {
  await asyncFunction(n)
})