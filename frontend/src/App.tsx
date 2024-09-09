

import './App.css'

function App() {


  return <div className='max-w-2xl mx-auto flex px-4  '>
    <div className='py-8 flex flex-col justify-center  '>
    <h1 className='text-4xl font-bold mb-4'> 
      <span className='text-5xl'> URL to video</span> <br /> with power of AI
      </h1>
   
    <form className=' flex flex-col justify-center ' >
      <input className='bg-transparent text-white border-2 rounded-full  px-4 py-2 w-full ' type="url" placeholder='http://...' />
      <button className='bg-emerald-600 text-white mt-4 border rounded-full font-semibold p-2 ' type="submit"> Create video</button>
    </form>
    </div>
    <div className='p-8'>
      <div className='bg-gray-300 w-[240px] h-[380px]  text-gray-500 font-semibold rounded-lg p-4'>
      video here
      </div>
    </div>
   
  </div>
    
  
}

export default App
