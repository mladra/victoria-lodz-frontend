import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import "./StandingsTable.css";
import { CaretUpFill } from "react-bootstrap-icons";
import getStandings from "../../services/Standings.service";

const StandingsTable = ({ league }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const firstTeamId = 38098;
    const secondTeamId = 38412;
    const season = "2020/2021";

    useEffect(() => {
        if (league === "Łódzka A klasa grupa I") {
            getStandings(firstTeamId, season).then(standings => {
                setData(standings);
                setLoading(false);
            }).catch(err => {
                console.error(err);
                setLoading(false);
            });
        } else if (league === "Łódzka B klasa grupa I") {
            getStandings(secondTeamId, season).then(standings => {
                setData(standings)
                setLoading(false);
            }).catch(err => {
                console.error(err);
                setLoading(false);
            });
        }
    }, [league]);

    return (
        <div>
            <h2>{league}</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Miejsce</th>
                        <th>Drużyna</th>
                        <th>Mecze</th>
                        <th>Wygrane</th>
                        <th>Remisy</th>
                        <th>Porażki</th>
                        <th>Bramki</th>
                        <th>Punkty</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length !== 0 ? data.map((record, idx) =>
                        <tr className={record.team.toLowerCase() === "victoria łódź" || record.team.toLowerCase() === "victoria ii łódź" ? 'team-highlight' : ''} key={`standing-row-${idx}`}>
                            <td>{idx + 1}{' '}{idx === 0 ? <CaretUpFill /> : undefined}</td>
                            <td>{record.team}</td>
                            <td>{record.matches}</td>
                            <td>{record.wins}</td>
                            <td>{record.draws}</td>
                            <td>{record.loses}</td>
                            <td>{record.goals}</td>
                            <td>{record.points}</td>
                        </tr>) :
                        <tr>
                            <td colSpan="8">{isLoading ? 
                                <div class="d-flex justify-content-center">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div> : 
                                <div className="no-data-row">
                                    No data
                                </div>}
                            </td>
                        </tr>}
                </tbody>
            </Table>
        </div>
    );
};

StandingsTable.propTypes = {
    league: PropTypes.oneOf(["Łódzka A klasa grupa I", "Łódzka B klasa grupa I"]).isRequired
};

export default StandingsTable;