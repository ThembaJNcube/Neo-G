import React, { useState } from "react";

function Membership() {
  const [isNew, setIsnew] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [info, setInfo] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    password2: "",
  });

  /*function handleChange(event) {
    //console.log(event.target.value);
    setFName(event.target.value);
  }*/
  function isNeo(event) {
    //console.log(event.target.value);
    if (event.target.value === "new") {
      setIsnew(true);
    } else setIsnew(false);
    //console.log(isNew);
  }

  function sendInfo() {
    setInfo({
      name: { fName },
      surname: { lName },
      email: { email },
      password: { password },
      password2: { cPassword },
    });
    isNew
      ? alert("Request sent for " + fName + " " + lName)
      : alert("Logging in");

    setFName("");
    setLName("");
    setEmail("");
    setPassword("");
    setCPassword("");
  }

  console.log(info);

  return (
    <div className="form-container">
      <form>
        <h1 className="text-4xl font-extrabold py-4 text-[#ca0c0c]">{isNew? "Register":"Login" }</h1>

        <label for="member">Choose your Membership:</label>
        <select
          name="member"
          id="member"
          className="text-black text-xl"
          onChange={isNeo}
        >
          <option value="notNew">Active member</option>
          <option value="new">New member</option>
        </select>

        <label className={isNew ? "" : "hidden"}>First Name</label>
        <input
          className={isNew ? "" : "hidden"}
          onChange={(e) => {
            setFName(e.target.value);
          }}
          type="text"
          placeholder="John"
          value={fName}
          required
        />
        <label className={isNew ? "" : "hidden"}>Last Name</label>
        <input
          className={isNew ? "" : "hidden"}
          onChange={(e) => {
            setLName(e.target.value);
          }}
          type="text"
          placeholder="Doe"
          value={lName}
          required
        />
        <label>Email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="JohnDoe@email.com"
          required
        />
        <label>Password</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          name="password"
          value={password}
          id="password"
          required
        />
        <a
          href="#"
          className={`${isNew ? "hidden" : ""} font-semibold text-indigo-600 hover:text-indigo-500`}
        >
          Forgot password?
        </a>
        <label className={isNew ? "" : "hidden"}>Confirm Password</label>
        <input
          className={isNew ? "" : "hidden"}
          onChange={(e) => {
            setCPassword(e.target.value);
          }}
          type="password"
          name="password2"
          value={cPassword}
          id="password2"
          required
        />
        <input
          type="button"
          value="Submit"
          className="nav-btn"
          onClick={sendInfo}
        />
      </form>
    </div>
  );
}

export default Membership;
