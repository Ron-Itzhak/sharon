import Articles from "./articles";
import Contact from "./contact";
import Header from "./header";
import Intro from "./intro";
import Image from "next/image";
import profilePic from "../../public/hr-nobg.png";
import HRServices from "./services";

export default function HomePage() {
  return (
    <div className="bg-neutral min-h-screen">
      <Header></Header>
      <main className="text-center px-8 py-16">
        <h1 className="text-5xl font-bold text-black">
          One app the world loves.
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Open a free account in minutes right from your phone, and make your
          skills go further.
        </p>
        <Image src={profilePic} alt="" width="800" height="800" />

        <button className="mt-6 px-6 py-3 bg-green text-white rounded">
          Get started
        </button>
      </main>

      <Intro></Intro>
      <Articles></Articles>
      <HRServices></HRServices>
      <Contact></Contact>
    </div>
  );
}
