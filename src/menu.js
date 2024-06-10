export default function menu(){
    const menuBox = document.createElement('div');
    menuBox.className = 'menuBox';
    let cont = `<div class="box1">
                <div id="idli"></div>
                <div id="res">
                <h2>IDLI</h2>
                <hr>
                <p> Rice cake which is spongy in texture made of a rice batter</p>
                <h2>Rs20</h2>
                </div></div>
                <div class="box2">
                <div id="dosa"></div>
                <div id="res">
                <h2>DOSA</h2>
                <hr>
                <p>South Indian cuisine made from a fermented batter of ground white gram and rice</p>
                <h2>Rs20</h2>
                </div></div>
                <div class="box3">
                <div id="rice"></div>
                <div id="res">
                <h2>CHICKEN CHETTINAD</h2>
                <hr>
                <p>Classic Indian recipe, from the cuisine of Chettinad in Tamil Nadu.</p>
                <h2>Rs20</h2>
                </div></div>
                <div class="box4">
                <div id="pongal"></div>
                <div id="res">
                <h2>PONGAL</h2>
                <hr>
                <p>A mixture of boiled sweet rice. Comes from the Tamil word pongu, means “to boil over”.</p>
                <h2>Rs20</h2>
                </div></div>`;
    menuBox.innerHTML = cont;
    console.log("menu page");
    return menuBox;
}