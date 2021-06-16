import React from "react";
import { Table } from "react-bootstrap";
// import Axios from "../../../Services/Dataservices";

function HistoryContent() {
    const historydata = [
        {
            nominated: "Vishal Yadav",
            date: "15/05/2021",
        },
        {
            nominated: "Vishal Rindhe",
            date: "15/05/2021",
        },
        {
            nominated: "Subrao Jadhav",
            date: "15/05/2021",
        },
        {
            nominated: "Prashant Sawant",
            date: "15/05/2021",
        },
        {
            nominated: "Ashutosh Sarangi",
            date: "15/05/2021",
        },
        {
            nominated: "Vishal Yadav",
            date: "15/05/2021",
        },
    ];
    // Axios.get().then((res) => console.log(res.data));
    return (
        <>
            <Table striped bordered hover style={{ border: "black" }}>
                <thead style={{ backgroundColor: "#1a152e", color: "white" }}>
                    <tr align="center">
                        <th>Sr no.</th>
                        <th>Nominated</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {historydata.map((val, index) => {
                        return (
                            <tr key={index} align="center">
                                <td>{index + 1}</td>
                                <td>{val.nominated}</td>
                                <td>{val.date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default HistoryContent;
