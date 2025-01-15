import { useLoaderData } from "react-router-dom";

// const searchkq = [
//   {
//     title: "Artists x Artists: When Teaming Up Leads to New Kinds of Art",
//     description:
//       "Ruangrupa takes on Documenta, sisters Carmelita Tropicana and Ela Troyano launch a podcast, Mary Reid Kelley and Patrick Kelley's residency, and more.",
//     category: "RETROSPECTIVE",
//     date: "SEP 15 2015 11:23 PM",
//     creator: "By Sarah Douglas Maximil iano Duron",
//   },
//   {
//     title: "Artists x Artists: When Teaming Up Leads to New Kinds of Art",
//     description:
//       "Ruangrupa takes on Documenta, sisters Carmelita Tropicana and Ela Troyano launch a podcast, Mary Reid Kelley and Patrick Kelley's residency, and more.",
//     category: "RETROSPECTIVE",
//     date: "SEP 15 2015 11:23 PM",
//     creator: "By Sarah Douglas Maximil iano Duron",
//   },
//   {
//     title: "Artists x Artists: When Teaming Up Leads to New Kinds of Art",
//     description:
//       "Ruangrupa takes on Documenta, sisters Carmelita Tropicana and Ela Troyano launch a podcast, Mary Reid Kelley and Patrick Kelley's residency, and more.",
//     category: "RETROSPECTIVE",
//     date: "SEP 15 2015 11:23 PM",
//     creator: "By Sarah Douglas Maximil iano Duron",
//   },
//   {
//     title: "Artists x Artists: When Teaming Up Leads to New Kinds of Art",
//     description:
//       "Ruangrupa takes on Documenta, sisters Carmelita Tropicana and Ela Troyano launch a podcast, Mary Reid Kelley and Patrick Kelley's residency, and more.",
//     category: "RETROSPECTIVE",
//     date: "SEP 15 2015 11:23 PM",
//     creator: "By Sarah Douglas Maximil iano Duron",
//   },
// ];

function SearchPage() {
  const data = useLoaderData() as any;

  if (data.error) {
    return <div className="search-page">Ket qua khong tim thay</div>;
  }

  if (data.data.results.length <= 0) {
    return <div>Ket qua khong tim thay</div>;
  }

  const searchkq = data.data.results as any[];

  return (
    <div>
      <div className="title">
        <h1>TÌM KIẾM</h1>
      </div>
      <div className="search-page">
        {searchkq.slice(1, 9).map((item, index) => (
          <div key={index}>
            {/* className={`editorpick border ${
            index === 0 ? "cols-span-1" : "cols-span-2"
          }`} */}
            <div>
              <div className="baiviettimkiem">
                <div style={{ height: "200px" }}>
                  <img src={item.image_url} alt="Logo" />
                </div>
                {/* <div className="button">
                  <button className="artnews">{item.category}</button>
                </div> */}
                <div style={{ width: "100%" }}>
                  <h4 onClick={() => window.open(item.link, "_blank")}>
                    {item.title}
                  </h4>
                  <p>{item.description}</p>
                </div>
                <p>{item.creator}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
