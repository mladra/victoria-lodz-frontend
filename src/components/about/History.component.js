import React, { useEffect, useState } from "react";
import "./History.css";
import data from "./history.json";


const About = () => {

    const [tab, setTab] = useState(0);
    const [history, setHistory] = useState([]);
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        setTabs(data.map(obj => obj.title));
    }, []);

    useEffect(() => {
        setHistory(data[tab].entries);
    }, [tab]);

    return (
        <>
            <ul class="nav nav-tabs">
                {
                    tabs.map((t, idx) => (
                        <li class="nav-item">
                            <a class={`nav-link ${tab === idx ? 'active' : ''}`} onClick={() => setTab(idx)} href="#">{t}</a>
                        </li>
                    ))
                }
            </ul>
            <div class="row">
                <div class="col-md-12">
                    <div class="main-timeline4">
                        {
                            history.map(record => {
                                return (
                                    <div class="timeline">
                                        <div class="timeline-content">
                                            <span class="year">{record.year}</span>
                                            <div class="inner-content">
                                                <h3 class="title">{record.title}</h3>
                                                <p class="description">
                                                    {record.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;