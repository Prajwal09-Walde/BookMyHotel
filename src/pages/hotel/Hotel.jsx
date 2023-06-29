import './Hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'


const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/378319251.jpg?k=aa337e4dc8efc3aec99d86c44a606c7ba7712ca7cc6797e95705ce29457b375b&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/289854981.jpg?k=2709016be1c8a542f9a3a75510ce8c84c79347e101decee5f41157d2e08ef928&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/378319239.jpg?k=824eee91f8dc1cb50bdee30eed357ddc534b999092ffc1bd6c39cab20f55546f&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/378319249.jpg?k=602c32737111c9e6d865640c543fe39c8497acafb0af283cdb98a00a2e2baf25&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/169628257.jpg?k=2e701204a4a41d56c94aa3b941ba356562112cfe87d28c6b715779f7425e9712&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/289854973.jpg?k=7172106b021867a68da4c9554e4ff2a9943df742ec9f75f3a9eb2d1894ff1c70&o=&hp=1'
    }
  ];
  
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1; 
    }

    setSlideNumber(newSlideNumber)
  }
  
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='hotelContainer'>
        {open && (
          <div className='slider'>
            <FontAwesomeIcon 
               icon={faCircleXmark}
               className='close'
               onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
               icon={faCircleArrowLeft}
               className='arrow'
               onClick={() => handleMove("l")}
            />
            <div className='sliderWrapper'>
              <img src={photos[slideNumber].src} alt='' className='sliderImage'/>
            </div>
            <FontAwesomeIcon
               icon={faCircleArrowRight}
               className='arrow'
               onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className='hotelWrapper'>
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className='hotelTitle'>FabHotel RK International</h1> 
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Shahnawaz Building, 1st Floor, 400070, Mumbai, India</span>
          </div>
          <span className='hotelDist'>
            Excellent Location 1.3 km from the center.
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over ₹ 33,925
          </span>
          <div className='hotelImages'>
            {photos.map((photo, i) => (
            <div className='hotelImageWrapper' key={i}>
              <img
                onClick={() => handleOpen(i)}
                src={photo.src}
                alt=''
                className='hotelImage'
              />
            </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsText'>
              <h1 className='hotelTitle'>Stay at the Heart of the city</h1>
              <p className='hotelDesc'>
                FabHotel RK International is located on Kale Marg in Kurla West. Bandra-Kurla Complex, is 1.9 mi away while Kurla Bus Station is 1.7 mi away. Chhatrapati Shivaji International Airport is 3.1 mi from the property and Lokmanya Tilak Terminus is 2.4 mi away.

                Each room is well-equipped with free WiFi, air conditioning, a wardrobe, intercom facility, an electric kettle with provisions for making coffee and tea, a flat-screen TV. There is an attached bathroom with hot water facility and toiletries. Some rooms are plush with a sofa chair, a luggage shelf, a study table/chair, a mini fridge, and shower cabinets.

                In addition to all these, guests can avail a buffet breakfast. Other facilities such as laundry service and 24/7 room service are available.

                The hotel is very conveniently located near many hospitals, restaurants, corporate offices, tourist attractions, and shopping malls. Significant landmarks near FabHotel RK International include Bandra Reclamation, Bandra-Worli Sea Link, Sion Fort, Red Carpet Wax Museum, and Buddha Caves.

                Most popular facilities
              </p>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for a 6-night stay</h1>
              <span>
                Located in the suburbs of Mumbai, this property has good location score of 7.5!
              </span>
              <h2>
                <b>Rs 17,495</b> (6 nights)
              </h2>
                <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel