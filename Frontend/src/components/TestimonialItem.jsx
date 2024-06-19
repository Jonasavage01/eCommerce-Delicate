import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import '../assets/css/Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      imgSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      name: "Maria Smantha - Bonao",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem. Est, exercitationem id ipsa ipsum laboriosam perferendis.",
    },
    {
      imgSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      name: "Lisa Cudrow - Puerto Plata",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    },
    {
      imgSrc: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp",
      name: "John Smith - Barahona",
      text: "At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia mollitia animi id laborum et dolorum fuga.",
    },
  ];

  return (
    <MDBContainer fluid className="py-5 gradient-custom">
      <div className="testimonial-wrapper">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="12">
            <div className="text-center mb-4 pb-2">
              <MDBIcon fas icon="quote-left" size="3x" className="text-white" />
            </div>
            <div className="text-center mb-4 pb-2 title-background">
              <h1 className="text-white">What Our Customers Say</h1>
            </div>
            <MDBCard className="testimonial-card">
              <MDBCardBody className="px-5 py-5">
                <MDBCarousel showControls dark>
                  {testimonials.map((testimonial, index) => (
                    <MDBCarouselItem className={index === 0 ? "active" : ""} key={index}>
                      <MDBRow className="d-flex justify-content-center">
                        <MDBCol lg="10" xl="8">
                          <MDBRow>
                            <MDBCol lg="4" className="d-flex justify-content-center">
                              <img
                                src={testimonial.imgSrc}
                                className="rounded-circle shadow-1 mb-4 mb-lg-0"
                                alt={`${testimonial.name} avatar`}
                                width="200"
                                height="200"
                              />
                            </MDBCol>
                            <MDBCol
                              md="9"
                              lg="8"
                              xl="8"
                              className="text-center text-lg-start mx-auto mx-lg-0"
                            >
                              <h4 className="mb-4">{testimonial.name}</h4>
                              <p className="mb-0 pb-3 testimonial-text">
                                {testimonial.text}
                              </p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </MDBCarouselItem>
                  ))}
                </MDBCarousel>
              </MDBCardBody>
            </MDBCard>
            <div className="text-center mt-4 pt-2">
              <MDBIcon fas icon="quote-right" size="3x" className="text-white" />
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}
