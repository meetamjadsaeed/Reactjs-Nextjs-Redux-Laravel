
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainNav from '../components/MainNav';
import Link from 'next/link';
import ListGroup from 'react-bootstrap/ListGroup';

export default function About() {
  return(
 <>
  <MainNav />


  <div class="container my-5 z-depth-1">



<section class="dark-grey-text">

  <div class="row pr-lg-5">
    <div class="col-md-7 mb-4">

      <div class="view">
        <img src="https://img2.goodfon.com/wallpaper/big/1/cf/devushka-knigi-fon-3358.jpg" class="img-fluid" alt="smaple image" style={{'border-radius': '5%', 'box-shadow': '5px 5px 30px 7px rgb(0 0 0 / 25%)'}}/>
      </div>

    </div>
    <div class="col-md-5 d-flex align-items-center">
      <div>
        
        <h3 class="font-weight-bold mb-4">About</h3>

        <p>This site was developed by Amjad Saeed</p>
        Check out my portfolio: amjadsaeed.work 
        <Link href="https://amjadsaeed.work/">    
     <a><p>Full Stack Developer</p></a>
</Link>



    <ListGroup>
    <ListGroup.Item>
    <h3 class="font-weight-bold mb-2">Tech Stack</h3>
    </ListGroup.Item>
      <ListGroup.Item>Laravel REST API For Backend </ListGroup.Item>
      <ListGroup.Item>MySQL</ListGroup.Item>
      <ListGroup.Item>Reactjs</ListGroup.Item>
      <ListGroup.Item>Nextjs</ListGroup.Item>
      <ListGroup.Item>Redux Toolkit</ListGroup.Item>
      <ListGroup.Item>React-Bootstrap</ListGroup.Item>
      <ListGroup.Item>GeoPlugin API for Location</ListGroup.Item>
    </ListGroup>



      </div>
    </div>
  </div>

  <h3 class="font-weight-bold mb-2">How This Site Works</h3>
  <p>Users can browse listings as per location but for listings posting user will need to buy the package which has been created by the admin user and with the bought package user will allow posting a specific number of listings.</p>

  <ListGroup >
    <ListGroup.Item >
    <h3 class="font-weight-bold mb-2">Features</h3>
    </ListGroup.Item>
      <ListGroup.Item>Regitser</ListGroup.Item>
      <ListGroup.Item>Login</ListGroup.Item>
      <ListGroup.Item>Forget Password</ListGroup.Item>
      <ListGroup.Item>Display All Categories</ListGroup.Item>
      <ListGroup.Item>Display All Listings With Category ID</ListGroup.Item>
      <ListGroup.Item>Display All Listings</ListGroup.Item>
      <ListGroup.Item>Display Listings on the basis of current location</ListGroup.Item>
      <ListGroup.Item>Display Single Listing</ListGroup.Item>
      <ListGroup.Item>Get Comments by Listing ID</ListGroup.Item>
      <ListGroup.Item>Search Listings by Tittle</ListGroup.Item>

      <ListGroup.Item>Search Listings by City</ListGroup.Item>
      <ListGroup.Item>Create Listing</ListGroup.Item>
      <ListGroup.Item>Update Listing</ListGroup.Item>
      <ListGroup.Item>Delete Listing</ListGroup.Item>
      <ListGroup.Item>Display Reviews with Packages</ListGroup.Item>
      <ListGroup.Item>Create a Review For a Listing</ListGroup.Item>
      <ListGroup.Item>Update a Review For a Listing</ListGroup.Item>
      <ListGroup.Item>Update a Review For a Listing</ListGroup.Item>
      <ListGroup.Item>Display All Packages</ListGroup.Item>
      <ListGroup.Item>Display Single Package</ListGroup.Item>

      <ListGroup.Item>Create a Package</ListGroup.Item>
      <ListGroup.Item>Update a Package</ListGroup.Item>
      <ListGroup.Item>Delete a Package</ListGroup.Item>
      <ListGroup.Item>Create a Review For a Product</ListGroup.Item>
      <ListGroup.Item>Update a Review For a Product</ListGroup.Item>
      <ListGroup.Item>Update a Review For a Product</ListGroup.Item>
      <ListGroup.Item>Display All Tags</ListGroup.Item>
      <ListGroup.Item>Display All Listings With Tag ID</ListGroup.Item>
      <ListGroup.Item>Display All Users</ListGroup.Item>
      <ListGroup.Item>Display Single User</ListGroup.Item>
      <ListGroup.Item>Listings By Auhtor</ListGroup.Item>
      <ListGroup.Item>Get Comments by Author ID</ListGroup.Item>
      <ListGroup.Item>More To Come...</ListGroup.Item>
    </ListGroup>

</section>



</div>

   <Footer/>
    
 </>
  

)
}