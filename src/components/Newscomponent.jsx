import React, { useEffect , useState} from 'react'
import Newscard from './Newscard'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const Newscomponent = (props)=> {

  const [articles , setArticles] = useState([]);
  const [page , setPage] = useState(1);
  const [loading , setLoading] = useState(true);
  const [totalResults , settotalResults] = useState(0);
  
  document.title = `News Spot - ${props.category}`;
  
  const Update = async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2a96bce7e9e940d888189d96d02cd609&page=${page}&pageSize=${props.pageSize}`;
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(60);
    setArticles(parsedData.articles);
    setPage(page);
    setLoading(false);
    settotalResults(parsedData.totalResults);
    props.setProgress(100);
  }
  
  
  useEffect( ()=>{
    Update();
  } , [])

  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2a96bce7e9e940d888189d96d02cd609&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    settotalResults(parsedData.totalResults);
  }

  //    const handlePrevClick = async ()=>{
  //        setPage(page-1);
  //      await Update();
  //      }

  //      handleNextClick = async ()=>{
  //          setPage(page+1);
  //        await Update();
  //      }
  

      
    return (
      <div className='container'>
        <h1 className='container text-center' style={{marginTop:"90px"}}>Top Headlines : </h1>
        <div className='text-center'>
          {loading && <Spinner />}
        </div>
        <div className='container text-center'>

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
          >
            <div className='row container'>
              {articles.map((ele) => {
                return <div className='col-md-4' key={ele.title}>
                  <Newscard title={ele.title} description={ele.description} imgUrl={ele.urlToImage} url={ele.url} author={ele.author} time={ele.publishedAt} />
                </div>

              })}
            </div>
          </InfiniteScroll>


        </div>

      </div>

    )

}            

Newscomponent.defaultProps = {
  country: "in",
  pageSize: 20,
  category: "general"
}

Newscomponent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default Newscomponent;