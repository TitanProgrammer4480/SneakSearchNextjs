'use client'

export default function Login() {

  async function onLogin(event) {

    const formData = new FormData(event.target)
    const response = await fetch("", {
      method: "POST",
      body: formData
    })

    const data = await response.json()
    if(data) {
      console.log(data)
    } else {
      console.log(data)
    }
  }

  return (
    <main className="w-full min-h-[90vh] flex flex-col items-center justify-center">
      <div>
        <h1>Login</h1>
        <p>Tets</p>
        <form onSubmit={onLogin}>
          <label htmlFor="name">Your Name:</label><br/>
          <input type="text" id="name" name="name" required/><br/>
          <label htmlFor="password">Your Password:</label><br/>
          <input type="password" id="password" name="password" required/><br/>
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}