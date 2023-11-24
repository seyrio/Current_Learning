const arr = [
  "Accessing accounts",
  "Searching database",
  "Trying brute force attacks",
  "...",
  "Access Gained!",
];

const sleep = async (sec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, sec * 1000);
  });
};

const hm = async (msg) => {
  await sleep(2);
  console.log(msg);
};

(async () => {
  for (let i = 0; i < arr.length; i++) await hm(arr[i]);
})();
