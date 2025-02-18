import './page.css';
export default function Register() {
    return(
        <>
       <section className="mt-8">
        <h1 className="text-center text-4xl font-semibold mt-10 text-red-600">
            Register
        </h1>
        <form className='block max-w-xl items-center mx-auto mt-10'>
        <input type="name" placeholder="Full Name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            
            <input type="address" placeholder="Address"/>
            <input type="number" placeholder="Mobile No"/>
            <input type="pincode" placeholder="PinCode"/>
            <button type="submit">Register</button>
            <div className='text-center mt-4 font-semibold'>
                or login with provider
            </div>

            <button className="flex gap-4 justify-center py-2 mb-2 mt-2"  type="submit">
                <img src={'/google.png'} alt='google' className='w-8 h-8' />
                Google</button>
        
        </form>
       </section>
        </>
    )
}