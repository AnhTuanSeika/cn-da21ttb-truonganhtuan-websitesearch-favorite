import { useLoaderData } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
import { getToken } from "../lib/utils";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  getArticeByEntertainment,
  getArticeByTechnology,
} from "../actions/article.api";

function Homepage() {
  const data = useLoaderData() as any;

  const test = data.data?.results as any[];

  const [favorites, setFavorites] = useState<any[]>([]);
  const [enviroments, setEnviroments] = useState<any[]>([]);
  const [technologies, setTechnologies] = useState<any[]>([]);
  const [userId] = useState(getToken()?.id || null);

  useEffect(() => {
    if (userId) {
      const fetchFavorites = async () => {
        try {
          const response = await axios.get(
            `http://localhost/backend-sportnews/get_favorites.php?user_id=${userId}`
          );
          setFavorites(response.data);
        } catch (error) {
          console.error("Error fetching favorites:", error);
        }
      };
      fetchFavorites();
    }
  }, [userId]);

  useEffect(() => {
    const getData1 = async () => {
      const {
        data: { results },
      } = await getArticeByEntertainment();

      setEnviroments(results);
    };

    const getData2 = async () => {
      const {
        data: { results },
      } = await getArticeByTechnology();

      setTechnologies(results);
    };

    getData1();
    getData2();
  }, []);

  const handleIsFavorite = (article_id: any) => {
    return favorites.some((item) => item.id === article_id);
  };

  return (
    <div className="body-homepage">
      <div className="title">
        <h1>NEWS SEARCH</h1>
      </div>
      <div className="body-1">
        {/* <div className="latenew"> */}

        <div className="grid-col2">
          <div>
            <div className="title2">
              <h2>
                / TIN TỨC MỚI NHẤT / TIN TỨC MỚI NHẤT / TIN TỨC MỚI NHẤT /{" "}
              </h2>
            </div>
            <div className="row11 ">
              {test.slice(0, 3).map((item, index) => (
                <div key={index}>
                  <div>
                    <img src={item.image_url} alt="Logo" />
                    <div className="baiviet">
                      <div className="">
                        <div style={{ display: "flex", gap: "50px" }}>
                          <button className="retrospective button artnews">
                            {item.category}
                          </button>
                          {userId && (
                            <FavoriteButton
                              key={index}
                              userId={getToken().id}
                              article={item}
                              isLike={handleIsFavorite(item.article_id)}
                            />
                          )}
                        </div>
                        <div className="day">{item.pubDate}</div>
                      </div>
                      <h4 onClick={() => window.open(item.link, "_blank")}>
                        {item.title}
                      </h4>
                      <p>{item.description}</p>
                      <p>{item.creator}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/*  */}
            <div className="title3">
              <h3>XEM THÊM</h3>
            </div>
          </div>
        </div>
        <div className="grid-col6">
          <div>
            <div className="title4">
              <h3>TIN TỨC ĐÁNG CHÚ Ý</h3>
            </div>
            <div>
              {/* // */}
              {test.slice(3, 8).map((item, index) => (
                <div key={index}>
                  <div onClick={() => window.open(item.link, "_blank")}>
                    <div className="baiviet">
                      <div className="button">
                        <button className="artnews">{item.category}</button>
                      </div>
                      {userId && (
                        <FavoriteButton
                          key={index}
                          userId={getToken().id}
                          article={item}
                          isLike={handleIsFavorite(item.article_id)}
                        />
                      )}
                      <h4 onClick={() => window.open(item.link, "_blank")}>
                        {item.title}
                      </h4>
                      <p>{item.description}</p>
                      <p>{item.creator}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="body-2">
        <div className="title6">
          <h2>
            LỰA CHỌN CỦA BIÊN TẬP VIÊN / LỰA CHỌN CỦA BIÊN TẬP VIÊN / LỰA CHỌN
            CỦA BIÊN TẬP VIÊN
          </h2>
        </div>
        <div className="row1-1 ">
          {enviroments.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className={`editorpick border ${
                index === 0 ? "cols-span-2" : "cols-span-1"
              }`}
            >
              <div onClick={() => window.open(item.link, "_blank")}>
                <div style={{ height: "400px", width: "100%" }}>
                  <img src={item.image_url} alt="Logo" />
                </div>
                <div className="baiviet">
                  <div className="button">
                    <button className="retrospective artnews">
                      {item.category}
                    </button>
                    <div className="day">{item.date}</div>
                  </div>
                  {userId && (
                    <FavoriteButton
                      key={index}
                      userId={getToken().id}
                      article={item}
                      isLike={handleIsFavorite(item.article_id)}
                    />
                  )}
                  <h4 onClick={() => window.open(item.link, "_blank")}>
                    {item.title}
                  </h4>
                  <p>{item.description}</p>
                  <p>{item.creator}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="title">
        <h1>TIN MỚI NHẤT</h1>
      </div>
      <div className="body-3">
        <div className="title5">
          <h2>
            NGHỆ THUẬT Ở VIỆT NAM / NGHỆ THUẬT VIỆT NAM / NGHỆ THUẬT VIỆT NAM /
            NGHỆ THUẬT VIỆT NAM
          </h2>
        </div>
        <div className="row1-5">
          <div className="row1-51">
            {technologies.slice(0, 1).map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div className="" style={{ height: "500px" }}>
                    <img src={item.image_url} alt="Logo" />
                  </div>
                  <div className="baiviet">
                    <div className="button">
                      <button className="retrospective">{item.category}</button>
                      <div className="day">{item.date}</div>
                    </div>
                    {userId && (
                      <FavoriteButton
                        key={index}
                        userId={getToken().id}
                        article={item}
                        isLike={handleIsFavorite(item.article_id)}
                      />
                    )}
                    <h4 onClick={() => window.open(item.link, "_blank")}>
                      {item.title}
                    </h4>
                    <p>{item.description}</p>
                    <p>{item.creator}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row1-52">
            {technologies.slice(2, 6).map((item, index) => (
              <div
                key={index}
                style={{
                  border: "0px solid #333",
                  padding: "20px",
                  borderWidth:
                    index % 2 ? "1px 1px 1px 1px" : "1px 1px 1px 2px",
                }}
              >
                {/* TODO: Xet chan le */}
                <div>
                  <img src={item.image_url} alt="Logo" />
                  <div className="baiviet">
                    <div className="button">
                      <button className="retrospective">{item.category}</button>
                      <div className="day">{item.date}</div>
                    </div>
                    {userId && (
                      <FavoriteButton
                        key={index}
                        userId={getToken().id}
                        article={item}
                        isLike={handleIsFavorite(item.article_id)}
                      />
                    )}
                    <h4 onClick={() => window.open(item.link, "_blank")}>
                      {item.title}
                    </h4>
                    <p>{item.description}</p>
                    <p>{item.creator}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* {[...Array(10)].map((_, index) => (
              <p>{index}</p>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
