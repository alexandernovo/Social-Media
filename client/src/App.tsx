import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Login from './pages/Login'
import NotFound from './pages/Login'
import Home from './pages/Login'
import PrivateRoutes from './middleware/PrivateRoutes'

function App() {
  return (
    <MainLayout>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path='/home' ></Route>
          </Route>
          <Route element={<Login />} path='/' ></Route>
          <Route element={<NotFound />} path='*'></Route>
        </Routes>
      </Router>
    </MainLayout>
  )
}

export default App
