import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props) => {


  const [article, setarticle] = useState([]);
  const [page, setpage] = useState(1)
  const [loading, setloading] = useState(false)
  const [TotalResults, setTotalResults] = useState(0)

  const UpdateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3f0246dc8d694823a1c31322ea1d7fe3&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url);
    let ParseData = await data.json();
    setarticle(ParseData.articles);
    console.log(ParseData);
    setloading(false)
    setTotalResults(ParseData.totalResults)
  }

  useEffect(() => {
    UpdateNews()
  }, [])


  const handlePreviousClick = async () => {
        setpage(page - 1)
        UpdateNews()
  }

  const handleNextClick = async () => {
        setpage(page + 1)
        UpdateNews()

  }

  return (

    <>
      <div className="container my-3">
        <div className="row ">
          {!loading && article.map((element) => {

            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 80) : ""} ImageUrl={element.urlToImage} NewsUrl={element.url} time={element.publishedAt} author={element.author ? element.author : "Unknown"} source={element.source.name} />
            </div>

          })}
        </div>
        {loading && <Spinner />}

        <div className="container d-flex justify-content-between" >

          <button disabled={page <= 1} class="btn btn-dark me-md-2" type="button" onClick={handlePreviousClick}> &larr; Previous</button>
          <button disabled={page + 1 > Math.ceil(TotalResults / props.pageSize)} class="btn btn-dark me-md-2" type="button" onClick={handleNextClick}>Next &rarr;</button>

        </div>

      </div>
    </>
  )


  News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
  }

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

}

export default News