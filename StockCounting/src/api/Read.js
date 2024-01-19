export const readData = async () => {
  try {
    const response = await fetch("https://sheetdb.io/api/v1/49tbp06kocna3");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
