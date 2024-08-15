import "./HeightWeight.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useUsers } from "../../Context/Context";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const HeightWeight: React.FC = () => {
  const navigate = useNavigate();
  const {updateUser}=useUsers();
  const [height,setHeight]=useState<number>(); 
  const [weight, setWeight] = useState<number >();
  const [targetWeight, setTargetWeight] = useState<number >(); 
  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = parseInt(event.target.value);
    setHeight(newHeight);
    updateUser({ height: newHeight });
    console.log("height given by the user :"+newHeight);
  };
  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newWeight = parseInt(event.target.value) ;
    setWeight(newWeight);
    updateUser({ weight: newWeight });
    console.log("weight given by the user :"+newWeight);
  };
  const handleTargetWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTargetWeight = parseInt(event.target.value) ;
    setTargetWeight(newTargetWeight);
    updateUser({ targetWeight: newTargetWeight });
    console.log("target weight given by the user:"+newTargetWeight);
  };
  const handleValidation=()=>{ 
    navigate('/levelOfFitness');
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="height-weight-container">
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > :not(style)': { m: 1, width: '50ch', color: 'white' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Height (cm)"
            variant="outlined"
            color="primary"
            focused
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
            onChange={handleHeightChange}
          />
          <TextField
            id="outlined-basic"
            label="Weight (kg)"
            variant="outlined"
            color="primary"
            focused
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
            onChange={handleWeightChange}
          />
          <TextField
            id="outlined-basic"
            label="Target Weight (kg)"
            variant="outlined"
            color="primary"
            focused
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }} 
            onChange={handleTargetWeightChange}
          />
        </Box>
      </div>
      <button className="validate" onClick={handleValidation}>Validate</button>
    </ThemeProvider>
  
  );
}

export default HeightWeight;
