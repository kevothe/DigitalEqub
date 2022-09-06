import { Card, CardGroup } from 'react-bootstrap';
import { Icon } from '@iconify/react';


export default function Cards() {
  return (
    <>
      <h1 className="text-center text-success mt-5 display-3">
        SERVICES
      </h1>
      <CardGroup className="mt-5 px-5 d-flex flex-column flex-lg-row">

        <Card className='mx-3 border-0'>


          <Icon className="card-img-top" alt="Card image cap" icon="fa6-solid:coins" color="#e3c67f" width="100" />
          <div className="card-body ml-3">
            <h5 className="card-title text-success text-center display-6">Card title</h5>
            <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

          </div>
        </Card>
        <Card className='mx-3 border-0'>


          <Icon className="card-img-top" alt="Card image cap" icon="fa6-solid:building" color="#e3c67f" width="75" />
          <div className="card-body ml-3">
            <h5 className="card-title text-success text-center  display-6">Card title</h5>
            <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

          </div>
        </Card>
        <Card className='mx-3 border-0'>


          <Icon className="card-img-top" alt="Card image cap" icon="fa6-solid:car" color="#e3c67f" width="100" />
          <div className="card-body ml-3">
            <h5 className="card-title text-success text-center  display-6">Card title</h5>
            <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

          </div>
        </Card>
        <Card className='mx-3 border-0'>


          <Icon className="card-img-top" alt="Card image cap" icon="fa6-solid:people-group" color="#e3c67f" width="100" />
          <div className="card-body ml-3">
            <h5 className="card-title text-success text-center  display-6">Card title</h5>
            <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

          </div>
        </Card>

      </CardGroup>
    </>
  );
}

