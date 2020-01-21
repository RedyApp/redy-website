<template>
  <section>
      <div class="bg-white w-full relative z-20">
        <div to class="logo container mx-auto px-4 py-2">
            <img src="/img/logo.svg" class="w-20 h-20 md:w-20 md:h-20 max-w-xs" alt />        
      </div>
      </div>
      <div class="bg-redy-gray py-20 relative overflow-hidden">
        <div class="absolute left-0 top-0 md:-mt-32">
          <img class="md:w-full background" src="/img/background-terms.svg" alt="">
          </div>
          <div class="container mx-auto px-4 relative">
              <h1 class="text-4xl md:text-5xl mb-6 font-light">Términos</h1>
              <div class="flex flex-wrap">
                  <div class="w-full lg:w-1/3 lg:pr-12 mb-6 lg:mb-0">
                    <div class="bg-white rounded-lg py-4">
                        <p class="border-b border-gray-200 p-6 font-semibold hover:text-gray-600 cursor-pointer"
                            @click.prevent="moveTo('section1')"
                        >Términos y Condiciones de Uso de Plataforma Redy</p>
                        <p class="border-b border-gray-200 p-6 font-semibold hover:text-gray-600 cursor-pointer"
                            @click.prevent="moveTo('section2')"
                        >OBJETO DE LOS TÉRMINOS Y CONDICIONES</p>
                        <p class="border-b border-gray-200 p-6 font-semibold hover:text-gray-600 cursor-pointer"
                            @click.prevent="moveTo('section3')"
                        >FUNCIONAMIENTO DE LA PLATAFORMA</p>
                        <p class="p-6 font-semibold hover:text-gray-600 cursor-pointer"
                            @click.prevent="moveTo('section4')"
                        >ACEPTACIÓN TOTAL DE LOS TÉRMINOS</p>
                    </div>
                  </div>  
                  <div class="w-full lg:w-2/3 ">
                    <div class="bg-white rounded-lg py-8 px-6 md:px-12">
                        <h1 class="text-xl md:text-3xl text-black font-semibold mb-6" id="section1">Términos Y Condiciones De Uso De Plataforma “Redy”</h1>
                        <h2 class="font-gordita text-lg font-medium mb-4">ASPECTOS GENERALES</h2>
                        <h3 class="font-gordita text-lg font-medium mb-4">RELACIÓN CONTRACTUAL:</h3>
                        <div class="font-regular text-md mb-4">
                            <p class="font-regular mb-4">
                                Los presentes Términos y Condiciones de uso (en adelante los “ <b>Términos</b> ” y/o “<b>Condiciones</b>”, en su caso) regulan el acceso o uso que usted haga, como persona, desde los Estados Unidos Mexicanos de la plataforma virtual Redy, compuesta por una aplicación para dispositivos móviles y una página web (en
                                adelante “<b>el servicio</b>” o “ <b>los servicios</b>”), puestos a disposición por Redy.
                            </p>
                            <p class="mb-4">LEA ESTAS CONDICIONES DETENIDAMENTE ANTES DE ACCEDER O USAR LOS SERVICIOS.</p>
                            <p class="mb-4">
                                Mediante la aceptación de estos términos y condiciones se regula el acceso y uso de los Servicios y son los que establecen una relación contractual entre usted y Redy. Si usted no acepta dichos Términos y Condiciones, no podrá acceder o usar los Servicios. Estos Términos y Condiciones sustituyen expresamente los acuerdos o compromisos previos celebrados entre las partes. Redy podrá poner fin de inmediato a estos Términos y Condiciones o cualquiera de los Servicios respecto de usted o, en general, dejar de ofrecer o denegar el acceso a los Servicios o cualquier parte de ellos, en cualquier momento y por cualquier motivo de manera unilateral.
                            </p>
                            <p class="mb-4">
                                Se podrán aplicar condiciones suplementarias a determinados Servicios, como políticas para un evento, una actividad o una promoción particular, y dichas condiciones suplementarias se le comunicarán en relación con los Servicios aplicables. Las condiciones suplementarias se establecen además de los Términos y Condiciones, y se considerarán una parte de estas, para los fines de los Servicios aplicables. Las condiciones suplementarias prevalecerán sobre las
                                Condiciones en el caso de conflicto con respecto a los Servicios aplicables.
                            </p>
                            <p class="mb-4">
                                Redy podrá modificar los Términos y Condiciones relativos a los Servicios cuando lo considere oportuno. Las modificaciones serán efectivas después de la publicación por parte de Redy de dichos Términos y Condiciones actualizadas en esta ubicación o las políticas modificadas o condiciones suplementarias sobre el Servicio aplicable. Su acceso o uso continuado de los Servicios después de dicha publicación constituye su consentimiento a vincularse por los Términos y Condiciones y sus modificaciones.
                            </p>
                            <p class="mb-4">
                                La recopilación y el uso que realiza Redy de la información personal en relación con los Servicios se efectúa de acuerdo con la Política de privacidad de Redy, disponible en https://www.pideloredy.com. Redy podrá facilitar a un procesador de reclamaciones o a una aseguradora cualquier información necesaria (incluida su información de contacto) si hubiera quejas, disputas o conflictos, que pudieran incluir un incumplimiento contractual, implicándole a usted y a un tercero y dicha información o dichos datos fueran necesarios para resolver la queja, la disputa o el conflicto.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">NATURALEZA JURÍDICA:</h3>
                            <p class="mb-4">
                                Los presentes Términos y Condiciones de uso regulan propiamente la relación contractual de carácter comercial que vincula a los Consumidores que acceden y/o usan la Plataforma virtual y al Operador, especialmente en la autorización de uso que otorga éste en favor de aquel como también el uso que los Consumidores dan a la Plataforma.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">DEFINICIONES:</h3>
                            <p class="mb-4">
                                <b>Cookies:</b> Cadenas de texto enviadas virtualmente que son almacenadas por el uso de la Plataforma por el Operador, para la consulta de las actividades y preferencias de los usuarios.
                            </p>
                            <p class="mb-4">
                                <b>Comercio Electrónico:</b> Comprende el envío, transmisión, recepción, almacenamiento de mensajes de datos por vía electrónica. Las dudas que surjan respecto de la eficacia y validez de los mensajes de datos y demás actividades vinculadas al comercio electrónico se interpretarán de conformidad con el Capítulo VIII BIS de la Ley Federal de Protección al Consumidor.
                            </p>
                            <p class="mb-4">
                                <b>Comisionista:</b> Persona física que acepta realizar la gestión del encargo solicitado por el Consumidor a través de la Plataforma. El Comisionista reconoce que presta el Servicio por cuenta y riesgo propio y libera al Consumidor de cualquier
                                responsabilidad que pudiera surgir durante la prestación del servicio.
                            </p>
                            <p class="mb-4">
                                <b>Consumidor(es):</b> Quien(es) accede(n) y/o usa(n) la Plataforma para solicitar por
                                medio de ésta un mandato remunerado, cuyo encargo consiste en la celebración de un contrato de compraventa o cualquier otro tipo de contrato lícito, con el fin de adquirir bienes o servicios.
                            </p>
                            <p class="mb-4">
                                <b>Contrato de mandato remunerado celebrado por medios electrónicos:</b> Aquel acuerdo de voluntades celebrado entre el Consumidor y el Comisionista, por medio del cual el Consumidor solicita, a través de la Plataforma, la gestión de un encargo al comisionista, obligándose este último a cumplir con dicho encargo por
                                cuenta y riesgo del Consumidor, a cambio de recibir una remuneración como contraprestación.
                            </p>
                            <p class="mb-4">
                                <b>Datos Personales:</b> Es toda información que permite identificar o hacer identificable a una persona física.
                            </p>
                            <p class="mb-4">
                                <b>Interacción en la Plataforma:</b> Facultad de los Consumidores para conocer los productos exhibidos por el Operador, así como la publicidad puesta a disposición en la Plataforma.
                            </p>
                            <p class="mb-4">
                                <b>Mayor de edad:</b> Persona física mayor de dieciocho (18) años.
                            </p>
                            <p class="mb-4">
                                <b>Mensajes de Datos:</b> La información generada, enviada, recibida, almacenada o comunicada por medios electrónicos, ópticos o similares, como pudieran ser, entre otros, el Intercambio Electrónico de Datos (EDI), Internet, el correo electrónico, el telegrama, el télex o el telefax.
                            </p>
                            <p class="mb-4">
                                <b>Operador:</b> Encargado de administrar operativamente y funcionalmente la Plataforma representado para los efectos de los presentes Términos y Condiciones por Redy o por la persona física o jurídica que ésta designe.
                            </p>
                            <p class="mb-4">
                                <b>Pasarela de Pagos:</b> Servicio que permite la realización de pagos por parte de los Consumidores directamente a los Comisionistas a través de medios electrónicos utilizando plataformas tecnológicas (software).
                            </p>
                            <p class="mb-4">
                                <b>Plataforma:</b> Aplicación web y móvil administrada por el Operador que permite la concurrencia en un mercado de Consumidores y Comisionistas para que por medio de contratos de mandato el Consumidor solicite la gestión de un encargo.
                            </p>
                            <p class="mb-4">
                                <b>Publicidad:</b> Es toda forma de comunicación realizada por el Operador, con el fin de brindar información sobre productos, actividades comerciales y comunicar estrategias o campañas publicitarias o de mercadeo, propias o de terceros;
                                realizada como mecanismo de referencia y no como oferta pública.
                            </p>
                            <p class="mb-4">
                                <b>Producto(s):</b> Exclusivamente aquellos bien(es) de consumo exhibido(s) a través de la Plataforma.
                            </p>
                            <p class="">
                                <b>Ventanas Emergentes (Pop-Ups):</b> Ventana o aviso de internet que emerge automáticamente en cualquier momento cuando se utiliza la Plataforma, especialmente utilizado para la formalización del contrato de mandato celebrado por medios electrónicos entre Consumidores y Comisionistas.
                            </p>
                        </div>

                        <h2 id="section2" class="font-gordita text-xl font-semibold py-4 mb-4" >OBJETO DE LOS TÉRMINOS Y CONDICIONES:</h2>
                        <div class="font-regular text-md mb-4">
                            <p class="mb-4">
                                Los presentes Términos y Condiciones regulan la autorización de uso que otorga el Operador a los Consumidores, para que éstos ingresen a la Plataforma virtual, se informen sobre los Productos de consumo exhibidos para que sean utilizados como referencia y puedan solicitar la gestión de un encargo por medio de un contrato de mandato con el Comisionista.
                            </p>
                            <p class="mb-4">
                                El Operador, a través de la Plataforma realiza, de manera limitativa, las siguientes acciones: (i) exhibe diferentes productos de consumo de forma publicitaria para que puedan servir de referencia a los Consumidores; (ii) facilita el encuentro entre Consumidores y Comisionistas para la realización del vínculo contractual; (iii) permite el uso de la Pasarela de Pagos, sin que en este proceso implique vínculo alguno con el Operador, ya que por la tecnología implementada el pago se realiza
                                directamente a los Comisionistas; (iv) sirve de medio de envío de comunicaciones entre los Consumidores y los Comisionistas.
                            </p>
                            <p class="mb-4">
                                La celebración de la relación contractual entre Consumidores y Comisionista, se da con Consumidores que se encuentren en el territorio nacional o que, estando en el extranjero, solicitan la gestión de un encargo, que debe ser realizado en territorio mexicano, pagando una contraprestación económica mediante el sistema de pago electrónico a través de la Pasarela de Pago contratada por el Operador o en dinero en efectivo al momento de la recepción de los Productos, a elección del Consumidor.
                            </p>
                            <p class="mb-4">
                                A través de la Plataforma se exhiben Productos, cuya gestión de compra es encargada por los Consumidores a los Comisionistas, siendo que los primeros buscan satisfacer una necesidad privada, personal o familiar, y en ningún momento pretenden la comercialización, reventa o cualquier otro tipo de transacción comercial o interés con los productos adquiridos.
                            </p>
                             <h3 class="font-gordita text-lg font-medium mb-4">MODIFICACIÓN:</h3>
                            <p class="mb-4">
                                El Operador podrá modificar libremente y en cualquier momento en aspectos formales, procedimentales o sustanciales los presentes Términos y Condiciones
                                de uso de la Plataforma, los cuales serán actualizados y puestos a disposición de los Consumidores en la Plataforma, siendo la última versión publicada la que
                                regulará inmediatamente las relaciones comerciales que se generen al momento de realizarse la transacción.
                            </p>
                            <p class="mb-4">
                                Asimismo, cuenta con plena autonomía para modificar los usos de la Plataforma permitidos a los Consumidores, con el único deber de informarlo por un medio virtual que permita su publicación y comunicación al público en general.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">LICENCIA:</h3>
                            <p class="mb-4">
                                Sujeto al cumplimiento de los presentes Términos y Condiciones, Redy otorga a los Consumidores una autorización limitada, no exclusiva, revocable, no transferible para: (i) el acceso y uso de las Aplicaciones en el dispositivo personal del Consumidor solo en relación con su uso de los Servicios; y (ii) el acceso y uso de cualquier contenido, información y material relacionado que pueda ponerse a disposición a través de los Servicios, en cada caso solo para su uso personal, no comercial. Redy y sus licenciantes se reservan cualquier derecho que no haya sido expresamente otorgado por los presentes Términos y Condiciones.
                            </p>                            
                        </div>
                        <h2 class="font-gordita text-xl font-medium py-4 mb-4">PLATAFORMA TECNOLÓGICA QUE PERMITE SU USO:</h2>
                        <div class="font-regular text-md mb-4">
                            <p class="mb-4">
                                Es una plataforma que permite su uso gratuito por varios medios, a saber: i) portal
                                web www.pideloredy.com, y ii) aplicación que se puede descargar en dispositivos móviles por medio de tiendas virtuales de aplicaciones de Apple (“App Store”) y de Google (“Google Play”), medios que en adelante y para los efectos de los presentes términos se denominarán conjuntamente la “Plataforma”.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">LOS SERVICIOS:</h3>
                            <p class="mb-4">
                                El Operador exhibe a través de La Plataforma productos de consumo como alimentos, bebidas, que están a disposición de los Consumidores para su conocimiento general. Esta comunicación de productos sirve como referencia a los Consumidores para poder usar La Plataforma como medio para solicitar la gestión de un encargo de compra-venta, celebrándose un contrato de mandato remunerado con el Comisionista.
                            </p>
                            <p class="mb-4">
                                A no ser que Redy lo acepte mediante un contrato separado por escrito con los Consumidores, los Servicios se ponen a disposición solo para su uso personal, no comercial. Cualquier Consumidor que acceda y/o use la Plataforma, reconoce que los Servicios de Redy no incluyen servicios de venta de productos, de entrega a domicilio o de logística, en cuanto la relación contractual se constituye directamente con entre el Consumidor y el Comisionista, quien actúa de manera independiente y bajo ninguna circunstancia puede ser entendido como un empleado de Redy o de sus afiliadas.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">OBJETO DE LOS SERVICIOS::</h3>
                            <p class="mb-4">
                                El Consumidor reconoce y acepta usar la Plataforma como un medio de encuentro con Comisionistas para la solicitud de encargos y de esta manera lograr la adquisición de Productos para su consumo final y la satisfacción de sus necesidades, con sujeción a la normatividad mercantil mexicana.
                            </p>   
                            <p class="mb-4">
                                El uso de la Plataforma lo realiza el Consumidor como persona capaz y mayor de edad, y manifestando que para la celebración del contrato de Mandato con los Comisionistas, cuenta con plena capacidad legal para ser sujeto de derechos y obligaciones, calidades que refrenda al momento de generar su registro.
                            </p>
                            <p class="mb-4">
                                El Consumidor reconoce expresamente mediante la aceptación de los presentes Términos y Condiciones de uso de la Plataforma que Redy no será responsable en ningún momento de cualquier producto que los Consumidores requieran y adquieran a través de la Plataforma. Asimismo, Redy tampoco podrá observar y verificar el correcto funcionamiento de la Plataforma en relación cualquier otro producto distinto a aquellos exhibidos en la Plataforma.
                            </p>
                            <p class="mb-4">
                                Los Comisionistas, teniendo capacidad de contratación, acceden a la Plataforma y aceptan realizar la gestión de los encargos solicitados por los Consumidores, entendiéndose que dicha aceptación es meramente voluntaria.
                            </p>
                            <p class="mb-4">
                                El perfeccionamiento del contrato de mandato celebrado por medios electrónicos se da en el momento en que el Comisionista acepta la gestión del encargo solicitado por el Consumidor. Se aclara que el Comisionista únicamente puede aceptar el encargo, una vez el Consumidor haya seleccionado el medio de pago. Por lo tanto, verificados los pasos de proceso de compra, el Comisionista, por intermedio del Operador puede aceptar total o parcialmente la gestión del encargo solicitado por el Consumidor. En caso de aceptar el encargo únicamente de manera parcial, el resumen se actualizará evidenciando los Productos sobre los cuales efectivamente se entiende constituido el encargo.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">CUENTA DE USUARIO:</h3>
                            <p class="mb-4">
                                Los Consumidores usan como referencia para su compra los Productos que se encuentran exhibidos en la Plataforma, teniendo como condición indispensable la creación de una cuenta de usuario (en adelante la “Cuenta de Usuario”), donde se solicitarán datos como nombre, fecha de nacimiento, teléfono, dirección, dirección de correo electrónico; esta información se utiliza para (i) la plena identificación de los Consumidores que pretenden adquirir los Productos, para (ii) el cumplimiento de la Compra-venta, para (iii) la prevención de fraudes, para (iv) vincular al Consumidor con el Comisionista y en general para los fines definidos en el capítulo correspondiente al Manejo de información.
                            </p>
                            <p class="mb-4">
                                Los Consumidores en caso de tener cuentas en las redes sociales Facebook y Google +, podrán crear su Cuenta de Usuario con la utilización de las credenciales allí definidas, para lo cual la Plataforma comunicará esta opción.
                            </p>
                            <p class="mb-4">
                                Una vez suministrada la información necesaria para el uso de la Plataforma, se validará por parte del Operador el nombre de usuario y contraseña para acceder y/o usar la Plataforma.
                            </p>
                            <p class="mb-4">
                                Podrán los Consumidores, además de la información obligatoria y facultativa requerida al momento de la creación de la cuenta, suministrar voluntariamente más datos relacionados con su individualización al momento en que cree su propio perfil dentro de la Plataforma.
                            </p>
                            <p class="mb-4">
                                El uso de la Cuenta de Usuario es personal e intransferible, por lo cual los Consumidores no se encuentran facultados para ceder los datos de validación para el acceso a la Plataforma. En caso de olvido de los datos de validación o de usurpación de éstos, es obligación del Consumidor informarlo al Operador a través de la opción “olvidó su contraseña” o a través de comunicación enviada al correo electrónico: <b>soporte@pideloredy.com</b> 
                            </p>
                            <p class="mb-4">
                                Las cuentas de usuarios serán administradas por el Operador a su discreción o por la persona que éste designe, teniendo plena facultad para la conservación o numero de la cuenta, cuando la información suministrada por los Consumidores no sea veraz, completa o segura; o cuando se presente incumplimiento de las obligaciones de los Consumidores.
                            </p>
                            <p class="mb-4">
                                En ningún momento el Operador solicitará al Consumidor información que NO resulte necesaria para su vinculación con el Comisionista y para la facilitación del pago, por lo que los datos de tarjetas débito o crédito, solo se solicitarán al momento de realizar el pago virtual si así lo determina el Consumidor, éstos datos no serán almacenados por el Operador, serán inscritos directamente en la Pasarela de Pagos correspondiente, y se utilizarán directamente por el Consumidor en ésta, donde se informará las condiciones de seguridad y privacidad en que se efectúa el mismo.
                            </p>
                            <p class="mb-4">
                                Con la creación de la Cuenta de Usuario, los Consumidores están manifestando su voluntad de aceptación expresa e inequívoca de los presentes Términos y Condiciones de uso de la Plataforma.
                            </p>
                            <p class="mb-4">
                                Al momento de la aceptación de los presentes Términos y Condiciones, expresamente el Consumidor autoriza el uso de Cookies por parte del Operador en toda actividad de uso que realice en la Plataforma.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">CAPACIDAD:</h3>
                            <p class="mb-4">
                                Manifiesta el Consumidor que la relación contractual que se puede llegar a generar por el uso de la Plataforma será directamente y exclusivamente con los Comisionistas, y consistirá en un mandato celebrado por medios electrónicos, en el cual el Consumidor es el mandante.
                            </p>
                            <p class="mb-4">
                                En virtud de las condiciones de capacidad legal establecidas en la legislación mexicana vigente y de la validez de la manifestación de voluntad a través de
                                medios electrónicos establecida en el Código Civil Federal, los Consumidores al momento de la creación de la Cuenta de Usuario, manifiestan expresamente tener capacidad suficiente para celebrar el tipo de contrato de mandato, que se puede o podría llegar a configurar accediendo y/o usando la Plataforma; y no obstante lo anterior, los menores de edad de acuerdo con la ley aplicable, no están facultados para hacer uso en ningún momento de la Plataforma provocando así la nulidad de todo mandato generado en la Plataforma en caso de contravención a lo que aquí establecido.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">DESCRIPCIÓN DEL SERVICIO:</h3>
                            <p class="mb-4">
                                El Operador exhibe a través de la Plataforma Productos de consumo como
                                alimentos y bebidas, que están a disposición de los Consumidores para su conocimiento general. Esta comunicación de productos sirve como referencia a los Consumidores para su adquisición, usando la Plataforma como medio para solicitar la gestión de encargos a los Comisionistas y celebrar un contrato de mandato por medios electrónicos.
                            </p>
                            <p class="mb-4">
                                Para poder solicitar el mandato y de esta forma adquirir los bienes y servicios deseados, los Consumidores deben estar plenamente identificados en su Cuenta de Usuario y seguir el siguiente procedimiento:
                            </p>
                            <ol style="list-style: decimal inside;" class="">
                                <li class="mb-2">Ingresar a la Plataforma especificando su domicilio o ubicación para determinar los Productos que se encuentran disponibles en el sector correspondiente.</li>
                                <li class="mb-2">Seleccionar el lugar de entrega. Se debe suministrar por el Consumidor la dirección exacta donde se realizará la entrega del (los) producto(s) seleccionado(s). Esta dirección debe encontrarse en el rango de cobertura de entrega. En caso de no encontrarse en dicho rango no se permitirá el cumplimiento del mandato.</li>
                                <li class="mb-2">Seleccionar el (los) Producto(s). Al seleccionar el (los) Producto(s) se pone a disposición del Consumidor las características y valor total del (los) Producto(s) por medio de fotografías y notas de referencias, que permiten la plena individualización del (los) Producto(s) para el análisis detallado del Consumidor.</li>
                                <li class="mb-3">Validación del (los) Producto(s). Cumplido el paso anterior, el Operador deberá exhibir al Consumidor un resumen de (los) Producto(s) en cuanto a sus condiciones generales tales como la marca y la presentación suministrada. Con ésta información el Consumidor podrá validar el (los) Producto(s) seleccionado(s), para que sea usado como referencia con relación al producto que pretende adquirir.</li>
                                <li class="mb-2">Ingreso del (los) Producto(s) al carrito de compras. Este ingreso corresponde a la voluntad inequívoca del Consumidor de adquirir algún Producto determinado, ya que se ha informado con suficiencia las características del mismo, teniendo la posibilidad de adquirirlo o no. El Operador tiene total autonomía para limitar el ingreso del (los) Producto(s) al carrito de compras con ocasión a la cantidad.</li>
                                <li class="mb-2">Precio. Una vez se han agotados los pasos precedentes, se pone a disposición del Consumidor el Precio a pagar por el (los) Productos seleccionado(s), el cual se encuentra reflejado unitariamente y en conjunto por todos los Productos a adquirir. El valor corresponderá al valor total del (los) Producto(s) incluyendo costos de envío, de transacción e impuestos. En ese mismo sentido, Redy se reserva el derecho de incrementar, hasta en un diez por ciento (10%), los precios de los productos exhibidos en las tiendas físicas de sus aliados. El usuario reconoce y acepta la anterior condición e igualmente tampoco realizará ningún tipo de reclamación frente a Redy por cobros adicionales a los precios que se vean reflejados en tickets de venta. Los valores adicionales serán cobrados a título de uso de la plataforma virtual.</li>
                                <li class="mb-2">Pago. El pago que realiza el Consumidor lo realiza directa y exclusivamente con los Comisionistas, en ningún momento el dinero ingresará en beneficio del Operador.</li>
                                <li class="mb-2">Forma de pago. El Consumidor deberá seleccionar el medio de pago que desea
                                    utilizar, teniendo como posibilidades el pago contra-entrega a través de i) dinero en efectivo o ii) el pago electrónico a través de la Pasarela de Pago contratada por el Operador, siempre y cuando ésta se encuentre disponible en la aplicación. En este momento se configura la solicitud del encargo que realiza el Consumidor al Comisionista.</li>
                                <li class="mb-2">Registro. Al momento de definir la forma de pago, el Consumidor deberá crear su cuenta personal en la cual se requerirán los datos personales que permitan su identificación, más no su individualización. Adicionalmente, se requerirán los datos para poder realizar el pago de manera electrónica.</li>
                                <li class="mb-2">Resumen y Correo electrónico. Una vez completados los pasos anteriores se le exhibirá a través de una ventana emergente al Consumidor, un resumen detallado de la transacción y la información completa del Comisionista, que ha aceptado realizar la gestión del encargo y con el cual se celebra el mandato.</li>
                                <li class="mb-2">Recibo. En todo caso, sea que el pago realice en dinero en efectivo o a través de la Pasarela de Pagos.</li>
                                <li class="mb-2">
                                    Entrega. Verificados todos los datos correspondientes a la transacción y al ámbito de cobertura de entrega de los Productos, el Comisionista entregará en la dirección suministrada por el Consumidor a través de la Plataforma al finalizar la adquisición del (los) Producto(s) comprado(s). En caso de no
                                    poderse realizar la entrega por razones imputables al Consumidor, deberá el Comisionista dejar constancia de este hecho.
                                </li>
                            </ol>
                            <h3 class="font-gordita text-lg font-medium mb-4">OBLIGACIONES DEL CONSUMIDOR:</h3>
                            <p class="mb-4">
                                Con la aceptación de los presentes Términos y Condiciones de uso de la Plataforma, el Consumidor se obliga a: (1) Suministrar información veraz y fidedigna al momento de crear su propia Cuenta de Usuario; (2) Abstenerse de transferir a terceros los datos de validación (nombre de usuario y contraseña); (3) Abstenerse de acceder y/o usar la Plataforma para realizar actos contrarios a la moral, al orden público, a las buenas costumbres o actos o hechos ilícitos en contra del Operador, los Comisionistas o de terceros; (4) Pagar oportunamente al
                                Comisionista la contraprestación económica definida en el proceso de compra; (5) Informar inmediatamente al Operador en caso de olvido o usurpación de los datos de validación; (6) Abstenerse de realizar conductas atentatorias del funcionamiento de la Plataforma; (7) Abstenerse de requerir a los Comisionistas cualquier otro producto cuya comercialización, venta o distribución por teléfono, correo, internet o cualquier otro medio de comunicación sea prohibida por la legislación aplicable; (8) Abstenerse de suplantar la identidad de otros Consumidores; (9) Abstenerse de descifrar, descompilar o desensamblar, apropiarse de cualquier elemento de la Plataforma o de cualquiera de sus partes; (10) Habilitar la utilización de ventanas emergentes durante la operación de la Plataforma; (11) En general, todas aquellas conductas necesarias para la ejecución del negocio jurídico, como i) la recepción de los productos solicitados, ii) exhibir la identificación en caso de compra de productos de uso restringido, iii)
                                verificar al momento de la validación que los Productos seleccionados si corresponden a los necesitados, iv) informarse sobre las instrucciones de uso y consumo de los Productos, pagar el precio al Comisionista; 12) Sacar en paz y salvo a Redy de cualquier reclamación de naturaleza jurídica en su contra y a asumir de manera personal, de manera enunciativa más no limitativa, las consecuencias relativas a la licitud, calidad, imagen, presentación, tamaño, color, precio, etc., de aquel(los) producto(s) distintos al (los) Producto(s) exhibidos en la Plataforma y que sean requeridos por los Consumidores a través de la Plataforma. V) En caso de requerir factura, debe informarle al Comisionista para que le proporcione la factura por el costo del (los) servicio(s) brindado (s). Si requiere factura del (los) Producto (s) que adquirió, debe informar al
                                correo soporte@pideloredy.com para que se le proporcione los datos de ticket de compra y pueda obtener la factura del establecimiento comercial del cual adquirió el/los producto(s), debiendo verificar y sujetarse a los requisitos de facturación que imponga el establecimiento comercial.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">DEBERES DEL OPERADOR:</h3>
                            <p class="mb-4">
                                En virtud de los presentes Términos y Condiciones de uso, el Operador se obliga a (1) suministrar información cierta, fidedigna, suficiente, clara y actualizada respecto de los Productos que exhibe; (2) Indicar las características generales del
                                (los) Producto(s) para que sirvan de referencia a los Consumidores, para el efecto son marca y presentación; (3) Informar suficientemente sobre los medios
                                habilitados para que los Consumidores realicen el pago; (4) Informar en el momento indicado y con suficiencia los datos de los Comisionistas con los cuales los Consumidores han de celebrar el contrato de mandato; (5) Poner a disposición de los Consumidores los Términos y Condiciones de uso de la Plataforma de forma actualizada; (6) Utilizar la información únicamente para los fines establecidos en los presentes Términos; (7) Utilizar mecanismos de información y validación durante la transacción como ventanas emergentes (Pop Ups), que permitan al Consumidor aceptar o no cada paso del proceso de compra.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">DESCRIPCIÓN DE LOS PRODUCTOS:</h3>
                            <p class="mb-4">
                                Los Productos exhibidos por el Operador son productos de consumo doméstico como alimentos y bebidas. Todos los Productos cuentan con una descripción general; esta descripción se realiza por el Operador a partir de prácticas legales de visualización, que en todo caso dependen el dispositivo en donde el Consumidor observe el (los) Producto(s). La disponibilidad será definida en cada caso en concreto al momento en que el Comisionista realice la gestión encargada y consecuentemente obtenga (los) Producto(s) ante proveedores. Dentro del proceso de compra, el Consumidor determinará qué acción debe realizar el Comisionista en caso de no hallar el (los) Producto(s) solicitado(s), entre las siguientes opciones: (i) Cumplir con el pedido excluyendo el (los) Producto(s) solicitado(s) no hallados, caso en el cual se descontará su costo del valor total del pedido y, en caso de ser sólo un Producto y no se halla, deberá elegir entre la cancelación del pedido o el cumplimiento con un producto sustituto o similar en
                                precio y tipo; (ii) Comunicarse con el Consumidor para concertar el cumplimiento con un producto sustituto; y (iii) Autorizar al Comisionista para llevar un producto similar en precio y tipo.
                            </p>
                            <p class="mb-4">
                                Reconoce el Consumidor que el Operador no es productor, proveedor, expendedor, agente, distribuidor y en general ningún tipo de comercializador de los productos que exhibe, ya que opera solo como una plataforma tecnológica que permite el encuentro de Consumidores y Comisionistas para la solicitud de encargos. El ticket de venta que emitan los comercios aliados al Operador a favor del usuario, no necesariamente reflejará el método de pago seleccionado por el usuario en la plataforma virtual.
                            </p>
                            <p class="mb-4">
                                Los Productos de uso restringido, tales como aquellos que requieren que el Consumidor sea mayor de edad, solo se entregarán por parte del Comisionista a Consumidores que cuenten con mayoría de edad, quienes manifiestan expresamente esta calidad al momento de aceptar los presentes Términos y Condiciones como también al registrarse y de seleccionar el (los) Producto(s). En caso de no cumplir con ésta obligación, el Comisionista no aceptará la transacción y en el evento de haber pagado por el (los) Producto(s), tendrá la posibilidad de definir con el Comisionista el mecanismo para la devolución del dinero. En el caso de haber solicitado junto con los Productos de uso restringido otros de diferente
                                tipo y/o calidad e igualmente se incumpla la obligación aquí descrita, aplicarán las mismas consecuencias jurídicas aquí definidas, pero solo en relación con los
                                Productos de uso restringido.
                            </p>
                            <p class="mb-4">
                                El Operador se reserva el derecho de actualizar, modificar y/o descontinuar en cualquier momento los Productos exhibidos en la Plataforma.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">GARANTÍA:</h3> 
                            <p class="mb-4">
                                Entiende y acepta el Consumidor que la relación comercial se genera directamente con los Comisionistas, por lo tanto las reclamaciones por garantía se
                                deben realizar directamente con los Comisionistas, quienes tienen la obligación de cumplir con las reclamaciones en los términos de las leyes aplicables.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">CONSIDERACIONES FINALES</h3>
                            <h3 class="font-gordita text-lg font-medium mb-4">CONTENIDOS:</h3>
                            <p class="mb-4">
                                A través de la Plataforma, el Operador podrá poner a disposición de los Consumidores información de carácter comercial y publicitario, propio o de terceros de conformidad a las buenas costumbres comerciales. En estos casos, el Operador no avala, garantiza o compromete su responsabilidad frente a los servicios y/o productos que se comercialicen por éstos terceros, ya que la
                                Plataforma sirve como canal de comunicación y publicidad, más no como herramienta de prestación de servicios; en consecuencia es total responsabilidad de los Consumidores el acceso a los sitios que remite la publicidad, asumiendo la obligación de verificar y conocer los términos de los servicios ofrecidos por los terceros.
                            </p>
                            <p class="mb-4">
                                Toda la información puesta a disposición en la Plataforma como imágenes, publicidad, nombres, marcas, lemas y demás elementos de propiedad intelectual; son utilizados legítimamente por el Operador sea porque son de su propiedad, porque tienen autorización para ponerlos a disposición o porque se encuentra facultada por la legislación aplicable vigente.
                            </p>                            
                        </div>
                        <h2 id="section3" class="font-gordita text-xl font-medium py-4 mb-4">FUNCIONAMIENTO DE LA PLATAFORMA:</h2>
                        <div class="font-regular text-md mb-4">
                            <p class="mb-4">
                                El Operador administra directamente o por medio de terceras personas la Plataforma, toda la información que se comunica allí corresponde a información cierta y actualizada. En ningún caso responderá por daños directos o indirectos que sufra el Consumidor por la utilización o incapacidad de utilización de la Plataforma.
                            </p>
                            <p class="mb-4">
                                La Plataforma se encuentra disponible las 24 (veinticuatro) horas del día para su acceso y consulta. Para la realización de transacciones la disponibilidad de la Plataforma es de 24 (veinticuatro) horas al día, dependiendo de la disponibilidad
                                de los Comisionistas y de los proveedores de los Productos. El Operador realizará los mejores esfuerzos para mantener en operación la Plataforma, pero en ningún caso garantiza disponibilidad y continuidad permanente de la Plataforma.
                            </p>
                            <p class="mb-4">
                                El Operador se reserva el derecho de cancelar cualquier Cuenta de Usuario y/o de prohibir el acceso a la Plataforma a cualquier Consumidor que realice conductas violatorias de los presentes Términos y Condiciones o que incumplan las obligaciones contraídas.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">DERECHO DE RETRACTO:</h3>
                            <p class="mb-4">
                                Debido a que los Productos que se exhiben a través de la Plataforma son productos perecederos, el Operador informa a los Consumidores que los Comisionistas no se encuentran obligados a otorgar el derecho de retracto o ningún tipo de derecho similar que podría corresponderle.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">COMERCIO ELECTRÓNICO:</h3>
                            <p class="mb-4">
                                En cumplimiento de las disposiciones mexicanas sobre mensajes de datos según el Código Civil Federal, se comunica que la legislación mexicana reconoce validez a los mensajes por medios electrónicos y por tanto ellos adquieren carácter y
                                entidad probatoria. En consecuencia, entienden los Consumidores, que mediante el cruce de mensajes por medios electrónicos, el Consumidor y los Comisionistas pueden dar lugar al nacimiento, modificación y extinción de obligaciones, siendo de su resorte exclusivo el contenido, consecuencias, responsabilidades y efectos de la información generada.
                            </p>
                            <p class="mb-4">
                                La transacción comercial que nace por este medio entre Consumidores y Comisionistas, es la celebración de un contrato de mandato por medios electrónicos, el cual se describe en la ventana emergente que acepta el Consumidor al momento de la celebración del negocio jurídico. En ningún momento se configura alguna relación contractual diferente como suministro, distribución o demás similares.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">MANEJO DE INFORMACIÓN:</h3>
                            <p class="mb-4">
                                La información recolectada por el Operador en las transacciones realizadas, es suministrada por los Consumidores de forma libre y voluntaria, para que esta sea administrada por el Operador o por quien éste designe para el cumplimiento de los deberes adquiridos, lo que implica su recolección; almacenamiento en servidores o repositorios del Operador o de terceros; circulación de los mismos dentro de la organización del Operador; comunicación a los Consumidores información
                                comercial, publicitaria y de mercadeo relacionada con su actividad comercial.
                            </p>
                            <p class="mb-4">
                                Asimismo, los datos recolectados serán objeto de análisis para fines de mejorar la estrategia de negocios del portal web, apoyada en herramientas de inteligencia de negocios y minería de datos, que permiten adquirir conocimientos prospectivos para fines de predicción, clasificación y segmentación.
                            </p>
                            <p class="mb-4">
                                El Consumidor podrá ejercer su derecho de conocer, actualizar, modificar y suprimir los Datos Personales existentes en las bases de datos asociadas a la Plataforma. Para ello deberá realizar la solicitud de consulta, reclamo o supresión
                                a la dirección electrónica: soporte@pideloredy.com detallando por escrito las modificaciones a realizar y aportando los documentos que lo soportan.
                            </p>
                            <p class="mb-4">
                                El Operador es responsable del tratamiento de la información personal recolectada a través del portal web, responsabilidad que podrá delegar en un tercero, en calidad de responsable o encargado de la información, asegurando contractualmente adecuado tratamiento de la misma.
                            </p>   
                            <p class="mb-4">
                                Asimismo, al aceptar los presentes términos y condiciones el Consumidor manifiesta expresamente haber leído y aceptado el aviso de privacidad del Operador, disponible en la dirección electrónica: https://www.pideloredy.com
                            </p>                            
                        </div>
                        <h2 id="section4" class="font-gordita text-xl font-semibold py-4 mb-4">ACEPTACIÓN TOTAL DE LOS TÉRMINOS:</h2>
                         <div class="font-regular text-md mb-4">
                            <p class="mb-4">
                                El Consumidor manifiesta expresamente tener capacidad legal para usar la Plataforma y para celebrar los contratos de mandato que se puedan generar con los Comisionistas. Asimismo, manifiesta haber suministrado información real, veraz y fidedigna. Por ende, de forma expresa e inequívoca declara que ha leído, que entiende y que acepta la totalidad de los supuestos previstos y regulados en el presente escrito de Términos y Condiciones de uso de la Plataforma, por lo que se compromete al cumplimiento total de los deberes, obligaciones, acciones y omisiones aquí expresadas.
                            </p>
                            <p class="mb-4">
                                En caso de que Consumidores de otros países utilicen la Plataforma se sujetan completamente a lo dispuesto en los presentes Términos y Condiciones de uso de la Plataforma.
                            </p>
                            <h3 class="font-gordita text-lg font-medium mb-4">DOMICILIO Y LEGISLACIÓN APLICABLE</h3>   
                            <p class="mb-4">
                                Para lo no previsto en estos Términos y Condiciones, los Consumidores y los Comisionistas acuerdan someterse a las leyes aplicables al estado de Tamaulipas
                                y las legislaciones Federales.
                            </p>
                            <p class="mb-4">
                                Para la interpretación y ejecución de los presentes Términos y Condiciones, el
                                Consumidor acepta someterse a la jurisdicción y competencia de los tribunales competentes al estado de Tamaulipas renunciando expresamente al fuero que pudiese corresponderle por razón de su domicilio presente o futuro, reconociendo que su solución, en su caso, debe hacerse por la vía mercantil, aplicándose el Código de Comercio y supletoriamente el Código Civil Federal.
                            </p>
                        </div>
                    </div>
                  </div>  
              </div>
          </div>
      </div>
      <Footer background="black"/>
  </section>
</template>
<script>
import Footer from '~/components/Footer.vue'
export default {
  name: 'Terms',
  components: {
    Footer
  },
  methods: {
    moveTo(section) {
      var element = document.querySelector(`#${section}`)
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

<style lang="scss">
.background{
    @media screen and(max-width: 992px){
        width: 1000px;
        max-width: 10000px;
    }
}
</style>
