const dayWeather = async (
    city: string,
    howLong: string,
    cnt: string,
    setError: React.Dispatch<React.SetStateAction<string>>
) => {
    const apiKeys = "aa1e3e700d2e2c07f56f02d26f5907f9";

    try {
        const resp = await fetch(
            `https://api.openweathermap.org/data/2.5/${howLong}?q=${city}${cnt}&units=metric&appid=${apiKeys}`
        );

        if (!resp.ok) {
            throw new Error(`Не удалось найти город`);
        }

        const data = await resp.json();
        return data;
    } catch (err: any) {
        setError(err.message);
    }
};

export default dayWeather;
