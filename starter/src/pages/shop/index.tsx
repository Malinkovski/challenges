import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import ProductItem from "../../components/ProductItem";
import { ProductProps } from "../../properties/props";
import { useState } from "react";

interface ShopProps {
  products: ProductProps[];
}

export const getServerSideProps: GetServerSideProps<ShopProps> = async (
  context
) => {
  const gender = context.query.gender_like as string;
  const q = context.query.q as string;

  let url = "http://localhost:5001/products?";

  if (gender && q) {
    url += `gender_like=${gender}&q=${q}`;
  } else if (gender) {
    url += `gender_like=${gender}`;
  } else if (q) {
    url += `q=${q}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
};

const Shop: NextPage<ShopProps> = ({ products }) => {
  const router = useRouter();
  const { gender_like, q } = router.query;
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleClearFilter = () => {
    setSearchQuery('');
    router.push({
      pathname: "/shop",
      query: {},
    });
  };

  const handleGenderFilter = (gender: string) => {
    const query = {
      ...(gender && { gender_like: gender }),
      ...(q && { q }),
    };
  
    router.push({
      pathname: "/shop",
      query,
    });
  };
  
  const handleCategoryFilter = (category: string) => {
    const query = {
      ...(gender_like && { gender_like }),
      ...(category && { q: category }),
    };
  
    router.push({
      pathname: "/shop",
      query,
    });
  };
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("search-product") as string;
  
    const query = {
      ...(gender_like && { gender_like }),
      ...(searchQuery && { q: searchQuery }),
    };
  
    router.push({
      pathname: "/shop",
      query,
    });
  };

  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  !gender_like && !q ? "how-active1" : ""
                }`}
                onClick={handleClearFilter}
              >
                All Products
              </button>
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  gender_like === "women" ? "how-active1" : ""
                }`}
                onClick={() => handleGenderFilter("women")}
              >
                Women
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  gender_like === "man" ? "how-active1" : ""
                }`}
                onClick={() => handleGenderFilter("man")}
              >
                Men
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  q === "belt" ? "how-active1" : ""
                }`}
                onClick={() => handleCategoryFilter("belt")}
              >
                Belt
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  q === "shoes" ? "how-active1" : ""
                }`}
                onClick={() => handleCategoryFilter("shoes")}
              >
                Shoes
              </button>

              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  q === "watches" ? "how-active1" : ""
                }`}
                onClick={() => handleCategoryFilter("watches")}
              >
                Watches
              </button>
            </div>

            <div className="flex-w flex-c-m m-tb-10">
              <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search show-search">
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                Search
              </div>
            </div>

            {/* search */}
            <form
        className="panel-search w-full p-t-10 p-b-15"
        onSubmit={handleSearch}
      >
        <div className="bor8 dis-flex p-l-15">
          <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
            <i className="zmdi zmdi-search"></i>
          </button>

          <input
            className="mtext-107 cl2 size-114 plh2 p-r-15"
            type="text"
            name="search-product"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>
          </div>

          <div className="row isotope-grid">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
            ) : (
              <div>
                <p className="stext-105 cl3">There are no results with your search.</p>
                <br />
                <hr />
              </div>
              
            )}
          </div>

          <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
            <a
              href="#"
              className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
            >
              1
            </a>

            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
              2
            </a>

            <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
              3
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
