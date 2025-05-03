import CardPage from "@/components/CardPage";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/types/types";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export async function getServerSideProps(orgs: GetServerSidePropsContext) {
  const res = await axios.get("https://nt.softly.uz/api/front/products", {
    params: {
      page: orgs.query.page || 1,
      limit: orgs.query.limit || 10,
      categoryId: orgs.params?.id,
    },
  });
  return {
    props: {
      data: {
        categoriesPage: res.data,
        limit: Number(orgs.query.limit),
        page: Number(orgs.query.page),
        categoryId: orgs.params?.id,
      },
    },
  };
}

type categoryTypes = {
  data: {
    categoriesPage: ProductType;
    limit: number;
    page: number;
    categoryId: number;
  };
};

function CategoriesPage({ data }: categoryTypes) {
  const searchParams = useSearchParams();
  const limit = Number(searchParams.getAll("limit") || 10);
  const page = Number(searchParams.getAll("page") || 1);

  if (!data.categoriesPage) {
    return <p className="text-center font-bold ">Loading...</p>;
  }
  const totalItems = data.categoriesPage?.totalItems || 10;
  const safeLimit = limit > 0 ? limit : 10;
  const totalPages = Math.ceil(totalItems / safeLimit);

  return (
    <div className="container mx-auto py-6">
      {data.categoriesPage && <CardPage items={data.categoriesPage.items} />}

      <div className="flex justify-center gap-2 mt-6">
        {[...Array(totalPages)].map((_, index) => {
          const index_number = index + 1;
          return (
            <Link
              href={`/categories/${data.categoryId}?page=${index_number}&limit=${limit}`}
              key={index}
            >
              <Button
                className="cursor-pointer"
                variant={index_number === Number(page) ? "default" : "outline"}
              >
                {index_number}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesPage;
