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
  const [data1, data2, data3] = await Promise.all([
    fetchData1(),
    fetchData2(),
    fetchData3()
  ]);

  console.log({ data1, data2, data3 });
}

fetchData();
