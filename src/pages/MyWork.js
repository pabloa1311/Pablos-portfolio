import React from "react"
import portfolioData from "../portfolioData"


function MyWork() {
    const portfolioImages = portfolioData.map(image => {
        return (
            <a href="portfolio-item.html" className="portfolio__item">
                <img src={image.url} alt="hola" className="portfolio__img"/>
            </a>         
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