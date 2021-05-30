import React from 'react'
import {Line} from "react-chartjs-2"


function LineChart() {

    const data = {
        labels : ['Jan' , "Feb" , "Mar", "Apr", "May" ,"June"],
        datasets : [
            {
                label: "Sales for year 2021",
                data:[5, 2, 4,8,7,5],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
               
            },
           
        
        ]
    }

    const options = {
        title:{
            display:true,
            text:'Line chart'
        },
        scales:{
            yAxes:[

                {
                    ticks: {
                        min:0,
                        max:10,
                        stepSizes:1
                    }
                }
            ]
        }
    }
    return (
        
            <Line data={data} options={{
                title:{
                    display:true,
                    text:'Line chart'
                },
                scales:{
                    yAxes:[
        
                        {
                            ticks: {
                                min:0,
                                max:10,
                                stepSizes:1
                            }
                        }
                    ]
                }
            }} />
    )
}

export default LineChart
