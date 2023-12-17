import Card from "@/Components/Articles/Card/Card";

async function getData() {
  const res = await fetch(
    "https://caredrop.api-care-box.click/care-drop/v1/blog/blog-list/?limit=6&offset=0",
    { cache: "no-store" }
    // { next: { revalidate: 10 } }
  ); // { next: { revalidate: value in second} }
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  // console.log("data = ", data);
  //console.log("Article page api called");

  return data;
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center g-3">
        {data.results.map((cardItem) => (
          <Card key={cardItem.id} cardDetails={cardItem} />
        ))}
      </div>
    </div>
  );
}
