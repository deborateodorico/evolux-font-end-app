import DidsTable from './components/table/DidsTable';
import { Layout } from './components/layout/Layout';
import { fetchDids } from './api/';
import { useEffect, useState } from 'react';

function App() {
  const [didsData, setDidsData] = useState(null);

  async function fetchAllDids() {
    const dids = await fetchDids();

    setDidsData(dids);
  }

  useEffect(() => {
    fetchAllDids();
  }, []);

  if (!didsData) return 'Loading...';

  return (
    <div className='app'>
      <Layout>
        <DidsTable data={didsData} />
      </Layout>
    </div>
  );
}

export default App;
