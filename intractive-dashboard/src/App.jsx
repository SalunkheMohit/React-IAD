import Navbar from './component/Navbar.jsx'
import Sidebar from './component/Sidebar.jsx'
import KPICard from './component/KPICard.jsx'
import ChartCard from './component/ChartCard.jsx'
import DataTable  from './component/DataTable.jsx'
import { salesData,tableData } from './data.js'


export default function App() {
  

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <div className='flex'>
      <Sidebar />
      <main className='flex-1 p-6 space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
      <KPICard lable='Total Revenue' value='$120,000' />
      <KPICard lable='Active Users' value='1,200' />
      <KPICard lable='Orders' value='320' />
      <KPICard lable='Conversion Rate' value='3.2%' />
        </div>
      <ChartCard data={salesData} />
      <DataTable rows={tableData} />
      </main>
      </div>

    </div>
  );
}


