import React, { useEffect, useState } from 'react'

export type Product = {
    id: number;
    name: string;
    price: number;
    rating: number;
    image: string;
    category: string;
    description: string;
};
export const products: Product[] = [
    { id: 1, name: "Dell Inspiron Mini", price: 6999, rating: 4.2, image: "https://picsum.photos/seed/lap1/300", category: "Laptop", description: "Compact laptop suitable for daily tasks." },
    { id: 2, name: "HP Stream Lite", price: 7499, rating: 4.1, image: "https://picsum.photos/seed/lap2/300", category: "Laptop", description: "Lightweight budget-friendly laptop for students." },
    { id: 3, name: "ASUS VivoBook Go", price: 7899, rating: 4.3, image: "https://picsum.photos/seed/lap3/300", category: "Laptop", description: "Affordable laptop for everyday browsing." },
    { id: 4, name: "Lenovo Flex Mini", price: 6899, rating: 4.0, image: "https://picsum.photos/seed/lap4/300", category: "Laptop", description: "Portable laptop with flexible performance." },
    { id: 5, name: "Acer Aspire Nano", price: 7999, rating: 4.4, image: "https://picsum.photos/seed/lap5/300", category: "Laptop", description: "Compact performance laptop with dual speakers." },

    { id: 6, name: "MSI LiteBook 10", price: 6099, rating: 4.1, image: "https://picsum.photos/seed/lap6/300", category: "Laptop", description: "Entry-level laptop for browsing and notes." },
    { id: 7, name: "Samsung Galaxy MiniBook", price: 7599, rating: 4.3, image: "https://picsum.photos/seed/lap7/300", category: "Laptop", description: "Fast mini laptop with strong battery." },
    { id: 8, name: "LG Gram Lite", price: 7990, rating: 4.5, image: "https://picsum.photos/seed/lap8/300", category: "Laptop", description: "Ultra-light device for students." },
    { id: 9, name: "Infinix Book Air", price: 6890, rating: 4.0, image: "httpsum.photos/seed/lap9/300", category: "Laptop", description: "Budget laptop with modern design." },
    { id: 10, name: "Realme CloudBook Mini", price: 7799, rating: 4.2, image: "https://picsum.photos/seed/lap10/300", category: "Laptop", description: "Smooth performance for basic usage." },

    { id: 11, name: "Tecno SmartBook", price: 6299, rating: 4.0, image: "https://picsum.photos/seed/lap11/300", category: "Laptop", description: "Entry-level lightweight laptop." },
    { id: 12, name: "Avita Magus Lite", price: 6990, rating: 3.9, image: "https://picsum.photos/seed/lap12/300", category: "Laptop", description: "Affordable 2-in-1 laptop." },
    { id: 13, name: "Honor MagicBook Mini", price: 7995, rating: 4.4, image: "https://picsum.photos/seed/lap13/300", category: "Laptop", description: "Fast and stylish ultra portable." },
    { id: 14, name: "Zebronics ProBook", price: 6895, rating: 4.0, image: "https://picsum.photos/seed/lap14/300", category: "Laptop", description: "Basic laptop for office work." },
    { id: 15, name: "iBall CompBook Neo", price: 6099, rating: 3.8, image: "https://picsum.photos/seed/lap15/300", category: "Laptop", description: "Compact laptop with long battery life." },

    { id: 16, name: "Panasonic ToughLite", price: 7990, rating: 4.5, image: "https://picsum.photos/seed/lap16/300", category: "Laptop", description: "Durable laptop designed for rough usage." },
    { id: 17, name: "Fujitsu LiteNote 12", price: 7290, rating: 4.1, image: "https://picsum.photos/seed/lap17/300", category: "Laptop", description: "Portable notebook with smooth multitasking." },
    { id: 18, name: "Chuwi HeroBook Mini", price: 6399, rating: 4.0, image: "https://picsum.photos/seed/lap18/300", category: "Laptop", description: "Sleek design with HD display." },
    { id: 19, name: "JioBook 4G Mini", price: 6999, rating: 4.2, image: "https://picsum.photos/seed/lap19/300", category: "Laptop", description: "4G enabled small-size laptop." },
    { id: 20, name: "RDP ThinBook X1", price: 7499, rating: 4.1, image: "https://picsum.photos/seed/lap20/300", category: "Laptop", description: "Ultra-thin laptop for students." },

    { id: 21, name: "Avita Essential Go", price: 6990, rating: 3.9, image: "https://picsum.photos/seed/lap21/300", category: "Laptop", description: "Minimalistic lightweight laptop." },
    { id: 22, name: "Acer Swift Mini", price: 7999, rating: 4.3, image: "https://picsum.photos/seed/lap22/300", category: "Laptop", description: "Premium feel in budget range." },
    { id: 23, name: "Dell EcoLite 11", price: 7299, rating: 4.2, image: "https://picsum.photos/seed/lap23/300", category: "Laptop", description: "Efficient laptop for office tasks." },
    { id: 24, name: "HP BasicBook 14", price: 6099, rating: 4.0, image: "https://picsum.photos/seed/lap24/300", category: "Laptop", description: "Simple and smooth performance." },
    { id: 25, name: "ASUS CloudMate", price: 6499, rating: 4.1, image: "https://picsum.photos/seed/lap25/300", category: "Laptop", description: "Perfect for browsing & online classes." },

    { id: 26, name: "Lenovo IdeaLite Mini", price: 7099, rating: 4.3, image: "https://picsum.photos/seed/lap26/300", category: "Laptop", description: "Stylish lightweight device." },
    { id: 27, name: "Acer SilverNote S", price: 6799, rating: 4.2, image: "https://picsum.photos/seed/lap27/300", category: "Laptop", description: "Smooth multitasking on a budget." },
    { id: 28, name: "MSI ThinCore", price: 7990, rating: 4.4, image: "https://picsum.photos/seed/lap28/300", category: "Laptop", description: "Slim design with high performance." },
    { id: 29, name: "Samsung BookFlex Lite", price: 7490, rating: 4.3, image: "https://picsum.photos/seed/lap29/300", category: "Laptop", description: "Flexible display, premium look." },
    { id: 30, name: "Realme Book Neo", price: 7590, rating: 4.2, image: "https://picsum.photos/seed/lap30/300", category: "Laptop", description: "Affordable laptop with metal body." }
];

