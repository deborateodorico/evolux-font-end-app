import DidsTable from './components/table/DidsTable';
import { Layout } from './components/layout/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDids } from './redux/didsSlice';
import { ToastContainer } from 'react-toastify';
import Header from './components/header/Header';
import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();

  async function fetchAllDids() {
    dispatch(getDids());
  }

  useEffect(() => {
    fetchAllDids();
  }, []);

  return (
    <div className={styles['app']}>
      <Header />
      <Layout>
        <DidsTable />
      </Layout>
      <ToastContainer />
    </div>
  );
}

export default App;
