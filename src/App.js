import DidsTable from './components/table/DidsTable';
import { Layout } from './components/layout/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDids } from './redux/didsSlice';

function App() {
  const dispatch = useDispatch();

  async function fetchAllDids() {
    dispatch(getDids());
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
