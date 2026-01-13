import Navbar from './Components/Navbar.jsx'
import Sidebar from './Components/Sidebar.jsx'
import KPICard from './Components/KPICard.js'
import ChartCard from './Components/ChartCard.js'
import DataTable  from './Components/DataTable.js'
import { salesData,tableData } from './data.js'
import { useApi } from './hooks/useApi.js'
import { DollarSign, Users, ShoppingCart, TrendingUp} from 'lucide-react'
import Login from "./Components/Login.js"
import { Routes, Route } from "react-router-dom"
import Dashboard from './Components/Dashboard.js'
import ProtectedRoute from './routes/ProtectedRoute.jsx'




export default function App() {
  
  const users = useApi('https://jsonplaceholder.typicode.com/users');

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <div className='flex'>
      <Sidebar />
      <main className='flex-1 p-6 space-y-6'>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

          <KPICard
           label='Total Revenue'
           value={120000}
           icon={DollarSign}
           color='bg-green-500'
           />
          <KPICard
           label='Active Users'
           value={1200}
           icon={Users}
           color="bg-blue-500"
           />
          <KPICard
           label='Orders'
           value={320}
           icon={ShoppingCart}
           color="bg-purple-500"
           />
          <KPICard
           label='Conversion Rate'
           value={3.2}
           icon={TrendingUp}
           color="bg-orange-500"
           />
        </div>
          <ChartCard data={salesData} />
          <DataTable rows={tableData} />
      </main>      
      </div>
             
             <Routes>
                   <Route path= "/login" element={<Login />} />
                     <Route path= "/" element={
                       <ProtectedRoute>
                         <Dashboard />
                       </ProtectedRoute>
                                              } 
                    />
                 </Routes>

    </div>
  );
}


