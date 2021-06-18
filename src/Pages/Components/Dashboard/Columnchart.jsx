import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { chartsarray } from './chartsData'

function Columncharts({month}) {
  let items = [];
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  if (month) {
    const temp = chartsarray.filter((val) => val.month === month);
    items = temp[0].weeks;
  }
  else {
    const temp = chartsarray.filter((val) => val.month === currentMonth);
    items = temp[0].weeks;
  }

  const options = {
    chart: {
      type: "column",
      zoomType: "xy",
    },
    title: {
      text: `Weekly Votes of ${month ? month : currentMonth}`,
    },
    xAxis: {
      categories: items.map((val) => val.date),
      title: {
        text: "Dates",
      },
      label: {
        text: "dsd"
      }
    },
    yAxis: {
      title: {
        text: "No of votes",
      },
    },
    series: [
      {
        data:items.map((val) => val.vote),
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

export default Columncharts
