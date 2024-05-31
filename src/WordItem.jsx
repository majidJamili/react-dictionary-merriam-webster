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
            <p>Word Definitions: </p>
                {word.definitions}
        </div>
    )
}

export default WordItem; 