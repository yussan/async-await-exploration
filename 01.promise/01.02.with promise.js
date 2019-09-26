function resolveAfter3Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved")
    }, 3000)
  })
}

async function asyncCall() {
  console.log("calling function")
  const result = await resolveAfter3Seconds() 
  // expected result : {String} "resolved" after 3 seconds
  console.log("result", result)
}

asyncCall()