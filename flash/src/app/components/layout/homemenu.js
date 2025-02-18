import Menuitem from "../menu/menuitem";
import Sectionheaders from "./sectionheaders";

export default function Homemenu() {
    return(
        <section className="">

            <div className="mt-2 absolute left-0 right-0 w-full justify-start">

                <div className="h-48 w-48 absolute left-0 -top-12">
                <img  src='https://github.com/dejwid/food-ordering/blob/master/public/sallad1.png?raw=true'alt="salad"/>
                </div>
                
                <div className="h-48 w-auto absolute right-0 -top-12">
                <img  src='https://github.com/dejwid/food-ordering/blob/master/public/sallad2.png?raw=true'alt="salad"/>
                </div>
                
            </div>
            
        <div className="text-center mt-20">
           <Sectionheaders 
           subHeader={'check out'}
           mainHeader={'Menu'}
           />
        </div>
      <Menuitem />
        <Menuitem />
        </section>

    )
}