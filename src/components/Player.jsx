import { useState } from "react";

export default function Player({ intialName, symbol, isActive, onChangeName }) {

    const [isEdit, setEdit] = useState(false);
    const [playerName, setPlayerName] = useState(intialName || '');

    function handleSubmit() {
        setEdit((editing) => !editing);
        if (isEdit) {
            onChangeName(symbol, playerName);
        }
    }
    function handleChange(e) {
        setPlayerName(e.target.value);
    }
    let editPlayerName = <span className="player-name">{playerName}</span>;

    if (isEdit) {
        editPlayerName = <span><input type="text" className="player-input" required value={playerName} onChange={handleChange}></input></span>
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span id="player">
                {editPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleSubmit}>{isEdit ? 'Save' : 'Edit'}</button>
        </li>

    );
}