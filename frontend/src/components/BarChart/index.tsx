import axios from 'axios';
import { type } from 'node:os';
import { useEffect } from 'react';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { SeleSucess } from 'types/sele';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type seriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    };
    series: seriesData[];
}

const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/seles/sucess-by-seller`).then(response => {
            const data = response.data as SeleSucess[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1));

            setChartData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "% Sucess",
                        data: mySeries
                    }
                ]
            });

        });

    }, [])

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
   
    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar" /* tipo do gráfico*/
            height="240"/*altura do gráfico*/
        />
    );
}

export default BarChart;