const fetchRidesData = async (url: string, token: string): Promise<any> => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });

        if (!response.ok) {
            const errData = await response.json()
            throw new Error(errData.message || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error: any) {
        console.log("Error fetching data:", error.message)
        throw new Error(error.message)
    }
}

export default fetchRidesData
