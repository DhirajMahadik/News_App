

 const NewsItem =(props)=> {
   

        let { title, description, ImageUrl, NewsUrl, time, author, source } = props;

        return (
            <>
                <div className='row my-3'>
                    <div className='col md-4 my-3'>
                        <div className="card" >
                            <img style={{height:"250px"}} src={ImageUrl ? ImageUrl : "https://image.cnbcfm.com/api/v1/image/107106836-1660942675568-Thelma-Annan.jpg?v=1660943733&w=1920&h=1080"} className="card-img-top" alt="..." />
                            <div className="card-bodyb bg-dark text-light px-3">
                                <h6 class="badge bg-danger">{source}</h6>
                                <h5 className="card-title">{title}...  </h5>
                                <p className="card-text">{description}...</p>
                                <p> By <i>{author.slice(0,20)}</i><br></br>  {new Date(time).toGMTString()}</p>
                                <a href={NewsUrl} className="btn btn-outline-success my-2">Read More</a>

                            </div>
                        </div>
                    </div>


                </div>
            </>
        )
    
}

export default NewsItem
