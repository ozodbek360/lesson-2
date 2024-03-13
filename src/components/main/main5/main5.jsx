import "/css/main5.css";


const Main5 = () => {
  return (
    <div>
        <div className="main5">
            <div className="titles">
                <h1>Our services</h1>
                <p>Createx Construction Bureau is a construction giant with a full range of construction services.</p>
            </div>
            <div className="boxes">
                <div className="box">
                    <img src="/images/main5.1.png" alt="" />
                    <h3>Construction</h3>
                </div>
                <div className="box">
                    <img src="/images/main5.2.svg" alt="" />
                    <h3>Project Development</h3>
                </div> 
                <div className="box " >
                    <img src="/images/main5.3.png" alt="" />
                    <h3>Interior Design</h3>
                </div> 
                <div className="box">
                    <img src="/images/main5.4.svg" alt="" />
                    <h3>Repairs</h3>
                </div>
            </div> 
            <div className="end_titles">
                <h1>Learn more about our services</h1>
                <button>View services</button>
            </div>
        </div>
    </div>
  )
}

export default Main5