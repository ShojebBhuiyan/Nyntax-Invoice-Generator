"use server";

interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  type: string;
  seats: number;
  bags: number;
  features: string[];
  rates: {
    hourly: number;
    daily: number;
    weekly: number;
  };
  imageURL: string;
}

interface ApiResponse {
  status: string;
  data: Car[];
  message: string;
}

async function getCarsList(): Promise<{ [key: string]: Car[]; }> {
  try {
    const response = await fetch("https://exam-server-7c41747804bf.herokuapp.com/carsList");
    const result: ApiResponse = await response.json();

    if (result.status !== 'success') {
      throw new Error(result.message);
    }

    const cars = result.data;
    const groupedCars: { [key: string]: Car[]; } = {};

    cars.forEach(car => {
      if (!groupedCars[car.type]) {
        groupedCars[car.type] = [];
      }
      groupedCars[car.type].push(car);
    });

    return groupedCars;
  } catch (error) {
    console.error('Error fetching and grouping cars:', error);
    return {};
  }
}
