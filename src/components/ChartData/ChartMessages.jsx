import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'; // Імпорт компонента Bar

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartBarData = {
  labels: [
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
    '20:00',
    '22:00',
    '00:00',
    '02:00',
    '04:00',
    '06:00',
    '08:00',
  ],
  datasets: [
    {
      label: 'Messages',
      data: [5, 8, 12, 7, 9, 15, 10, 6, 4, 3, 7, 11], // Додано дані для відображення
      backgroundColor: 'blue',
      borderColor: 'blue',
      borderWidth: 1,
    },
  ],
};

const ChartMessages = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Вимикаємо підтримку аспектного співвідношення для адаптивності
    plugins: {
      title: {
        display: true,
        text: 'Total Messages',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="bar-container mt-10 w-full h-80 shadow-inner">
      <Bar options={options} data={chartBarData} />
    </div>
  );
};

export default ChartMessages;
