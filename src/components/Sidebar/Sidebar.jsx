import React, {useEffect} from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, ListItemButton } from '@mui/material';
import {Link} from 'react-router-dom';
import { ClassNames, useTheme } from '@emotion/react';
import useStyles from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres'
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const categories = [
    { label: 'Popular', value: 'popular'},
    { label: 'Top Rated', value: 'top_rated'},
    { label: 'Upcoming', value: 'upcoming'},
]

const redLogo = 'https://fontmeme.com/permalink/230919/91bd165037c8f80225e3c2165ca4a11a.png';
const blueLogo = 'https://fontmeme.com/permalink/231008/51e5b9952fd796003fef420c6dececd2.png';

const Sidebar = ({setMobileOpen}) => {
    const {genreIdOrCategoryName} = useSelector((state) => state.currentGenreOrCategory);
    const theme = useTheme();
    const classes = useStyles();
    const {data, isFetching} = useGetGenresQuery();
    const dispatch = useDispatch();

    useEffect(() => {
      setMobileOpen(false);
    }, [genreIdOrCategoryName])
    

    return (
        <>
            <Link to="/" className={classes.imageLink}>
                <img
                    className={classes.image}
                    src={theme.palette.mode === "light" ? blueLogo : redLogo}
                    alt = "MoviesWave Logo"
                />
            </Link>
            <Divider />
            <List>
                <ListSubheader>Categories</ListSubheader>
                {categories.map(({label, value}) => (
                    <Link key={value} className={classes.links} to="/">
                        <ListItemButton onClick={() => dispatch(selectGenreOrCategory(value))}>
                            <ListItemIcon>
                                <img src={genreIcons[label.toLowerCase()]} className={classes.genreImage} height={30}/>
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                <ListSubheader>Genres</ListSubheader>
                {isFetching ? (
                    <Box display="flex" justifyContent="center">
                        <CircularProgress size="4rem" />
                    </Box>
                    ) : data.genres.map(({name, id}) => (
                    <Link key={name} className={classes.links} to="/">
                        <ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))}>
                            <ListItemIcon>
                                <img src={genreIcons[name.toLowerCase()]} className={classes.genreImage} height={30}/>
                            </ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItemButton>
                    </Link>
                ))}
            </List>
        </>
  )
}

export default Sidebar