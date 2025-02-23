"use client"

import { redirect } from "next/navigation";

export default function SignUp() {

    async function onLogin(event) {
      event.preventDefault();
      const formData = new FormData(event.target)
      const response = await fetch("http://localhost:8000/api/v1/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password")
        })
      })
      console.log(response);
      const data = await response.json()
      console.log(response.status);
      if(response.status == 201) {
        redirect("/dashboard");
      } else {
        console.log(data)
      }
    }

    return (
        <>
            <h1>SignUp</h1>
            <form onSubmit={onLogin}>
                <label htmlFor="name">Your Name:</label><br/>
                <input type="text" id="name" name="name" minLength="2" maxLength="50" required/><br/>
                <label htmlFor="email">Your Email:</label><br/>
                <input type="email" id="email" name="email" required/><br/>
                <label htmlFor="password">Your Password:</label><br/>
                <input type="password" id="password" name="password" minLength="6" required/><br/>
                <button type="submit">Login</button>
            </form>
        </>
    );
}
