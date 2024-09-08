import mypicture from "../../assets/aboutusimage.jpg"
export default function About() {
    return(
        <>
        <div className="bg-black">
        <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8 p-8 text-white">
        <div>
            <img src= {mypicture} alt = "my picture"
            className="w-64 h-64 rounded-full object-cover mb-8 md:mb-0"/>
            
        </div>
        <div>
            <h1 className="text-center md:text-left text-3xl mb-4">About Our Company</h1>
            <p className="text-lg mb-2 text-[15px] w-[200px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit error iusto impedit laudantium voluptatem illum eaque exercitationem sapiente quibusdam! Minus!</p>
            <p className="text-lg mb-2 rounded-full border-white border-2 text-center mt-4 mb-4">Food Blog</p>
            <p className="text-lg mt-2">Explore</p>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center" >
                <p className="text-2xl font-bold mb-4">01</p>
                <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid similique nam quos? Minima, nam! Earum id non nemo necessitatibus optio saepe quas blanditiis exercitationem debitis error, quo delectus quae dolorum.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <p className="text-2xl font-bold mb-4">02</p>
                <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid similique nam quos? Minima, nam! Earum id non nemo necessitatibus optio saepe quas blanditiis exercitationem debitis error, quo delectus quae dolorum.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <p className="text-2xl font-bold mb-4">03</p>
                <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid similique nam quos? Minima, nam! Earum id non nemo necessitatibus optio saepe quas blanditiis exercitationem debitis error, quo delectus quae dolorum.</p>
            </div>
        </div>
        </div>
        </>
    )
}