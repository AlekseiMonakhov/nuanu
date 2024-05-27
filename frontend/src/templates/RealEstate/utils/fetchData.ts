export async function fetchRealEstateData() {
  const apiUrl = "http://139.180.218.122/";
  const res = await fetch(`${apiUrl}realestate`);
  const data = await res.json();
  return data;
}