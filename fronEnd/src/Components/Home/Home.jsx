import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Navbar() {
  return (
    <div>
      <section className="curved">
        <section id="main">
          <div className="main-row">
            <div></div>
            <div className="text">
              <h1 className="fo">ملجأ القطط</h1>
              <h4 className="fod">
                عند قيامك بتبني قط أليف من الملجأ، تكون قد ساهمت في مساعدة قط
                أخر
              </h4>
              <h4 className="fod"> كما أنه يضمن لك صديق مخلص مدى الحياة</h4>
              <Link className=".btn" to={"/SignUp"} className="btn">
                للتسجيل
              </Link>
            </div>
            <br /> <br /> <br />
            <img
              className="img"
              src="https://img.youm7.com/ArticleImgs/2019/6/4/142226-%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%82%D8%B7%D8%B7-(2).jpg"
              alt="..."
            />
            <img
              className="img"
              src="https://read.opensooq.com/wp-content/uploads/2020/03/%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA-%D8%B9%D9%86-%D8%A7%D9%84%D9%82%D8%B7%D8%B7.jpg"
              alt="..."
            />
            <img
              className="img"
              src="http://petzooz.com/wp-content/uploads/2017/12/depressed-cat-petzooz.jpg"
              alt="..."
            />
            <img
              className="img"
              src="https://1.bp.blogspot.com/-A5HUYMkqWHg/XjMLaNzeF8I/AAAAAAAABic/EHH7ukQQgAgFxc6Z8us7GPAECN0XkLe5ACLcBGAsYHQ/s640/%25D8%25A3%25D9%2581%25D8%25B6%25D9%2584%2B%25D9%2588%25D8%25A3%25D9%2584%25D8%25B7%25D9%2581%2B10%2B%25D9%2582%25D8%25B7%25D8%25B7%2B%25D9%2581%25D9%258A%2B%25D8%25A7%25D9%2584%25D8%25B9%25D8%25A7%25D9%2584%25D9%2585.jpg"
              alt="..."
            />
          </div>
        </section>
      </section>
    </div>
  );
}
