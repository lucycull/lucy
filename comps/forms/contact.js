import {useState} from "react"
import Button from '../ui/comps/button'
import css from './contact.module.css'
export default function ContactForm() {
  const [form, setForm] = useState({name: '', email: '', message: '', sent: false, buttonText: "Send", err:''})
  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    });
  }
  function resetForm() {
    var fe = document.getElementsByClassName("fe")
    setForm({
      name: "",
      email: "",
      message: "",
      sent: false,
      buttonText: "Send",
      err: "",
    });
    document.getElementById("send").classList.remove("btnerror")
    for (var i = 0; i < fe.length; i++) {
      fe[i].classList.remove("fechange")
    }
  }
  function sendForm(e) {
    e.preventDefault()
    var fe = document.getElementsByClassName("fe")
    for (var i = 0; i < fe.length; i++) {
      fe[i].classList.add("fechange")
    }
    setForm({
      ...form,
      buttonText: "Sending...",
    })
    // Send Contact Form Logic Here
  }
  return (
    <form id={css.form}>
      <input
        id="name"
        name="name"
        type="text"
        className="fe"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        id="email"
        name="email"
        type="email"
        className="fe"
        placeholder="E-Mail"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        id="message"
        name="message"
        className="fe"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        required
      />
      <div style={{margin: '0 auto', width: '150'}}>
        <button type="submit" onClick={sendForm}>{form.buttonText}</button>
      </div>
      <style jsx>{`
      .fechange {
        background: var(--primary);
        font-size: 0;
      }
      `}</style>
    </form>
  );
}
