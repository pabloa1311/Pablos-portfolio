import React from "react"

function Home() {
    return(
        <>
            <section className="intro" id="home">
             <h1 className="section__title section__title--intro">
                 Hi, I am <strong>Pablo Ramirez</strong>
             </h1>
             <p className="section__subtitle section__subtitle--intro">front-end developer</p>
             <img src="images/IMG-20200821-WA0024.jpg" alt="Pablo" className="intro__img" />
         </section>

         <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>React - JavaScript</h3>
                    
                    <p>JavaScript is the programming language of the Web and
                    React is a JavaScript library for building user interfaces.</p>
                    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                    
                </div> 
                
                <div className="service">
                    <h3>Html</h3>
                    
                    <p>HTML stands for Hyper Text Markup Language and
                    is the standard markup language for creating Web pages.</p>
                    <p>HTML describes the structure of a Web page and
                    consists of a series of elements that tell the browser how to display the content.</p>
                    
                </div> 
                
                <div className="service">
                    <h3>CSS</h3>
                    
                    <p>CSS stands for Cascading Style Sheets.
                    CSS describes how HTML elements are to be displayed on screen, paper, or in other media.</p>
                    <p>Using CSS saves a lot of work and time beacuse it can control the layout of multiple web pages all at once.</p>
                    
                </div> 
            </div> 

            <a href="#work" className="btn">My work</a>
         </section>

         <section class="about-me" id="about">
            <h2 class="section__title section__title--about">Who I am</h2>
            <p class="section__subtitle section__subtitle--about">Designer & developer based out of Colombia</p>
            
            <div class="about-me__body">
                <p>I am a Frontend React Developer. I currently live in Colombia, but I am completely open to relocate if necessary. I have a bachelor´s degree in civil engineering, but I am passionate about programming and that led me to study through online courses to become a web developer.</p>
                <p>Some of my hobbies are reading, watching series and movies, playing video games and playing soccer. I am curious to learn Javascript in depth and for new software development technologies like React.js.</p>
            </div>
            
            <img src="images/aboutMe.jpg" alt="Maria and Pablo" class="about-me__img" />
         </section>
        </>
    )
}

export default Home