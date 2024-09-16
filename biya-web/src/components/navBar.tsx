import * as React from "react";
import Link from "next/link";

import IrNavBar from "../components/irNavBar";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Investors",
    path: "/investors-overview",
    subItems: [
      { name: "Newsroom", path: "/investors/newsroom" },
      { name: "SEC Filings", path: "/investors/sec" },
      { name: "Stock Price", path: "/investors/stock" },
      { name: "Corporate Governance", path: "/investors/corporate" },
      { name: "FAQs", path: "/investors/faqs" },
      { name: "IR Contact", path: "/investors/ir" },
    ],
  },
  { name: "Contact", path: "/contact-us" },
];

export default function DrawerAppBar(props: Props) {
  // check if it is on Moble
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // check if is Investors Open
  const [isInvestorsOpen, setIsInvestorsOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleInvestorsToggle = () => {
    setIsInvestorsOpen(!isInvestorsOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        BIYA
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.name}>
            {/* If there are subItems, don't render the main ListItem for the parent, only render the dropdown */}
            {!item.subItems && (
              <ListItem disablePadding>
                <Link href={item.path} passHref legacyBehavior>
                  <ListItemButton
                    sx={{ textAlign: "start" }}
                    onClick={handleDrawerToggle}
                  >
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            )}

            {/* Handle subItems for Investors */}
            {item.subItems && (
              <>
                <Button
                  className="text-black"
                  onClick={handleInvestorsToggle}
                  sx={{
                    width: "100%",
                    textAlign: "left",
                    justifyContent: "flex-start",
                  }}
                >
                  {isInvestorsOpen ? "▲" : "▼"} Investors
                </Button>
                {isInvestorsOpen && (
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItem key={subItem.name} sx={{ paddingLeft: "20px" }}>
                        <Link href={subItem.path} passHref legacyBehavior>
                          <ListItemButton>
                            <ListItemText primary={subItem.name} />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                )}
              </>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" color="inherit">
        <Toolbar className="justify-between">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            className="text-black"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="w-20">
            <img src="https://res.cloudinary.com/aehl/image/upload/v1726162466/icon_black_gt3hur.png"></img>
          </div>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link href={item.path} passHref key={item.name} legacyBehavior>
                <Button className="text-black">{item.name}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
        <IrNavBar />
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
