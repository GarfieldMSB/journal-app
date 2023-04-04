import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/'

export const SidebarItem = ({title = '', body, id, date, photoURLs = []}) => {

    const dispatch = useDispatch();

    const shortTitle = useMemo(() => {
        return title.length > 17
                ? title.substring(0, 17) + '...'
                : title
    }, [title]);

    const onClickNote = () => {
        dispatch(setActiveNote({title, body, id, date, photoURLs}));
    };
    

    return (
        <ListItem onClick={onClickNote} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={shortTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
