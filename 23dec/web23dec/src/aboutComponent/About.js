import React from 'react'

export default class About extends React.Component
{
    constructor()
    {
      super()
      console.log("About Component Constructor ...... ")
      this.state = {
        msg : 'How Can I Help You?'
      }
    }

    componentDidMount()
    {
      console.log("About Component Did Mount ...... ")
    }

    componentWillUnmount()
    {
      console.log("About Component Will UnMount ...... ")
    }

    shouldComponentUpdate(newProps,newState)
    {
      console.log("NewState : " , newState)
      console.log("NewProps : " , newProps)
      return true
    }

    componentDidUpdate(prevProps,prevState)
    {     
      console.log("About Component Did Update ...... ")
      console.log("PreState : " , prevState)
      console.log("PreProps : " , prevProps)
    }

    render()
    {
        console.log("About Component Render ...... ")
        return <section className="section about-me" data-section="section1">
        <div className="container">
          <div className="section-heading">
            <h2>About Us</h2>
            <div className="line-dec"></div>
            <b>{this.state.msg}</b>
          </div>
          <div className="left-image-post">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image">
                  <img src="assets/images/left-image.jpg" alt=""/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-text">
                  <h4>Reflux HTML CSS Template</h4>
                  <p>
                    Donec tristique feugiat lacus, at sollicitudin nunc euismod
                    sed. Mauris viverra, erat non sagittis gravida, elit dui
                    mollis ante, sit amet eleifend purus ligula eget eros. Sed
                    tincidunt quam vitae neque pharetra dignissim eget ut
                    libero.
                  </p>
                  <div className="white-button">
                    <button onClick={()=>this.setState({msg:'May I Help U?'})}>Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-image-post">
            <div className="row">
              <div className="col-md-6">
                <div className="left-text">
                  <h4>Sed sagittis rhoncus velit</h4>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Vestibulum fermentum
                    eleifend nibh, vitae sodales elit finibus pretium.
                    Suspendisse potenti. Ut sollicitudin risus a sollicitudin
                    semper.
                  </p>
                  <div className="white-button">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-image">
                  <img src="assets/images/right-image.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    }
}