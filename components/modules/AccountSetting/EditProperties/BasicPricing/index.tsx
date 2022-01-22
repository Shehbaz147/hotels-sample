import React from "react";
import { useStyles } from "./styles";
import {
  Box,
  Container,
  Avatar,
  Typography,
  Grid,
  TextField
} from "@material-ui/core";
import AppButton from "src/components/elements/Button";
import AppDivider from "src/components/elements/Divider";
interface Props {
  setEditvalue?: any;
}


const BasicPricing: React.FC<Props> = ({ setEditvalue }) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.personalInfo}>
        <Container className={classes.container}>
          <Box display="flex" alignItems="center" justifyContent="space-between" style={{ paddingBottom: "25px" }}>
            <Box display="flex" alignItems="center" >
              <Avatar src={"/images/leftArrow.png"} className={classes.leftArrow} onClick={() => setEditvalue("")}/>
              <Typography variant="h6">Basic Pricing</Typography>
            </Box>
            <Box>
                <AppButton variant="contained" style={{backgroundColor: "#1DAF92", borderRadius: "24px", color: "white"}}> Save </AppButton>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box >
        <Grid className={classes.photosGalleryMain}>
          <Grid item xs={11} md={6} lg={5}>
          {/* style={{border: "2px solid"}} */}
            <Box className={classes.SmartPricingMainDiv}>
            <Box style={{marginTop: "10px", marginLeft: "15px"}}>
              <Typography variant="h6">Smart pricing </Typography>
              <Typography variant="caption" className={classes.GrayColor}>By activating smart pricing, you automatically increase the income that can be generated by your property during key periods.</Typography>
            </Box>
            </Box>
            <br />
            <AppDivider />
            <br />
            <Typography variant="h6">Currency </Typography>
            <AppButton variant="outlined" style={{ borderRadius: "24px", width: "100%", display: "flex", justifyContent: "space-between"}}> <Typography className={classes.GrayColorOnly}>CAD (C$)</Typography> <span className={classes.spanclass}><img src="/images/arrowDown.png"/></span></AppButton>
            <Typography variant="caption" className={classes.GrayColorOnly}>Choose a currency to indicate your prices </Typography>
            <br /><br />
            <Box className={classes.SmartPricingMainDiv2}>
            <Box style={{width:"90%"}}>
            <Typography variant="h6">Base rate </Typography>
            <TextField id="outlined-basic" label="CAD (C$)" variant="outlined" style={{ borderRadius: "24px", width: "90%", display: "flex", justifyContent: "space-between"}}/>
            <Typography variant="caption" className={classes.GrayColorOnly}>This price will be the default rate for each night. </Typography>
            </Box>
            <Box style={{width:"90%"}}>
            <Typography variant="h6">Weekend rate </Typography>
            <TextField id="outlined-basic" label="CAD (C$)" variant="outlined" style={{ borderRadius: "24px", width: "90%", display: "flex", justifyContent: "space-between"}}/>
            <Typography variant="caption" className={classes.GrayColorOnly}>This price will be the default price for the weekend. </Typography>
            </Box>
            </Box>
            <br /><br />
            <Box className={classes.SmartPricingMainDiv2}>
            <Box style={{width:"90%"}}>
            <Typography variant="h6">Weekly rate </Typography>
            <TextField id="outlined-basic" label="CAD (C$)" variant="outlined" style={{ borderRadius: "24px", width: "90%", display: "flex", justifyContent: "space-between"}}/>            </Box>
            <Box style={{width:"90%"}}>
            <Typography variant="h6">Monthly rate </Typography>
            <TextField id="outlined-basic" label="CAD (C$)" variant="outlined" style={{ borderRadius: "24px", width: "90%", display: "flex", justifyContent: "space-between"}}/>            </Box>
            </Box>
            <br /><br />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default BasicPricing;
