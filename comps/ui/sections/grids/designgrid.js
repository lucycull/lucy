
export default function PhotoGrid() {
    return (
            <div className="container">
                <div className="row">
                    <a href="https://behance.net" rel="noopener" target="_blank"><img className="square" src="/design/00.png" alt="Photo Text"/></a>
                    <a href="https://behance.net" rel="noopener" target="_blank"><img className="rect" src="/design/01.png" alt="Photo Text"/></a>
                </div>
                <div className="row">
                    <a href="https://behance.net" rel="noopener" target="_blank"><img className="rect" src="/design/02.png" alt="Photo Text"/></a>
                    <a href="https://behance.net" rel="noopener" target="_blank"><img className="square" src="/design/03.png" alt="Photo Text"/></a>
                </div>
                <div className="row">
                    <a href="https://behance.net" rel="noopener" target="_blank"><img className="square" src="/design/04.png" alt="Photo Text"/></a>
                    <a href="https://behance.net" rel="noopener" target="_blank"><img className="rect" src="/design/05.png" alt="Photo Text"/></a>
                </div>
                <style jsx>{`
                    .row {display: flex; flex-direction: column; align-items: center;}
                    img {margin: .5rem 0; cursor: pointer;}
                    .square {width: 90vw; height: 90vw;}
                    .rect {width: 88vw;}
                    @media(min-width: 1020px) {.row {flex-direction: row;} .square{width: 300px; height: 300px;} .rect{width: 500px; height: 300px;}}
                    @media(min-width: 1360px) {.row {flex-direction: row;} .square{width: 300px; height: 300px;} .rect{width: 500px; height: 300px;}}
                    @media(min-width: 1920px) {.row {flex-direction: row;} .square{width: 400px; height: 400px;} .rect{width: 600px; height: 400px;}}
                    @media(min-width: 2560px) {.container {margin: -25rem 0 0 0;}.row {flex-direction: row;} .square{width: 500px; height: 500px;} .rect{width: 700px; height: 500px;}}
                    @media(min-width: 3000px) {.row {flex-direction: row;} .square{width: 600px; height: 600px;}.rect {width: 800px; height: 600px;}}
                `}</style>
            </div>
)}
