"use client"

export default function SignUp() {

    async function onLogin(event) {

        const formData = new FormData(event.target)
        const response = await fetch("http://localhost:8000/api/v1/users", {
          method: "POST",
          body: JSON.stringify(Object.fromEntries(formData))
        })
    
        const data = await response.json()
        if(data) {
          console.log(data)
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
