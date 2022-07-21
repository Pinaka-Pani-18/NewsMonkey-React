import React from 'react'

const NewsItem = (props) => {

    
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">

                <div className="card" >
                    <div style={{display:'flex',position:'absolute',right:0,justifyContent:'flex-end'}}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                        </div>
                    <img src={!imageUrl ? "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/sharmila_070722_Shed1.jpg" : imageUrl} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{title}
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-danger">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_black" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem