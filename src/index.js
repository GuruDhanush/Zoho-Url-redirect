import '@vaadin/vaadin-button';
import '@vaadin/vaadin-app-layout';
import '@vaadin/vaadin-notification';



window.addEventListener('load', () => {
    //initUI();
    let main = document.getElementById("main");
    main.innerText = window.location.search;

});
