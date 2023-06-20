import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import "./sign-up-form.styles.scss";

const defultFormFilds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFilds, setFormFilds] = useState(defultFormFilds);
  // console.log(formFilds);
  const { displayName, email, password, confirmPassword } = formFilds;

  const resetForm = () => {
    setFormFilds(defultFormFilds);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFilds({ ...formFilds, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return;
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (err) {
      if ((err.code = "auth/email-already-in-use")) {
        alert("the email is alredy exist");
      } else {
        console.log(err.message);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Do not have an account?</h2>
      <span>Sign up with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
