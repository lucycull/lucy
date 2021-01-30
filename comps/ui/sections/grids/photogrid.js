export default function PhotoGrid() {
    return (
            <div className="container">
                <div className="row">
                    <img src="/photos/00.png" alt="Photo Text"/>
                    <img src="/photos/01.png" alt="Photo Text"/>
                    <img src="/photos/02.png" alt="Photo Text"/>
                </div>
                <div className="row">
                    <img src="/photos/03.png" alt="Photo Text"/>
                    <img src="/photos/04.png" alt="Photo Text"/>
                    <img src="/photos/05.png" alt="Photo Text"/>
                </div>
                <div className="row">
                    <img src="/photos/06.png" alt="Photo Text"/>
                    <img src="/photos/07.png" alt="Photo Text"/>
                    <img src="/photos/08.png" alt="Photo Text"/>
                </div>
                <style jsx>{`
                    .container {
                        display: flex; flex-direction: column;
                    }
                    .row {
                        display: flex; flex-direction: column; align-items: center;
                    }
                    img {
                        width: 90vw; height: 90vw; margin: .5rem;
                    }
                    @media(min-width: 1020px) {.row {flex-direction: row;} img {width: 300px; height: 300px;}}
                    @media(min-width: 1360px) {.row {flex-direction: row;} img {width: 350px; height: 350px;}}
                    @media(min-width: 1920px) {.row {flex-direction: row;} img {width: 500px; height: 500px;}}
                    @media(min-width: 2560px) {.row {flex-direction: row;} img {width: 600px; height: 600px;}}
                    @media(min-width: 3000px) {.container {margin: -25rem 0 0 0;}.row {flex-direction: row;} img {width: 1000px; height: 1000px;}}
                `}</style>
            </div>
)}
