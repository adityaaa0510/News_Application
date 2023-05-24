import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Nitem from './Nitem'
import PropTypes from 'prop-types'

import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'


// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8cb73ab786f14a23bd30fcda4f3f045a

// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8cb73ab786f14a23bd30fcda4f3f045a

// https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8cb73ab786f14a23bd30fcda4f3f045a&page=1&pageSize=${props.pageSize}
const Newss =(props)=> {
   
    const[articles,setarticles] = useState([]);
     const[loading,setloading] = useState(true);
      const[page,setpage] = useState(1);
       const[totalResults,settotalResults] = useState(0);

       const updateNews=async()=> {
        // props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8cb73ab786f14a23bd30fcda4f3f045a&page=${page}&pageSize=${props.pageSize}`;
        setloading(true)
        let data = await fetch(url);
        // props.setProgress(30);
        let parsedData = await data.json()
        // props.setProgress(70);
        setarticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setloading(false)
       
    }

     useEffect(()=>{
        updateNews();
    },[])
    
    const handlePrevClick = async () => {
       

       setpage(page-1)
       updateNews();
    }

   const handleNextClick = async () => {
        
        setpage(page+1)
        updateNews();
    }
    const fetchMoreData = async () => {
       
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8cb73ab786f14a23bd30fcda4f3f045a&page=${page}&pageSize=${props.pageSize}`;
        setpage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        
    };
        return (
            <div className="container my-3">

                <h1 className="text-center" style={{ margin: '35px 0px' ,marginTop:"90px"}}>NewsMonkey - Top Headlines from ${props.category}</h1>
                {loading && <Loading/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loading />}
                >
                    <div className='container'>
                        <div className="row">

                            {/*!loading&&*/articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <Nitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })}

                        </div>
                    </div>


                </InfiniteScroll >
                {/* <div className="container d-flex justify-content-between">
            <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
           
            <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div> */}
            </div >
        )
    
}
Newss.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

Newss.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default Newss
 // console.log("Previous");

        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8cb73ab786f14a23bd30fcda4f3f045a&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
        // this.setState({ laoding: true });
        // let data = await fetch(url);
        // let pData = await data.json()
        // console.log(pData);
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: pData.articles,
        //     loading: false
        // })




// console.log("Next");



        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8cb73ab786f14a23bd30fcda4f3f045a&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
        // this.setState({ loading: true });

        // let data = await fetch(url);
        // let pData = await data.json()
        // console.log(pData);

        // this.setState({
        //     page: this.state.page + 1,
        //     articles: pData.articles,

        //     loading: false
        // })