import DidsTable from './components/table/DidsTable';
import { Layout } from './components/layout/Layout';
import { fetchDids } from './api/';
import { useEffect } from 'react';
import { addNewDids } from './redux/didsSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  async function fetchAllDids() {
    const dids = await fetchDids();
    dispatch(addNewDids(dids));
  }

  useEffect(() => {
    fetchAllDids();
  }, []);

  return (
    <div className='app'>
      <Layout>
        <DidsTable />
      </Layout>
    </div>
  );
}

export default App;
