import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {recentVotes} from "./chartsData"

function Piechart() {
    // console.log(recentVotes)
    const options = {
        chart: {
          type: "pie",
        },
        title: {
          text: `${"Recent Week Vote Distribution"}`,
        },
        // xAxis: {
        //     categories: recentVotes.map((val) => val.name),
        //     text:recentVotes.map((val) => val.name)
        //    },
        plotOptions: {
            series: {
                allowPointSelect:true
            }
        },
        series: [
          {
            data:recentVotes,
            name: 'Votes',
            showInLegend: false,
          },
        ],
      };
    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    )
}

export default Piechart
