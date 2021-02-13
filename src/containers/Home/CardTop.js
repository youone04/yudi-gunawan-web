import React ,{useEffect , useState}from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { connect } from 'react-redux';
var gambar = [];
var header = [];
const CardTop = ({landingPageUtama}) => {
    const [loading , setLoading] = useState(false)
    useEffect(() => {
        landingPageUtama?
        getContent(landingPageUtama):
        getContent([])
    },[landingPageUtama]);

    const getContent = async(data) => {
        var path = '';
        for (var i = 0; i < data.length; i++) {
            data
              ? (path = JSON.stringify(data[i]).replace(/[^\w\s]/gi, ''))
              : (path = '')
            if (path === 'gambar') {
              setLoading(true)
              for (var a = 0; a < i; a++) {
                gambar.push(data[a])
              }
            } else if (path === 'hader') {
              for (var b = gambar.length + 1; b < i; b++) {
                header.push(data[b])
              }
            }
          }
    }
    if(!loading){
        return <span>dev</span>
    }
    return(
        <section style={{backgroundColor:'#4b054a',borderTopLeftRadius: 10,borderTopRightRadius: 10}} class="p-0 text-white row no-gutters mt-1">
        <div class="col-lg-12 col-xl-12">
        <Carousel
            additionalTransfrom={0}
            arrows
            // autoPlay
            autoPlaySpeed={4000}
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
                partialVisibilityGutter: 30
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
               gambar.map((data , key) =>{
               return(
                <div key={key}>
                <img style={{borderTopLeftRadius: 10,borderTopRightRadius: 10}} src={data} alt="Image" class="w-100 h-100"/>
                </div>
               )
               })
            }
           </Carousel>
           
        </div>
        <div class="col-lg-12 col-xl-12">
            <section>
            <div class="container">
                <div class="row justify-content-center">
                <div class="col col-md-12 col-xl-12">
                    <h3 class="h1">&ldquo;{header[0]}&rdquo;</h3>
                    <p class="lead">
                    {
                        header[1]
                    }
                    </p>
                    <img class="bg-white opacity-50 mt-3 mt-md-4 mb-3" src="assets/assets/img/logos/brand/aven.svg" alt="Aven company logo" data-inject-svg/>
                </div>
                </div>
            </div>
            </section>
        </div>
        </section>
    )
    
}
const mapStateToProps = (state) => {
    return{
        landingPageUtama: state.landingPageUtama
    }
}

export default connect(mapStateToProps ,null)(CardTop);