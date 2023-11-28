import React, {useEffect} from "react";
import OwlCarousel from 'react-owl-carousel2';
// import reactOwlCarousel2 from 'https://cdn.jsdelivr.net/npm/react-owl-carousel2@0.3.0/+esm'
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Import Owl Carousel theme CSS
import '../styles/Reviews.css'
// import './Carousel.css'; 





function Reviews() {
    const options = {
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      };
    
      const items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        // Add more items as needed
      ];
  const testimonials = [
    {
      name: "Ronne Galle",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300",
      comment:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
    },
    // Add more testimonial objects as needed
  ];
  return (
    <>
<div className="reviewSection relative mb-6 md:mb-12 lg:mb-20 ">
  <div className="overlay relative w-full h-40 md:h-[22rem] flex flex-col flex-wrap justify-center text-center opacity-80 bg-[#1BA12D] z-10">
    <h4 className="text-2xl text-center text-yellow-100 font-bold ">TESTIMONIES</h4>
    <h1 className=" font-bold text-3xl text-white text-center invisible sm:visible">Happy Clients and Feedback</h1>
  </div>
  <div className="reviewContainer w-full md:w-[80%] my-0 mx-auto absolute left-0 md:left-36 top-24 md:top-48 lg:top-60 z-20">
    <div className="gtco-testimonials relative z-10 flex flex-col md:flex-row">
      <OwlCarousel options={options}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="item flex-shrink-0 md:flex-shrink">
            <div className="card text-center bg-[#8fd0d2] flex flex-col">
              {/* <img className="card-img-top" src={testimonial.image} alt="" /> */}
              <div className="card-body flex">
                <p className="card-text text-left">{testimonial.comment}</p>
                <div className="reviewName flex py-3 md:py-5">
                  <div className="card-img">
                    <img src={testimonial.image} alt="" className="rounded-full h-16 md:h-20 w-16 md:w-20 mx-auto md:mx-0" />
                  </div>
                  <div className="card-name flex flex-col justify-center">
                    <h2 className="m-0 px-2 md:px-4">{testimonial.name}</h2>
                    <div className="text-xs md:text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  </div>
</div>


    </>
  );
}

export default Reviews;
