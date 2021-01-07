import React from "react"
import {useParams} from "react-router-dom"
import portfolioData from "../portfolioData"

function MyWorkDetails(props) {
    const {myworkId} = useParams()
    const thisWork = portfolioData.find(work => work.id === myworkId)
    console.log(thisWork)

    return(
        <div >
            <section className="intro">
                <h1 className="section__title section__title--intro">
                    {thisWork.name}
                </h1>
                <p className="section__subtitle section__subtitle--intro">{thisWork.description}</p>
                <img src={`../${thisWork.url}`} alt={thisWork.name} className="intro__img" />
            </section>
            
            <div className="portfolio-item-individual">
                <p>{thisWork.summary}</p>
                <img src={thisWork.url} alt="" />
                <a href={thisWork.web} className="btn">Visit {thisWork.name}</a>
            </div>
            
        </div>
    )
}

export default MyWorkDetails