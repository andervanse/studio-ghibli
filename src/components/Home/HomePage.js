
import './HomePage.css';

const HomePage = () =>  {

    return (
        <div className="card">
            <div className="card-image home-card-image">
                <figure>
                   <img alt="Studio Ghibli Logo" src="https://upload.wikimedia.org/wikipedia/en/c/ca/Studio_Ghibli_logo.svg"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                       <p className="title is-4">Studio Ghibli Inc.</p>
                       <div className="content">
                            It is best known for its animated feature films, and has also produced several short subjects, television commercials, and two television films.
                            <br/>
                            Its mascot and most recognizable symbol is a character named Totoro, a giant catlike spirit from the 1988 anime film My Neighbor Totoro.
                            <br/>
                            <i>font: <a href="https://en.wikipedia.org/wiki/Studio_Ghibli" rel="noreferrer" target="_blank" >Wikipedia</a></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;