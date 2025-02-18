
import './globals.css';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Homemenu from './components/layout/homemenu';
import Sectionheaders from './components/layout/sectionheaders';

export default function Home() {
  return(
   <>
 
  <Hero />
  <Homemenu />
   <section className="text-center my-16" >
    <Sectionheaders
    subHeader={'Our Story'}
    mainHeader={'About Us'}
    />
    <div className=" text-gray-500 max-w-6xl ">
    <p className=" mx-auto  mt-5 ">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
    </p>
    <p className=" mx-auto mt-6 ">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.
    </p>
    </div>

   </section>
 


   </>
  )
}