async function calculation(a, b) {
  return a * b
}

async function main() {
  const result = await calculation(1, 23)

  console.log('result', result)
}

// expectation : result 23
main()