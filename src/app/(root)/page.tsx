import { Container, Filters, ProductsGroupList,  Title, TopBar } from "@/components";
import { prisma } from "../../../prisma/prisma-client";
import { Suspense } from "react";



export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingridients: true,
          items: true,
        }
      }
    }
    })

  return <>
      <Container className="mt-10">
      <Title text="Всі піцци" size="lg" className="font-extrabold leading-10" />
      </Container>
       <TopBar categories={categories.filter((category)=>category.products.length> 0)}/>

    <Container className="mt-10 pb-14">
      <div className="flex gap-[60px]">
        <div className="w-[250px]">
          <Suspense>
            <Filters />
          </Suspense>

        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            {
              categories.map(category => (
                <ProductsGroupList key={category.id} title={category.name} categoryId={category.id} products={category.products} />
            ))
            }
            
          </div>
        </div>
      </div>
    </Container>
    </>
  ;
}
