import useSWR from "swr";
import { Skeleton } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Charts",
    },
  },
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Chart = () => {
  const { data: res, isLoading } = useSWR(
    "http://localhost:5000/charts",
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: res?.data,
  };

  if (isLoading) return <Skeleton active />;
  return <Bar options={options} data={data} className="max-h-[300px]" />;
};

export default Chart;
