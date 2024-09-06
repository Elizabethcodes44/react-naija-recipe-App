import { useNavigate } from "react-router-dom"
export default function Home(){
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/login")
    }
    return(
        <main>
           <button onClick = {handleNavigate}className="text-white bg-transparent text-center text-2xl italic w-1/2  rounded-full border-white border-4">Get started here</button>
        </main>
    )
}