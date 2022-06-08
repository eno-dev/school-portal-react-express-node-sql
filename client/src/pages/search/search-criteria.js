import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SearchCriteria() {
    const [grade, setgrade] = React.useState('');

    const handleChange = (event) => {
        setgrade(event.target.value);
    };


    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Class</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={grade}
                    onChange={handleChange}
                    autoWidth
                    label="Grade"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>10A</MenuItem>
                    <MenuItem value={21}>10B</MenuItem>
                    <MenuItem value={22}>10C</MenuItem>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Grade</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={grade}
                    onChange={handleChange}
                    autoWidth
                    label="Grade"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>10A</MenuItem>
                    <MenuItem value={21}>10B</MenuItem>
                    <MenuItem value={22}>10C</MenuItem>
                </Select>
            </FormControl>
        </>
    )
};
