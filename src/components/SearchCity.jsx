import React from 'react';

const SearchCity = ({ setCitySearch }) => {
  const handleSelectChange = (event) => {
    setCitySearch(event.target.value); // Update the city when a new option is selected
  };

  return (
    <div>
      <form className="d-flex">
        <select
          className="form-select me-2"
          onChange={handleSelectChange}
          defaultValue="Bengaluru"
        >
          <option value="Bengaluru">Bengaluru</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Pune">Pune</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Indore">Indore</option>
          <option value="Patna">Patna</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Visakhapatnam">Visakhapatnam</option>
          <option value="Surat">Surat</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Vadodara">Vadodara</option>
          <option value="Raipur">Raipur</option>
          <option value="Coimbatore">Coimbatore</option>

        </select>
      </form>
    </div>
  );
};

export default SearchCity;
