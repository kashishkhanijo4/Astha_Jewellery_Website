import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Box from '../Box'
import Silver from '../components/Silver';
import IndexCard from '../components/IndexCard';
import SmallCards from '../components/SmallCards';
import axios from '../Api/axios/axios_config'; 
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import img from '../assets/about-img.jpg'
import video from '../assets/jewelry.mp4'

const Home = () => {
  // for Feature product 
  const [indexCard, setIndexCard] = useState([]);

  useEffect(() => {

    axios.get('/api/featured-products/get', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.data) {
          setIndexCard(response.data);
        } else {
          toast.error('Failed to fetch feature products.');
        }
      })
      .catch(error => {
        toast.error('An error occurred while fetching feature products.');
      });

  }, []);
//for slide image 
  const [carouselImages, setCarouselImages] = useState([]);

  const arrayBufferToBase64 = (buffer) => {
    const binary = [];
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.length; i++) {
      binary.push(String.fromCharCode(bytes[i]));
    }
    return window.btoa(binary.join(''));
  };

  useEffect(() => {
    

    axios.get('/api/slide-images/get', {
      headers: {
        'Content-Type': 'application/json',
        
      },
    })
    .then(response => {
      if (response.data && response.data.length > 0) {
        // Convert each image data to base64 format
        const images = response.data.map(image => {
          if (image.images && image.images.length > 0 && image.images[0].data.data.length > 0) {
            const base64String = arrayBufferToBase64(image.images[0].data.data);
            return `data:${image.images[0].contentType};base64,${base64String}`;
          }
          return 'placeholder-image-url'; // Fallback in case of missing data
        });
        setCarouselImages(images);
      } else {
        toast.error('No carousel images available');
      }
    })
    .catch(error => {
      toast.error('An error occurred while fetching carousel images.');
    });

  }, []);

//for silver image
const [silverItems, setSilverItems] = useState([]);

useEffect(() => {

  axios
    .get('/api/silver-temple/get', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.data && response.data.length > 0) {
        // Process each silver item and convert its images to base64
        const silverData = response.data.map((item) => {
          const base64Pic = item.images?.[0]?.data?.data?.length
            ? `data:${item.images[0].contentType};base64,${arrayBufferToBase64(item.images[0].data.data)}`
            : 'placeholder-image-url';

          // Corrected hoverImage access as an object
          const base64HoverImage = item.hoverImage?.data?.data?.length
            ? `data:${item.hoverImage.contentType};base64,${arrayBufferToBase64(item.hoverImage.data.data)}`
            : 'placeholder-image-url';

          return {
            pic: base64Pic,
            hoverImage: base64HoverImage,
            // title: item.title || 'Default Title',
            name: item.name || 'Default Name',
            price: item.price ? `₹${item.price}` : 'Price Not Available',
          };
        });
        setSilverItems(silverData);
      } else {
        toast.error('No silver items available.');
      }
    })
    .catch((error) => {
      toast.error('Error fetching silver items.');
    });
}, []);


//for trending image

const [trending, setTrending] = useState([]);

  useEffect(() => {
   

    axios
      .get('/api/trending-products/get', {
        headers: {
          'Content-Type': 'application/json',
          
        },
      })
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const trendingData = response.data.map((item) => {
            const base64Image = item.images && item.images.length > 0 && item.images[0].data.data.length
              ? `data:${item.images[0].contentType};base64,${arrayBufferToBase64(item.images[0].data.data)}`
              : 'placeholder-image-url'; // Fallback image

            return {
              image: base64Image,
              label: item.name || 'No label',
              id: item._id,
            };
          });
          setTrending(trendingData);
        } else {
          toast.error('No trending products available.');
        }
      })
      .catch((error) => {
        toast.error('Error fetching trending products.');
      });
  }, []);

// for collection 
const [collections, setCollections] = useState([]);
useEffect(() => {
 

  axios.get('api/collections/get', {
    headers: {
      'Content-Type': 'application/json',
      
    },
  })
    .then(response => {
      if (response.data) {
        setCollections(response.data);
      } else {
        toast.error('Failed to fetch feature products.');
      }
    })
    .catch(error => {
      toast.error('An error occurred while fetching feature products.');
    });

}, []);

//for sample product
const [sampleProducts, setSampleProducts] = useState([]);
useEffect(() => {

  axios.get('/api/sample-products/get', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.data) {
        setSampleProducts(response.data);
      } else {
        toast.error('Failed to fetch feature products.');
      }
    })
    .catch(error => {
      toast.error('An error occurred while fetching feature products.');
    });

}, []);

