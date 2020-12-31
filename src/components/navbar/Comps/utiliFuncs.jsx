import { Menu,MenuItem, withStyles } from "@material-ui/core";
import React  from "react";

const StyledMenu = withStyles({
  paper: {
    marginTop: "5px",
    backgroundColor: "#292929da ",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
));

export function MenuItems({ahnchorEl,setAnchorEl}) {
  
  return (
    <div>
      <StyledMenu
        anchorEl={ahnchorEl}
        keepMounted
        open={ahnchorEl}
        onClose={() => setAnchorEl(false)}
      >
        <MenuItem>Shop Details</MenuItem>
        <MenuItem>Shopping Cart</MenuItem>
        <MenuItem>Check Out</MenuItem>
        <MenuItem>Blog Details</MenuItem>
      </StyledMenu>
    </div>
  );
}

