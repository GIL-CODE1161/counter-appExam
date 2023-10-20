import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi'
import { GiUbisoftSun, GiMoon } from 'react-icons/gi'
import { FaPowerOff } from 'react-icons/fa'
import { FiLoader } from 'react-icons/fi'
import { SiZeromq } from 'react-icons/si'
import { gsap } from "gsap";
    
function App() {
  const [count, setCount] = useState(0)
  const [load, setLoad] = useState(true)
  const [power, setPower] = useState(false)
  const [themeIcon, setThemeIcon] = useState(false)

  function themeSelect() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'light'
      setThemeIcon(true)
    }else{
      localStorage.theme = 'dark'
      document.documentElement.classList.remove('dark')
      setThemeIcon(false)
    }
  }
  

 


  function clickText() {
    gsap.to(".calx", {
      duration: 5, opacity: 500, ease: "slow(0.5, 0.8, true)"
    });
    gsap.to(".calx", {
      duration: 5, opacity: 0, ease: "slow(0.5, 0.8, true)"
    });
  } 


  setTimeout(() => {
    setLoad(false)
    
  }, 3000);
  
  if (load){
    return(
      <div className='flex justify-center items-center min-h-screen min-w-full'>
        <div className='animate-spin'>
          <FiLoader className='h-16 w-16' />
        </div>
      </div>
    )
  }
   

  return (
    <div className='bg-gradient-to-r from-[#d7d2cc] to-[#728898] '>
      <div className='container mx-auto min-h-screen flex justify-center p-5'>
        <div className='grid xl:grid-cols-5 gap-16'>
          <div className='grid xl:col-span-2 justify-center items-center'>
            <div className='grid gap-5 text-4xl font-bold text-gradient-to-r from-[#728898] to-[#d7d2cc]  font-weight-500'>
              <span>Alt Counter App</span>
              <span>HTML, Tailwind, React JS</span>
              <div className='flex justify-center'>
                <Link className='py-3 px-5 border' to='/dfydtyft'>404</Link>
            </div>
            </div>
          </div>

          <div className='grid xl:col-span-3 justify-center max-w-[500px] bg-white bg-cover text-center gap-5 p-5 border shadow-inner shadow-slate rounded-[30px]'>
            {power ? (
              <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                  <button onClick={() => setPower(false)} className='bg-white flex justify-center items-center animate-pulse shadow-lg shadow-red-900 p-3 border rounded-xl hover:bg-red-800 hover:text-white transition duration-700 ease-in-out'>
                    <FaPowerOff className='h-9 w-9' />
                  </button>

                  <button onClick={themeSelect} className='bg-white flex justify-center items-center animate-pulse shadow-lg shadow-red-900 p-3 border rounded-xl hover:bg-slate-800 hover:text-white transition duration-700 ease-in-out'>
                    {themeIcon ? (
                      <GiUbisoftSun className='h-9 w-9' />
                    ):(
                      <GiMoon className='h-9 w-9' />
                    )}
                  </button>
                </div>
                {/* <h1 className='text-3xl p-3 shadow-2xl italic font-bold text-gray-600 border rounded-full'>ALT COUNTER</h1> */}
                <div className="flex justify-between item-center gap-9">
                  
                  <div className='flex items-center'>
                    <button className='bg-white flex justify-center items-center animate-pulse shadow-xl shadow-red-900 p-3 border rounded-full hover:bg-slate-800 hover:text-white transition duration-700 ease-in-out' onClick={() => {setCount((count) => count - 1, clickText())}}>
                      <BiLeftArrow className='h-9 w-9' />
                    </button>
                  </div>
                  
                  <div className='bg-slate-100 rounded-full animate-pulse shadow-2xl shadow-red-900 p-3'>
                    <div className='bg-slate-50 flex justify-center items-center h-56 w-56 rounded-full shadow-2xl shadow-slate-500'>
                      <h1 className='calx text-[200px] font-bold italic rounded-md'>
                        {count}
                      </h1>
                    </div>
                  </div>

                  <div className='flex items-center'>      
                    <button className='bg-white flex justify-center items-center animate-pulse shadow-lg shadow-red-900 p-3 border rounded-full hover:bg-slate-800 hover:text-white transition duration-700 ease-in-out' onClick={() => {setCount((count) => count + 1), clickText()}}>
                      <BiRightArrow className='h-9 w-9' />
                    </button>
                  </div>

                </div>

                <div className='flex justify-center items-center pt-16'>
                  <button className='bg-white flex justify-center items-center animate-pulse shadow-lg shadow-red-900 p-3 border rounded-full hover:bg-slate-800 hover:text-white transition duration-700 ease-in-out' onClick={() => {setCount(0), clickText()}}>
                    <SiZeromq className='h-7 w-7' />
                  </button>
                </div>

                <p>
                  {/* Edit <code>src/App.jsx</code> and save to test HMR */}
                </p>
                <p className="read-the-docs">
                  {/* Click on the Vite and React logos to learn more */}
                </p>
              </div>
            ):(
              <div className='flex flex-col justify-center items-center gap-3'>
                <div className='bg-slate-100 rounded-full animate-pulse shadow-2xl shadow-red-900 p-3'>
                  <div className='bg-slate-50 flex justify-center items-center h-56 w-56 rounded-full shadow-2xl shadow-slate-500'>
                    <button onClick={() => setPower(true)} className='bg-white flex justify-center items-center animate-pulse shadow-lg shadow-red-900 p-3 border rounded-xl hover:bg-red-800 hover:text-white transition duration-700 ease-in-out'>
                      <FaPowerOff className='h-9 w-9' />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
