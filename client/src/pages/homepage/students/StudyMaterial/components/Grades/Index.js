import Style from './Style.module.scss';
import { GetData } from 'hooks/GetData';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { GetGradesById } from '../../hooks/GetGradesById';

const Index = ({ grade, setGrade, gradeById, setGradeById }) => {
  const { data, loading, error } = GetData('grades');

  const handleChange = event => {
    setGrade(event.target.value);
    getGradeId(event.target.value);
  };

  const getGradeId = grade => {
    const filteredResult = data.data.find(e => e.attributes.Name === grade);
    setGradeById(parseInt(filteredResult.id));
  };

  return (
    <div className={Style.gradeContainer}>
      <div className={Style.pickmsg}>
        <p>Pick your grade:</p>
      </div>
      <Box sx={{ minWidth: 100 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Grade</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={grade}
            label="Grade"
            autoWidth
            onChange={handleChange}
          >
            {!loading &&
              data.data.map(obj => (
                <MenuItem value={obj.attributes.Name} key={obj.id}>
                  {obj.attributes.Name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Index;
