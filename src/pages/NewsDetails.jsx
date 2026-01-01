import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import DetailsCard from "../components/DetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const newsDetails = data.data[0];
  console.log(newsDetails);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid  justify-center grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold py-5">Dragon News</h2>
          <DetailsCard key={newsDetails._id} news={newsDetails}></DetailsCard>
        </section>
        <section className="col-span-3">
          <RightNav></RightNav>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
