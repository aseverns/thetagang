import React from 'react';

export default function TransactionLog() {
  return (
    <section>
      <h2>Transaction Log</h2>
      <form>
        <input type="date" placeholder="Date" />
        <select>
          <option>BUY</option>
          <option>SELL</option>
        </select>
        <input type="number" placeholder="Quantity" />
        <input type="date" placeholder="Expiry Date" />
        <input type="number" placeholder="Strike Price" />
        <input type="number" placeholder="Option Premium" />
        <input type="number" placeholder="Exit/Current Price" />
        <select>
          <option>OPEN</option>
          <option>CLOSED</option>
        </select>
        <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction</th>
            <th>Quantity</th>
            <th>Expiry</th>
            <th>Strike</th>
            <th>Premium</th>
            <th>Exit/Current</th>
            <th>Status</th>
            <th>Net Gains</th>
          </tr>
        </thead>
        <tbody>{/* Rows will be rendered here */}</tbody>
      </table>
    </section>
  );
}
