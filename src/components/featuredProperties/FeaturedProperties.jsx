import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className='featuredProperties'>
      <div className='featuredPropertiesItems'>
        <img 
         src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o='
         alt=''
         className='featuredPropertiesImage'
        />
        <span className='featuredPropertiesName'>Aparthotel Stare Mistao</span>
        <span className='featuredPropertiesCity'>Madrid</span>
        <span className='featuredPropertiesPrice'>Rs 10,341</span>
        <div className='featuredPropertiesratings'>
          <button>8.7</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='featuredPropertiesItems'>
        <img 
         src='https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o='
         alt=''
         className='featuredPropertiesImage'
        />
        <span className='featuredPropertiesName'>7 Seasons Apartment</span>
        <span className='featuredPropertiesCity'>Budapest</span>
        <span className='featuredPropertiesPrice'>Rs 8,852</span>
        <div className='featuredPropertiesratings'>
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='featuredPropertiesItems'>
        <img 
         src='https://cf.bstatic.com/xdata/images/hotel/square600/421852968.webp?k=b4f13731abc220a62dc44e8d52f2b5a843257fabeca40035d8b76d80ee523cf0&o='
         alt=''
         className='featuredPropertiesImage'
        />
        <span className='featuredPropertiesName'>3 Epoques Apartments by Prague Residences</span>
        <span className='featuredPropertiesCity'>Praha</span>
        <span className='featuredPropertiesPrice'>Rs 28,943</span>
        <div className='featuredPropertiesratings'>
          <button>8.7</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='featuredPropertiesItems'>
        <img 
         src='https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o='
         alt=''
         className='featuredPropertiesImage'
        />
        <span className='featuredPropertiesName'>numa I Vita Apartments</span>
        <span className='featuredPropertiesCity'>Florence</span>
        <span className='featuredPropertiesPrice'>Rs 30,168</span>
        <div className='featuredPropertiesratings'>
          <button>9.3</button>
          <span>Wonderful</span>
        </div>
      </div>
      <div className='featuredPropertiesItems'>
        <img 
         src='https://cf.bstatic.com/xdata/images/hotel/square600/270323047.webp?k=bade09d7901e1282156f13c3b39e3a8b9c8d45170b2f1184565d3fc304c42d70&o='
         alt=''
         className='featuredPropertiesImage'
        />
        <span className='featuredPropertiesName'>Flora Chiado Apartments</span>
        <span className='featuredPropertiesCity'>Lisbon</span>
        <span className='featuredPropertiesPrice'>Rs 73,406</span>
        <div className='featuredPropertiesratings'>
          <button>9.7</button>
          <span>Exceptional</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties