import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { socialMedia } from "../mock/data";
import { darkColorPalette, lightColorPalette } from "../theme/theme";
import { ToggleThemeContext } from "../theme/themeProvider";

const Footer = () => {
  const { isDark } = useContext(ToggleThemeContext);
  const useStyles = makeStyles({
    root: {
      margin: "1em 0",
    },
    footer_Bar: {
      borderTop: "0.1em solid #272341",
      paddingTop: "1em",
    },
    footer_text: {
      color: isDark ? darkColorPalette.text : lightColorPalette.text,
    },
    footer_sosmed: {
      "& a": {
        marginLeft: ".5em",
        fontWeight: "500",
      },
    },
  });
  const classes = useStyles();

  return (
    <footer className={classes.root} id="footer">
      <Grid
        className={classes.footer_Bar}
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item className={classes.footer_text}>
          Ngoding with{" "}
          <span role="img" aria-label="love">
            ♥️
          </span>{" "}
          by <a href="https://kalamallah.xyz"> Sami</a>
        </Grid>

        <Grid item className={classes.footer_sosmed}>
          {socialMedia.networks.map((item) => (
            <a key={item.id} href={item.url}>
              {item.name}
            </a>
          ))}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
