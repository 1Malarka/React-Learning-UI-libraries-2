import { Button } from "./components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Routes, Route, NavLink } from 'react-router-dom'
import Accounts from './links/Accounts'
import Debts from './links/Debts'
import Total from './links/Total'
import { useNavigate } from 'react-router-dom'
import '@radix-ui/themes/styles.css'
import { useState } from "react"
import { useStates } from "./States"

function App() {
const [activeTab, setActiveTab] = useState('accounts')
const navigate = useNavigate()
const Valuecheck = useStates((state) => state.getTotalWithoutGeneral())



  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <div className="flex flex-col">
            <CardHeader className="justify-items-center">
              <CardDescription className="text-base">Total Balance</CardDescription>
              <CardTitle>{Valuecheck}$</CardTitle>  
            </CardHeader>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 shadow-md mt-2">
              <Button
                className={`w-full text-sm-black bg-0 ${activeTab === 'accounts' ? 'underline' : ''}`}
                variant="link"
                onClick={() => { setActiveTab('accounts'); navigate('/accounts') }}
              >
                Accounts
              </Button>
              <Button
                className={`w-full text-sm-black bg-0 ${activeTab === 'debts' ? 'underline' : ''}`}
                variant="link"
                onClick={() => { setActiveTab('debts'); navigate('/debts') }}
              >
                Debts
              </Button>
              <Button
                className={`w-full text-sm-black bg-0 ${activeTab === 'total' ? 'underline' : ''}`}
                variant="link"
                onClick={() => { setActiveTab('total'); navigate('/total') }}
              >
                Total
              </Button>
            </div>
          </div>
          <CardContent >
            <Routes>
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/debts" element={<Debts />} />
              <Route path="/total" element={<Total />} />
              <Route index element={<Accounts />} />
            </Routes>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default App
