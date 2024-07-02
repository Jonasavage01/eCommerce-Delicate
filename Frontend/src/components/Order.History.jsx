import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/User.css';

const OrderHistory = () => {
  const orders = [
    { id: '#738', date: '8 Sep, 2020', total: '$135.00 (5 Products)', status: 'Processing' },
    { id: '#703', date: '24 May, 2020', total: '$25.00 (1 Product)', status: 'On the way' },
    { id: '#130', date: '22 Oct, 2020', total: '$250.00 (4 Products)', status: 'Completed' },
    { id: '#561', date: '1 Feb, 2020', total: '$35.00 (1 Product)', status: 'Completed' },
    { id: '#536', date: '21 Sep, 2020', total: '$578.00 (13 Products)', status: 'Completed' },
    { id: '#492', date: '22 Oct, 2020', total: '$345.00 (7 Products)', status: 'Completed' },
  ];

  return (
    <div className="history-container p-3">
      <h5>Recent Order History</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td><a href="#">{order.status}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="#">View All</a>
    </div>
  );
};

export default OrderHistory;
