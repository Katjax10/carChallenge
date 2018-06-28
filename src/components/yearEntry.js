// import React from 'react';
// import PropTypes from 'prop-types';
//
// class YearEntry extends React.Component {
//
//   static propTypes = {
//     cars: PropTypes.object,
//     getYear: PropTypes.isInteger
//   };
//   constructor(props){
//     super(props);
//     this.getYear = this.getYear.bind(this);
//   }
//
//   getYear() {
//     console.log(this.props.cars);
//     this.props.cars.map((car) => {
//       //console.log('iuwigfeuifg', car.get('year'));
//       return (<div>{car.get('year')}</div>);
//     });
//   }
//  // loop through all cobects and return the
//   render () {
//    const getYear = () => {
//      this.props.cars.map((car) => {
//      //console.log('iuwigfeuifg', car.get('year'));
//      return (<div>{car.get('year')}</div>);
//    });
//    }
//
//     return (
//       <div>
//         {getYear}
//       </div>
//     );
//   }
// }
//
// YearEntry.propTypes = {
//   stuff: PropTypes.object
// };
//
// export default YearEntry;
/**
 * Created by ujackk2 on 6/26/18.
 */
import React from 'react';
import PropTypes from 'prop-types';

const showYears =(cars) => {
const key =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return cars.map((car, index) => {
  const year = car.get('year');
    return (
      <div key={index}>{year}</div>
    )
  });
};

const YearEntry = ({cars}) => (
  <div>
    {showYears(cars)}
  </div>
);

YearEntry.propTypes = {
  cars: PropTypes.object
};

export default YearEntry;
