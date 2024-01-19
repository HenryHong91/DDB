export const readData = async () => {
  return await fetch(
    "https://sheets.googleapis.com/v4/spreadsheets/1kSiiaIt2mUPYungVbNBM3ibE-aXlCgAhCxvpCpbX-KY/values/MOCK_DATA?key=AIzaSyBV4cpDb-vEgg8gQjaE0DJQmpP4MUSP6Bk"
  )
    .then((res) => res.json())
    .then((data) => {
      consol.log("data received from google sheet");
      return data;
    });
};
