import "./LevelOfFitness.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import { useUsers } from "../../Context/Context";

const LevelOfFitness: React.FC = () => {
  const { updateUser, postUser } = useUsers();
  const [levelOfFitness, setLevelOfFitness] = useState<string>('');
  const [timeSpent, setTimeSpent] = useState<number>();

  const handleChangeTimeSpent = (event: React.ChangeEvent<HTMLInputElement>) => { 
    const newTimespent = parseInt(event.target.value);
    setTimeSpent(newTimespent);
    updateUser({ nbrTraningHours: newTimespent }); 
    console.log("Time spent in the gym:", newTimespent); 
  };
  const handleLevelChange = (event: SelectChangeEvent) => {
    const newLevel = event.target.value;
    setLevelOfFitness(newLevel);
    updateUser({ levelOfFitness: newLevel });
    console.log("Level of Fitness:", newLevel);
  };
  return (
    <div className="level-of-fitness-container">
      <Box sx={{ width: '50ch' }}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="level-of-fitness-label" style={{ color: 'white' }}>Level of Fitness</InputLabel>
          <Select
            labelId="level-of-fitness-label"
            id="level-of-fitness-select"
            value={levelOfFitness}
            label="Level of Fitness"
            style={{ color: 'white' }}
            onChange={handleLevelChange} 
          >
            <MenuItem value="New Comer">New Comer</MenuItem>
            <MenuItem value="Amateur">Amateur</MenuItem>
            <MenuItem value="Pro">Pro</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="time-spent"
          label="Time Spent in Gym (minutes)"
          variant="outlined"
          fullWidth
          margin="normal"
          InputProps={{ style: { color: 'white' } }}
          InputLabelProps={{ style: { color: 'white' } }}
          onChange={handleChangeTimeSpent}
        />
      </Box>
      <button onClick={postUser} className="add-user-infos">Add Your Informations</button>
    </div>
  );
};

export default LevelOfFitness;
