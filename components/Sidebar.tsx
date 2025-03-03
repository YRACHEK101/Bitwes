import Image from "next/image";
import NewsletterSignUp from "./NewsletterSignUp";
import PopularArticles from "./PopularArticles";
import { Button } from "./ui/button";
import magazineCover from "@/public/images/homepage/magazine-cover.jpg";

export default function Sidebar() {
  return (
    <aside>
      <h3 className="uppercase font-semibold mb-2">Printmagazine</h3>
      <p className="text-5xl font-semibold">03/2022</p>
      <Image
        className="w-[20rem] pt-8 pb-4"
        src={magazineCover}
        alt="A rust-colored magazine cover, showing a sculpture of a man, the words 'FYRRE MAGAZINE' on the top left and '03/2022' on the bottom right, a gold badge just above with 'EXCLUSIVE JAKOB GRONBERG INTERVIEW' printed on it, and an arrow pointing in the bottom right corner"
      />
      <Button>Commande</Button>
      <PopularArticles />
      <div className="bg-[#f8f8f8] p-[1.88rem] mt-16">
        <h3 className="uppercase font-semibold mb-2">Bulletin d'information</h3>
        <p className="heading3-title mb-4">Nouvelles du design dans votre boîte de réception</p>
        <NewsletterSignUp />
      </div>
    </aside>
  );
}
