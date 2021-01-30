import css from './designgrid.module.css'
export default function DesignGrid() {
    return (
        <div className={css.grid}>
            <div className={css.img1}><img src="/design/00.png" alt=""/></div>
            <div className={css.img2}><img src="/design/00.png" alt=""/></div>
            <div className={css.img3}><img src="/design/00.png" alt=""/></div>
            <div className={css.img4}><img src="/design/00.png" alt=""/></div>
            <div className={css.img5}><img src="/design/00.png" alt=""/></div>
            <div className={css.img6}><img src="/design/00.png" alt=""/></div>
        </div>
)}