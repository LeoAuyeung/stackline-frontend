import React from 'react';
import { formatCurrency } from '../utils/utils';
import './SalesTable.css';

const SalesTable: React.FC<{ salesData: any[] }> = ({ salesData }) => {
  if (!salesData || salesData.length === 0) {
    return <div>No sales data available</div>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Week Ending</th>
            <th>Retail Sales</th>
            <th>Wholesale Sales</th>
            <th>Units Sold</th>
            <th>Retailer Margin</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map(sale => (
            <tr key={sale.weekEnding}>
              <td>{sale.weekEnding}</td>
              <td>{formatCurrency(sale.retailSales)}</td>
              <td>{formatCurrency(sale.wholesaleSales)}</td>
              <td>{sale.unitsSold}</td>
              <td>{formatCurrency(sale.retailerMargin)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
