
async function errorHandler1() {
  try { 
    await callFunction()
  } catch (err) {
    console.error("error: ", err)
  }
}
// equivalen
async function errorHandler2(){
  await callFunction()
}

errorHandler1()
// equivalen
errorHandler2().catch(err => {
  console.error("error: ", err)
})