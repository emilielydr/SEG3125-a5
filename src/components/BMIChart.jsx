import { Bar } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function BMIChart() {
  const { t } = useTranslation();

  const labels = ['1998', '2000', '2003', '2005', '2007'];

  const data = {
    labels,
    datasets: [
      {
        label: t('Total population for the variable body mass index'),
        data: [22443931, 23128265, 23837758, 24341395, 25036013],
        backgroundColor: '#87CEFA',
      },
      {
        label: t('Underweight, body mass index under 18.50'),
        data: [508003, 673923, 631040, 658291, 638454],
        backgroundColor: '#7FFFD4',
      },
      {
        label: t('Normal weight, body mass index 18.50 to 24.99'),
        data: [10573658, 11200683, 11140346, 11250230, 11113348],
        backgroundColor: '#FFD700',
      },
      {
        label: t('Overweight, body mass index 25.00 to 29.99'),
        data: [7873040, 7489281, 7929024, 8132642, 8115590],
        backgroundColor: '#FF8C00',
      },
      {
        label: t('Obese, body mass index 30.00 or higher'),
        data: [3169219, 3353633, 3547995, 3764664, 4016735],
        backgroundColor: '#FF6347',
      },
      {
        label: t('Body mass index, not stated'),
        data: [320011, 410745, 589353, 535569, 1151885],
        backgroundColor: '#8B0000',
      },
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: t('BMI Distribution Bar Chart in Canada (1998–2007)')
      },
      legend: {
        position: 'top', // Removed "as const"
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
        beginAtZero: true,
      }
    }
  };

  return <Bar data={data} options={options} />;
}
