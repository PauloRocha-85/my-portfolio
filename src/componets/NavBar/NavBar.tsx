import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(({ })=> ({
        display: "flex",
        justifyContent:"space-evenly"
    }))

    return (
      <>
        <AppBar position="absolute">
            <StyledToolbar>
                <MenuItem>About</MenuItem>
                <MenuItem>Shills</MenuItem>
                <MenuItem>Project</MenuItem>
            </StyledToolbar>         
        </AppBar> 
      </>
    )
  }
  
  export default NavBar