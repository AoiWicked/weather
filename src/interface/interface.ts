export interface IDay {
    base: string;
    clouds: {
        all: number;
    };
    coord: { lon: number; lat: number };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: any;
    timezone: number;
    visibility: number;
    weather: any;
    wind: {
        deg: number;
        gust: number;
        speed: number;
    };
}

export interface IAllDay {
    city: any;
    cnt: 8;
    cod: "200";
    list: IelemAllDay[];
    message: 0;
}

export interface IelemAllDay {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    };
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
        pod: string;
    };
    dt_txt: string;
}
