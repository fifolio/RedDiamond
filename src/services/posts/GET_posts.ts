export default async function GET_posts() {
    try {
        const response = await fetch(`${import.meta.env.VITE_POSTS_API_URL}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error: any) {
        console.error("Fetch error:", error.message);
        return null;
    }
}
