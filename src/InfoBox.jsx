import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import "./InfoBox.css";

function InfoBox({ title, cases, active, total, isRed, ...props }) {
    return (
        <Card onClick={props.onClick} className={`infoBox ${isRed && 'infoBox--red'} ${active && 'infoBox--selected'}`}>
            <CardContent>
                {/* Title like Coronavirus cases */}
                <Typography className="infoBox_title" color="textSecondary">
                    {title}
                </Typography>
                {/* +120 Number of cases */}
                <h2 className="infoBox__cases">{cases}</h2>
                {/* 1.2 M in total */}
                <Typography className="infoBox__total">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
