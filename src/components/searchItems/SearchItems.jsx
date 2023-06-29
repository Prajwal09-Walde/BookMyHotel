import './SearchItems.css'

const SearchItems = () => {
  return (
    <div className='searchItem'>
      <img
       src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/289854981.jpg?k=2709016be1c8a542f9a3a75510ce8c84c79347e101decee5f41157d2e08ef928&o=&hp=1'
       alt=''
       className='searchItemImage'/>
      <div className='searchItemDesc'>
        <h1 className='searchItemTitle'>FabHotel RK International</h1>
        <span className='searchItemDistsnce'>1.3 km from centre</span>
        <span className='searchItemTaxi'>Taxis available</span>
        <span className='searchItemSubtitle'>
          Studio Apartment with Air Conditioning
        </span>
        <span className='searchItemFeatures'>
          Entire Studio . bathroom . 21m² 1 full bed 
        </span>
        <span className='searchItemCancelOp'>Free Cancellation</span>
        <span className='searchItemCancelOpSubtitle'>
          You can cancel at any time
        </span>
      </div>
      <div className='searchDetails'>
        <div className='searchRatings'>
          <span>Good</span>
          <button>7.5</button>
        </div>
        <div className='searchDetailTexts'>
          <span className='searchItemsPrice'>Rs 17,495</span>
          <span className='searchItemsTaxi'>Included taxes and fees</span>
          <button className='searchItemsCheck'>See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItems