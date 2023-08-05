import Head from "next/head";
import RegisterModal from "@/components/UI/modals/RegisterModal";
import Frontpage from "@/components/Frontpage/Frontpage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Häämekon vuokraus</title>
      </Head>
      <RegisterModal />
      <Frontpage />
    </>
  );
}
