import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ContextdataProvider } from './context/contextdata.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Appbar from './components/Appbar.tsx'
import Footer from './components/Footer.tsx'
import Updatate from './Update.tsx'
import Addtodo from './Addtodo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextdataProvider>
      <BrowserRouter>
      <Appbar></Appbar>
      <Routes>
        
        <Route path='/app' element={<App></App>} ></Route>
        <Route path='/' element={
          
          <Addtodo></Addtodo>}></Route>
        <Route path='/app/:id' element={<Updatate></Updatate>}></Route>
       
      </Routes>
       <Footer></Footer>
      {/* <Footer></Footer> */}
    </BrowserRouter>
    </ContextdataProvider>
  </StrictMode>,
)
