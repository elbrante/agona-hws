import React, {useState} from 'react';
import '../styles/StylesClickers.css'

const FuncComponent = () => {
    const [funcState, setFuncState] = useState(0)

    return (
        <div className={'func_clicker'}>
            <div className={'func_clicker_state'}>
                <h2>Func.Component</h2>
                <h2>{funcState}</h2>
            </div>

            <div className="button_clickers">
                <button className={'func_clicker_setState'} onClick={() => {setFuncState(funcState + 1)}}>
                    +1
                </button>

                <button className={'func_clicker_setState'} onClick={() => {setFuncState(funcState - 1)}}>
                    -1
                </button>
            </div>
        </div>
    );
};

export default FuncComponent;