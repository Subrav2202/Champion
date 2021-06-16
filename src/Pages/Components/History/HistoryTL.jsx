import React from 'react'
import { Table } from 'react-bootstrap'

function HistoryTL() {
    const historydata = [
        {
            champions: "Champion1",
            date: "15/05/2021"
        },
        {
            champions: "Champion2",
            date: "15/05/2021"
        },
        {
            champions: "Champion3",
            date: "15/05/2021"
        },
        {
            champions: "Champion4",
            date: "15/05/2021"
        },
        {
            champions: "Champion5",
            date: "15/05/2021"
        },
        {
            champions: "Champion6",
            date: "15/05/2021"
        },
    ]
    return (
        <>
            <Table striped bordered hover style={{border: "black"}}> 
                <thead style={{backgroundColor: "#1a152e",color :"white"}}>
                    <tr align="center">
                        <th>Sr no.</th>
                        <th>Champions</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        historydata.map((val, index) => {
                            return (
                                <tr key={index} align="center">
                                    <td>{index + 1}</td>
                                    <td>{val.champions}</td>
                                    <td>{val.date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default HistoryTL
