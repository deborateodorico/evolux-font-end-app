import DidsTable from './components/table/DidsTable';
import { Layout } from './components/layout/Layout';
import dids from './data/dids.json';

function App() {
  const data = dids.data;

  return (
    <div className='App'>
      <Layout>
        <DidsTable data={data} />
      </Layout>
    </div>
  );
}

export default App;
