import React,{useEffect,useState} from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';

var headerSeeAll = [];
var contentSeeAll = [];
const ListApps = ({dataNewApps}) => {
    const [loading , setLoading] = useState(false);
    const [searchInput , setSearchInput] = useState('')

    useEffect(() => {
        dataNewApps?
        getContentAll(dataNewApps):
        getContentAll([])
    },[dataNewApps]);

    const getContentAll = (data) => {
        var pathAll = '';
        for (var i = 0; i < data.length; i++) {
            data
              ? (pathAll = JSON.stringify(data[i]).replace(/[^\w\s]/gi, ''))
              : (pathAll = '')
            if (pathAll === 'header') {
              setLoading(true)
              for (var a = 0; a < i; a++) {
                headerSeeAll.push(data[a])
              }
            } else if (pathAll === 'content') {
              for (var b = headerSeeAll.length + 1; b < i; b++) {
                contentSeeAll.push(data[b])
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
            <div class="row">
            <input placeholder="Search Apps" class="mb-3 ml-3" onChange={(search) => setSearchInput(search.target.value)} />
            <div class="col-md-12 col-lg-12 mb-3 mb-md-4 mb-lg-0">
           
            {
               contentSeeAll.filter((data ,key) => ( 
                   searchInput?
                   `${data[2]}`.toLowerCase().includes(`${searchInput}`.toLowerCase()):[]
                 ))
               .map((res , key) => {
                   return(
                    <div key={key} class="card hover-box-shadow mb-lg-3">
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
export default connect(mapStateToProps , null) (ListApps);