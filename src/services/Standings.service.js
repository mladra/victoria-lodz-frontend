const url = "https://lzpn.org/box/ajax_league_map";

const getStandings = async (id = 38412, season = "2020/2021") => {
    return await fetch(url,
        {
            method: 'post',
            body: `id=${id}&season=${season.replace("/", "%2F")}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        })
        .then(res => res.text())
        .then(txt => new DOMParser().parseFromString(txt, 'text/html'))
        .then(parsed => parsed.getElementsByClassName("results-table__cell-group"))
        .then(rows => {
            const elements = []
            for (let i = 2; i < rows.length; i++) { // Omit two header rows
                elements.push({
                    team: rows[i].children[0].innerText,
                    matches: rows[i].children[1].innerText,
                    wins: rows[i].children[2].innerText,
                    draws: rows[i].children[3].innerText,
                    loses: rows[i].children[4].innerText,
                    goals: rows[i].children[5].innerText,
                    points: rows[i].children[6].innerText,
                })
            }
            return elements;
        });
};

export default getStandings;