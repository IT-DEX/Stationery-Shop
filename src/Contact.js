import React from "react";
import { useForm } from '@formspree/react';

function Contact() {

    

        const [state, handleSubmit] = useForm('{your-form-id}');
        if (state.succeeded) {
          return <div>Thank you for signing up!</div>;
        }
        return (
            <div>
            <h1>Contact Us</h1>
            <p>Sometimes the answer you’re looking for isn’t from a website — it’s from a real person. That’s why we’re happy to help you get in touch with 
                the people who can answer your questions as fast as possible.</p>
                <p>Please fill in the form to ask your question</p>
          <form onSubmit={handleSubmit}>
            
            <label htmlFor="email">First Name</label>
            <input id="inputField" type="text" name="text" />

            <label htmlFor="email">Family Name</label>
            <input id="inputField" type="text" name="text" />

            <label htmlFor="email">Email</label>
            <input id="inputField" type="email" name="email" />

            <label htmlFor="email">Your question</label>
            <input id="inputField" type="text" name="text" />

            <button id="submitButton" type="submit" disabled={state.submitting}>Sign up</button>
          </form>
          </div>
        )
      }



export default Contact;