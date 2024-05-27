export async function fetchRealEstateData() {
  const apiUrl = "https://139.180.218.122:443/";
  const res = await fetch(`${apiUrl}realestate`);
  const data = await res.json();
  return data;
}