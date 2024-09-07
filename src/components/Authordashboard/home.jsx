import RecentPosts from "./recentpost";
import DraftPosts from "./status";


export default function Home(){
    return(
        <>
        <div className=" border-2 shadow-lg border-white  p-8 text-center bg-gradient-to-b from-black to-gray-900 text-white rounded-lg max-w-2xl mx-auto  ">
            <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard!</h1>

<p className="mb-6">Dear Author,

We’re thrilled to have you here! This is your hub for managing your posts and engaging with your readers. To get started, why not create your first post? Click the link below to craft and share your ideas with the world:</p>
<button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">Create a post</button>
        </div>
        <RecentPosts/>
        <DraftPosts/>
        </>
    )
}