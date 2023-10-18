import { makeStyles, createStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    background: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgb(2,0,36)',
        backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,138,255,1) 100%)',
        // position: "relative",
        height: "100vh",
        backgroundPosition: "center",
      },

    typography: {
        fontSize: '2.5rem !important',
        color: '#a4c8e0',
        textAlign: 'center',
    },

    paragraph: {

        marginBottom: '20vh'
    },

    button: {
        color: '#a4c8e0',
        fontSize: '1rem !important',
        marginBottom: '70px',
    }

}));

export default useStyles;
