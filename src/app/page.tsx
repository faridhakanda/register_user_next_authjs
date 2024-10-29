import Login from "@/components/loginform";
import Link from "next/link";
//import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-center items-center mx-auto text-center pt-10">
      <h1>Hey, it's time to signin!</h1>
      <Login />
      <p className="my-3">
        Don't you have an account?
        <Link className="mx-2 underline" href="register">Register</Link>
      </p>
    </div>
  );
}
