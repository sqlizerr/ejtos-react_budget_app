import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Currency {
      <select name="Currency" id="Currency" onChange={event=>changeLocation(event.target.value)} style={{backgroundColor: "DodgerBlue"}}>
        <option value="£">Pounds(£)</option>
        <option value="₹">Rupees(₹)</option>
        <option value="€">Euros(€)</option>
        <option value="CAD">Canadian Dollars(CAD)</option>
      </select>	
      }	
    </div>
    );
};

export default Currency;