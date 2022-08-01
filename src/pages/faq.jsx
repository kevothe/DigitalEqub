import React from 'react';
import "react-bootstrap";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import '.././sass/app.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import image from ".././assets/money-605075.jpg";
export default function Faq () {
    
   
        
    return(
        <>
        <div className="accordionContainer  align-content-center mt-5 pt-5 px-3 width-100" style={{
       backgroundImage: `url(${image})`
    }}>
<h2 className="text-success text-center  ">Frequently Asked Questions</h2>
<MDBAccordion className="my-5 mx-5  " flush initialActive={1}>
      <MDBAccordionItem   collapseId={1} headerTitle="what happens if someone doesn't pay?" headerClassName="text-success">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='how do I get the money back?'>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='how do I deposit money'>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </MDBAccordionItem>
    </MDBAccordion>
</div>
</>
           
           );
        }
    