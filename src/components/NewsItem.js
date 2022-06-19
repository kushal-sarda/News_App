import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageurl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3' >
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex - end', position: 'absolute', right: '0' }}>
                    < span className=" badge rounded-pill bg-danger" >
                        {source}
                    </span >
                </div >
                <a target="_blank" href={newsUrl}>
                    <img className="card-img-top" src={(!imageurl) ? "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" : imageurl} alt="Card image cap" />
                </a>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted"> By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>

                </div>
            </div >
        </div >
    )

}

export default NewsItem