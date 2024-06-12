import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { deepOrange, green } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {Box,ThemeProvider} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import './wordItems.css';
// import TextFieldInput from './TextFieldInput';
import ExampleForm from './ExampleForm';
import ExampleList from './ExampleList';




function WordItem({word, remove}){
    function abbreviator(text, isToUpperCase=false){
        let abbreviated = text.split(' ').map(x => x[0]).join('');
        if (isToUpperCase) {
            return abbreviated.toUpperCase();
        }else{
            return abbreviated; 
        }
    }

    return(        
            <Box className="box">       
                <Card>
                <CardContent>
                    <Typography variant="h3" gutterBottom>
                        {word.text} 
                    </Typography>
                    <Typography sx={{ mb: .5 }} color="text.secondary">
                        english word
                    </Typography>
                </CardContent>
                <CardActions>
                    <DeleteIcon onClick={remove} className='redIcons' />                    
                </CardActions>

                </Card>
                {word.definitions.map((def, idx)=>(           
                    <Accordion key={def.id}>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                        <Typography>
                            <Stack         
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={{ xs: 1, sm: 2, md: 4 }}
                            >                            
                                <Typography className='mainText' sx={{fontSize:20}} gutterBottom>
                                    {def.usage}
                                </Typography>
                                <Typography className='greenText' gutterBottom>
                                    {def.function}
                                </Typography>
                            </Stack>  
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack direction="row" spacing={1}>
                                <Typography  key={def.id}>
                                <Typography variant="subtitle1" gutterBottom style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                    {word.text} DEFINITION  in {def.function} Format:
                                </Typography>
                                    <List   sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                        {def.shortDefinitions.map((shortdef, idx) => (
                                            <ListItem key={def.id + idx}>
                                                <ListItemAvatar>
                                                    <Avatar sx={{ bgcolor: '#00498F' }} variant="rounded">
                                                        {abbreviator(def.function, true)}
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={shortdef} secondary="none" />                                     
                                            </ListItem>
                                            )                      
                                        )}
                                    </List>                                   
                                </Typography>
                                <Typography>
                                    <ExampleList parentId={def.id}>
                                    </ExampleList>

                                    {/* <ExampleForm>                                        
                                    </ExampleForm> */}
                                </Typography>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>                 
                ))}
            </Box>
    )
}

export default WordItem; 





