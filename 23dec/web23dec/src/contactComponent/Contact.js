import React from 'react'

export default class Contact extends React.Component
{
    render()
    {
        return  <section className="section contact-me" data-section="section4">
        <div className="container">
          <div className="section-heading">
            <h2>Contact Me</h2>
            <div className="line-dec"></div>
            <span
              >Fusce eget nibh nec justo interdum condimentum. Morbi justo ex,
              efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.</span
            >
          </div>
          <div className="row">
            <div className="right-content">
              <div className="container">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your name..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Your email..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your message..."
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="button">
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    }
}