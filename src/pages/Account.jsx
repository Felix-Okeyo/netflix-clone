import React from 'react'

function Account(){
  return (
    <div className='w-full text-white'>
        <img 
        className= 'w-full h-[400px] object-cover' 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/1504aeb0-7b37-4f92-8d41-8fcb7477a7b1/KE-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="home page"
        />
        {/*create and overlay div */}
      <div className = 'bg-black/60 fixed top-0 left-0 w-full h-[550px]'>

        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
      </div>
    </div>
  )
}


export default Account;