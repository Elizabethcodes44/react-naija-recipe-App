export default function Profile() {
    return(
        <>
    <h1>Upload Image</h1>
    <form method = "POST" action="/upload"  encType="multipart/form-data">
    <input type = "file" name = "Image"/>
    <input type = "submit"/>

    </form>
    </>
    )
}