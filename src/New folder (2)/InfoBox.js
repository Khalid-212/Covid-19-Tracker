import React from 'react'
import "./infobox.css"
import {Card, CardContent ,Typography} from "@material-ui/core";

function InfoBox  ({ title, cases, isred, active, total, ...props }) {
  console.log(title, active);
  return (
    <Card
    onclick={props.onclick}
    className={`infoBox ${active && "infoBox--selected"} ${
        isred && "infoBox--red"
      } `}
        >
        <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
            {title}
            </Typography>
  <h2 className={`infoBox__cases ${!isred && "infoBox__cases--green"}`}>{cases}</h2>

        <Typography className="infoBox__total" color="textSecondary">
            {total}Total
        </Typography>
        </CardContent>

    </Card>
  )
}

export default InfoBox
