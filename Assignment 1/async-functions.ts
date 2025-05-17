function fetchData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (url === "good") {
      resolve("Data fetched!");
    } else {
      reject("Failed to fetch data.");
    }
  });
}
async function handleDataFetch(url: string): Promise<void> {
  try {
    const result = await fetchData(url);
    console.log(result);
  } catch (error: unknown) {
    if (typeof error === "string") {
      console.error("Error:", error);
    }
  }
}

handleDataFetch("good");
handleDataFetch("bad");