const PriceFilter = () => {

    const [sortType,setSortType]=useState("All")
   const [filteredProducts,setFilteredProducts]=useState<Product[]>(products)

   useEffect(()=>{
    let sorted=[...products]

    if(sortType==="low"){
        sorted.sort((a,b)=>a.price-b.price)
    }
    else if(sortType==="high"){
        sorted.sort((a,b)=>b.price-a.price)
    }
    else{
        sorted=products
    }
    setFilteredProducts(sorted)
   },[sortType])

    return (
        <div className='min-h-screen p-4'>
            <div className='flex items-center justify-center underline text-blue-500'>
                <p className='font-mono text-2xl font-bold mb-4'>Product Card</p>
            </div>

            <div className="mb-4">
                <select
                value={sortType}
                onChange={(e)=>setSortType(e.target.value)}
                    className="border p-2 rounded-md cursor-pointer bg-white shadow-md text-red-500 border-black font-bold"
                >
                     <option value="All">All</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>
            </div>


            <div className='grid grid-cols-5 gap-5'>
                {filteredProducts.map((t) => (
                    <div
                        key={t.id}
                        className='border p-3 rounded-md shadow-md bg-white'
                    >
                        <img
                            src={t.image}
                            alt={t.name}
                            className='w-full h-40 object-cover rounded-md mb-2'
                        />

                        <p className='font-semibold text-lg'>{t.name}</p>
                        <p className='text-sm text-gray-600'>{t.category}</p>
                        <p className='mt-1'>Price: ₹{t.price}</p>
                        <p>Rating: ⭐ {t.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PriceFilter
