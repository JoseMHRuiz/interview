// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import './PhoneList.css';
// import { Link } from 'react-router-dom';
// import phoneStore from '../redux/_store';
// import { showPhones, showPhone } from '../redux/actions/phoneActions';

// const PhoneListCopy = () => {
//   const [phones, setPhones] = useState(phoneStore.showPhones());

//   useEffect(() => {
//     setPhones(phoneStore.getPhones());
//     if (phoneStore.getPhones().length === 0) showPhones();
//   }, []);

//   return (
//     <div className='container-fluid'>
//       <div className='row'>
//         {/* {phones.map(phone => {
//           return (
//             <Card style={{ width: '18rem' }}>
//               <Card.Img
//                 variant='top'
//                 src={require(`../../api/images/${phone.imageFileName}`)}
//               />
//               <Card.Body>
//                 <Card.Title>{phone.name}</Card.Title>
//                 <Card.Subtitle className='mb-2 text-muted'>
//                   {phone.manufacturer}
//                 </Card.Subtitle>
//                 <Card.Text>{phone.price} €</Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <Link to={'/phone/' + phone.id}>Show More</Link>
//               </Card.Footer>
//             </Card>
//           );
//         })} */}
//       </div>
//     </div>
//   );
// };

// export default PhoneListCopy;
