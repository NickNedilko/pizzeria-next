import { Categories, Container, Filters, ProductCard, SortPopup, Title, TopBar } from "@/components";
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
          <div className="flex flex-col gap-16">
            <ProductCard id={1} name="Діабло" price={250} imageUrl="https://img.postershop.me/7816/93f84259-92ed-4243-bdfd-d8554021c88f_image.png" />
          </div>
        </div>
      </div>
    </Container>
    </>
  ;
}
