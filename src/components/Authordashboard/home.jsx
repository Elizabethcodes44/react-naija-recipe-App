import RecentPosts from "./recentpost";
import Status from "./status";

export default function Home(){
    return(
        <>
        <div className="bg-blur ">
            <h1 className="text-3xl ">Welcome to Your Dashboard!</h1>

<p>Dear Author,

We’re thrilled to have you here! This is your hub for managing your posts and engaging with your readers. To get started, why not create your first post? Click the link below to craft and share your ideas with the world:</p>
<button>Create a post</button>
        </div>
        <RecentPosts/>
        <Status/>
        </>
    )
}