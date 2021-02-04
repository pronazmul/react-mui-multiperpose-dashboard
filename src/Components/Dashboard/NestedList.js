import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {
  ImportContacts,
  PeopleOutline,
  SupervisedUserCircle,
  Timeline
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "auto",
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function NestedList() {
  const classes = useStyles();

  const [open, setOpen] = useState({});

  const handleClick = (item) => {
    setOpen({ [item]: !open[item] });
  };

  console.log(open);

  return (
    <List component="nav" className={classes.root}>
      <ListItem button>
        <ListItemIcon>
          <Timeline />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem button onClick={() => handleClick("admin_section")}>
        <ListItemIcon>
          <SupervisedUserCircle />
        </ListItemIcon>
        <ListItemText primary="Admin Section" />
        {open.send ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open.send} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Visitor Book" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Complaint" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Postal Recieve" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Postal Dispatch" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Phone Call Log" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Admin Setup" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Student Certificate" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Generate Certificate" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Student ID Card" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Generate ID Card" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={() => handleClick("student_info")}>
        <ListItemIcon>
          <PeopleOutline />
        </ListItemIcon>
        <ListItemText primary="Student Info" />
        {open.send ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open.send} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Student Category" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Add Student" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Student List" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Student Attendance" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Student Attendance Report" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Subject Wise Attendance" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Students Group" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Students Ptomote" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Disable Student" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={() => handleClick("academic")}>
        <ListItemIcon>
          <ImportContacts />
        </ListItemIcon>
        <ListItemText primary="Academic" />
        {open.inbox ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open.inbox} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Optional Subjects" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Section" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Class" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Subjects" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Assign Class Teacher" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Assign Subjects" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Class Room" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Class Time Setup" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Class Routine" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
