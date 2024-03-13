import "/css/main4.css";


const Main4 = () => {
  return (
    <div>
       <div className="main4">
            <div className="title">
                <h1>
                Want to know more? Ask us a question:
                </h1>
                <div className="boxes">
                    <div className="box">
                        <h3>Name</h3>
                        <input type="text" placeholder="Your name" />
                    </div>
                    <div className="box">
                        <h3>Phone</h3>
                        <input type="text" placeholder="Your phone" />
                    </div> 
                    <div className="box">
                        <h3>Message</h3>
                        <input type="text" placeholder="Your message" />
                    </div> 
                    <button>SEND</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main4