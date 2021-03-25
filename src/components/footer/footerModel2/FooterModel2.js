import React from 'react'
import { withStyles,createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


const theme = createMuiTheme({
    typography: {
      fontSize: 25,
    },
  });

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
const FooterModel2 = ({open,setOpen,heading,heading1,heading2,heading3,content1,content2,content3}) => {


 

   
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
              <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title-1" onClose={handleClose} >
                  <h2>{heading}</h2>  
               </DialogTitle>
               <DialogContent dividers>
                <Typography gutterBottom >
                   <h3>{heading1}</h3> 
                   {content1}
                </Typography>
                <Typography gutterBottom>
                 <h3>{heading2}</h3> 
                  {content2}
                </Typography>
                <Typography gutterBottom>
                  <h3>{heading3}</h3> 
                  {content3}
                </Typography>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose} color="primary" >
                    CLOSE
                  </Button>
                </DialogActions>
              </Dialog>
           </ThemeProvider>

        </div>
    )
}

export default FooterModel2
