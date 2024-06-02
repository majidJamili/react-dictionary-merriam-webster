
import { ListItem } from "@mui/material";
import TextField from '@mui/material/TextField';
import Create from "@mui/icons-material/Create"; 
import {InputAdornment} from "@mui/material";
import {IconButton} from "@mui/material"; 
import { useState } from "react";

function WordForm_2({addWord}){
    const [text, setText] = useState(""); 
    const handleChange = (evt) =>{
        evt.preventDefault();
        setText(evt.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        addWord(text);
        setText(""); 
    }

    return(
        <ListItem>
        <form onSubmit={handleSubmit}>
            <TextField 
                id="outlined-basic" 
                label="Search Words From Dictionary ..." 
                variant="outlined" 
                onChange={handleChange} 
                value={text}
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
    </ListItem>   
    )

}

export default WordForm_2; 