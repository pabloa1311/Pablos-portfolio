import React from "react"
import {useParams} from "react-router-dom"
import portfolioData from "../portfolioData"

function MyWorkDetails(props) {
    const {myworkId} = useParams()
    const thisWork = portfolioData.find(work => work.id === myworkId)

    return(
        <div>
            <section class="intro">
                <h1 class="section__title section__title--intro">
                    {thisWork.name}
                </h1>
                <p class="section__subtitle section__subtitle--intro">{thisWork.description}</p>
                <img src={thisWork.url} alt="" class="intro__img" />
            </section>
            
            <div class="portfolio-item-individual">
                <p>{thisWork.summary}</p>
                <img src={thisWork.url} alt="" />
            </div>
        </div>
    )
}

export default MyWorkDetails