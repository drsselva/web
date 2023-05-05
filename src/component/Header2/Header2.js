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
import { IoIosHome, IoMdListBox, } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import Collapse from '@mui/material/Collapse';



function Header2() {

   const Navigate = useNavigate()
   const [eduCheck, setEduCheck] = useState(false)

   useEffect(() => {
      var path = window.location.pathname
      console.log(path.includes("educator"))
      if (path.includes("educator")) {
         setEduCheck(true)

      }
   }, [])


   const [stateDrawer, setStateDrawer] = React.useState(false);

   const toggleDrawer = (anchor, open) => {

      setStateDrawer(open)
   };

   const DrawerMap = [{
      icon: <span style={{ cursor: "pointer" }} className="logo d-flex align-items-center"
         onClick={() => Navigate("/home")}>
         <img src={logoicon} className="me-2" alt="logo" title="" width="24" height="24" />
         <h3 className="logo-title mt-1"><span className="default-color">GR</span><span className="secondary-color">IT</span> <span className="link-color">Studies</span></h3>
      </span>, path: "/home"
   },
   { icon: <IoIosHome />, name: "Home", path: "/home" },
   { icon: <IoMdListBox />, name: "GRIT LaaS", path: "/gritlasshome" },
   // { icon: <IoMdListBox />, name: "GRIT Talents", path: "", web: "https://www.grittalents.com/" },
   { icon: <IoIosHome />, name: "Others", sub: [{ icon: <MdKeyboardArrowDown />, name: "IT Services", path: "/gritlasshome" }, { icon: <IoMdListBox />, name: "Sales", path: "/gritlasshome" }] },
   { icon: <IoMdListBox />, name: "Contact Us", path: "/contactus" },
   // { icon: <IoMdListBox />, name: "CSR", path: "", web: "https://www.gritfoundation.in/" },

      //    <ListItemButton onClick={handleClick}>
      //    <ListItemIcon>
      //      <IoIosHome />
      //    </ListItemIcon>
      //    <ListItemText primary="Inbox" />
      //    {open ? <IoIosHome /> : <IoIosHome />}
      //  </ListItemButton>
   ]
   const [open, setOpen] = React.useState(false);

   const handleClick = () => {
      setOpen(!open);
   };


   const list = (anchor) => (

      <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }} role="presentation"
         onKeyDown={() => toggleDrawer(anchor, false)}  >
         {/* <List onClick={() => Navigate("/home")}> */}

         {/* </List> */}
         <ListItemButton onClick={() => Navigate("/home")}>
            <ListItemIcon>
               <img src={logoicon} alt="logo" title="" width="24" height="24" />
            </ListItemIcon>
            <ListItemText primary={<h3 className="logo-title mt-1"><span className="default-color">GR</span><span className="secondary-color">IT</span> <span className="link-color">DIGITECH</span></h3>} />
         </ListItemButton>
         {DrawerMap.map((obj, index) => 'sub' in obj ? (
            <List>
               <ListItemButton onClick={handleClick}>
                  {/* <ListItemIcon>
                     {obj.icon}
                  </ListItemIcon> */}
                  <ListItemText primary={obj.name} />
                  {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
               </ListItemButton>
               <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     {obj.sub.map((subObj) => <ListItemButton sx={{ pl: 4 }} onClick={() => Navigate(subObj.path)}>
                        {/* <ListItemIcon>
                           {subObj.icon}
                        </ListItemIcon> */}
                        <ListItemText primary={subObj.name} />
                     </ListItemButton>)}
                  </List>
               </Collapse>

            </List>
         ) : (
            <List onClick={() => obj.path ? Navigate(obj.path) : window.location.assign(obj.web)} >

               <ListItem key={obj.name} disablePadding>
                  <ListItemButton>
                     {/* <ListItemIcon>
                        {obj.icon}
                     </ListItemIcon> */}
                     <ListItemText primary={obj.name} />
                  </ListItemButton>
               </ListItem>

            </List>
         )

         )}
      </Box>

   );
   return (
      <header id="header" className="header d-flex align-items-center sticked">
         <div className="container container-xl d-flex align-items-center justify-content-between">
            <span style={{ cursor: "pointer" }} className="logo d-flex align-items-center"
               onClick={() => Navigate("/home")}>
               <img src={logoicon} className="me-2" alt="logo" title="" width="64" height="64" />
               <h1 className="logo-title mt-1"><span className="default-color">GR</span><span className="secondary-color">IT</span> <span className="link-color">DIGITECH</span></h1>
            </span>
            <nav id="navbar" className="navbar">
               <ul>
                  <li><a class="btn-menu two-type" onClick={() => { Navigate("/gritlasshome") }}>GRIT Studies<span class="hover-txt">GRIT LaaS</span></a></li>
                  {/* <li><a href="https://www.grittalents.com/">GRIT Talents</a></li> */}
                  <li class="dropdown"><a href="#"><span>Others</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                     <ul>
                        <li class="dropdown"><a href="#"><span>IT Services</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                           <ul>
                              <li><a href="#" onClick={() => Navigate("/webappdevelopement")}>Web Application Development</a></li>
                              <li><a href="#" onClick={() => Navigate("/mobiledevelopement")}>Mobile Application Development & Services</a></li>
                              <li><a href="# " onClick={() => Navigate("/outsourcedevelopemtnt")}>Outsourced Development Services</a></li>
                              <li><a href="#" onClick={() => Navigate("/mobilefirstdevelopement")}>Mobile First Web Development</a></li>
                              <li><a href="#" onClick={() => Navigate("/blockchain")}>Blockchain / Cryptocurrency Development & Support</a></li>
                              <li><a href="#" onClick={() => Navigate("/nft")}>NFT / Marketplace DevOps</a></li>
                           </ul>
                        </li>
                        <li><a href="#">Sales</a>
                        </li>
                     </ul>
                  </li>
                  <li><a href="#" onClick={() => Navigate("/contactus")}>Contact Us</a></li>
                  {/* <li><a href="https://www.gritfoundation.in/" class="btn-menu">CSR</a></li> */}

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

export default Header2