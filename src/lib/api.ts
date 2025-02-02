import axios from "axios";

// Define the Product type
export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

// Fetch all products
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data; // Return the products data
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Error fetching products");
  }
}

export async function getProductById(id: number): Promise<Product | null> {
  try {
    const url = `https://fakestoreapi.com/products/${id}`;
    const response = await axios.get(url);

    if (response.status === 200) {
      return response.data as Product; // Assuming the response data matches the Product type
    }

    return null;
  } catch (err) {
    console.error("Error fetching product:", err);
    return null; // Return null in case of an error
  }
}
