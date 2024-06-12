import { Box, ListItem } from "@mui/material";
import TextField from '@mui/material/TextField';
import Create from "@mui/icons-material/Create"; 
import {InputAdornment} from "@mui/material";
import {IconButton} from "@mui/material"; 
import { useState } from "react";


function ExampleForm({addExample}){
    const [example, setExample] = useState(""); 
    const handleChange = (evt) =>{
        evt.preventDefault();
        setExample(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addExample(example); 
        setExample("");
    }  
    return(
        <Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="standard-multiline-static"
                    label="WRITE YOUR EXAMPLE:"
                    multiline
                    onChange={handleChange}
                    value={example}
                    rows={10}
                    defaultValue="..."
                    variant="standard"
                    InputProps = {{
                        endAdornment: 
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                            type="submit"
                                        >
                                            <Create/>
                                        </IconButton>
                                    </InputAdornment>
                    }}
                />
            </form>
        </Box>
    )
}
export default ExampleForm;