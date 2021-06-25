const useStyles = (theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper
    },
    inline: {
        display: 'inline'
    },
    table: {
        minWidth: 550
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        position: 'absolute',
        height: 400,
        width: 450,
        backgroundColor: theme.palette.background.paper,

        padding: theme.spacing(2, 4, 3),
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export { useStyles }