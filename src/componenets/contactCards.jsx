import {Card,CardGroup} from 'react-bootstrap';
import { Icon } from '@iconify/react';


export default  function ContactCard() {
  return (
  <CardGroup className="mt-5 px-5 ">
      
    <Card className='mx-3 border-0'>
      
        
      <Icon className="card-img-top" alt="Card image cap" icon="carbon:location-filled" color="#e3c67f" width="100" />   
      <div className="card-body ml-3">
        <h5 className="card-title text-success text-center">Address</h5>
        <p className="text-center">
        BLOOM TOWER 4TH FOOR, KAZANCHIS ADDIS ABABA, ETHIOPIA
        </p>
        
      </div>
    </Card>
    <Card className='mx-3 border-0 pt-4'>
      
        
      <Icon className="card-img-top" alt="Card image cap" icon="fa6-solid:phone" color="#e3c67f" width="75" />   
      <div className="card-body ml-3">
        <h5 className="card-title text-success text-center">Phone</h5>
       <p className="text-center">
       (+251)91 127 3927 
        </p>
      </div>
    </Card>
    <Card className='mx-3 border-0 pt-4'>
      
        
      <Icon className="card-img-top" alt="Card image cap" icon="fa6-solid:envelope" color="#e3c67f" width="75" />   
      <div className="card-body ml-3">
        <h5 className="card-title text-success text-center">Email</h5>
       <p className="text-center">
       placeholder@digitalequb.com 
        </p>
      </div>
    </Card>
  </CardGroup>
  );
}

