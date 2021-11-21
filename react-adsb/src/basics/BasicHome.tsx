import { ChangeEvent, useState } from 'react';

const BasicHome = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [buttonState, setButtonState] = useState(false);
    const handleChage = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }
    const handleClick = () => {
        setButtonState(true);
    }
    return (
        <div>
            <input value={searchTerm} onChange={handleChage}></input>
            <div>{searchTerm}</div>
            <button onClick={handleClick} disabled={buttonState}>click</button>
        </div>

    );

};

export default BasicHome;