import { useEffect, useState } from 'react';

import catimage from "../../assets/land.png";
export default function Category() {
    const [categories, setCategories] = useState([]);
    //const [posts, setPosts] = useState([]);
    //const [selectedCategory, setSelectedCategory] = useState('all');
    

    // Fetch categories from the database
    useEffect(() => {
        fetch('http://localhost:5432/category')
            .then(response => response.json())
            .then(result => {
                console.log('Categories Data:', result.data); // Add this log
                setCategories(result.data);
            })
            
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    // Fetch posts from the database
   

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-white">Categories</h1>

            {/* Display categories */}
            <div className="grid grid-cols-4 gap-6">
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <div
                            key={category.id}
                            className="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:shadow-lg transition"
                        >
                            <div className="text-lg font-semibold">{category.name}</div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-4 text-center">No categories available</div>
                )}
            </div>
        </div>
    );
}
