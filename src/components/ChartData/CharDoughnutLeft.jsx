import { Doughnut } from 'react-chartjs-2';

// Update import to use named import

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement, // ArcElement is needed for Doughnut chart
  Title,
  Tooltip,
  Legend
);
//---------charDoughLefData

const charDoughLefData = {
  labels: ['Time', 'Device', 'Message'],
  datasets: [
    {
      label: 'Total Messages',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      borderColor: 'orange',
      borderWidth: 1,
    },
  ],
};

const ChartDoughnutLef = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable aspect ratio support for responsiveness
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
    <div className="doughnut-container mt-10 w-full h-80 shadow-inner">
      <Doughnut options={options} data={charDoughLefData} />
    </div>
  );
};

export default ChartDoughnutLef;
