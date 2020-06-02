import React from 'react';
import { ProtectRoute } from '../auth_context';

function Dashboard() {
  return <h1>Dashboard </h1>;
}

// export default Dashboard;
export default ProtectRoute(Dashboard);
