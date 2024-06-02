import List from "@mui/material/List";

import { Box, Typography } from "@mui/material";
import WordItem from "./WordItem";
import WordForm from "./WordForm";
import WordForm_2 from "./WordForm_2";


import { useState } from "react";
import { useEffect } from "react";



//Just a function to initiate the data:
const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('words')); 
    if (!data) {
        console.log("Data None:", data)
        return []; 
    }else{
        console.log("Data Exist:", data)
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
            console.log( "Is Array? ",Array.isArray(returnedDefinitions),'Value: ', returnedDefinitions)
            let values = []; 
            returnedDefinitions.map((def) => {
                values.push({
                    'usage':def.meta.id,
                    'date':def.date,
                    'function': def.fl,
                    'isOffensive': def.meta.offensive,
                    'shortDefinitions': def.shortdef
                })
            })

            console.log("Values", values)
            setWords(prevWords => {
                return [...prevWords,{
                    text:text, id: crypto.randomUUID(), definitions:values, known:false
                }]
            })
            

              
        })
        
        // fetchedDefinition.map(def => console.log(`Data fetched one by one: ${def.meta.id}`))
        
        // setWords(prevWords => {
        //     return [...prevWords,{
        //         text:text, id: crypto.randomUUID(), definitions:'definitions', known:false
        //     }]
        // })
    };

    return (
        <div>
            <WordForm addWord={addWord} />
            <h1>Merriam-Webster Dictionary</h1>
            {words.map((word)=>(
                // <p>{word.text}</p>
                <WordItem
                    key={word.id}
                    word={word}
                    remove={() => removeWord(word.id)}
                />
                )
            )}

        </div>
    )

}

export default WordList; 