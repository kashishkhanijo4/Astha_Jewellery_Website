import image1 from './assets/IMG_1088.JPG';
import image2 from './assets/IMG_1089.JPG';

import image3 from './assets/IMG_1093.JPG';
import image4 from './assets/IMG_1120.JPG';
import image8 from './assets/IMG_1124.JPG';
import image9 from './assets/IMG_1135.JPG';
import image10 from './assets/IMG_1146.JPG';
import image5 from './assets/IMG_1088.JPG';
import image6 from './assets/IMG_1094.JPG';

import image7 from './assets/WhatsApp Image 2024-02-04 at 00.12.10_8a5e0f74.jpg';
import necklaceImage from './assets/necklace.avif';


export const indexCard = [
    {
        id:1,
        image:image9
    },
    {
        id:2,
        image:image10
    },
    {
        id:3,
        image:image6
    },
    {
        id:4,
        image:image2
    },
    {
        id:5,
        image:image3
    },
    {
        id:6,
        image:image4
    },
    {
        id:7,
        image:image7
    },
    {
        id:8,
        image:image8
    },
]

export const products = [
  { id: 1, name: ' Chain', price: 'Rs 1590/-', pic: image1 , hoverImage: image9 },
  { id: 2, name: ' Chain', price: 'Rs 1590/-', pic:image3, hoverImage: image4 },
  { id: 3, name: ' Chain', price: 'Rs 1590/-', pic:image2, hoverImage: image10 },
  { id: 4, name: ' Chain', price: 'Rs 1590/-', pic:image7, hoverImage: image8 },
  { id: 5, name: ' Chain', price: 'Rs 1590/-', pic:image9, hoverImage: image10 },
];

export const categories = [
  { id: 1, label: 'Necklace', image: necklaceImage },
  { id: 2, label: 'Necklace', image: image6 },
  { id: 3, label: 'Necklace', image: image7 },
  { id: 4, label: 'Necklace', image: image9 },
  { id: 5, label: 'Necklace', image: image10 },
  { id: 6, label: 'Necklace', image: image4 },
  { id: 7, label: 'Necklace', image: image3 },
  { id: 8, label: 'Necklace', image: image2 },
  { id: 9, label: 'Necklace', image: image1 },
];
export const reviewsbuynow = [
    {
      rating: 4.5,
      totalReviews: 25,
      reviewText: 'Very nice product. Loved it.',
      reviewerName: 'SREELAKSHMI T.',
      reviewerImage: image2,
      photos: [
        image2,
        image2,
        image2,
        image2,
        image2,
        image2,
        image2,
      ],
    },
  ];

export const reviews = [
    {
      name: 'Renuka',
      date: '8/12/2024',
      rating: 4,
      comment: 'Very nice products',
      imgSrc: image2,
      productName: 'Trendy Necklace 67689'
    },

];

export  const addresses = [
    {
      id: 1,
      name: "Kashish Khanijo",
      addressLine1: "Tej Colony",
      addressLine2: "Rohtak, HR",
      country: "India",
      zipcode: "123213",
      phone: "9999991223",
      isDefault: true,
    },
  ];
  
  export const comment=[
    {
      id:1,
      name:'SREELAKSHMI T.',
      isVerified:'Verified',
      comment:'Very nice product. loved it',
      commentImage: image5,
    },
    {
      id:2,
      name:'SREELAKSHMI T.',
      isVerified:'Verified',
      comment:'Very nice product. loved it',
      commentImage: image5,
    },
    {
      id:3,
      name:'SREELAKSHMI T.',
      isVerified:'Verified',
      comment:'Very nice product. loved it',
      commentImage: image5,
    },
    {
      id:4,
      name:'SREELAKSHMI T.',
      isVerified:'Verified',
      comment:'Very nice product. loved it',
      commentImage: image5,
    },
    {
      id:5,
      name:'SREELAKSHMI T.',
      isVerified:'Verified',
      comment:'Very nice product. loved it',
      commentImage: image5,
    }
  ]