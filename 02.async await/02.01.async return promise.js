async function hello() {
  return "Hello Aligator"
}

const b = hello()

// expectation : Promise { "Hello Aligator" }
console.log(b)

// expectation : "Hello Aligator"
b.then(n => {
  console.log(n)
})