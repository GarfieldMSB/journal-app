import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components";


const drawerWith = 280;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex'}} className='animate__animated animate__fadeIn animate__faster'>
        <NavBar drawerWith={drawerWith}/>

        <SideBar drawerWith={drawerWith}/>

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}    
        >
            <Toolbar />


            { children }
        </Box>
    </Box>
  )
}
