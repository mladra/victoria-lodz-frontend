import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import standingsA from "../../data/standings-A.json";
import standingsB from "../../data/standings-B.json";
import { Table } from "react-bootstrap";
import "./StandingsTable.css";
import { CaretUpFill } from "react-bootstrap-icons";

const StandingsTable = ({ league }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        //TODO: mladra: Make API request for data
        if (league === "Łódzka A klasa grupa I") {
            setData(standingsA);
        } else if (league === "Łódzka B klasa grupa I") {
            setData(standingsB);
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
                        <tr className={record.team === "Victoria Łódź" || record.team === "Victoria II Łódź" ? 'team-highlight' : ''} key={`standing-row-${idx}`}>
                            <td>{record.position}{' '}{record.position === 1 ? <CaretUpFill /> : undefined}</td>
                            <td>{record.team}</td>
                            <td>{record.matches}</td>
                            <td>{record.wins}</td>
                            <td>{record.draws}</td>
                            <td>{record.loses}</td>
                            <td>{`${record.goals.scored}:${record.goals.lost}`}</td>
                            <td>{record.points}</td>
                        </tr>) :
                        <tr>
                            <td colSpan="8" className="no-data-row">No data</td>
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