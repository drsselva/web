import React, { useEffect, useState } from 'react'
import logoicon from "../../assets/img/logo-icon.png"
import { Navigate, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoIosHome, IoMdListBox } from "react-icons/io";



function Header() {

   const Navigate = useNavigate()
   const [eduCheck, setEduCheck] = useState(false)

   useEffect(() => {
      var path = window.location.pathname
      console.log(path.includes("educator"))
      if (path.includes("educator")) {
         setEduCheck(true)

      }
   }, [])

   const [getprofiles, setgetprofiles] = useState('')
   useEffect(() => {
      var data = localStorage.getItem("getprofiledata")
      console.log(data, "datadatadata")
      const getprofiledata = JSON.parse(data);
      setgetprofiles(getprofiledata)
   }, [])
   const [stateDrawer, setStateDrawer] = React.useState(false);

   const toggleDrawer = (anchor, open) => {

      setStateDrawer(open)
   };

   const logoutt = ()=>{
      localStorage.removeItem('getprofiledata') 
      Navigate("/")
   }

   const DrawerMap = [{
      icon: <span style={{ cursor: "pointer" }} className="logo d-flex align-items-center"
         onClick={() => Navigate("/home")}>
         <img src={logoicon} className="me-2" alt="logo" title="" width="24" height="24" />
         <h3 className="logo-title mt-1"><span className="default-color">GR</span><span className="secondary-color">IT</span> <span className="link-color">DIGITECH</span></h3>
      </span>, path: "Home"
   }, { icon: <IoIosHome />, name: "Home", path: "/home" }, 
   // { icon: <IoMdListBox />, name: "Marketplace", path: "/marketplace" }
]



   const list = (anchor) => (

      <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation"
         onKeyDown={() => toggleDrawer(anchor, false)}  >

         {DrawerMap.map((obj, index) => (
            <List onClick={() => Navigate(obj.path)} >

               <ListItem key={obj.name} disablePadding>
                  <ListItemButton>
                     <ListItemIcon>
                        {obj.icon}
                     </ListItemIcon>
                     <ListItemText primary={obj.name} />
                  </ListItemButton>
               </ListItem>

            </List>
         ))}
      </Box>

   );
   return (
      <header id="header" className="header d-flex align-items-center sticked">
         <div className="container container-xl d-flex align-items-center justify-content-between">
            <span style={{ cursor: "pointer" }} className="logo d-flex align-items-center"
               onClick={() => Navigate("/")}>
               <img src={logoicon} className="me-2" alt="logo" title="" width="64" height="64" />
               <h1 className="logo-title mt-1"><span className="default-color">GR</span><span className="secondary-color">IT</span> <span className="link-color">DIGITECH</span></h1>
            </span>
            <nav id="navbar" className="navbar">
               <ul>
                  {/* {!eduCheck ? <li onClick={() => Navigate("/educatorlogin")}><a href="#">Educator</a></li> : <li onClick={() => Navigate("/studentlogin")}><a href="#">Learner</a></li>} */}

                  {/* <li onClick={() => Navigate("/marketplace")}><a href="#"> Marketplace</a></li> */}
                  {getprofiles ? <li onClick={() => logoutt()}><a href="#">Logout</a></li> :
                     null
                  }

               </ul>
            </nav>


            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"
               onClick={() => toggleDrawer('left', true)}>


            </i>
            <Drawer
               anchor={"left"}
               open={stateDrawer}
               onClose={() => toggleDrawer("left", false)}
            >
               {list("left")}
            </Drawer>
            <i className="mobile-nav-toggle mobile-nav-hide bi bi-x"></i>
         </div>
      </header>)
}

export default Header