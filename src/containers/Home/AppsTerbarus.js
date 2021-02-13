import React,{useEffect,useState} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

var header = [];
var content = [];
const AppsTerbaru = ({dataNewApps}) => {
    const [loading , setLoading] = useState(false);
    useEffect(() => {
        dataNewApps?
        getContent(dataNewApps):
        getContent([])
    },[dataNewApps]);

    const getContent = (data) => {
        var path = '';
        for (var i = 0; i < data.length; i++) {
            data
              ? (path = JSON.stringify(data[i]).replace(/[^\w\s]/gi, ''))
              : (path = '')
            if (path === 'header') {
              setLoading(true)
              for (var a = 0; a < i; a++) {
                header.push(data[a])
              }
            } else if (path === 'content') {
              for (var b = header.length + 1; b < i; b++) {
                content.push(data[b])
              }
            }
          }
    }

    if(!loading){
        return <span>dev</span>
    }
    return(
        <section>
        <div class="container">
            <div class="row section-title justify-content-center text-center">
            <div class="col-md-12 col-lg-12 col-xl-12">
                <h3 class="display-4"><mark data-aos="highlight-text" data-aos-delay="300">{header[0]}</mark> </h3>
                <div class="lead">{header[1]}</div>
            </div>
            </div>
            <div class="row">
            <p style={{marginLeft:'auto',marginRight: '5%'}}>
                <Link style={{color:'#dc6c3c'}} to='/see-all' >See All</Link>
                {/* <a href="/see-all">See All</a> */}
            </p>
            <div class="col-md-12 col-lg-12 mb-3 mb-md-4 mb-lg-0">
            <Carousel
            additionalTransfrom={0}
            arrows
            // autoPlay
            // autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 1,
                partialVisibilityGutter: 40
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1,
                partialVisibilityGutter: 30
                }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
            {
               content.filter((data ,key) => ( key <= 1))
               .map((res , key) => {
                   return(
                    <div key={key} class="card h-100 hover-box-shadow">
                        <div class="d-block bg-gradient rounded-top position-relative">
                            <img class="card-img-top hover-fade-out" src={res[0]} alt="Image accompanying Circle testimonial"/>
                            <div class="badge badge-light">
                            <img src={[res[1]]} alt="Asgardia company logo" class="icon icon-sm m-lg-1"/>
                            </div>
                        </div>
                        <div class="card-body">
                            <h3>{res[2]}</h3>
                            <p>
                            {res[3]}
                            </p>
                            <a href={res[4]} class="stretched-link">{res[5]}</a>
                        </div>
                    </div>
                   )
               })
            }
             
            </Carousel>
            </div>
            </div>
        </div>
        </section>
    )
}
const mapStateToProps = (state) => {
    return{
        dataNewApps: state.dataNewApps
    }
}
export default connect(mapStateToProps , null) (AppsTerbaru);