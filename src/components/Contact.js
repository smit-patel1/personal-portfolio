import { useState } from "react";
import contactImg from "../assets/img/contact-me.png";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const formEndpoint = "https://formsubmit.co/smit.r.patel5@gmail.com"; 

    const formData = new FormData();
    formData.append("firstName", formDetails.firstName);
    formData.append("lastName", formDetails.lastName);
    formData.append("email", formDetails.email);
    formData.append("phone", formDetails.phone);
    formData.append("message", formDetails.message);
    formData.append("_captcha", "false"); 
    formData.append("_template", "table"); 

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormDetails(formInitialDetails); // Reset form
      } else {
        setStatus({
          success: false,
          message: "Something went wrong. Try again.",
        });
      }
    } catch (error) {
      setStatus({ success: false, message: "Error sending message." });
    }

    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <div className="contact-container">
        <div>
          <img src={contactImg} alt="Contact Illustration" />
        </div>
        <div className="contact-form">
          <h2>Let's Work Together</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={formDetails.firstName}
              placeholder="First Name"
              onChange={(e) => onFormUpdate("firstName", e.target.value)}
              required
            />
            <input
              type="text"
              value={formDetails.lastName}
              placeholder="Last Name"
              onChange={(e) => onFormUpdate("lastName", e.target.value)}
              required
            />
            <input
              type="email"
              value={formDetails.email}
              placeholder="Email Address"
              onChange={(e) => onFormUpdate("email", e.target.value)}
              required
            />
            <input
              type="tel"
              value={formDetails.phone}
              placeholder="Phone No."
              onChange={(e) => onFormUpdate("phone", e.target.value)}
            />
            <textarea
              rows="4"
              value={formDetails.message}
              placeholder="Message"
              onChange={(e) => onFormUpdate("message", e.target.value)}
              required
            ></textarea>
            <button type="submit">{buttonText}</button>
            {status.message && (
              <p
                className={status.success ? "success-message" : "error-message"}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
