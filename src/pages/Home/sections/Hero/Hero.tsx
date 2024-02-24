import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Styledbutton from "../../../../componets/Styledbutton/Styledbutton";
import theme from "../../../../Theme";
import { AnimatedBackground } from "../../../../componets/AnimatedBackground/AnimatedBackground";


const Hero = () => {
  
    const StyledHero = styled('div')(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // >=mpile
            paddingTop: "100px",
        },
        [theme.breakpoints.up('md')]: { // <=mobile
            paddingTop: "0,"
        }
    }))

    const StyledImg = styled('img')(()=> ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.main}`
    }))

    return (
      <>
        <StyledHero>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"100%"} top={-100} right={0}>
                                <AnimatedBackground/>
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Paulo Rocha</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Engineer</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pb={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <Styledbutton onClick={()=> console.log("download")}>
                                    <DownloadIcon/>
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </Styledbutton>
                            </Grid>
                        
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <Styledbutton onClick={()=> console.log("contact")}>
                                    <MailOutlineIcon/>
                                    <Typography>
                                        Contact Me
                                    </Typography>
                                </Styledbutton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero