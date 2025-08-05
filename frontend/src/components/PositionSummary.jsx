import React from 'react';

export default function PositionSummary() {
  return (
    <section>
      <h2>Position Summary</h2>
      <form>
        <input type="text" placeholder="Ticker" />
        <button type="submit">Fetch Price</button>
      </form>
      <div>
        <p>Shares: --</p>
        <p>Current Value: --</p>
        <p>Total Premium: --</p>
        <p>Adjusted Cost Basis: --</p>
        <p>Adjusted Cost/Share: --</p>
        <p>P/L $: --</p>
        <p>P/L %: --</p>
      </div>
    </section>
  );
}
