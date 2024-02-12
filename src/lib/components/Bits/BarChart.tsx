import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar as Chart } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const options = {
  indexAxis: 'x' as const,
  elements: {
    bar: {
      // borderWidth: 0,
      // borderRadius: Number.MAX_VALUE,
      // borderSkipped: false as false,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        drawBorder: false,
      },
      ticks: {
        display: true,
      },
    },
    y: {
      grid: {
        display: true,
        drawBorder: false,
      },
      ticks: {
        padding: 20,
        font: {
          size: 8,
          fontFamily: '"Baloo Bhai 2", cursive',
        },
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top' as const,
    },
    datalabels: {
      color: '#fff',
      font: {
        size: 8,
        fontFamily: '"Baloo Bhai 2", cursive',
      },
    },
    // tooltip: {
    //   backgroundColor: '#ffd7bd',
    //   // titleColor: "#ffd7bd",
    //   padding: { x: 20, y: 4 } as unknown as number,
    //   titleFont: {
    //     size: 0,
    //   },
    //   bodyFont: {
    //     size: 8,
    //     fontFamily: '"Baloo Bhai 2", cursive',
    //     weight: 'bold',
    //   },
    //   bodyColor: '#000',
    //   cornerRadius: 4,
    //   displayColors: false,
    //   caretPadding: 0,
    //   bodyAlign: 'center' as 'center',
    //   titleMarginBottom: 0,
    // },
  },
};

export default function BarChart({ chart }: { chart?: any }) {
  const labels = chart?.map((x: any) => x?.month.slice(0, 3));

  const data = {
    labels,
    datasets: [
      {
        label: 'Male',
        data: chart?.map((x: any) => x?.male),
        // borderColor: 'rgb(0, 0, 0)',
        backgroundColor: '#2fdf84',
      },
      {
        label: 'Female',
        data: chart?.map((x: any) => x?.female),
        // borderColor: 'rgb(0, 0, 0)',
        backgroundColor: '#e3bc6a',
      },
    ],
  };
  return <Chart options={options as any} data={data} />;
}
