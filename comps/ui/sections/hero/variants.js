import Button from "../../comps/button";
import css from "./hero.module.css";
export function Standard({head, sub, buttonText, buttonUrl, buttonVariant, buttonBg, buttonHov}) {
  return (
    <div id="container" className={css.container}>
      <div id="container" className={css.contents}>
        <h1>{head}</h1>
        <p>{sub}</p>
        <Button text={buttonText} url={buttonUrl} variant={buttonVariant} bg={buttonBg} hov={buttonHov}
        />
      </div>
      <style jsx>{`
        #container {
          height: 100vh;
        }
        #contents {
          height: 100vh;
        }
      `}</style>
    </div>
  );
}
export function NoButton({head, sub}) {
  return (
    <div className={css.container}>
      <div className={css.contents}>
        <h1 style={{fontSize: '1.8rem'}}>{head}</h1>
        <p style={{margin: '.5rem auto 0 auto'}}>{sub}</p>
      </div>
    </div>
  );
}
