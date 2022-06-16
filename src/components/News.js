import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Preloader'
import PropTypes from 'prop-types'
export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 14,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }
    async componentDidMount() {
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=808393fa31754ae0892acf9837abf5a4&page=1&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false });
        console.log(parseddata);
    }
    handlePrevClick = async () => {
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=808393fa31754ae0892acf9837abf5a4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({
            articles: parseddata.articles,
            page: this.state.page - 1,
            loading: false
        })



    }
    handleNextClick = async () => {
        this.setState({ loading: true });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=808393fa31754ae0892acf9837abf5a4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({
            page: this.state.page + 1,
            articles: parseddata.articles,
            loading: false
        })

    }
    render() {
        return (
            <div className='container my-3'>

                <h1 className='text-center' style={{ margin: '35px 0px' }}>News-Pedia Top-Headlines</h1>
                {this.state.loading && <Spinner />}

                <div className="row">

                    {!this.state.loading && this.state.articles.map
                        ((element) => {
                            return <div className="col-md-4" key={element.url}>

                                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 100) : ""} imageurl={element.urlToImage} newsUrl={element.url ? element.url : ""} />
                            </div>

                        })}
                </div>

                {
                    !(this.state.loading) &&
                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark">  &#8592; Prev</button>
                        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-dark"> Next &rarr;</button>

                    </div>
                }
            </div>

        )
    }
}

export default News