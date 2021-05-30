import React from 'react'
import {Pie} from "react-chartjs-2"


function PieChart() {

    const data = {
        labels : ["Booking", "Cancel bookings"],
        datasets : [
            {
                label: "Sales for year 2021",
                data:[56, 92, 53],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                backgroundColor: ['rgb(255, 99, 132,1)','rgb(255, 205, 86,1)','rgb(153, 102, 255,1)']
            },
           
        
        ]
    }

    const options = {
        title:{
            display:true,
            text:'Pie chart'
        },
        
    }
    return (
        
            <Pie data={data} options={options} />
    )
}

export default PieChart
