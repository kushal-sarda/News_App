import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Preloader'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useState } from 'react'
const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(1);


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    useEffect(() => {
        
        document.title = `${capitalizeFirstLetter(props.category)} - NewsPedia`;
        const update = async () => {
            props.setProgress(30);
    
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
            let data = await fetch(url);
    
            let parseddata = await data.json();
            props.setProgress(100);
            setArticles(parseddata.articles)
            setTotalResults(parseddata.totalResults);
            setLoading(false);
        }
        update();

    }, []);

    // handlePrevClick = async () => {

    // setPage(page-1);
    //
    //     setState(
    //         { page: state.page - 1 }
    //     )

    // }
    // handleNextClick = async () => {
    // setPage(page+1);
    // 
    //     setState(
    //         { page: state.page + 1 }
    //     )
    //     updateNews();
    // }
    // componentDidMount() {
    //     console.log("is runnung");
    // }
    const fetchMoreData = async () => {

        // setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        setArticles(articles.concat(parseddata.articles));
        setTotalResults(parseddata.totalResults);
        setLoading(false);
    };

    return (
        <div className='container my-3'>

            <h1 className='text-center' style={{ margin: '35px 0px' }}>News-Pedia Top-Headlines from {capitalizeFirstLetter(props.category)} Headlines</h1>
            {/* {loading && <Spinner />} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className="row" style={{ marginLeft: "10%", marginRight: "10%" }}>


                    {articles.map
                        ((element) => {
                            return <div className="col-md-4" key={element.url}>

                                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} newsUrl={element.url ? element.url : ""} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                            </div>

                        })}
                </div>
            </InfiniteScroll>
            {/* {
                    !(state.loading) &&
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={state.page <= 1} onClick={handlePrevClick} className="btn btn-dark">  &#8592; Prev</button>
                        <button type="button" disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)} onClick={handleNextClick} className="btn btn-dark"> Next &rarr;</button>

                    </div>
                } */}
        </div>

    )

}

News.defaultProps = {
    country: 'in',
    pageSize: 14,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    api_key: PropTypes.string
}

export default News