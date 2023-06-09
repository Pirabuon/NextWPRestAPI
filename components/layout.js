import Link from "next/link";
import { useRouter } from "next/router";
import SlideToggleMenu from "../components/SlideToggleMenu";
import StickyMenu from "../components/StickyMenu";
import Slider from "../components/Slider";
import Login from "../components/Login";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <div>
        <div className="topMenuBar">
          <SlideToggleMenu />
          <StickyMenu />
<Login />
          <Link
            className={
              router.pathname == "/" || router.pathname == "/"
                ? "active"
                : ""
            }
            href="/"
          >
            <h1 className="siteTitle">Valaakam</h1>
          </Link>
        </div>
          <Slider />


        {/* 
 <nav className="header-nav">
          <ul>
            <li>
              <Link
                className={
                  router.pathname == "/" || router.pathname == "/blog/[slug]"
                    ? "active"
                    : ""
                }
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={router.pathname == "/about" ? "active" : ""}
                href="/about"
              ></Link>
            </li>
            <li>
              <Link
                className={router.pathname == "/abnormal" ? "active" : ""}
                href="/abnormal"
              >
                abnormal
              </Link>
            </li>
            <li>
              <Link
                className={
                  router.pathname == "/blog" ||
                  router.pathname == "/blog/[slug]"
                    ? "active"
                    : ""
                }
                href="/blog"
              ></Link>
            </li>
          </ul>
        </nav>      */}
      </div>
      {children}
      <div className="site-footer">
        <p>Valaakam</p>
      </div>
    </>
  );
}
