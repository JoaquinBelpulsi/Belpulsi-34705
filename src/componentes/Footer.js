import Facebook from "./multimedia/redes/facebook.png"
import Instagram from "./multimedia/redes/instagram.png"
import Efectivo from "./multimedia/medotos_pago/efectivo.png"
import Merca from "./multimedia/medotos_pago/mercadopago.png"
import Pago from "./multimedia/medotos_pago/pagofacil.png"
import Rapi from "./multimedia/medotos_pago/rapipag.png"

import ItemCount from "./ItemCount"

function Footer() {
return (
<>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-3">

                    <div id="redes">

                        <h1>Redes sociales</h1>

                        <div class="fila">
                            <a href="https://www.facebook.com/sanaaromas"><img
                                    src={Facebook} alt="Facebook"/></a>
                            <label> Seguinos en Facebook </label>
                        </div>

                        <div class="fila">
                            <a href="https://www.instagram.com/sana_aromas/"><img
                                    src={Instagram} alt="Instagram"/></a>
                            <label> Seguinos en Instagram </label>
                        </div>
                    </div>

                </div>
                <div class="col-sm-12 col-md-4 col-lg-6">

                    <div id="nosotros">
                        <h1>Sana Aromas</h1>
                        <p>SANA es un espacio lleno de magia.
                            SANA es un espacio en donde vas a encontrar todo lo que necesitas para elevar tu
                            vibra,
                            potenciarte y armonizarte.
                            Para lo que necesites siempre voy a estar dispuesta a darte una mano, con amor Sofi.
                        </p>
                    </div>

                </div>
                <div class="col-sm-12 col-md-4 col-lg-3">

                    <div class="mapa">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13140.332380383776!2d-58.57001712629588!3d-34.57676393746106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9dbbf9a9389%3A0xaa20a7f33f23f351!2sVilla%20Bonich%2C%20Billinghurst%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1646773915131!5m2!1ses!2sar"
                            width="250" height="250" allowfullscreen="" loading="lazy"
                            title="Mapa Villa Bonich"></iframe>
                    </div>

                </div>
            </div>
            <div class="row copyfooter">
                <div class="col-sm-12 col-md-4 col-lg-3">

                    <div>
                        <h4>2022 - Belpulsi</h4>
                    </div>

                </div>
                <div class="col-sm-12 col-md-4 col-lg-6">

                    <div class="metpag">
                        <img src={Efectivo}
                            alt="Metodo de pago efectivo mercadopago pagofacil rapipago" />
                        <img src={Merca}
                            alt="Metodo de pago efectivo mercadopago pagofacil rapipago" />
                        <img src={Pago}
                            alt="Metodo de pago efectivo mercadopago pagofacil rapipago" />
                        <img src={Rapi}
                            alt="Metodo de pago efectivo mercadopago pagofacil rapipago" />
                    </div>

                </div>
                <div class="col-sm-12 col-md-4 col-lg-3">

                    <div class="redesfooter">
                        <div>
                            <a href="https://www.facebook.com/sanaaromas"> <img src={Facebook}
                                    alt="facebook" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/sana_aromas/"> <img src={Instagram}
                                    alt="instagram" />
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </footer>

    <ItemCount
        type = "botones"
        
    />

</>
)
}

export default Footer