import React, { useEffect, useState } from "react";
import cl from "./Main.module.scss";
import dayWheather from "../../data/data";
import { Container } from "../container/Container";
import { Find } from "../find/Find";
import { IAllDay, IDay } from "../../interface/interface";

interface IPropsMain {
    modal: boolean;
    setModal: (state: boolean) => void;
}
export function Main({ modal, setModal }: IPropsMain) {
    const [day, setDay] = useState<IDay | undefined>(undefined);
    const [allDay, setAllDay] = useState<IAllDay | undefined>(undefined);
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<string>("");

    useEffect(() => {
        setValue("");
    }, [modal]);

    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handlerButton = async () => {
        if (value.length === 0 || value.trim() === "") {
            setError("Введите город");
        } else {
            setError("");
            setValue(value.trim());
            setDay(await dayWheather(value, "weather", "", setError));
            setAllDay(await dayWheather(value, "forecast", "&cnt=8", setError));
            setModal(false);
        }
    };
    console.log(day);

    return (
        <main className={cl.main}>
            <div className={cl.box}>
                {modal || !day ? (
                    <div className={cl.find}>
                        {error && (
                            <p style={{ color: "white", fontSize: "1.25rem" }}>
                                {error}
                            </p>
                        )}
                        <Find
                            button={handlerButton}
                            onChange={handlerInput}
                            value={value}
                        />
                    </div>
                ) : (
                    <Container day={day} allDay={allDay} />
                )}
            </div>
        </main>
    );
}
