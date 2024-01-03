import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut as Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom' as const,
      labels: {
        usePointStyle: true,
        boxWidth: 16,
        boxHeight: 16,
        font: {
          size: 8,
          fontFamily: '"Baloo Bhai 2", cursive',
        },
      },
    },
    datalabels: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#ffd7bd',
      titleColor: '#ffd7bd',
      padding: { x: 20, y: 4 } as unknown as number,
      titleFont: {
        size: 0,
      },
      bodyFont: {
        size: 8,
        fontFamily: '"Baloo Bhai 2", cursive',
        weight: 'bold',
      },
      bodyColor: '#000',
      cornerRadius: 10,
      displayColors: false,
      caretPadding: 0,
      bodyAlign: 'center' as 'center',
      titleMarginBottom: 0,
    },
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
  cutout: '45%',
};

const labels = [`IOS ${'81K'}`, 'Android', 'Others'];

export const data = {
  labels,
  datasets: [
    {
      data: [80000, 30000, 20000],
      backgroundColor: ['#000', '#e3bc6a', '#2fdf84'],
      hoverOffset: 4,
    },
  ],
};

export default function Donut() {
  return <Chart options={options} data={data} />;
}
