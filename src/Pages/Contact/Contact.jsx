import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1>Contact</h1>
        <p>Contact Us Here</p>
        <form>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <textarea placeholder="Message"/>
            <button type="submit">Submit</button>
        </form>

        <div>
            <h2>Our Address</h2>
            <p>123 Main St, City, State, ZIP</p>
        </div>
    </div>
  )
}

export default Contact
