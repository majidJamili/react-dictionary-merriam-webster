import { ListItem } from "@mui/material";
import TextField from '@mui/material/TextField';
import Create from "@mui/icons-material/Create"; 
import {InputAdornment} from "@mui/material";
import {IconButton} from "@mui/material"; 
import { useEffect, useState } from "react";

function WordForm({addWord}) {
    const [word, setWord] = useState([]); 
    // useEffect(()=>{
    //     fetchWordData('important')
    // }, [word])
    const fetchWordData = async (wordToFind) =>{
        const word = wordToFind
        const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY}`;
        try {
            const response = await fetch(url); 
            if (!response.ok) {
                throw new Error(`Error:${response.status}`);              
            }
            const data = await response.json(); 
            return data[0].shortdef; 
            print("definition printed: ", data[0].shortdef)
            // setWord(data)
            
        } catch (error) {
            console.error('Error Fetching Data: ',error);
            return null; 
            // setWord(null); 
        }
    }
    
    const handleChange = (evt)=>{
        evt.preventDefault();
        setWord(evt.target.value); 
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        // fetchWordData(word); 
        addWord(word);
        setWord(''); 
    }


    
    return(
        <ListItem>
        <form onSubmit={handleSubmit}>
            <TextField 
                id="outlined-basic" 
                label="Search Words ..." 
                variant="outlined" 
                onChange={handleChange} 
                value={word}
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

export default WordForm; 