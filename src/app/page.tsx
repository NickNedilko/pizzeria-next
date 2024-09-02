import { Categories, Container, Filters, SortPopup, Title, TopBar } from "@/components";
import { Button } from "@/components/ui/button";


export default function Home() {
  return <>
      <Container className="mt-10">
      <Title text="Всі піцци" size="lg" className="font-extrabold leading-10" />
      </Container>
       <TopBar/>

    <Container className="mt-10 pb-14">
      <div className="flex gap-[60px]">
        <div className="w-[250px]">
          <Filters />

        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-16">List of products</div>
        </div>
      </div>
    </Container>
    </>
  ;
}
