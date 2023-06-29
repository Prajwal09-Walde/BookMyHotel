import './List.css'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItems from '../../components/searchItems/SearchItems';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div className>
      <Navbar/>
      <Header type="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='listTitle'>Search</h1>
            <div className='listItem'>
              <label>Destination</label>
              <input placeholder={destination} type="text"/>
            </div>
            <div className='listItem'>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} 
                  to ${format(date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                 onChange={(item) => setDate(location.date)}
                 minDate={new Date()}
                 ranges={date}
                />
              )}
            </div>
            <div className='listItem'>
              <label>Options</label>
              <div className='listOptions'>
                <div className='listOptionItem'>
                  <span className='listOptionText'>
                    Min price <small>per night</small>
                  </span>
                  <input 
                   className='listOptionInput' 
                   type='number'
                   min={0}
                  />
                </div>
                <div className='listOptionItem'>
                  <span className='listOptionText'>
                    Max price <small>per night</small>
                  </span>
                  <input 
                   className='listOptionInput' 
                   type='number'
                   min={0}
                  />
                </div>
                <div className='listOptionItem'>
                  <span className='listOptionText'>Adult</span>
                  <input 
                    className='listOptionInput' 
                    type='number'
                    min={1}
                    placeholder={options.adult}
                  />
                </div>
                <div className='listOptionItem'>
                  <span className='listOptionText'>Children</span>
                  <input 
                    className='listOptionInput' 
                    type='number'
                    min={0}
                    placeholder={options.children}
                  />
                </div>
                <div className='listOptionItem'>
                  <span className='listOptionText'>Room</span>
                  <input 
                    className='listOptionInput' 
                    type='number'
                    min={1}
                    placeholder={options.room}
                  />
                </div>
                <div className='listOptionItem'>
                  <span className='listOptionText'>Bed</span>
                  <input 
                    className='listOptionInput' 
                    type='number'
                    min={1}
                    max={2}
                    placeholder={options.bed}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className='listResult'>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
            <SearchItems/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List