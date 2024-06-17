import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './SalesGraph.css';

const SalesGraph: React.FC<{ salesData: any[] }> = ({ salesData }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: salesData.map(sale => sale.weekEnding),
        datasets: [
          {
            label: 'Retail Sales',
            data: salesData.map(sale => sale.retailSales),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.4, // Smoothing line
          },
          {
            label: 'Wholesale Sales',
            data: salesData.map(sale => sale.wholesaleSales),
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            tension: 0.4, // Smoothing line
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Week Ending',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Sales',
            },
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [salesData]);

  return <div className="chart-container"><canvas ref={chartRef} /></div>;
};

export default SalesGraph;
