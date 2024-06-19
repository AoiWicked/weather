import React, { useState } from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

function App() {
    const [modal, setModal] = useState<boolean>(true);
    return (
        <>
            <Header setActive={setModal} />
            <Main modal={modal} setModal={setModal} />
        </>
    );
}

export default App;
