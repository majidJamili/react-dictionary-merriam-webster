import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";


function WordItem({word, remove}){
    
    return(
        <div>
            <p>Word Title: </p>
                {word.text}
                {word.definitions.map((def, idx)=>(
            
                    <div>
                        <p>usage: {def.usage}</p> 
                        <p>date: {def.date}</p> 
                        <p>function: {def.function}</p>
                        <ul>short definitions
                             {def.shortDefinitions.map((shortdef) => (
                                <li key={shortdef}> {shortdef}</li>
                                        )                            

                             )}
                        </ul>

                    </div>
                    
                
                
                ))}
                <button onClick={remove}>Remove Word</button>
        </div>
    )
}

export default WordItem; 