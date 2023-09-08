import Header from "./components/Header/Header";
import "./home.css";
import { dataArticles } from "./data/dataArticles";
import ArticleProducts from "./components/Article-products/ArticleProducts";
export default function Home() {
  return (
    <main>
      <Header />
      <div className="home-banner">
        <img src="../assets/images/home-banner.png" alt="Bannière" />
      </div>
      <section>
        <h2>NOS PRODUITS</h2>
        {dataArticles.map((e) => (
          <ArticleProducts
            key={e.id}
            articleName={e.articleName}
            articleSrc={e.articleSrc}
            articleLink={e.articleLink}
          />
        ))}
      </section>
    </main>
  );
}
