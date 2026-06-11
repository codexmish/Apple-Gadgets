import Image from 'next/image'

const Navbar = () => {
  return (
    <>

    {/* ------upper menu */}
    <div className='bg-black w-full h-20 flex items-center'>
        <div className="container flex items-center justify-between">
            {/* ------logo */}
            <div className="logo">
                <Image width={160} height={52} src={"/images/logo.webp"} alt='logo'/>
            </div>


            {/* ------search bar */}
            <div className='w-[592px] h-13 bg-white rounded-full'>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default Navbar