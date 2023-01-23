import SignUp from "components/SignUp";
import { json, redirect } from "react-router-dom";

function SignUpPage() {
  return <SignUp />;
}

export default SignUpPage;

export async function action({ request }) {
  // const searchParams = new URL(request.url).searchParams;

  const data = await request.formData();

  console.log(data);
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("/api/user/signup" , {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  // soon: manage that token
  return redirect("/");
}
