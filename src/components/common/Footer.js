import { makeStyles } from "@material-ui/core";
import { FACTORY_ADDRESS } from "constants/index";
import React from "react";
import { urls } from "utils/formatters";
import IconButton from "@material-ui/core/IconButton";
import { MoreVert } from "@material-ui/icons";
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@material-ui/icons/Language';
import { FaReact,FaDiscord } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    // !folly
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop:'100px',
    padding:"10px 50px",
    backgroundColor: "#370937",
  },
  item: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    color:'#a3c1ff',
    // color: theme.palette.primary.iconColor,
    cursor:'pointer',
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      marginLeft: 5,
      marginRight: 5,
    },
  },

  ankrLabel: {
    textAlign: "center",
    color: theme.palette.primary.iconColor,
    fontSize: 12,
    paddingTop: 3,
    marginLeft: 10,
    // marginBottom: 4,
  },
  icon: {
    width: 25,
    height: "100%",
    marginRight: 10,
  },
  // !folly
  centerItems:{
    display:"flex",
    justtifyContent:"space-between",
    // alignItems: "center",
  },
  menuIcon: {
    color: '#a3c1ff',
    // color: theme.palette.primary.iconColor,
  },
  
}));

const Footer = () => {
  const classes = useStyles();
  return (
     <div className={classes.root}> 
      {/* <a
        className={classes.item}
        href={urls.showAddress(FACTORY_ADDRESS[1])}
        target="_blank"
        rel="noreferrer"
      >
        Contract
      </a> */}
      {/* <a
        className={classes.item}
        href="https://github.com/cyclese96"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a> */}
  
        <div>
        <a
        className={classes.item}
        href="\"
      >
          Dyleum
      </a>
        </div>
        <div>
        <a
        className={classes.item}
        href="https://twitter.com/dyleum_com"
        target="_blank"
        rel="noreferrer"
      >
         <IconButton
                  aria-label="More"
                  aria-haspopup="true"
                  className={classes.menuIcon}
    
                >
                  <TwitterIcon className={classes.menuIcon} />
                </IconButton>

        Twitter
      </a>
      <a
        className={classes.item}
        href="https://t.me/dyleum"
        target="_blank"
        rel="noreferrer"
      >
         <IconButton
                  aria-label="More"
                  aria-haspopup="true"
                  className={classes.menuIcon}
    
                >
                  <TelegramIcon className={classes.menuIcon} />
                </IconButton>
        Telegram
      </a>
      <a
        className={classes.item}
        href="https://discord.com/invite/4fZPgqxdpE"
        target="_blank"
        rel="noreferrer"
      >
         <IconButton
                  aria-label="More"
                  aria-haspopup="true"
                  className={classes.menuIcon}
    
                >
                  <FaDiscord className={classes.menuIcon} />
                </IconButton>
        Discord
      </a>
      <a
        className={classes.item}
        href="https://dyleum.com/"
        target="_blank"
        rel="noreferrer"
      >
        Visit Our Website
        <IconButton
                  aria-label="More"
                  aria-haspopup="true"
                  className={classes.menuIcon}
    
                >
                  <LanguageIcon className={classes.menuIcon} />
                </IconButton>
      </a> 
        </div>
     
      {/* <a
        className={classes.item}
        href="https://polkabridge.org"
        target="_blank"
        rel="noreferrer"
      >
        Landing Page
      </a> */}

      {/* <div className={classes.ankrLabel}>
        <img
          src="https://assets.coingecko.com/coins/images/4324/small/U85xTl2.png?1608111978"
          alt="Ankr"
          className={classes.icon}
        />
        RPC powered by ANKR protocol
      </div> */}
    </div>
  );
};

export default React.memo(Footer);
