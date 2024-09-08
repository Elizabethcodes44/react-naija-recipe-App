import location from "../../assets/location.png";
import message from "../../assets/message.png";
export default function Contact(){
    return(
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 space-y-8">
            <div className="flex flex-col items-center">
                <img src={location} alt ="location" className="w-24 h-24 mb-4"/>
                <h1 className="text-3xl font-bold">Address</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
            <div>
                <h1 className="text-xl font-semibold">Epicurean Adventures</h1>
                <p>1111, whistler Canada Suite 1010101</p>
                <p>+1111111100344</p>
            </div>
            <div>
                <h1 className="text-xl font-semibold">Australia Office</h1>
                <p>1111, Bruce Canberra Suite 1010101</p>
                <p>+1111111100355</p>
            </div>
            <div>
                <h1 className="text-xl font-semibold">Switzerland Office</h1>
                <p>1111, whistler Canada Suite 1010101</p>
                <p>+1111111100366</p>
            </div>
            <div>
                <h1 className="text-xl font-semibold">America Office</h1>
                <p>1111, Michigan Detroit Suite 1010101</p>
                <p>+1111111100377</p>
            </div>
            </div>
            <div className="flex flex-col items-center">
            <img src = {message} alt ="message"className="w-24 h-24 mb-4"/>
            <h1 className="text-3xl font-bold">Contact Us</h1>
            </div>
        </div>
        </>
    )
}