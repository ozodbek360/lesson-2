import "/css/main6.css";

const Main6 = () => {
  return (
    <div>
         <div className="main6">
            <div className="titles">
                <h1>
                Browse our selected projects 
                and learn more about our work
                </h1>
                <div className="btns">
                <i class="fa-solid fa-arrow-left"></i>
                <i class="fa-solid fa-arrow-right"></i>

                </div>
            </div>
            <div className="boxes">
                <div className="box">
                    <img src="/images/main6.1.jpg" alt="" />
                    <h3>Red Finger Building</h3>
                    <p>Business Centers</p>
                </div>
                <div className="box">
                    <img src="/images/main6.3.png" alt="" />
                    <h3>Red Finger Building</h3>
                    <p>Business Centers</p>
                    <button>View Project</button>
                </div> 
                <div className="box">
                    <img src="/images/main6.2.png" alt="" />
                    <h3>Red Finger Building</h3>
                    <p>Business Centers</p>
                </div>
            </div>
            <div className="end_titles">
                <h1>Explore all our works</h1>
                <button>View portfolio</button>
            </div>
        </div>
    </div>
  )
}

export default Main6
