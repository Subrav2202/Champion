import React from 'react'
import { Table } from 'react-bootstrap'

function HistoryContent() {
    const historydata = [
        {
            nominated: "Vishal Yadav",
            date: "15/05/2021"
        },
        {
            nominated: "Vishal Rindhe",
            date: "15/05/2021"
        },
        {
            nominated: "Subrao Jadhav",
            date: "15/05/2021"
        },
        {
            nominated: "Prashant Sawant",
            date: "15/05/2021"
        },
        {
            nominated: "Ashutosh Sarangi",
            date: "15/05/2021"
        },
        {
            nominated: "Vishal Yadav",
            date: "15/05/2021"
        },
    ]
    return (
        <>
            <Table striped bordered hover> 
                <thead>
                    <tr align="center">
                        <th>Sr no.</th>
                        <th>Nominated</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        historydata.map((val, index) => {
                            return (
                                <tr key={index} align="center">
                                    <td>{index + 1}</td>
                                    <td>{val.nominated}</td>
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

export default HistoryContent
