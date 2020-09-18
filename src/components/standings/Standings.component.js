import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import "./Standings.css";
import StandingsTable from "./StandingsTable.component";

const Standings = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.url}>
                <Redirect to={{ pathname: `${match.url}/first-team` }} />
            </Route>
            <Route path={`${match.url}/first-team`}>
                <StandingsTable league="Łódzka A klasa grupa I" />
            </Route>
            <Route path={`${match.url}/second-team`}>
                <StandingsTable league="Łódzka B klasa grupa I" />
            </Route>
        </Switch>

    );
};

export default Standings;