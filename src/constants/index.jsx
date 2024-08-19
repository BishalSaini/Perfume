import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { FaCrown } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import { FaFeatherAlt } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";


import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Signature Collection", href: "#signature" },
  { label: "Milestone", href: "#milestone" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Perfume",
  info: "Exquisite fragrances crafted for unforgettable moments and elegance.",
};

export const ABOUT = {
  text1:
    "Discover luxurious fragrances that captivate the senses and embody elegance.",
  text2:
    "Welcome to our world of exquisite perfumes, where each scent is a masterpiece crafted to evoke emotion and leave a lasting impression. Our store is dedicated to curating the finest collection of fragrances that resonate with your unique style and personality. With a passion for quality and an eye for detail, we bring you perfumes that are both timeless and contemporary. Whether you're searching for a signature scent or the perfect gift, our expert team is here to guide you on a fragrant journey. Experience the art of perfumery with us, where every bottle tells a story.",
};

export const COLLECTIONS = [
  {
    title: "Luxury Collection",
    subtitle: "A curated selection of our most luxurious and refined perfumes.",
    image: image1, 
  },
  {
    title: "Floral Essence",
    subtitle: "A beautiful bouquet of floral fragrances for every occasion.",
    image: image2, 
  },
  {
    title: "Citrus Fresh",
    subtitle: "A vibrant collection of citrus-infused scents for a refreshing feel.",
    image: image3, 
  },
  {
    title: "Oriental Mystique",
    subtitle: "An exotic range of oriental fragrances with a touch of mystery.",
    image: image4, 
  },
  {
    title: "Woody Classics",
    subtitle: "A timeless collection of woody scents for the discerning individual.",
    image: image5, 
  },
  {
    title: "Gourmand Delights",
    subtitle: "Indulge in sweet and decadent scents from our gourmand range.",
    image: image6, 
  },
  {
    title: "Summer Breeze",
    subtitle: "Light and airy fragrances perfect for the warm summer months.",
    image: image7, 
  },
  {
    title: "Night Elegance",
    subtitle: "A collection of sophisticated evening scents for special occasions.",
    image: image8, 
  },
];

export const SIGNATURE_COLLECTIONS = [
  {
    icon: <FaCrown className="text-4xl lg:text-6xl text-purple-500" />,
    name: "Royal Collection",
    description: "Exclusive fragrances fit for royalty.",
  },
  {
    icon: <FaGem className="text-4xl lg:text-6xl text-emerald-500" />,
    name: "Gemstone Series",
    description: "Inspired by the elegance of precious gemstones.",
  },
  {
    icon: <FaFeatherAlt className="text-4xl lg:text-6xl text-pink-500" />,
    name: "Feather Touch",
    description: "Light and airy scents that embrace subtlety.",
  },
  {
    icon: <FaFireAlt className="text-4xl lg:text-6xl text-red-500" />,
    name: "Inferno Collection",
    description: "Bold and intense fragrances with a fiery edge.",
  },
  {
    icon: <FaLeaf className="text-4xl lg:text-6xl text-green-500" />,
    name: "Botanical Essence",
    description: "Natural and fresh scents inspired by nature.",
  },
];

export const MILESTONES = {
  title: "5 Years of Excellence",
  milestone: "Celebrating a Decade",
  description:
    "Marking a decade of providing exquisite perfumes and unparalleled customer service. This milestone highlights our journey and success in becoming a trusted name in the fragrance industry.",
};

export const TESTIMONIALS = [
  {
    name: "Aisha Patel",
    title: "Fashion Blogger",
    quote:
      "The fragrances from this store are absolutely enchanting! Each scent feels like a unique journey, and the quality is unmatched. I can’t get enough of their exclusive collections.",
    image: user1,
  },
  {
    name: "Rajesh Kumar",
    title: "Entrepreneur",
    quote:
      "I've never experienced such exquisite perfumes. The selection is phenomenal, and the customer service is exceptional. It's my go-to place for all my fragrance needs.",
    image: user2,
  },
  {
    name: "Nisha Sharma",
    title: "Event Planner",
    quote:
      "Every fragrance from this store tells a story. Their perfumes are perfect for making a statement, whether for a special event or everyday wear. Highly recommended!",
    image: user3,
  },
  {
    name: "Arjun Singh",
    title: "Creative Director",
    quote:
      "This store offers a delightful range of perfumes that are both elegant and sophisticated. Each bottle is a masterpiece, and the experience of shopping here is always enjoyable.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
