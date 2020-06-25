import React from 'react';
import { useParams } from 'react-router-dom';

export const DashboardPage: React.FC<{}> = () => {
  const { action, param, section } = useParams();

  return (
    <>
      <h1>Admin: Dashboard</h1>
      {
        section && <p>{section}</p>
      }
      {
        action && <p>{action}</p>
      }
      {
        param && <p>{param}</p>
      }
    </>
  );
};
