import React from "react";
import "./Doc.scss"

const Feature = (props) => {
    const { icon, title, source } = props;
  
    const handleDoc = () => {
      window.open(source, '_blank');
    }
    return (
        <>
            <div className="Content" onClick={() => handleDoc()}>
                <div className="Icon">
                    <img src={icon} alt=""></img>
                </div>
                <div className="Title">{title}</div>
            </div>
        </>
    );
}
export default Feature;