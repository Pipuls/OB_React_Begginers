import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useHistory } from 'react-router-dom';

import {HomeRoundedIcon, SettingsRoundedIcon, TaskRoundedIcon, DoNotDisturbRoundedIcon } from '@mui/icons-material';
// import TaskRoundedIcon from '@mui/icons-material/TaskRounded';
// import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
//import DoNotDisturbRoundedIcon from '@mui/icons-material/DoNotDisturbRounded';



const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<HomeRoundedIcon/>)
        case 'SETINGS':
            return (<SettingsRoundedIcon/>) 
        case 'TASKS':
            return (<TaskRoundedIcon/>)
        default:
            return (<DoNotDisturbRoundedIcon/>);
    }
}

const MenuListItems = ({list}) => {

    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path)
    }

    return (
        <List>
            {list.map(({text, path, icon}, index) =>
            (
                <ListItem key={index} button onClick={() => navigateTo(path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItem>
            )
            )}
        </List>
    )
}

export default MenuListItems;