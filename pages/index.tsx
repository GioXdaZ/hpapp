import { HeadPage } from "../components/HeadPage";

import { Navbar } from "../components/Navbar";
import { Homepage } from "../components/Homepage";
import { Footer } from "../components/FooterPage";

export default function Home() {
  return (
    <>
      <HeadPage />

      <Navbar />

      <main>
        <Homepage />
        <div></div>
      </main>

      <Footer />
    </>
  );
}
