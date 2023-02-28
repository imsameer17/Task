function delayedUpperCase(input, n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof input === "string") {
        resolve(input.toUpperCase());
      } else {
        reject(input);
      }
    }, n)
  })
}
delayedUpperCase("sameer", 500)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });