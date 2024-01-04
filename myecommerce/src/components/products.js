// import laptop1 from '../assets/images/laptop2.jpg'
// import laptop2 from '../assets/images/laptop2.jpeg'
// import laptop3 from '../assets/images/laptop2.jpeg'
// import laptop4 from '../assets/images/laptop2.jpeg'
// import laptop5 from '../assets/images/laptop2.jpeg'
// import laptop6 from '../assets/images/laptop2.jpeg'
// import laptop7 from '../assets/images/laptop2.jpeg'
// import laptop8 from '../assets/images/laptop2.jpeg'
// import laptop9 from '../assets/images/laptop2.jpeg'
// import laptop10 from '../assets/images/laptop2.jpeg'
// import laptop2 from '../assets/images/laptop2.jpeg'


const products = [
    {
        _id: '1',
        name: 'Dell XPS 13',
        image: '/images/laptop1.jpg',
        description: 'Premium ultrabook with InfinityEdge display',
        brand: 'Dell',
        category: 'Ultrabook',
        price: 1299.99,
        countInStock: 20,
        rating: 4.7,
        numReviews: 15
    },
    {
        _id: '2',
        name: 'MacBook Air',
        image: '/images/laptop2.jpeg',
        description: 'Lightweight laptop with Retina display',
        brand: 'Apple',
        category: 'Laptop',
        price: 999.99,
        countInStock: 18,
        rating: 4.5,
        numReviews: 20
    },
    {
        _id: '3',
        name: 'HP Spectre x360',
        image: '/images/laptop3.jpeg',
        description: 'Convertible laptop with 4K display',
        brand: 'HP',
        category: 'Convertible',
        price: 1499.99,
        countInStock: 15,
        rating: 4.8,
        numReviews: 25
    },
    
    {
        _id: '4',
        name: 'Lenovo ThinkPad X1 Carbon',
        image: '/images/laptop4.jpeg',
        description: 'Business-class laptop with durable build',
        brand: 'Lenovo',
        category: 'Business',
        price: 1399.99,
        countInStock: 12,
        rating: 4.6,
        numReviews: 22
    },
    {
        _id: '5',
        name: 'Dell XPS 13',
        image: '/images/laptop5.jpeg',
        description: 'Premium ultrabook with InfinityEdge display',
        brand: 'Dell',
        category: 'Ultrabook',
        price: 1299.99,
        countInStock: 20,
        rating: 4.7,
        numReviews: 15
    },
    {
        _id: '6',
        name: 'MacBook Air',
        image: '/images/laptop6.jpeg',
        description: 'Lightweight laptop with Retina display',
        brand: 'Apple',
        category: 'Laptop',
        price: 999.99,
        countInStock: 18,
        rating: 4.5,
        numReviews: 20
    },
    {
        _id: '7',
        name: 'HP Spectre x360',
        image: '/images/laptop7.jpeg',
        description: 'Convertible laptop with 4K display',
        brand: 'HP',
        category: 'Convertible',
        price: 1499.99,
        countInStock: 15,
        rating: 4.8,
        numReviews: 25
    },
    {
        _id: '8',
        name: 'Asus ZenBook 14',
        image: '/images/laptop8.jpeg',
        description: 'Thin and light ultrabook with NanoEdge display',
        brand: 'Asus',
        category: 'Ultrabook',
        price: 1099.99,
        countInStock: 25,
        rating: 4.6,
        numReviews: 18
    },
    {
        _id: '9',
        name: 'Acer Predator Helios 300',
        image: '/images/laptop9.jpeg',
        description: 'Gaming laptop with high-refresh-rate display',
        brand: 'Acer',
        category: 'Gaming',
        price: 1299.99,
        countInStock: 10,
        rating: 4.9,
        numReviews: 30
    },
    
    {
        _id: '10',
        name: 'Lenovo Yoga C940',
        image: '/images/laptop10.jpeg',
        description: '2-in-1 laptop with a 14-inch touchscreen',
        brand: 'Lenovo',
        category: 'Convertible',
        price: 1299.99,
        countInStock: 22,
        rating: 4.5,
        numReviews: 24
    },
    {
        _id: '11',
        name: 'Razer Blade 15',
        image: '/images/laptop1.jpeg',
        description: 'Powerful gaming laptop with RTX graphics',
        brand: 'Razer',
        category: 'Gaming',
        price: 1799.99,
        countInStock: 8,
        rating: 4.7,
        numReviews: 28
    },
    {
        _id: '12',
        name: 'LG Gram 17',
        image: '/images/laptop2.jpeg',
        description: 'Ultra-lightweight laptop with a large 17-inch display',
        brand: 'LG',
        category: 'Laptop',
        price: 1499.99,
        countInStock: 12,
        rating: 4.4,
        numReviews: 16
    },
    {
        _id: '13',
        name: 'Microsoft Surface Book 3',
        image: '/images/laptop3.jpeg',
        description: 'Detachable 2-in-1 laptop with a dedicated GPU',
        brand: 'Microsoft',
        category: 'Convertible',
        price: 1999.99,
        countInStock: 14,
        rating: 4.6,
        numReviews: 26
    },
    {
        _id: '14',
        name: 'HP Envy x360',
        image: '/images/laptop4.jpeg',
        description: 'Convertible laptop with AMD Ryzen processor',
        brand: 'HP',
        category: 'Convertible',
        price: 1199.99,
        countInStock: 20,
        rating: 4.3,
        numReviews: 22
    },
    {
        _id: '15',
        name: 'Acer Swift 3',
        image: '/images/laptop5.jpeg',
        description: 'Thin and light laptop with Ryzen 5 processor',
        brand: 'Acer',
        category: 'Laptop',
        price: 899.99,
        countInStock: 15,
        rating: 4.6,
        numReviews: 18
    },
    {
        _id: '16',
        name: 'Asus ROG Zephyrus G14',
        image: '/images/laptop6.jpeg',
        description: 'Compact gaming laptop with RTX graphics',
        brand: 'Asus',
        category: 'Gaming',
        price: 1499.99,
        countInStock: 12,
        rating: 4.8,
        numReviews: 20
    },
    {
        _id: '17',
        name: 'Lenovo Legion 5',
        image: '/images/laptop7.jpeg',
        description: 'Budget-friendly gaming laptop with AMD Ryzen 7',
        brand: 'Lenovo',
        category: 'Gaming',
        price: 1099.99,
        countInStock: 18,
        rating: 4.5,
        numReviews: 15
    },
    {
        _id: '18',
        name: 'Dell Inspiron 14',
        image: '/images/laptop8.jpeg',
        description: 'Affordable laptop for everyday use',
        brand: 'Dell',
        category: 'Laptop',
        price: 699.99,
        countInStock: 25,
        rating: 4.2,
        numReviews: 12
    },
    {
        _id: '19',
        name: 'Microsoft Surface Laptop Go',
        image: '/images/laptop9.jpeg',
        description: 'Compact and lightweight laptop for on-the-go',
        brand: 'Microsoft',
        category: 'Laptop',
        price: 799.99,
        countInStock: 20,
        rating: 4.1,
        numReviews: 10
    },
    {
        _id: '20',
        name: 'HP Pavilion x360',
        image: '/images/laptop10.jpeg',
        description: 'Entry-level convertible laptop with touchscreen',
        brand: 'HP',
        category: 'Convertible',
        price: 899.99,
        countInStock: 15,
        rating: 4.0,
        numReviews: 8
    }
];
export default products