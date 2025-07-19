import { Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export function BMILineChart() {
  const { t } = useTranslation();

  const labels = ['1998', '2000', '2003', '2005', '2007'];

  const data = {
    labels,
    datasets: [
      {
        label: t('Total population for the variable body mass index'),
        data: [22443931, 23128265, 23837758, 24341395, 25036013],
        borderColor: '#4169E1',
        backgroundColor: '#4169E1',
        tension: 0.4,
        fill: false,
      },
      {
        label: t('Underweight, body mass index under 18.50'),
        data: [508003, 673923, 631040, 658291, 638454],
        borderColor: '#7FFFD4',
        backgroundColor: '#7FFFD4',
        tension: 0.4,
        fill: false,
      },
      {
        label: t('Normal weight, body mass index 18.50 to 24.99'),
        data: [10573658, 11200683, 11140346, 11250230, 11113348],
        borderColor: '#FFD700',
        backgroundColor: '#FFD700',
        tension: 0.4,
        fill: false,
      },
      {
        label: t('Overweight, body mass index 25.00 to 29.99'),
        data: [7873040, 7489281, 7929024, 8132642, 8115590],
        borderColor: '#FF8C00',
        backgroundColor: '#FF8C00',
        tension: 0.4,
        fill: false,
      },
      {
        label: t('Obese, body mass index 30.00 or higher'),
        data: [3169219, 3353633, 3547995, 3764664, 4016735],
        borderColor: '#FF6347',
        backgroundColor: '#FF6347',
        tension: 0.4,
        fill: false,
      },
      {
        label: t('Body mass index, not stated'),
        data: [320011, 410745, 589353, 535569, 1151885],
        borderColor: '#8B0000',
        backgroundColor: '#8B0000',
        tension: 0.4,
        fill: false,
      },
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: t('BMI Trends Line Chart in Canada (1998–2007)'),
        font: { size: 24 }
      },
      legend: {
        position: 'top'
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    scales: {
      y: {
        title: {
          display: true,
          text: t('Number of persons')
        },
        beginAtZero: true
      }
    }
  };

  return <Line data={data} options={options} />;
}
