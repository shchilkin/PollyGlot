import type { MetaFunction } from "@remix-run/node";
import Test from "~/components/Test";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "PollyGlot" },
    { name: "description", content: 'Solo project for the Intro to AI Engineering chapter from "The AI Engineer Path" on Scrimba."' },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col h-screen items-center justify-top">
      <Header />
      <Test />
    </div>
  );
}