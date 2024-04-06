import Head from "next/head";
import RegisterModal from "@/components/UI/modals/RegisterModal";
import Frontpage from "@/components/Frontpage/Frontpage";
import supabase from "./supabaseClient";
import { Product } from "@/models/Product";

export const revalidate = 0; // recreating and updating cache every time a request hits the server

export default async function Home() {
  const { data, error } = await supabase.from("Dummy_data").select("*, Dummy_users(*)");
  console.log("DATA RECEIVED IN STATIC FUNCTION: ", data);
  data?.forEach((cur) => (cur["user"] = cur["Dummy_users"]));

  return (
    <>
      <Head>
        <title>Häämekon vuokraus</title>
      </Head>
      <RegisterModal />
      <Frontpage frontPageData={data as Product[]} />
    </>
  );
}
