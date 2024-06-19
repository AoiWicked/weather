import cl from "./Find.module.scss";

interface IPropsFind {
    button: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export function Find(props: IPropsFind) {
    return (
        <>
            <input
                value={props.value}
                className={cl.input}
                onChange={props.onChange}
            />
            <button className={cl.button} onClick={props.button}>
                Искать
            </button>
        </>
    );
}
