import React, { useState } from "react";


const Collapse = ({ title, content }) => {
  const [equipmentVisible, setEquipmentVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const toggleEquipment = () => {
    setEquipmentVisible(!equipmentVisible);
  };

  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
      <div id="equipements">
        <button onClick={toggleEquipment}>
          {title}
        </button>
        <div id="equipments" className={equipmentVisible ? 'open' : ''}>
         <p>{content}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Collapse;