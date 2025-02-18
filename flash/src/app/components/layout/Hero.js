import './hero.css';
export default function Hero() {
    return (
        <section className='hero gap-20'>
        <div className='py-24 px-4 '>
        <h1 className='text-5xl font-bold'>
                Welcome to the <p className='zomato'>Zomato</p>
            </h1>
            <p className="mt-8">
                The best place to find the best food in town
            </p>
             <div className='flex gap-6 mt-8 '>
             <button className='font-semibold text-xl bg-red-400 px-4 py-2 rounded-lg border-2 border-yellow-500 uppercase hover:bg-white hover:text-black' >
                Order Now
            </button>
            <button className='font-semibold text-2xl bg-transparent border-2 border-yellow-500 px-3 py-2 rounded-lg hover:bg-orange-300 hover:text-white '>
                Learn More
            </button>
             </div>
        </div>
          <div>
          <img className ="pizza1" src="https://github.com/dejwid/food-ordering/blob/master/public/pizza.png?raw=true" alt="food" />
          </div>
        </section>
    );
}