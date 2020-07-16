import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import infoCard from "../images/infoCard.png";
import carCrash from "../images/carCrash.png";
import comprehensive from "../images/comprehensive.jpg";
import uninsured from "../images/uninsured.jpg";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  rightside: {
    marginLeft: "20px",
  },
  size:{
      width: "350px",
      height: "330px",
      float:"left",
      marginLeft: "10px",
  },
  header: {
	color: "#E11313",
	fontFamily: "Josefin Sans",
    fontSize: "60px",
    marginTop: "85px",
    marginBottom: "40px",
    marginLeft: "30px",
	textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);"
  }
}));

export default function ReviewCard() {
  const classes = useStyles();
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };

  return (
    <div className={classes.rightside}>
    <h1 className={classes.header}>Categories</h1>
      <div className={classes.size}>
        <Card className={classes.root}>
          <CardHeader title="Liabillity" />
          <CardMedia
            className={classes.media}
            image={infoCard}
            title="liabillity"
          />
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded1,
              })}
              onClick={handleExpandClick1}
              aria-expanded={expanded1}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded1} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Information:</Typography>
              <Typography paragraph>
                - Covers cost of damages including medical fees
              </Typography>
              <Typography paragraph>
                - Protects you when YOU caused the accident
              </Typography>
              <Typography paragraph>
                - Most important to pay extra for so you dont end up with out of
                pocket fees
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>


      <div className={classes.size}>
        <Card className={classes.root}>
          <CardHeader title="Collision" />
          <CardMedia
            className={classes.media}
            image={carCrash}
            title="Collision"
          />
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded2,
              })}
              onClick={handleExpandClick2}
              aria-expanded={expanded2}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded2} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Information:</Typography>
              <Typography paragraph>
                - This covers the repais needed for your car when in an accident 
              </Typography>
              <Typography paragraph>
                - "Older cars with low values do not benefit as much from collision coverage"
              </Typography>
              <Typography paragraph>
                - Collision only recovers up to the value of the car at the point of damage
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>

      <div className={classes.size}>
        <Card className={classes.root}>
          <CardHeader title="Comprehensive" />
          <CardMedia
            className={classes.media}
            image={comprehensive}
            title="Comprehensive"
          />
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded3,
              })}
              onClick={handleExpandClick3}
              aria-expanded={expanded3}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded3} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Information:</Typography>
              <Typography paragraph>
                - This type of insureance covers incidents rather than accidents 
              </Typography>
              <Typography paragraph>
                - For example weather damage will be covered uder this category but car crashes are not. 
              </Typography>
              <Typography paragraph>
                - If your car is easily replaceable this may not be necessary 
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      <div className={classes.size}>
        <Card className={classes.root}>
          <CardHeader title="Uninsured" />
          <CardMedia
            className={classes.media}
            image={uninsured}
            title="Uninsured"
          />
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded4,
              })}
              onClick={handleExpandClick4}
              aria-expanded={expanded3}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded4} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Information:</Typography>
              <Typography paragraph>
                - Covers your excess balance if damages exceed limits
              </Typography>
              <Typography paragraph>
                - This is recommended because it is relatively cheap considering the alternatives 
              </Typography>
              <Typography paragraph>
                - Uninsured coverage is useful because it protects you at much lower rates than normal coverage 
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>



    </div>
  );
}
