import perfumeBgDesktop from '../assets/perfume-bg.png'
import cart from '../assets/cart.svg'

function Card(params) {
    
    return (
        <div className="bg-white flex flex-col h-[600px] rounded-lg sm:h-auto sm:flex-row sm:w-[600px]">
            <div className='h-[340px] overflow-hidden relative rounded-t-lg w-full sm:h-auto sm:rounded-t-none sm:w-1/2'>
                <img className='absolute top-[-45%] w-full sm:static' src={perfumeBgDesktop} alt="Perfume bottle on leaves" />
            </div>
            <div className='grid p-6 sm:p-7 sm:w-1/2'>
                <p className='font-montserrat font-medium text-[#6C7289] text-sm'>PERFUME</p>
                <h1 className='font-fraunces font-bold text-3xl'>Gabrielle Essence Eau De Parfum</h1>
                <p className='font-montserrat text-base text-[#6C7289]'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <div className='flex gap-4 items-center pt-2 sm:pt-4'>
                    <p className='font-fraunces font-bold text-[#3D8168] text-3xl'>$149.99</p>
                    <p className='font-montserrat line-through text-xs text-[#6C7289]'>$169.99</p>
                </div>
                <button className='bg-[#3D8168] flex justify-center items-center gap-3 font-montserrat font-bold p-4 mt-4 rounded-lg text-base text-white w-full'>
                    <img src={cart} alt="Cart icon" />
                    <p>Add to cart</p>
                </button>
            </div>
        </div>
    )
}

export default Card;