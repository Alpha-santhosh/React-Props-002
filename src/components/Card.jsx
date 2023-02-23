const Card = (props)=>{
    return(
        <div className="card" style={
            {
                background:`linear-gradient(90deg, rgba(13, 13, 12, 0.62) 50%, rgba(255,0,0,0) 100%),url(${props.data.CoverImg})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"100% 100%",
                // background:`linear-gradient(90deg, rgba(13, 13, 12, 0.62) 50%, rgba(255,0,0,0) 100%)`,
            }}>
            <div className="top">
                <div className="titlecard" style={
                    {
                        background:`url(${props.data.TitleCard})`,
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"100% 100%",
                        backgroundPosition:"center"
                    }
                }>

                </div>
                <div className="detail">
                    <div className="sec-top">
                        <h1>{props.data.Title}</h1>
                        <p>{props.data.Year}, {props.data.Director}</p>
                    </div>
                    <div className="section">
                        <h3 id="time">{props.data.Runtime}</h3>
                        <h4>{props.data.Genre}</h4>
                    </div>
                </div>
            </div>
            <p id="para">{props.data.Description}</p>

            <div className="icons">
                <span class="material-symbols-outlined">share</span>
                <span class="material-symbols-outlined">favorite</span>
                <span class="material-symbols-outlined">chat_bubble</span>
            </div>
        </div>
    );
}
export default Card;