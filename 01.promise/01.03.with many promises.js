function fetchData1() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("data 1");
    }, 1000);
  });
}

function fetchData2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("data 2");
    }, 1000);
  });
}

function fetchData3() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("data 3");
    }, 1000);
  });
}

async function fetchData() {
  const data1 = await fetchData1();
  const data2 = await fetchData2();
  const data3 = await fetchData3();

  console.log({ data1, data2, data3 });
}

fetchData();
