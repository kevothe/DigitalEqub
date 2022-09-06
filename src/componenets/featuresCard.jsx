import {Card,CardGroup} from 'react-bootstrap';
import { Icon } from '@iconify/react';


export default  function FtCards() {
  return (
    <CardGroup className="mt-4 px-5 d-flex flex-column flex-lg-row">
    <Card className='mx-3 border-0'>
      
        
      <Icon className="card-img-top" alt="Card image cap" icon="fa6-solid:piggy-bank" color="#e3c67f" width="100" />   
      <div className="card-body ml-3">
        <h5 className="card-title text-success text-center">Card title</h5>
        <p className="card-text text-center ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   
      </div>
    </Card>
    <Card className='mx-3 border-0'>
      
        
      <Icon className="card-img-top" alt="Card image cap" icon="fa6-solid:coins" color="#e3c67f" width="70" />   
      <div className="card-body ml-3">
        <h5 className="card-title text-success text-center">Card title</h5>
        <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   
      </div>
    </Card>
    <Card className='mx-3 border-0'>
      
        
      <Icon className="card-img-top" alt="Card image cap" icon="fa6-solid:handshake" color="#e3c67f" width="100" />   
      <div className="card-body ml-3">
        <h5 className="card-title text-success text-center">Card title</h5>
        <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   
      </div>
    </Card>
    <Card className='mx-3 border-0'>
      
        
      <Icon className="card-img-top" alt="Card image cap" icon="fa6-solid:coins" color="#e3c67f" width="100" />   
      <div className="card-body ml-3">
        <h5 className="card-title text-success text-center">Card title</h5>
        <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   
      </div>
    </Card>
 
  </CardGroup>
  );
}

