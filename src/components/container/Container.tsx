import { IAllDay, IDay, IelemAllDay } from "../../interface/interface";
import Panel from "../UI/Panel/Panel";
import cl from "./Container.module.scss";

interface IPropsContainer {
    allDay: IAllDay | undefined;
    day: IDay;
}

export function Container({ day, allDay }: IPropsContainer) {
    return (
        <>
            <div className={cl.container}>
                <div className={cl.boxDay}>
                    <h1 className={cl.city}>{day.name}</h1>
                    <h2 className={cl.temp}>
                        <p>Температура: {day.main.temp} °C</p>
                    </h2>
                    <div className={cl.other}>
                        <p>Ощущается: {day.main.feels_like}</p>
                        <p>Температура mix: {day.main.temp_min}</p>
                        <p>Температура max: {day.main.temp_max}</p>
                    </div>
                </div>
                <div className={cl.days}>
                    {allDay &&
                        allDay.list.map((e) => (
                            <div key={allDay.list.indexOf(e)}>
                                <Panel list={e} />
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
