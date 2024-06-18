import './App.css'
import {Suspense,lazy} from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
const Landing = lazy(() => import('./components/Landing'))
const Dashboard = lazy(() =>  import('./components/Dashboard'))

function App() {
    //Suspense API , asuncronous component fetching, asynchronous data fetching
    return (
        <div>
            <BrowserRouter>
                <Appbar />
                <Routes>
                    <Route path='/dashboard' element={<Suspense fallback='loading...'><Dashboard/></Suspense>} />
                    <Route path='/' element={<Suspense fallback='loading...'><Landing/></Suspense>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function Appbar(){
    const navigate = useNavigate();
    return <div>
        
            <div style={{ background: 'red', color: 'white' }}>
                Navigation Page

                <button onClick={() => {
                    navigate('/dashboard');
                }}>Dashboard Page</button>

                <button onClick={() => {
                    navigate('/');
                }}>Landing Page</button>

            </div>

        </div>
}

export default App