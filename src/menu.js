export default function menu(){
    const menuBox = document.createElement('div');
    menuBox.classList.add('menuBox');
    let cont = `<div class="box">
                <div id="idli"></div>
                <div id="res">
                <h2>IDLI</h2>
                <hr>
                <p>Rice cake which is spongy in texture made of a rice batter</p>
                <h2>Rs15</h2>
                </div></div>
                <div class="box">
                <div id="dosa"></div>
                <div id="res">
                <h2>DOSA</h2>
                <hr>
                <p>South Indian cuisine made from a fermented batter of ground white gram and rice</p>
                <h2>Rs25</h2>
                </div></div>
                <div class="box">
                <div id="pongal"></div>
                <div id="res">
                <h2>PONGAL</h2>
                <hr>
                <p>A mixture of boiled sweet rice. Comes from the Tamil word pongu, means “to boil over”</p>
                <h2>Rs20</h2>
                </div></div>
                <div class="box">
                <div id="rice"></div>
                <div id="res">
                <h2>CHICKEN CHETTINAD</h2>
                <hr>
                <p>Classic Indian recipe, from the cuisine of Chettinad in Tamil Nadu</p>
                <h2>Rs70</h2>
                </div></div>
                <div class="box">
                <div id="biryani"></div>
                <div id="res">
                <h2>CHICKEN BIRYANI</h2>
                <hr>
                <p>Fluffy basmati rice layered over tender & succulent pieces of meat, along with the mesmerizing aromas</p>
                <h2>Rs120</h2>
                </div></div>
                <div class="box">
                <div id="fry"></div>
                <div id="res">
                <h2>FISH FRY</h2>
                <hr>
                <p>A fish fry is a meal containing battered or breaded fried fish</p>
                <h2>Rs60</h2>
                </div></div>`;
    menuBox.innerHTML = cont;
    console.log("menu page");
    return menuBox;
}