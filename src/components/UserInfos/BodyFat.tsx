import React, { useState } from "react";
import "./BodyFat.css"; 
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useUsers } from "../../Context/Context";

function valuetext(value: number) {
  return `${value}%`;
}

const BodyFat: React.FC = () => { 
  const [value, setValue] = useState<number>(9);
  const { updateUser } = useUsers();

  const handleChange = (event: Event, newValue: number | number[]) => { 
    const bodyFatValue = newValue as number;
    setValue(bodyFatValue);
    updateUser({ levelOfFat: bodyFatValue }); 
    console.log("Body fat value:", bodyFatValue);
  };

  const renderContent = (value: number) => { 
    switch(value){
      case 9:
        return <img src="bodyFat5.PNG" alt="5-9% body fat" />;
      case 14: 
        return <img src="bodyFat14.PNG" alt="14% body fat" />;
      case 19: 
        return <img src="bodyFat19.PNG" alt="19% body fat" />;
      case 24: 
        return <img src="bodyFat24.PNG" alt="24% body fat" />;
      case 29: 
        return <img src="bodyFat29.PNG" alt="29% body fat" />;
      case 34: 
        return <img src="bodyFat34.PNG" alt="34% body fat" />;
      case 39: 
        return <img src="bodyFat39.PNG" alt="39% body fat" />;
      default:
        return null;
    }
  };

  return (
    <div className="body-fat-container">
      <div>{renderContent(value)}</div>
      <Box sx={{ width: 600 }}>
        <Slider
          aria-label="Body Fat"
          defaultValue={value}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          onChange={handleChange}
          valueLabelFormat={valuetext}
          step={5}
          marks
          min={9}
          max={39}
          value={value} 
        />
      </Box>
    </div>
  );
}

export default BodyFat;
