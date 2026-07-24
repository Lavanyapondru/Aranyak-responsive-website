import { useState } from "react";
import Swal from "sweetalert2";



function Joinus() {
    const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

   

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

   

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

if (!validate()) return;

  const data = {
    access_key: "7f417e55-d2d0-4a46-86bc-dbb53475324e", // Replace with your Web3Forms Access Key
    subject: "New Contact Form Submission",
    email: formData.email,
  };
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(data),   // ✅ must stringify
});

  const result = await response.json();

  if (result.success) {
    // alert("Message sent successfully!");
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting me. I'll get back to you soon.",
      confirmButtonColor: "#0d6efd",
    });

    // Clear the form
    setFormData({
      email: "",
    });

    // Clear validation errors
    setErrors({});
  } else {
    // alert("Something went wrong!");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong. Please try again!",
      confirmButtonColor: "#dc3545",
    });
    console.log(result);
  }
};
    return ( 
        <div>
            <div className="container">
                <div className="row contact mb-5 justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <img src="/womenwatering.png" className="img-fluid w-75"/>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="mt-5 mb-4">Join Us</h2>
                        <h1 className="team display-3 lh-1 mt-3 mb-3">Subscribe to our <span className="team1 fw-bold">Newsletter</span></h1>
                        <p className="lead fs-2 lh-1">Get Our <span className="fw-bold">Beginners Guide To Plant </span> <br/><span className="fw-bold">Parenthood</span> for free</p>
                        <p className="lead">"Discover simple tips and tricks to grow happy, thriving plants. Start your journey into plant parenthood today!"</p>

                        <form  onSubmit={handleSubmit}>
                            <input type="text" placeholder="Enter your email address here..." className="form-control mb-2" id="email"  value={formData.email} onChange={handleChange}/>
              {errors.email && <small className="text-danger">{errors.email}</small>}<br/>
                            <button className="subscribe fw-bold fs-5 mt-1" type="submit">Subscribe</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default Joinus;