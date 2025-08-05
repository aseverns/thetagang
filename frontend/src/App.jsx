import React from 'react';
import TransactionLog from './components/TransactionLog';
import LotManagement from './components/LotManagement';
import PositionSummary from './components/PositionSummary';
import CoveredCallTranches from './components/CoveredCallTranches';

export default function App() {
  return (
    <div>
      <h1>Covered Call Tracker</h1>
      <TransactionLog />
      <LotManagement />
      <PositionSummary />
      <CoveredCallTranches />
    </div>
  );
}
