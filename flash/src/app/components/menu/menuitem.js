export default function Menuitem() {
    return(
        <div className="grid grid-cols-3 gap-4 mt-6 ">
        <div className="bg-gray-300 p-4 rounded-lg text-center mt-2 mb-0 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-opacity-60">
            <img src="https://b.zmtcdn.com/data/pictures/6/20625426/1dda80422234540c2f9b42d8677c0a4f_o2_featured_v2.jpg?output-format=webp" alt="pizza"/>
            <h3 className="font-semibold my-2">Pizza</h3>
            <p className="text-gray-500 text-sm">Our delicious pizza</p>
            <button className="bg-red-400 text-white px-4 py-2 rounded-lg mt-4  hover:bg-white hover:text-red-500 ">Order Now Rs.300</button>
        </div>

        <div className="bg-gray-300 p-4 rounded-lg text-center hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-opacity-60"> 
            <img src="https://b.zmtcdn.com/data/pictures/2/21718332/a06fca443730bb4c07b2b54b075cabd4_o2_featured_v2.jpg?output-format=webp" alt="pizza"/>
            <h3 className="font-semibold my-2">Rolls</h3>
            <p className="text-gray-500 text-sm">Our delicious pizza</p>
            <button className="bg-red-400 text-white px-4 py-2 rounded-lg mt-5  hover:bg-white hover:text-red-500 ">Order Now Rs.500</button>
        </div>




        <div className="bg-gray-300  rounded-lg text-center p-4 mt-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-opacity-60">
            <img src="https://b.zmtcdn.com/data/dish_photos/e9b/6e1e34875d8d540045c18b410bb97e9b.jpeg?output-format=webp" alt="pizza" />
            <h3 className="font-semibold my-2">Pizza</h3>
            <p className="text-gray-500 text-sm mt-6">Our delicious pizza</p>
            <button className="bg-red-400 text-white px-4 py-2 rounded-lg mt-4 hover:bg-white hover:text-red-500 ">Order Now Rs.200</button>
        </div>

    </div>
    )
}