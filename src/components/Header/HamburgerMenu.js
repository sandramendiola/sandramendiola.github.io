import React from 'react';
import {useNavigate} from "react-router-dom";
import {Menu as MenuIcon} from "@mui/icons-material";
import {IconButton, Menu, MenuItem} from "@mui/material";

const HamburgerMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className="hamburger-menu">
      <IconButton onClick={handleClick} id="long-button">
        <MenuIcon></MenuIcon>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={
            () => {
              navigate("/")
              handleClose()
            }
          }>Home</MenuItem>
        <MenuItem
          onClick={
            () => {
              navigate("/smendiola-cv")
              handleClose()
            }
          }>CV</MenuItem>
        <MenuItem
          onClick={
            () => {
              navigate("/publications")
              handleClose()
            }
          }>Publications</MenuItem>
        <MenuItem
          onClick={
            () => {
              window.location.href = "https://scholar.google.com/citations?hl=en&oi=ao&user=RuAHgscAAAAJ"
              handleClose()
            }
          }>Google Scholar</MenuItem>
        <MenuItem
          onClick={
            () => {
              navigate("/community-engagement")
              handleClose()
            }
          }>Community Engagement</MenuItem>
        <MenuItem
          onClick={
            () => {
              navigate("/contact-me")
              handleClose()
            }
          }>Contact Me</MenuItem>
      </Menu>
    </div>
  )
}

export default HamburgerMenu;