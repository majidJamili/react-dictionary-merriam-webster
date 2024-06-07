import List from "@mui/material/List";
import WordItem from "./WordItem";
import WordForm from "./WordForm";
import { useState } from "react";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import reactLogo from './assets/MerriamWebsterLogo.svg'






//Just a function to initiate the data:
const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('words')); 
    if (!data) {
        return []; 
    }else{
        return data;
    }
}


//a function to retrive the data from the Merriam Webster dictionary

function WordList(){
    const [words, setWords] = useState(getInitialData); 
    useEffect(()=>{
        localStorage.setItem(
            'words',
            JSON.stringify(words)
        )
    },[words])

    const removeWord = (id) =>{
        setWords((prevWords) => {
            return prevWords.filter((w) => w.id !== id)
        })
    }
    const fetchWordData = async(word) => {
        const APP_API_KEY = 'b2485dac-1df8-4240-9aae-04fdfaff082c';    
        const MW_API_URL = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${APP_API_KEY}`;
        try {
            const response = await fetch(MW_API_URL);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            return data; 
            
        } catch (error) {
            console.error('Error Fetching Data: ', error)
            return null; 
            
        }
    
    }
    

    const addWord = (text) => {

        fetchWordData(text).then(returnedDefinitions => {
            let values = []; 
            returnedDefinitions.map((def) => {
                values.push({
                    'id': crypto.randomUUID() ,
                    'usage':def.meta.id,
                    'date':def.date,
                    'function': def.fl,
                    'isOffensive': def.meta.offensive,
                    'shortDefinitions': def.shortdef
                })
            })
            console.log("new short short word:", returnedDefinitions)

            setWords(prevWords => {
                console.log('prewords', prevWords)
                return [...prevWords,{
                    text:text, id: crypto.randomUUID(), definitions:values, known:false
                }]
            })
            

              
        })
        

    };

    return (  
            <Box
                sx={{
                    display:"felx",
                    justifyContent:"center",
                    backgroundColor:"#D8DDE3", 
                    flexDirection:"column",
                    alignItems:"center", 
                    m:"3"
                }}
            >
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo}  alt="React logo" />
                </a>
                <Typography variant="h1" gutterBottom>
                    Learners' Dictionary                    
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                   Powered by Merriam-Webster Dictionary
                </Typography>
                <WordForm addWord={addWord} />
                {words.map((word)=>(
                    <WordItem
                        key={word.id}
                        word={word}
                        remove={() => removeWord(word.id)}
                    />
                    )
                )}
            </Box>        
    )
}

export default WordList; 