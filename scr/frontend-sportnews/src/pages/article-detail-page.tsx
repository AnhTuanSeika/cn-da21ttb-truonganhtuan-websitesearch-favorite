
const mainArticle = {
  title: "On the 'Noble Failure' of the Pre-Raphaelites, a Group Long Held in 'Generally Low Repute,' in 1964: From the Archives",
  date: "Aug 3, 2022 5:35 PM",
  category: "RETROSPECTIVE",
  content: `The Pre-Raphaelite painters' best work involved an eccentric rediscovery of nature, a facet unfortunately neglected in the current survey of their art at Huntington Hartford’s gallery...`,
  author: "Rodney Hensley",
  image1: "https://via.placeholder.com/400x250",
  image2: "https://via.placeholder.com/400x250"
};

const relatedArticles = [
  {
    title: "From the Archives: A Personal Remembrance of Picasso, in 1942",
    category: "RETROSPECTIVE",
    author: "The Editors of ARTnews",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "‘Everything She Takes Becomes Hers’: A Look Book of Faith Ringgold’s ‘Compelling, Singular Vision’",
    category: "RETROSPECTIVE",
    author: "The Editors of ARTnews",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Poland Passes Controversial Restitution Law, Sparking International Outcry",
    category: "NEWS",
    author: "Oscar Schwartz",
    image: "https://via.placeholder.com/150",
  },
];

const mostRead = [
  { title: "Algorithm-Generated NFTs Are Quickly Rising in Value. Can Art Blocks Up the Quality?", category: "ARTNEWS" },
  { title: "Scientists Discover the Key to Artistic Success: ‘Promising New Ideas’ and Intense Focus", category: "SCIENCE" },
  { title: "Rijksmuseum Buys Back Restituted Porcelain Trove at Auction", category: "MARKET" },
];

const newsWire = [
  {
    title: "This New Electric Bike Brings Off-Road Bravado to Zero-Emissions Riding",
    category: "ICON REPORT",
    image: "https://via.placeholder.com/200"
  },
  {
    title: "The Best 4K Projectors for Your Next Indoor or Outdoor Movie Night",
    category: "ROLLING STONE",
    image: "https://via.placeholder.com/200"
  },
  {
    title: "NHL Owners Approve Jersey Ads for 2022-23 Season",
    category: "SPORTICO",
    image: "https://via.placeholder.com/200"
  }
];

const article = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>ART NEWS</h1>
        <nav className="navbar">
          <a href="#">NEWS</a>
          <a href="#">MARKET</a>
          <a href="#">RETROSPECTIVE</a>
          <a href="#">ARTISTS</a>
          <a href="#">SEARCH</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="main-article">
          <h2 className="category">{mainArticle.category}</h2>
          <h1>{mainArticle.title}</h1>
          <p className="date">{mainArticle.date}</p>
          <img src={mainArticle.image1} alt="Main Article" />
          <p className="content">{mainArticle.content}</p>
          <img src={mainArticle.image2} alt="Main Article" />
          <p className="content">{mainArticle.content}</p>
<p className="author">Author: {mainArticle.author}</p>
        </div>

        <aside className="sidebar">
          <section className="related">
            <h2>More Retrospective</h2>
            {relatedArticles.map((article, index) => (
              <div key={index} className="related-article">
                <img src={article.image} alt="Related" />
                <div>
                  <h3 className="category">{article.category}</h3>
                  <p>{article.title}</p>
                  <span className="author">{article.author}</span>
                </div>
              </div>
            ))}
          </section>

          <section className="most-read">
            <h2>Most-Read Stories</h2>
            {mostRead.map((article, index) => (
              <div key={index} className="most-read-article">
                <h3 className="category">{article.category}</h3>
                <p>{article.title}</p>
              </div>
            ))}
          </section>
        </aside>
      </main>

      <footer className="footer">
        <section className="newswire">
          <h2>NEWSWIRE</h2>
          <div className="newswire-grid">
            {newsWire.map((news, index) => (
              <div key={index} className="newswire-item">
                <img src={news.image} alt="Newswire" />
                <h3 className="category">{news.category}</h3>
                <p>{news.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="newsletter">
          <h3>Subscribe to Our Newsletters</h3>
          <input type="email" placeholder="Email" />
          <button>Subscribe</button>
        </section>

        <div className="footer-info">
          <p>ART NEWS | The Leading Source for Art News & Art Event Coverage</p>
          <p>Send us a tip</p>
          <nav className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">LinkedIn</a>
            <a href="#">Youtube</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default article;