import React from "react";
import "./ArticleProducts.css";
import Link from "next/link";
function ArticleProducts(props) {
  return (
    <article className="article-products">
      <div className="article-img">
        <img src={props.articleSrc} alt={props.articleName} />
      </div>
      <Link href="/products">{props.articleName}</Link>
    </article>
  );
}

export default ArticleProducts;
