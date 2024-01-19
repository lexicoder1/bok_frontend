import "../App.css";

function ContactUs() {
  return (
    <>
      <div className="contactUs-container">
        <div className="contactUs-container-i">
          <h1>
            Complete the contact form and one of our team members will get in
            touch with you within 24 hours
          </h1>
          <p>
            Krypton Labs is committed to protecting your privacy. Any
            information you provide through this contact form will be kept
            strictly confidential and used only for the purpose of responding to
            your inquiry
          </p>
        </div>

        <div className="contactUs-container-ii">
          <div className="contactUs-container-ii-i">
            <div className="contactUs-container-ii-i-i">
              <h2>Name</h2>
              <input
                type="text"
                placeholder="Full Name"
                className="contactUs-input"
              />
            </div>
            <div className="contactUs-container-ii-i-i">
              <h2>Name</h2>
              <input
                type="text"
                placeholder="Full Name"
                className="contactUs-input"
              />
            </div>
          </div>

          <div className="contactUs-container-ii-i">
            <div className="contactUs-container-ii-i-i">
              <h2>Name</h2>
              <input
                type="text"
                placeholder="Full Name"
                className="contactUs-input"
              />
            </div>
            <div className="contactUs-container-ii-i-i">
              <h2>Name</h2>
              <input
                type="text"
                placeholder="Full Name"
                className="contactUs-input"
              />
            </div>
            
          </div>
          
          <div className="contactUs-container-message" >
          <h2>Message</h2>
          
<textarea placeholder="type your message here" className="contactUs-message" >

</textarea>
        
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default ContactUs;
