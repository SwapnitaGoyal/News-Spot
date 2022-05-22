import React from 'react';

export default function Newscard(props){
  
    let {title , description , imgUrl , url , author , time} = props;
    return (
      <div className='my-2'>
            <div className="card my-2">
             <img src={imgUrl?imgUrl:"https://thumbs.dreamstime.com/b/news-site-trendy-style-black-icon-vector-illustration-news-site-flat-line-trendy-black-icon-vector-eps-149407982.jpg"} className="card-img-top" alt="..." style={{height: "200px"}} />
             <div className="card-body">
                <h5 className="card-title">{title?title.slice(0,45):" "}</h5>
                <p className="card-text">{description?description.slice(0,90):" "}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(time).toGMTString()}</small></p>
                <a href={url} className="btn btn-sm btn-dark">Read more</a>
             </div>
            </div>
      </div>
    );
}

