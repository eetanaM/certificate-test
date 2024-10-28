import { useAppDispatch } from './hooks/pretypedHooks';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';

import HomePage from './pages/home/HomePage';

import { getCertificates } from './services/certificates/actions';

import './App.css'

function App(): React.JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCertificates())
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </>
  )
}

export default App
