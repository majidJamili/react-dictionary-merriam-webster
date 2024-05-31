import List from "@mui/material/List";

import { Box, Typography } from "@mui/material";
import WordItem from "./WordItem";
import WordForm from "./WordForm";


import { useState } from "react";
import { useEffect } from "react";



//Just a function to initiate the data:
const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('words')); 
    if (!data) {
        return []; 
    }else{
        return data;
    }
}


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

    const addWord = (text) => {
        setWords(prevWords => {
            return [...prevWords,{
                text:text, id: crypto.randomUUID(), definitions:'definitions', known:false
            }]
        })
    };

    return (
        <div>
            {words.map((word)=>{
                <WordItem
                    word={word}
                    key={word.id}
                    remove={() => removeWord(word.id)}
                />

            })}

            <WordForm addWord={addWord} />

        </div>
    )

}

export default WordList; 