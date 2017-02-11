import React, { Component } from 'react';

class YearList extends Component {
  render() {
    const years = this.props.years;
    const changeing = this.props.changeing;
    console.log(years);
    return (<select  onChange={changeing} >
      {
        years.map((year, index) => {
          return(
            <option value={year} key={index}>
              {year}
            </option>
          )
        })
      }
    </select>)
  }
}

export default YearList;
