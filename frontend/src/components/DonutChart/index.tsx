import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sele';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
} 

const DonutChart = () => {

    let charData: ChartData = {labels: [], series: []};// let pode mudar o dado

    axios.get(`${BASE_URL}/seles/amount-by-seller`).then(response =>{
        const data = response.data as SaleSum[];
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => x.sum);

        charData = {labels:myLabels, series: mySeries};
        console.log(charData);
    });
        
    /*const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }*/
    
    const options = { //const é constante n muda o dado
        legend: {
            show: true
        }
    }
    return (        
       <Chart 
            options={{ ...options, labels: charData.labels}}
            series={charData.series}
            type="donut" /* tipo do gráfico*/
            height="240"/*altura do gráfico*/
       />
    );
}

export default DonutChart;