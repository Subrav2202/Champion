import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {recentVotes} from "./ChartsData"

function Piechart() {
    // console.log(recentVotes)
    var formattedUserDetails = recentVotes.map((val) => ({
      name:val.username,
      y:val.votes
    }));
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
            data:formattedUserDetails,
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