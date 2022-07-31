import {Card,CardGroup} from 'react-bootstrap';



export default  function HowtoCards() {
  return (
    <>
    <h1 className="text-center text-success mt-5">
    HOW TO 
      </h1>
    <CardGroup className="mt-4 px-5">
   
<Card className="mx-3  border-0">
<img className="card-img-top" src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/screen.png')} alt="Card image1"  />
  <cardbody className="mt-1">
    <h5 className="card-title text-center text-success">Card title</h5>
    <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
   
  </cardbody>
</Card>
<Card  className="mx-3  border-0">
<img className="card-img-top" src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/screen.png')} alt="Card image2" />
  <cardbody className="mt-1">
    <h5 className="card-title text-center text-success">Card title</h5>
    <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
   
  </cardbody>
</Card>
<Card  className="mx-3 border-0">
<img className="card-img-top" src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/screen.png')} alt="Card image3" />
  <cardbody className="mt-1">
    <h5 className="card-title text-center text-success">Card title</h5>
    <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
   
  </cardbody>
</Card>
<Card  className="mx-3 border-0 ">
<img className="card-img-top pb-2" src={require('C:/Users/hp/Desktop/digitalEqub/web/digital_equb/src/assets/screen.png')} alt="Card image4" />
  <cardbody className="mt-1">
    <h5 className="card-title text-center text-success">Card title</h5>
    <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
   
  </cardbody>
</Card>
</CardGroup>
</>
);
}

