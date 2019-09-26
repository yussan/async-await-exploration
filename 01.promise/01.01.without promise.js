function resolveAfter3Seconds() {
  setTimeout(() => {
    return "resolved"
  }, 3000)
}

function asyncCall() {
  console.log("calling function")
  const result = resolveAfter3Seconds() 
  // expected result : {String} "resolved" after 3 seconds
  console.log("result", result)
}

asyncCall()