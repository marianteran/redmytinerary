import './home.css'



const TravelTips = () => {
    return (
        <div className="ps-5 d-none d-lg-block ourtipsContainer">
        <div className="titlesTips">
            <h2> WE KNOW THE BEST ROUTES</h2>
            {/* <h3><span>We know</span> the best routes</h3> */}
            <div className="textDeco"></div>
        </div>
        <div className="mapContainer" style={{backgroundImage: `url('./assets/map.png')`}}>
        </div>
        </div>
    )
}

export default TravelTips