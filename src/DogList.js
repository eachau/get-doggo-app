import React from "react";
import Dog from "./Dog";
import './DogList.css';

const DogList = (props) => {
    
    const dogsArray = props.doggos.map((doggoURL) => {
        return <Dog url={doggoURL}/>
    })
    return (
        <div className="dog-container">
            {dogsArray}
        </div>
    );
}

export default DogList;