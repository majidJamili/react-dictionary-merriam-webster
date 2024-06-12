import * as React from 'react';
import { green, pink } from '@mui/material/colors';

import List from "@mui/material/List";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import ExampleItem from './ExampleItem'; 
import ExampleForm from './ExampleForm';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

const getInitialData = () =>{
    const data = JSON.parse(localStorage.getItem("examples")); 


    if (!data) {
        console.log("Empty Data:", data)
      return []; 
    }else{
        console.log("Found Data:", data)
      return data;
    }
  }



function ExampleList({parentId}){
    const [examples, setExamples] = useState([]); 
    // useEffect(()=>{
    //     localStorage.setItem(
    //     'words', 
    //     JSON.stringify(examples)
    //     )
    // }, [examples]);

    const removeExample = (id) => {
        setExamples((prevExamples)=>{
            return prevExamples.filter((exam) => exam.id !== id)
        })
    }
    const getNow = () =>{
        let now = new Date(); 
        let currentDateTime = now.toLocaleString(); 
        return currentDateTime; 

    }
    const addExample = (text) =>{
        console.log("Examples", examples)
        setExamples((prevExamples)=>{
            return [...prevExamples, {
                text:text, id:crypto.randomUUID(), parentId: crypto.randomUUID(), completed:false, time: getNow()
            }]
        })
    };

    return(
        <Stack direction="row" spacing={1}>
            <Card   
                sx={{ minWidth: 500 }}
            >
                <CardContent>
                    <Typography variant="subtitle1" gutterBottom>
                        YOUR EXAMPLES:
                    </Typography>
                    <List>
                        {examples.map((example)=>(
                            <Box>
                                <ExampleItem
                                    key ={example.id}
                                    example={example}
                                    remove={() => removeExample(example.id)}
                                    parentId={example.parentId}
                                />
                                <Divider component="li" />
                            </Box>


                        ))}            
                    </List>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <ExampleForm addExample={addExample}/>
                </CardContent>                
            </Card>            
        </Stack>
    )
}
export default ExampleList;


