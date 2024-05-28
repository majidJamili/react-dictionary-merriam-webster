import React, { useState, useEffect } from 'react';
import WordForm from './WordForm';

// Your API key from Merriam-Webster
const API_KEY = 'b2485dac-1df8-4240-9aae-04fdfaff082c';


const getInitialData = () =>{
    const data = JSON.parse(localStorage.getItem('words')); 
    if (!data) {
        return []; 
    }else{
        return data;
    }
}



const WordFetcher = ({word}) => {
    const [wordData, setWordData] = useState(null);
    useEffect(()=>{
        console.log('Effect has changed ...!');
        localStorage.setItem(
            'words', 
            JSON.stringify(wordData)
        )
    }, [wordData]);

const addWord = (word) => {
    console.log("Searching Word:", word)
    // setWordData(prevWords => {
    //     return[...prevWords , {
    //         word:word.text, id: crypto.randomUUID(), known:false, definition:word.def
    //     }]
    // })
    fetchWordData(word)
}

const fetchWordData = async (word) => {
    // const word = 'important';
    const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY}`;
    try {
      const response = await fetch(url);
      console.log('Response:', response)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log("Data: ", data)
      setWordData(data);
    } catch (error) {
      console.error('Error Fetching Data: ',error);
      setWordData(null); 
    } 
  };





  return (
    <div>
        <h1>Search Definitions - Merriam Webster</h1>
        <WordForm addWord={addWord}/>

      {/* <h2>Merriam-Webster API Data</h2> */}
      {/* <button onClick={fetchWordData}>Search Word</button> */}
      {wordData && (
        <div>
          <h3>Definition of {wordData[0].meta.id}</h3>
          {wordData[0].shortdef.map((def, index) => (
            <p key={index}>{index + 1}. {def}</p>
          ))}
        </div>
      )}
    </div>
  );
};



export default WordFetcher; 