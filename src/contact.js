export default function contac(){
    const contactBox = document.createElement('div');
    contactBox.classList.add('intro');
    let cont = `<h2>Thank you for visiting our page</h2>
                    <hr>
                    <p>"The more you eat right, the chunkier your bank account gets”</p>
                    <p>Visit Again!</p>`;
    contactBox.innerHTML = cont;
    return contactBox;
}