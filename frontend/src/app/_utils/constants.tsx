export const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

if (apiUrl) {
  console.log("NEXT_PUBLIC_API_BASE_URL is initialized to: " + apiUrl);
} else {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined. Please set it in your environment variables or .env file.");
}

