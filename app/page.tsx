import Image from "next/image";
import Page1 from "@/components/Page1.jsx";
import LoaderSimple from "@/components/LoaderSimple.jsx";
import Loading from "@/components/Loading.jsx";

export default function Home() {
  return (
    <>
      <Loading />
      <Page1 />
    </>
  );
}
