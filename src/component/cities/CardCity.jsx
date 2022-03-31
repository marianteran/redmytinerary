
import './cities.css'


const CardCity = () => {
    //const{src, _id, name, description}=props.city
    return (
        <div className="container portfolio__container my-5">

            <div  className="flip-container">
                <div className="portfolio__card">
                    <div className="front">
                        <img className="top" src={process.env.PUBLIC_URL + `./assets/Cities/chileatacama.jpg`} alt="" />
                    </div>
                    <div className="back">
                        <h4>City</h4>
                        <h6>Country</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odio, beatae vero exercitationem deleniti autem!</p>
                        <button className='btn btn-primary'>
                       
                                <i className="fas fa-angle-double-right"></i>
                          
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CardCity