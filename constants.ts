import { MenuItem, Review, InstagramPost } from './types';

export const BUSINESS_INFO = {
  name: "Golden Majestic Bakery",
  tagline: "Baking Excellence Since 1922",
  address: "Sr. no. 13/7/1, Hissa no. 2, Yewalewadi, Kondhwa Bk, Pune – 411048",
  phone: "9075034000 / 9604494000",
  email: "goldenmajestic1922@gmail.com",
  hours: "Mon-Sun: 7:00 AM - 10:00 PM",
  about: "Golden Majestic Bakery has been a cornerstone of taste and tradition since 1922. Located in the heart of Yewalewadi, Pune, we pride ourselves on delivering the freshest breads, iconic Shrewsberry biscuits, and delectable cakes. Our recipes have been passed down through generations, ensuring every bite carries a legacy of quality.",
  locationLink: "https://maps.app.goo.gl/U3FDzX427rtZuvpS6",
  socials: {
    instagram: "https://www.instagram.com/goldenmajesticbakery/", // Assumed handle based on name
    facebook: "https://www.facebook.com/GoldenMajesticBakery/",
    whatsapp: "https://wa.me/919075034000" // Direct WhatsApp link
  }
};

const BREAD_IMAGE = "https://images.unsplash.com/photo-1598373182133-52452f7692e8?q=80&w=800&auto=format&fit=crop";
const BISCUIT_IMAGE = "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=800&auto=format&fit=crop";

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'p1',
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop',
    caption: 'Fresh batch of Tutti Frutti biscuits straight from the oven! 🍪✨ #GoldenMajestic #PuneBakery',
    likes: 124,
    link: BUSINESS_INFO.socials.instagram
  },
  {
    id: 'p2',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    caption: 'Our signature Whole Wheat Bread. Healthy never tasted so good. 🍞❤️ #DailyBread #PuneFoodie',
    likes: 89,
    link: BUSINESS_INFO.socials.instagram
  },
  {
    id: 'p3',
    imageUrl: 'https://images.unsplash.com/photo-1618413154867-27b613143c7b?q=80&w=800&auto=format&fit=crop',
    caption: 'The legend itself: Shrewsberry Biscuits. Perfect for your evening chai. ☕️',
    likes: 245,
    link: BUSINESS_INFO.socials.instagram
  },
  {
    id: 'p4',
    imageUrl: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=800&auto=format&fit=crop',
    caption: 'Mawa Cake dreams. Dense, rich, and absolutely majestic. 👑',
    likes: 156,
    link: BUSINESS_INFO.socials.instagram
  },
  {
    id: 'p5',
    imageUrl: 'https://images.unsplash.com/photo-1586765798722-6b95c010c79d?q=80&w=800&auto=format&fit=crop',
    caption: 'Sandwich breads ready for delivery! Call us for bulk orders. 📞',
    likes: 92,
    link: BUSINESS_INFO.socials.instagram
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // Breads
  {
    id: 'b1',
    name: 'Whole Wheat Bread (400g)',
    description: 'Healthy and hearty whole wheat loaf.',
    price: '₹50',
    category: 'Daily Breads',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 'b2',
    name: 'White Bread (700g)',
    description: 'Classic family-sized white loaf, soft and fresh.',
    price: '₹60',
    category: 'Daily Breads',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 'b3',
    name: 'White Bread (600g)',
    description: 'Medium-sized white loaf for everyday use.',
    price: '₹55',
    category: 'Daily Breads',
    image: BREAD_IMAGE,
    available: true
  },
  {
    id: 'b4',
    name: 'Sandwich Bread (1 kg)',
    description: 'Jumbo sandwich loaf, perfect for cafes and large families.',
    price: '₹90',
    category: 'Daily Breads',
    image: 'https://images.unsplash.com/photo-1586765798722-6b95c010c79d?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 'b5',
    name: 'Lite Bread (400g)',
    description: 'Light and airy texture, perfect for toasts.',
    price: '₹40',
    category: 'Daily Breads',
    image: BREAD_IMAGE,
    available: true
  },
  {
    id: 'b6',
    name: 'Lite Bread (300g)',
    description: 'Small lite loaf.',
    price: '₹30',
    category: 'Daily Breads',
    image: BREAD_IMAGE,
    available: true
  },
  {
    id: 'b7',
    name: 'White Bread (300g)',
    description: 'Small white loaf.',
    price: '₹30',
    category: 'Daily Breads',
    image: BREAD_IMAGE,
    available: true
  },
  {
    id: 'b8',
    name: 'Soft Slice Bread (400g)',
    description: 'Extra soft slices, melts in your mouth.',
    price: '₹35',
    category: 'Daily Breads',
    image: 'https://images.unsplash.com/photo-1608661608752-1678229b359f?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 'b9',
    name: 'Sandwich Bread (800g)',
    description: 'Large sandwich loaf.',
    price: '₹70',
    category: 'Daily Breads',
    image: BREAD_IMAGE,
    available: true
  },
  {
    id: 'b10',
    name: 'Sandwich Bread (500g)',
    description: 'Standard sandwich loaf.',
    price: '₹45',
    category: 'Daily Breads',
    image: BREAD_IMAGE,
    available: true
  },
  {
    id: 'b11',
    name: 'Sandwich Bread (400g)',
    description: 'Small sandwich loaf.',
    price: '₹35',
    category: 'Daily Breads',
    image: BREAD_IMAGE,
    available: true
  },
  {
    id: 'b12',
    name: 'Puneri Bread (350g)',
    description: 'Traditional local favorite.',
    price: '₹35',
    category: 'Daily Breads',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e36523959?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 'b13',
    name: 'Pound Bread (450g)',
    description: 'Classic pound loaf weight.',
    price: '₹40',
    category: 'Daily Breads',
    image: BREAD_IMAGE,
    available: true
  },
  {
    id: 'b14',
    name: 'Family Bread (900g)',
    description: 'The big loaf for the whole family.',
    price: '₹80',
    category: 'Daily Breads',
    image: 'https://images.unsplash.com/photo-1615591321481-4b1a10065d66?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 'b15',
    name: 'Family Bread (800g)',
    description: 'Large family size.',
    price: '₹70',
    category: 'Daily Breads',
    image: BREAD_IMAGE,
    available: true
  },
  {
    id: 'b16',
    name: 'Brown Bread (400g)',
    description: 'Rich and nutritious brown bread.',
    price: '₹45',
    category: 'Daily Breads',
    image: 'https://images.unsplash.com/photo-1548590868-b74a27457723?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 'b17',
    name: 'Baby Softy Bread (200g)',
    description: 'Mini soft loaf, perfect for snacks.',
    price: '₹21',
    category: 'Daily Breads',
    image: BREAD_IMAGE,
    available: true
  },
  {
    id: 'b18',
    name: 'Baby Softy Bread (100g)',
    description: 'Single serving mini loaf.',
    price: '₹10',
    category: 'Daily Breads',
    image: BREAD_IMAGE,
    available: true
  },

  // Biscuits & Cookies
  {
    id: 'c1',
    name: 'Shrewsberry Biscuit',
    description: 'The classic Pune specialty. Buttery, sweet, and crisp.',
    price: 'Inquire',
    category: 'Biscuits & Cookies',
    image: 'https://images.unsplash.com/photo-1618413154867-27b613143c7b?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 'c2',
    name: 'Tutti Fruit Biscuit',
    description: 'Crunchy biscuits studded with colorful candied fruits.',
    price: 'Inquire',
    category: 'Biscuits & Cookies',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 'c3',
    name: 'Mawa Cake',
    description: 'Rich, dense, and moist milk-based cake.',
    price: 'Inquire',
    category: 'Cakes & Pastries',
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 'c4',
    name: 'Choco Chips Biscuit',
    description: 'Loaded with real chocolate chips.',
    price: 'Inquire',
    category: 'Biscuits & Cookies',
    image: 'https://images.unsplash.com/photo-1499636138143-bd649043ea52?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 'c5',
    name: 'Coconut Biscuit',
    description: 'Sweet coconut crunch in every bite.',
    price: 'Inquire',
    category: 'Biscuits & Cookies',
    image: 'https://images.unsplash.com/photo-1557089706-68d02dbda277?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 'c6',
    name: 'Karela Biscuit',
    description: 'Unique savory spiced biscuit.',
    price: 'Inquire',
    category: 'Biscuits & Cookies',
    image: BISCUIT_IMAGE,
    available: true
  },
  {
    id: 'c7',
    name: 'Til Biscuit',
    description: 'Sesame seed encrusted biscuits.',
    price: 'Inquire',
    category: 'Biscuits & Cookies',
    image: BISCUIT_IMAGE,
    available: true
  },
  {
    id: 'c8',
    name: 'Jam Biscuit',
    description: 'Thumbprint style biscuits with a sweet jam center.',
    price: 'Inquire',
    category: 'Biscuits & Cookies',
    image: 'https://images.unsplash.com/photo-1621236378699-8597faf6a176?q=80&w=800&auto=format&fit=crop',
    available: true
  },
  {
    id: 'c9',
    name: 'Aflatoon Biscuit',
    description: 'Rich and nutty traditional biscuit.',
    price: 'Inquire',
    category: 'Biscuits & Cookies',
    image: BISCUIT_IMAGE,
    available: true
  },
  {
    id: 'c10',
    name: 'Bread Roll',
    description: 'Soft savory rolls.',
    price: 'Inquire',
    category: 'Snacks',
    image: BREAD_IMAGE,
    available: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: "Priya Sharma",
    rating: 5,
    text: "The Shrewsberry biscuits are authentic and absolutely delicious! Just like the classic Pune taste.",
    date: "1 week ago"
  },
  {
    id: 'r2',
    author: "Rahul Deshmukh",
    rating: 5,
    text: "Been buying their Whole Wheat bread for years. Always fresh and soft.",
    date: "1 month ago"
  },
  {
    id: 'r3',
    author: "Amit Patel",
    rating: 4,
    text: "Great variety of daily breads. The staff is very polite and helpful.",
    date: "2 weeks ago"
  }
];