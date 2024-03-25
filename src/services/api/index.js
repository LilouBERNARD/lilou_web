const VITE_API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchCircuits() {
  const response = await fetch("https://v1.formula-1.api-sports.io/circuits", {
    method: "GET",
    headers: {
      "x-apisports-key": VITE_API_KEY,
      "x-rapidapi-host": "v1.formula-1.api-sports.io",
    },
  });
  return response.json();
}

export async function fetchDrivers(search = "") {
  const response = await fetch(
    `https://v1.formula-1.api-sports.io/drivers?search=${search}`,
    {
      method: "GET",
      headers: {
        "x-apisports-key": VITE_API_KEY,
        "x-rapidapi-host": "v1.formula-1.api-sports.io",
      },
    }
  );
  return response.json();
}
