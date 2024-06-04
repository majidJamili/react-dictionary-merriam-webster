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
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


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
        <Box>
            <Card sx={{ }}>
                <CardContent>
                    <Typography variant="h3" gutterBottom>
                        {word.text} 
                    </Typography>
                    <Typography sx={{ mb: .5 }} color="text.secondary">
                        english word
                    </Typography>
                </CardContent>
                <CardActions>
                    <DeleteIcon onClick={remove} />                    
                </CardActions>

            </Card>
            {word.definitions.map((def, idx)=>(           
                <Accordion>
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
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {def.usage}
                            </Typography>
                            <Chip label={def.function}  color="success" variant="outlined" /> 
                        </Stack>  
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {def.shortDefinitions.map((shortdef) => (
                                <ListItem key={shortdef}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                                        {abbreviator(def.function, true)}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={shortdef} secondary={def.date} />
                                </ListItem>
                                )                         

                            )}
                        </List>
                            
                                        
                    </Typography>
                    </AccordionDetails>
                </Accordion>                 
            ))}

        </Box>
    )
}

export default WordItem; 





