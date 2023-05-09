import { SxProps } from "@mui/system";
import { Theme } from "@mui/material";
import theme from "./themes/theme"

export const mailchimpStyles: Record<string, SxProps<Theme>> = {
  mcEmbedSignup: {
    background: '#2F3554',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: { xs: '20px 12px', sm: '40px 24px' },
    width: { xs: '100%', sm: '1040px' },
    maxWidth: '100%',
    borderRadius: '2px',
    boxSizing: 'border-box',
    alignSelf:'center',
    flexGrow:0,
    flex:'none',
    fontFamily:"Helvetica, Arial, sans-serif",
    fontSize:"14px",
    marginTop:'72px',
    marginBottom:'72px',
  },
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:'100%',
    padding: '16px',
    boxSizing: 'border-box',
    width:'100%',
  },
  important:{
      display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    flex: 'none',
    order: 0,
    gap: { xs: '8px', sm: '12px' },
    alignSelf: 'center',
    flexGrow: 0,
    marginBottom: {xs:'32px',sm:'64px'},
  },
  importantH5:{
      fontFamily: 'theme.h5',
              fontStyle: 'normal',
            //   fontWeight: 700,
              fontSize: { xs: '18px', sm: '26px' },
              lineHeight: { xs: '24px', sm: '32px' },
              textAlign: 'center',
              color: 'white',
              margin: 0,
              order:1,
  },
  importantP:{
      fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: { xs: '16px', sm: '20px' },
              lineHeight: { xs: '22px', sm: '28px' },
              textAlign: 'center',
              letterSpacing: '0.5px',
              color: '#A7b5cc',
              alignSelf: 'stretch',
              flexGrow:0,
              order:2,
              margin: 0,
  },
  componentForm:{
  width: { xs: '100%', sm: '411px' },
    height: { xs: '100%', sm: '160px' },
    maxWidth: '100%',
    background: 'white',
    marginBottom: { xs: '16px', sm: '32px' },
  },
mc_embed_signup_scroll:{
      display: 'flex',
    flexDirection: 'column',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginBottom: { xs: '16px', sm: '32px' },
},
indicatesRequired:{
    fontSize: { xs: '12px', sm: '14px' }, color: "#000", marginRight: "10px"
},
asterik:{
    color:'red'
},
mcFieldGroup:{
     fontSize:{xs:'12px', sm:'14px'}, display: 'block', float: 'left', clear: 'none', marginRight: '10px', padding: 0 
},
emailTextField:{
     marginBottom: '4px',
                paddingRight: { xs: '10px' },
                paddingLeft: { xs: '10px'},
                width:'100%'
},
optionalParent:{
    
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    width: '100%', 
  
},
centerOrderElement:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      order: -1,
    
},
mcEmbeddedSubscribe:{
      backgroundColor: '#4e6c99', 
        color: 'white', 
        width: { xs: '80px', sm: '100px' }, 
        height: { xs: '25px', sm: '25px' }, 
        fontSize: { xs: '10px', sm: '12px' }
},

avatarMailchimp:{
      maxWidth: { xs: '75px', sm: '95px' },
          maxHeight: { xs: '75px', sm: '95px' },
          borderRadius: 0,
          width: 'auto', 
          height: 'auto'
  
}
};