import React from 'react';

export default function CoveredCallTranches() {
  return (
    <section>
      <h2>Covered Call Tranches</h2>
      <form>
        <input type="number" placeholder="Quantity" />
        <input type="number" placeholder="Strike Price" />
        <input type="number" placeholder="Premium Received" />
        <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Strike Price</th>
            <th>Premium Received</th>
            <th>P/L if Called Away $</th>
            <th>P/L if Called Away %</th>
          </tr>
        </thead>
        <tbody>{/* Tranches will be rendered here */}</tbody>
      </table>
    </section>
  );
}
