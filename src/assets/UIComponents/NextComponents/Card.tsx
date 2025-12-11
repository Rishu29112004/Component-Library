import React from 'react'

export type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  description: string;
};

export const products:Product[] = [
    {
        id: 1,
        name: "Dell Inspiron 15",
        price: 54999,
        rating: 4.3,
        image: "https://picsum.photos/seed/laptop1/300",
        category: "Laptop",
        description: "Powerful 15-inch laptop for everyday work and gaming."
    },
    {
        id: 2,
        name: "HP Pavilion x360",
        price: 62999,
        rating: 4.5,
        image: "https://picsum.photos/seed/laptop2/300",
        category: "Laptop",
        description: "Convertible touchscreen laptop with smooth performance."
    },
    {
        id: 3,
        name: "Apple MacBook Air M1",
        price: 99999,
        rating: 4.8,
        image: "https://picsum.photos/seed/laptop3/300",
        category: "Laptop",
        description: "Lightweight laptop with Apple’s powerful M1 chip."
    },
    {
        id: 4,
        name: "Lenovo IdeaPad Slim 3",
        price: 45999,
        rating: 4.2,
        image: "https://picsum.photos/seed/laptop4/300",
        category: "Laptop",
        description: "Slim and stylish laptop ideal for students."
    },
    {
        id: 5,
        name: "ASUS TUF Gaming F15",
        price: 78999,
        rating: 4.6,
        image: "https://picsum.photos/seed/laptop5/300",
        category: "Laptop",
        description: "High-performance gaming laptop with RTX graphics."
    },
    {
        id: 6,
        name: "Acer Aspire 7",
        price: 56999,
        rating: 4.4,
        image: "https://picsum.photos/seed/laptop6/300",
        category: "Laptop",
        description: "Performance laptop suitable for work and gaming."
    },
    {
        id: 7,
        name: "MSI Modern 14",
        price: 57999,
        rating: 4.3,
        image: "https://picsum.photos/seed/laptop7/300",
        category: "Laptop",
        description: "Sleek ultrabook with long-lasting battery life."
    },
    {
        id: 8,
        name: "Samsung Galaxy Book 2",
        price: 72999,
        rating: 4.5,
        image: "https://picsum.photos/seed/laptop8/300",
        category: "Laptop",
        description: "Fast laptop with AMOLED display."
    },
    {
        id: 9,
        name: "Infinix INBook X2",
        price: 32999,
        rating: 4.1,
        image: "https://picsum.photos/seed/laptop9/300",
        category: "Laptop",
        description: "Budget-friendly laptop with stylish design."
    },
    {
        id: 10,
        name: "LG Gram 14",
        price: 99999,
        rating: 4.7,
        image: "https://picsum.photos/seed/laptop10/300",
        category: "Laptop",
        description: "Ultra-light laptop with premium build quality."
    }
];

const Card = () => {
   return (
        <div className='min-h-screen p-4'>
            <div className='flex items-center justify-center underline text-blue-500'>
                <p className='font-mono text-2xl font-bold mb-4'>Product Card</p>
            </div>

            <div className='grid grid-cols-5 gap-5'>
                {products.map((t) => (
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

export default Card
