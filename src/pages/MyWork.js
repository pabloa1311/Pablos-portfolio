import React from "react"
import portfolioData from "../portfolioData"
import {Link} from "react-router-dom"


function MyWork() {
    const portfolioImages = portfolioData.map(image => {
        return (
            <div key={image.id}>
                <Link to={`/mywork/${image.id}`}>
                    <a href="portfolio-item.html" className="portfolio__item">
                        <img src={image.url} alt="hola" className="portfolio__img"/>
                    </a> 
                </Link>   
            </div>     
        )
    })
     
    return(
        <>
            <section className="my-work" id="work">
                <h2 className="section__title section__title--work">My work</h2>
                <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
                
                <div className="portfolio">
                    {portfolioImages}
                </div>
            </section>
        </>
    )
}

export default MyWork