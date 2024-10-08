import { useNavigate } from "react-router-dom"
export default function Home(){
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/login")
    }
    return(
        <main className="flex justify-center items-center min-h-screen">
           <button onClick = {handleNavigate}className="text-white bg-orange-500 text-center text-2xl italic w-[80px]  rounded-full border-white border-4 hover:bg-black">Get started here</button>
        </main>
    )
}