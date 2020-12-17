import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

export default function Sheet() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Tabletop.init({
            key: "17JyYiBigkEjPLY5HE9rSn5m6ntIYeLJRBEL4trIplj8",
            simpleSheet: true
        })
            .then((data) => setData(data))
            .catch((err) => console.warn(err));
    }, []);

    return (
        <div>
            <h1>data from google sheets</h1>
            <ul>
                {data.map((item, i) => (
                    <Fragment key={i}>
                        <li>LocationID -- {item.LocationID}</li>
                        <li>Timezone - {item.Timezone}</li>
                        <li>City - {item.City}</li>
                        <br />
                    </Fragment>
                ))}
            </ul>
        </div>
    );
}