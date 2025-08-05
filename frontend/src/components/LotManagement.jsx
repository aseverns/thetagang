import React from 'react';

export default function LotManagement() {
  return (
    <section>
      <h2>Lot Management</h2>
      <form>
        <input type="date" placeholder="Date" />
        <select>
          <option>BUY</option>
          <option>SELL</option>
        </select>
        <input type="number" placeholder="Quantity" />
        <input type="number" placeholder="Price" />
        <input type="number" placeholder="Cost Basis" />
        <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Action</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Cost Basis</th>
          </tr>
        </thead>
        <tbody>{/* Lots will be rendered here */}</tbody>
      </table>
    </section>
  );
}
