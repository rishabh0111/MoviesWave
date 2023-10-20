import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    root: {
        display: 'flex',
        height: '100%',
        position: 'relative',
        minHeight: '100vh',
    },
    toolkit: {
        height: '70px',
    },
    content: {
        flexGrow: '1',
        padding: '6em 2em 2em',
        width: '100%',
    }
}))