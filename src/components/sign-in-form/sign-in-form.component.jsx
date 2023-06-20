import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

import "./sign-in-form.styles.scss";

import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const defultFormFilds = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFilds, setFormFilds] = useState(defultFormFilds);
  // console.log(formFilds);
  const { email, password } = formFilds;

  const resetForm = () => {
    setFormFilds(defultFormFilds);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFilds({ ...formFilds, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetForm();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(err);
      }
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Do not have an account?</h2>
      <span>Sign up with email and password</span>

      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} buttonType="google" type="button">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
