import DidsTable from './components/table/DidsTable';
import { Layout } from './components/layout/Layout';
import generateDidsData from './api/generateDidsData';

function App() {
  const data = generateDidsData(5);

  return (
    <div className='app'>
      <Layout>
        <DidsTable data={data} />
      </Layout>
    </div>
  );
}

export default App;