//for golden bangle
const [goldenBangles, setGoldenBangles] = useState([]);
useEffect(() => {
 

  axios
    .get('/api/golden-bangles/get', {
      headers: {
        'Content-Type': 'application/json',
        
      },
    })
    .then((response) => {
      if (response.data && response.data.length > 0) {
        // Process each silver item and convert its images to base64
        const goldenData = response.data.map((item) => {
          const base64Pic = item.images?.[0]?.data?.data?.length
            ? `data:${item.images[0].contentType};base64,${arrayBufferToBase64(item.images[0].data.data)}`
            : 'placeholder-image-url';

          // Corrected hoverImage access as an object
          const base64HoverImage = item.hoverImage?.data?.data?.length
            ? `data:${item.hoverImage.contentType};base64,${arrayBufferToBase64(item.hoverImage.data.data)}`
            : 'placeholder-image-url';

          return {
            pic: base64Pic,
            hoverImage: base64HoverImage,
            // title: item.title || 'Default Title',
            name: item.name || 'Default Name',
            price: item.price ? `₹${item.price}` : 'Price Not Available',
          };
        });
        setGoldenBangles(goldenData);
      } else {
        toast.error('No silver items available.');
      }
    })
    .catch((error) => {
      toast.error('Error fetching silver items.');
    });
}, []);

  return (
    <div style={{overflowX:'hidden'}}>
      <div className="hero-section">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
                style={{ width: '15px' }}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {carouselImages.map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{`Slide ${index + 1}`}</h5>
                  <p>Some representative placeholder content for the {index + 1} slide.</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* info section  */}

      <div class="row d-flex m-0">
        <div class="col-md-3 col-6 add-section d-flex flex-column align-items-center justify-content-center gap-3">
          <i class="fa-solid fa-users"></i>
          <span>20 Lakh+ Customers</span>
        </div>
        <div class="col-md-3 col-6 add-section d-flex flex-column align-items-center justify-content-center gap-3">
          <i class="fa-solid fa-person-walking-arrow-loop-left"></i>
          <span>15 Days Return</span>
        </div>
        <div class="col-md-3 col-6 add-section d-flex flex-column align-items-center justify-content-center gap-3">
          <i class="fa-solid fa-truck-fast"></i>
          <span>Free Shipping Available</span>
        </div>
        <div class="col-md-3 col-6 add-section d-flex flex-column align-items-center justify-content-center gap-3">
          <i class="fa-solid fa-wallet"></i>
          <span>Cash on Delivery</span>

        </div>
      </div>

      {/* feature-product  */}
      <div className="feature-card row d-flex justify-content-center align-items-center">
      <h1 className='feature-title m-0'>Our Feature Product</h1>
      {indexCard.length > 0 ? (
        indexCard.map(d => (
          <div className="col-md-3 card-image mt-5" key={d.id}>
            <IndexCard data={d}/>
          </div>
        ))
      ) : (
        <div className="spinner-overlay d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
      )}
    </div>

    <div className="scroll-cards" style={{ paddingBottom: "70px" }}>
      <div className="scroll-heading d-flex justify-content-between align-items-center px-3">
        <h1 className='title-silver'>92.5 Silver Temple Edit</h1>
        <Link to="#">View More</Link>
      </div>
      <div className="row row-card d-flex justify-content-center align-items-center" style={{marginRight:'14px'}}>
        {silverItems.length > 0 ? (
          silverItems.map((d, index) => (
            <Silver key={index} silverImage={d} />
          ))
        ) : (
          <div className="spinner-overlay d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
        )}
      </div>
    </div>

    <div className="feature-card row d-flex justify-content-center align-items-center">
      <h1 className='feature-title m-0'>Our Collection Product</h1>
      {collections.length > 0 ? (
        collections.map(d => (
          <div className="col-md-3 card-image mt-5" key={d.id}>
            <IndexCard data={d}/>
          </div>
        ))
      ) : (
        <div className="spinner-overlay d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
      )}
    </div>


    <div className='conatiner d-flex flex-column gap-4'>
        <h1 style={{ fontSize: '29px', marginLeft: '48px' }}> Our Trending Categories </h1>
        <div className='small-cards d-flex justify-content-center align-items-center' style={{gap:'1.125rem'}}>
        {trending.length > 0 ? (
          trending.map((d) => <SmallCards data={d} key={d.id} />)
        ) : (
          <div className="spinner-overlay d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
        )}
        </div>
      </div>

    <div className="scroll-cards" style={{ paddingBottom: "70px" }}>
      <div className="scroll-heading d-flex justify-content-between align-items-center px-3">
        <h1 className='title-silver '>Golden Bangles</h1>
        <Link to="#">View More</Link>
      </div>
      <div className="row row-card d-flex justify-content-center align-items-center" style={{marginRight:'14px'}}>
        {goldenBangles.length > 0 ? (
          goldenBangles.map((d, index) => (
            <Silver key={index} silverImage={d} />
          ))
        ) : (
          <div className="spinner-overlay d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
        )}
      </div>
    </div>

     
    <div className="feature-card row d-flex justify-content-center align-items-center">
      {/* <h1 className='feature-title m-0'>Our Feature Product</h1> */}
      {sampleProducts.length > 0 ? (
        sampleProducts.map(d => (
          <div className="col-md-3 card-image mt-5" key={d.id}>
            <IndexCard data={d}/>
          </div>
        ))
      ) : (
        <div className="spinner-overlay d-flex justify-content-center align-items-center">
          <Spinner />
        </div>
      )}
    </div>

      <div style={{marginTop:'30px', paddingTop:'50px'}} className=' d-flex justify-content-center align-items-center'>
      <video src={video} autoPlay muted loop style={{width:'1411px'}} className='video-card'></video>
      </div>
    
      {/* about-section  */}
      <section class="about_section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="img-box">
            <img src={img} alt=""/>
          </div>
        </div>
        <div class="col-md-6" style={{marginTop:'50px'}}>
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                About Us
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.
            </p>
            <Link to="AboutPage">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
      <Box />

    </div>

  );
};

export default Home;
