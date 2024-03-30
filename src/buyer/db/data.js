import { AiFillStar } from "react-icons/ai";

const localities = [
  "Bandra West, Mumbai",
  "Andheri East, Mumbai",
  "Borivali West, Mumbai",
  "Dahisar East, Mumbai",
  "Goregaon West, Mumbai",
  "Jogeshwari West, Mumbai",
  "Juhu, Mumbai",
  "Kandivali East, Mumbai",
  "Malad West, Mumbai",
  "Vile Parle East, Mumbai",
  // Add more localities as needed
];

const getRandomLocality = () => {
  const randomIndex = Math.floor(Math.random() * localities.length);
  return localities[randomIndex];
};


const data = [
  {
    img: "image 16.png",
    title: "Roofie Roof",//name
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹6,000",//price
    newPrice: "5000",//price
    area: "1200",//area
    locality: getRandomLocality(),
    category: "Terrace",//type
  },
  {
    img: "image 17.png",
    title: "Sunnie's Outland",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹15,000",
    newPrice: "10000",
    area: "4800",
    locality: getRandomLocality(),
    category: "Open Land",
  },

  {
    img: "image 18.png",
    title: "Sunlit Farmstead Terrace",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹7,000",
    newPrice: "5000",
    area: "1100",
    locality: getRandomLocality(),
    category: "Terrace",
  },
  {
    img: "https://bootsandhooveshomestead.com/wp-content/uploads/2023/01/IMG_5321.jpg",
    title: "Skyview Homestead Haven",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹9,000",
    newPrice: "10000",
    area: "2500",
    locality: getRandomLocality(),
    category: "Open Land",
  },
  {
    img: "image 20.png",
    title: "Sunshine Loft Outland",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹16,000",
    newPrice: "15000",
    area: "3000",
    locality: getRandomLocality(),
    category: "Open Land",
  },
  {
    img: "image 21.png",
    title: "Rustic Rooftop Retreat",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹8,000",
    newPrice: "5000",
    area: "1000",
    locality: getRandomLocality(),
    category: "Terrace",
  },

  {
    img: "image 22.png",
    title: "Sunset Balcony Oasis",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹4,500",
    newPrice: "10000",
    area: "600",
    locality: getRandomLocality(),
    category: "Balcony",
  },

  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWzXlbN1MOf6DIKa-qJxIlBictwBCRnlXu15NHDBdGzEhggb40Xd3cdAr8XX5zT2ECklnVV3GRiYNIFJSib1TKb3rclKv9R8q7IepOnK0Xx1Br95TKfd03BZ86cnTNXpdxyMip4_anCnwZ/s280/Roof-top-garden-2013-11-21-08-27gif.gif",
    title: "Windy Hilltop Farmstead",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹18,000",
    newPrice: "15000",
    area: "1500",
    locality: getRandomLocality(),
    category: "Open Land",
  },

  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWzXlbN1MOf6DIKa-qJxIlBictwBCRnlXu15NHDBdGzEhggb40Xd3cdAr8XX5zT2ECklnVV3GRiYNIFJSib1TKb3rclKv9R8q7IepOnK0Xx1Br95TKfd03BZ86cnTNXpdxyMip4_anCnwZ/s280/Roof-top-garden-2013-11-21-08-27gif.gif",
    title: "Twilight Veranda Vista",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹2,000",
    newPrice: "5000",
    area: "700",
    locality: getRandomLocality(),
    category: "Veranda",
  },

  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWzXlbN1MOf6DIKa-qJxIlBictwBCRnlXu15NHDBdGzEhggb40Xd3cdAr8XX5zT2ECklnVV3GRiYNIFJSib1TKb3rclKv9R8q7IepOnK0Xx1Br95TKfd03BZ86cnTNXpdxyMip4_anCnwZ/s280/Roof-top-garden-2013-11-21-08-27gif.gif",
    title: "Moonlit Skyline Loft",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹2,000",
    newPrice: "5000",
    area: "1200",
    locality: getRandomLocality(),
    category: "Apartment",
  },
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWzXlbN1MOf6DIKa-qJxIlBictwBCRnlXu15NHDBdGzEhggb40Xd3cdAr8XX5zT2ECklnVV3GRiYNIFJSib1TKb3rclKv9R8q7IepOnK0Xx1Br95TKfd03BZ86cnTNXpdxyMip4_anCnwZ/s280/Roof-top-garden-2013-11-21-08-27gif.gif",
    title: "Starry Skyfarm Sanctuary",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹9,000",
    newPrice: "10000",
    area: "1500",
    locality: getRandomLocality(),
    category: "Terrace",
  },
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWzXlbN1MOf6DIKa-qJxIlBictwBCRnlXu15NHDBdGzEhggb40Xd3cdAr8XX5zT2ECklnVV3GRiYNIFJSib1TKb3rclKv9R8q7IepOnK0Xx1Br95TKfd03BZ86cnTNXpdxyMip4_anCnwZ/s280/Roof-top-garden-2013-11-21-08-27gif.gif",
    title: "Urban Farmhouse Overlook",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹8,500",
    newPrice: "10000",
    area: "1250",
    locality: getRandomLocality(),
    category: "Open Land",
  },
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWzXlbN1MOf6DIKa-qJxIlBictwBCRnlXu15NHDBdGzEhggb40Xd3cdAr8XX5zT2ECklnVV3GRiYNIFJSib1TKb3rclKv9R8q7IepOnK0Xx1Br95TKfd03BZ86cnTNXpdxyMip4_anCnwZ/s280/Roof-top-garden-2013-11-21-08-27gif.gif",
    title: "Sunrise Rooftop Refuge",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹7,500",
    newPrice: "5000",
    area: "800",
    locality: getRandomLocality(),
    category: "Terrace",
  },
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWzXlbN1MOf6DIKa-qJxIlBictwBCRnlXu15NHDBdGzEhggb40Xd3cdAr8XX5zT2ECklnVV3GRiYNIFJSib1TKb3rclKv9R8q7IepOnK0Xx1Br95TKfd03BZ86cnTNXpdxyMip4_anCnwZ/s280/Roof-top-garden-2013-11-21-08-27gif.gif",
    title: "Cloud Nine Balcony Hideaway",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹3,500",
    newPrice: "5000",
    area: "750",
    locality: getRandomLocality(),
    category: "Balcony",
  },

  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWzXlbN1MOf6DIKa-qJxIlBictwBCRnlXu15NHDBdGzEhggb40Xd3cdAr8XX5zT2ECklnVV3GRiYNIFJSib1TKb3rclKv9R8q7IepOnK0Xx1Br95TKfd03BZ86cnTNXpdxyMip4_anCnwZ/s280/Roof-top-garden-2013-11-21-08-27gif.gif",
    title: "Sunset Ridge Outland",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹9,000",
    newPrice: "10000",
    area: "1300",
    locality: getRandomLocality(),
    category: "Open Land",
  },
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWzXlbN1MOf6DIKa-qJxIlBictwBCRnlXu15NHDBdGzEhggb40Xd3cdAr8XX5zT2ECklnVV3GRiYNIFJSib1TKb3rclKv9R8q7IepOnK0Xx1Br95TKfd03BZ86cnTNXpdxyMip4_anCnwZ/s280/Roof-top-garden-2013-11-21-08-27gif.gif",
    title: "Starlit Farmstead Terrace",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹4,000",
    newPrice: "10000",
    area: "1100",
    locality: getRandomLocality(),
    category: "Terrace",
  },
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWzXlbN1MOf6DIKa-qJxIlBictwBCRnlXu15NHDBdGzEhggb40Xd3cdAr8XX5zT2ECklnVV3GRiYNIFJSib1TKb3rclKv9R8q7IepOnK0Xx1Br95TKfd03BZ86cnTNXpdxyMip4_anCnwZ/s280/Roof-top-garden-2013-11-21-08-27gif.gif",
    title: "Cozy Cabin Rooftop",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "₹2,000",
    newPrice: "5000",
    area: "750",
    locality: getRandomLocality(),
    category: "Terrace",
  },
];

export default data;
