function Contact() {
  return (
    <section id="contact" className="container mt-5">
      <h2>Contact Me</h2>

      <form>
        <input className="form-control mb-2" placeholder="Your Name" />
        <input className="form-control mb-2" placeholder="Email" />
        <textarea className="form-control mb-2" placeholder="Message"></textarea>
        <button className="btn btn-success">Send</button>
      </form>
    </section>
  );
}

export default Contact;