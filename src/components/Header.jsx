import React from "react";
import Time from "./Time";
import FlareIcon from '@material-ui/icons/Flare';

function Header(){
    return (
        <header>
            <h1><FlareIcon /> Fly Notes</h1>
            <Time />
        </header>
    );
}

export default Header;