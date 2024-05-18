import React, { useState } from 'react';
import Slider from './Slider';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

const Parent = () => {
    let [child, setChild] = useState("Slider"); 
    const showChild = (child) => {
        setChild(child);
    }

    return (
        <div >
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid d-flex justify-content-center"> {/* Centering added here */}
                    <button className="btn navbar-brand" onClick={()=>showChild('Slider')}>Slider</button>
                    <button className="btn navbar-brand" onClick={()=>showChild('ClassComponent')}>Class Component</button>
                    <button className="btn navbar-brand" onClick={()=>showChild('FunctionComponent')}>Function Component</button>
                </div>
            </nav>
            {child === 'Slider' ? <Slider /> : null}
            {child === 'ClassComponent' ? <ClassComponent /> : null}
            {child === 'FunctionComponent' ? <FunctionComponent /> : null}
        </div>
    );
};

export default Parent;
