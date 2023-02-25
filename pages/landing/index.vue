<template>
  <div class="">
    <!-- NavBar -->
    <div
      class="relative top-0 h-16 w-full bg-white flex flex-row items-center justify-center font-bold text-red"
    >
      <span>MONICA</span>
      <!-- Logo -->
      <img
        class="h-10 w-10 text-center justify-self-center"
        src="~/assets/img/navbar/logo.svg"
        alt="Logo Monica Centri"
        width="100%"
        height="100%"
      />
      <span>CENTRI</span>
    </div>

    <!-- Container -->
    <div
      class="w-full mx-auto flex flex-col items-center border-0 lg:border-x-12 border-redSecondary"
      style="max-width: 1024px"
    >
      <!-- Image Header Page -->
      <img
        class=""
        src="~/assets/img/landing/photo1.png"
        alt="Monica Centri"
        height="100%"
      />

      <!-- Title Illustration Body Reset -->
      <img
        class="max-w-xs w-1/2 mt-11"
        src="~/assets/img/landing/illustration1.svg"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />
      <!-- Title Illustration rivoluziona il tuo corpo -->
      <img
        class="mt-14"
        src="~/assets/img/landing/illustration2.svg"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />

      <!-- 
<div style="width: 100%; height: 20px; border-bottom: 5px solid black; text-align: center" class="h-20">
  <span style="font-size: 40px; padding: 0 10px;" class="text-redSecondary">
    Section Title 
  </span>
</div> -->

      <!-- Content rivoluziona il tuo corpo -->
      <div class="text-center font-bold text-md sm:text-lg">
        Il protocollo <span class="text-redSecondary">Body Reset</span> é un
        percorso ideato,<br />
        studiato e strutturato da <br />
        Monica Centri <br /><br />
        Attraverso questo <span class="text-redSecondary">viaggio</span>,
        totalmente <br />
        <span class="text-redSecondary">personalizzato</span> su di te, ti
        portiamo al <br />
        <span class="text-redSecondary">benessere</span> psicopatico a 360
        gradi. <br />
        <br />
        Sarai sostenuta da
        <span class="text-redSecondary">professionisti</span> dei vari <br />
        campi che ti portanno alla migliore versione <br />
        di te stessa <br />
      </div>

      <!-- Title Illustration Body Reset -->
      <img
        class="max-w-xs w-1/2 mt-11"
        src="~/assets/img/landing/photo2.png"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />

      <!-- Cambia te stesso -->
      <div class="w-full relative mt-16 border-y-8 border-redSecondary">
        <img
          class=""
          src="~/assets/img/landing/photo3.png"
          alt="Monica Centri"
          width="100%"
          height="100%"
        />
        <div
          class="text-white text-3xl sm:text-5xl font-bold text-center absolute top-4 left-1/2 transform -translate-x-1/2"
        >
          Cambia te <br />
          stesso
        </div>
        <div
          class="text-white text-xl sm:text-4xl font-medium text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
        >
          PROVA LA SEDUTA <br />
          BODY REFRESH
        </div>
        <button
          onclick="window.location.href='#formPrenotazione';"
          class="text-redSecondary text-xl sm:text-4xl font-semibold text-center absolute left-1/2 bottom-6 transform -translate-x-1/2 py-4 bg-white w-40 sm:w-80 rounded-full"
        >
          Prenota ora
        </button>
      </div>

      <!-- Text Risultati Visibili -->
      <div
        class="text-redTertiary text-3xl sm:text-5xl font-bold text-center my-16"
      >
        Risultati visibili e <br />
        misurabili dalla <br />
        prima seduta
      </div>

      <!-- Section Barre e testo -->
      <div
        class="font-bold bg-redTertiary w-full py-3 text-white text-center text-xl sm:text-3xl mb-4"
      >
        PERDITA DI CENTIMETRI
      </div>
      <div
        class="font-bold bg-redTertiary w-full py-3 text-white text-center text-xl sm:text-3xl mb-4"
      >
        CORPO TONIFICATO
      </div>
      <div
        class="font-bold bg-redTertiary w-full py-3 text-white text-center text-xl sm:text-3xl mb-4"
      >
        PELLE RASSODATA
      </div>
      <div
        class="font-bold bg-redTertiary w-full py-3 text-white text-center text-xl sm:text-3xl mb-4"
      >
        RIDUZIONE CELLULITE
      </div>
      <div
        class="font-bold bg-redTertiary w-full py-3 text-white text-center text-xl sm:text-3xl mb-4"
      >
        LEGGEREZZA ED ENERGIA
      </div>

      <!-- Photo di Monica -->
      <img
        class="mx-auto mt-12 w-80"
        src="~/assets/img/landing/photo4.png"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />

      <!-- Text Scopri il Cambiamento -->
      <div
        class="text-center text-redSecondary w-full mx-4 my-6 font-bold text-3xl lg:text-5xl"
      >
        Scopri il <br />
        cambiamento
      </div>
      <button
        onclick="window.location.href='#formPrenotazione';"
        class="bg-redSecondary text-xl sm:text-4xl font-semibold text-center mx-auto py-4 px-8 text-white rounded-full"
      >
        Prenota ora
      </button>

      <!-- Title Illustration Body Reset -->
      <img
        class="mt-14"
        src="~/assets/img/landing/illustration3.svg"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />

      <div class="text-center font-bold text-sm sm:text-lg mt-6">
        Prima di iniziare il vero e proprio percorso è<br />
        necessario uno studio approfondito che ci <br />
        permette di massimizzare al 100% i tuoi risultati:<br />
        la <span class="text-redSecondary">consulenza.</span>
        <br />
        La consulenza consiste nella valutazione,<br />
        effetuata da profesionisti, del tuo
        <span class="text-redSecondary"
          >punto di <br />
          partenza.</span
        >
        <br />
        Vengono analizzati stile di vita, condizione fisica <br />
        e mentale e tutti gli aspetti per strutturare il <br />
        piano <span class="text-redSecondary">più adatto a te!</span>
      </div>

      <!-- Inizio sezione coi pallini -->
      <!-- pallino -->
      <div
        class="rounded-full bg-redSecondary text-white text-3xl h-12 w-12 relative flex items-center justify-center flex-row font-serif mt-10"
      >
        1
      </div>
      <!-- title bottom pallino -->
      <div class="text-center text-4xl font-bold text-redSecondary mt-8">
        Manualità
      </div>
      <!-- img bottom title -->
      <img
        class="mx-auto mt-6 w-80"
        src="~/assets/img/landing/photo5.png"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />
      <!-- content -->
      <div class="text-center text-xl font-semibold mt-6">
        Dopo l’analisi che avviene <br />
        durante la consulenza viene <br />
        strutturato un programma <br />
        che si succede nei vari mesi <br />
        composto da diverse <br />
        tecniche che agiscono sui <br />
        vari strati di composizione <br />
        del corpo.
      </div>

      <div class="text-center text-2xl font-bold mt-4">
        Andiamo a lavorare su <br />
        <span class="text-redSecondary">
          idratazione, ritenzione <br />idrica, detossinazione,<br />manovre di
          sblocco
        </span>
        e<br />
        tanto altro.
      </div>

      <button
        onclick="window.location.href='#formPrenotazione';"
        class="bg-redSecondary text-xl sm:text-4xl font-semibold text-center mx-auto py-4 px-8 text-white rounded-full mt-16"
      >
        Prenota ora
      </button>
      <hr class="mt-16 border-t-2 border-redSecondary w-8/12" />

      <!-- Section 2 -->
      <!-- pallino -->
      <div
        class="rounded-full bg-redSecondary text-white text-3xl h-12 w-12 relative flex items-center justify-center flex-row font-serif mt-10"
      >
        2
      </div>
      <!-- title bottom pallino -->
      <div class="text-center text-4xl font-bold text-redSecondary mt-8">
        Tecnologie
      </div>
      <!-- img bottom title -->
      <img
        class="mx-auto mt-6 w-80"
        src="~/assets/img/landing/photo6.png"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />
      <!-- content -->
      <div class="text-center text-xl font-semibold mt-6">
        In questo percorso <br />
        utilizziamo diversi dispositivi, <br />
        con le tecnologie più <br />
        avanzate sul mercato<br />
        globale, che vengono <br />
        assemblati specificamente <br />
        per Monica Centri, per <br />
        contribuire al massimo al <br />raggiungimento dei tuoi <br />
        obiettivi.
      </div>

      <div class="text-center text-2xl font-bold mt-4">
        Alcune delle tecnologie <br />
        presenti in questo <br />
        percorso sono <br />
        <span class="text-redSecondary">
          radiofrequenza, <br />
          infrarossi, <br />
          elettrostimolazione,<br />ultrasioni, vacuum, <br />blue light
        </span>
        e tanto altro.
      </div>

      <button
        onclick="window.location.href='#formPrenotazione';"
        class="bg-redSecondary text-xl sm:text-4xl font-semibold text-center mx-auto py-4 px-8 text-white rounded-full mt-16"
      >
        Prenota ora
      </button>
      <hr class="mt-16 border-t-2 border-redSecondary w-8/12" />

      <!-- Section 3 -->
      <!-- pallino -->
      <div
        class="rounded-full bg-redSecondary text-white text-3xl h-12 w-12 relative flex items-center justify-center flex-row font-serif mt-10"
      >
        3
      </div>
      <!-- title bottom pallino -->
      <div class="text-center text-4xl font-bold text-redSecondary mt-8">
        Cosmetica
      </div>
      <!-- img bottom title -->
      <img
        class="mx-auto mt-6 w-80"
        src="~/assets/img/landing/photo7.png"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />
      <!-- content -->
      <div class="text-center text-xl font-semibold mt-6">
        30 anni di studio e ricerca ci <br />
        hanno portato a creare la <br />
        nostra linea di prodotti, sia <br />
        utilizzati accuramentente<br />
        per ogni tipo di ambito <br />
        durante il percorso, sia <br />
        prodotti domiciliari che <br />
        continuano a lavorare su di <br />te anche a casa.
      </div>

      <div class="text-center text-2xl font-bold mt-4">
        I nostri prodotti, creati <br />
        secondo le nostre <br />
        esigenze, sono <br />composti da una <br />
        <span class="text-redSecondary">
          grande quantità di <br />
          principi attivi, senza <br />
          parabeni e <br />
          completamente <br />biologici e vegani </span
        >.
      </div>

      <button
        onclick="window.location.href='#formPrenotazione';"
        class="bg-redSecondary text-xl sm:text-4xl font-semibold text-center mx-auto py-4 px-8 text-white rounded-full mt-16"
      >
        Prenota ora
      </button>
      <hr class="mt-16 border-t-2 border-redSecondary w-8/12" />

      <!-- Section 4 -->
      <!-- pallino -->
      <div
        class="rounded-full bg-redSecondary text-white text-3xl h-12 w-12 relative flex items-center justify-center flex-row font-serif mt-10"
      >
        4
      </div>
      <!-- title bottom pallino -->
      <div class="text-center text-4xl font-bold text-redSecondary mt-8">
        Nutrizione
      </div>
      <!-- img bottom title -->
      <img
        class="mx-auto mt-6 w-80"
        src="~/assets/img/landing/photo8.png"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />
      <!-- content -->
      <div class="text-center text-xl font-semibold mt-6">
        Infatti oltre che a livello <br />
        fisico, l’alimentazione gioca <br />
        un ruolo fondamentale <br />
        nell’ambito della felicità, <br />
        dell’energia vitale, della <br />
        voglia di fare.
      </div>

      <div class="text-center text-2xl font-bold mt-4">
        In questo viaggio, entra <br />
        in gioco la
        <span class="text-redSecondary">
          <br />
          professionista della <br />nutrizione.
        </span>
        <br />
        Con lei scoprirai con <br />
        piacere che saper <br />
        mangiare è
        <span class="text-redSecondary">
          molto più <br />
          bello
        </span>
        di quanto pensi!
      </div>

      <button
        onclick="window.location.href='#formPrenotazione';"
        class="bg-redSecondary text-xl sm:text-4xl font-semibold text-center mx-auto py-4 px-8 text-white rounded-full mt-16"
      >
        Prenota ora
      </button>
      <hr class="mt-16 border-t-2 border-redSecondary w-8/12" />

      <!-- Section 5 -->
      <!-- pallino -->
      <div
        class="rounded-full bg-redSecondary text-white text-3xl h-12 w-12 relative flex items-center justify-center flex-row font-serif mt-10"
      >
        5
      </div>
      <!-- title bottom pallino -->
      <div class="text-center text-4xl font-bold text-redSecondary mt-8">
        Integrazione
      </div>
      <!-- img bottom title -->
      <img
        class="mx-auto mt-6 w-80"
        src="~/assets/img/landing/photo9.png"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />
      <!-- content -->
      <div class="text-center text-xl font-semibold mt-6">
        Un apporto di micronutrienti <br />
        equilibrato e personalizzato <br />
        in base al tuo stile di vita <br />
        contribuisce a un <br />
        alimentazione completa al <br />
        100%
      </div>

      <div class="text-center text-2xl font-bold mt-4">
        Gli integratori <br />
        alimentari ci aiutano a <br />
        colmare le carenze di <br />micronutrienti come <br />
        <span class="text-redSecondary"
          >vitamine, calcio, zinco, <br />ferro
        </span>
        e tanti altri.
      </div>

      <button
        onclick="window.location.href='#formPrenotazione';"
        class="bg-redSecondary text-xl sm:text-4xl font-semibold text-center mx-auto py-4 px-8 text-white rounded-full mt-16"
      >
        Prenota ora
      </button>
      <hr class="mt-16 border-t-2 border-redSecondary w-8/12" />

      <!-- Section 6 -->
      <!-- pallino -->
      <div
        class="rounded-full bg-redSecondary text-white text-3xl h-12 w-12 relative flex items-center justify-center flex-row font-serif mt-10"
      >
        6
      </div>
      <!-- title bottom pallino -->
      <div class="text-center text-4xl font-bold text-redSecondary mt-8">
        Psicologia
      </div>
      <!-- img bottom title -->
      <img
        class="mx-auto mt-6 w-80"
        src="~/assets/img/landing/photo10.png"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />
      <!-- content -->
      <div class="text-center text-xl font-semibold mt-6">
        Nell’avanzare di questo <br />
        percorso, un supporto <br />
        ulteriore ti sarà dato dalla <br />
        psicologa specializzata in <br />
        nutrizione che sarà a tua <br />
        disposizione per qualsiasi <br />
        domanda, dubbio, incertezza <br />
        o anche per una semplice <br />
        chiacchierata se e quando ne <br />
        avrai bisogno. <br />
      </div>

      <div class="text-center text-2xl font-bold mt-4">
        <span class="text-redSecondary">L’autostima</span> gioca un <br />
        ruolo fondamentale <br />
        nella vita di ognuno di <br />noi ed
        <span class="text-redSecondary"
          >essere <br />
          consapevoli e credere <br />in noi stessi
        </span>
        ci dà la <br />
        forza di vivere la vita <br />
        dei nostri sogni.
      </div>
      <button
        onclick="window.location.href='#formPrenotazione';"
        class="bg-redSecondary text-xl sm:text-4xl font-semibold text-center mx-auto py-4 px-8 text-white rounded-full mt-16"
      >
        Prenota ora
      </button>
      <hr class="mt-16 border-t-2 border-redSecondary w-8/12" />

      <!-- Section 7 -->
      <!-- pallino -->
      <div
        class="rounded-full bg-redSecondary text-white text-3xl h-12 w-12 relative flex items-center justify-center flex-row font-serif mt-10"
      >
        7
      </div>
      <!-- title bottom pallino -->
      <div class="text-center text-4xl font-bold text-redSecondary mt-8">
        Allenamento
      </div>
      <!-- img bottom title -->
      <img
        class="mx-auto mt-6 w-80"
        src="~/assets/img/landing/photo11.png"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />
      <!-- content -->
      <div class="text-center text-2xl font-bold mt-6">
        Per raggiungere
        <span class="text-redSecondary"
          >più <br />
          velocemente i tuoi <br />
          risultati
        </span>
        disponiamo di <br />
        due tipi diversi di <br />allenamento:
        <span class="text-redSecondary"
          >passivo e <br />
          attivo</span
        >, che calibreremo <br />
        naturalmente in base <br />
        al tuo fisico e al tuo <br />
        punto di partenza.
      </div>

      <!--Energia Benessere Bellezza -->
      <div class="w-full relative mt-20 border-y-8 border-redSecondary">
        <img
          class=""
          src="~/assets/img/landing/photo3.png"
          alt="Monica Centri"
          width="100%"
          height="100%"
        />
        <div
          class="text-white text-4xl sm:text-5xl font-bold text-center absolute top-4 left-1/2 transform -translate-x-1/2"
        >
          ENERGIA
        </div>
        <div
          class="text-white text-4xl sm:text-5xl font-bold text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
        >
          BENESSERE
        </div>
        <div
          class="text-white text-4xl sm:text-5xl font-bold text-center absolute left-1/2 bottom-6 transform -translate-x-1/2"
        >
          BELLEZZA
        </div>
      </div>

      <!-- Title Prova la seduta body refresh -->
      <div
        class="text-3xl sm:text-4xl font-bold mx-4 text-redSecondary text-center my-10"
      >
        PROVA LA SEDUTA <br />
        BODY REFRESH
      </div>
      <button
        onclick="window.location.href='#formPrenotazione';"
        class="bg-redSecondary text-xl sm:text-4xl font-semibold text-center mx-auto py-4 px-8 text-white rounded-full"
      >
        Prenota ora
      </button>
      <div class="text-3xl sm:text-3xl font-bold mx-6 text-center mt-10">
        Da <span class="text-redSecondary"> 30 anni </span> esperti<br />nel
        mondo del<br /><span class="text-redSecondary"> benessere </span> e
        della<br /><span class="text-redSecondary">bellezza </span>
      </div>

      <!-- Sezione Video -->
      <div class="mt-10">
        <!-- <img
          class=""
          src="~/assets/img/landing/video.png"
          alt="Monica Centri"
          width="100%"
          height="100%"
        /> -->
        <iframe
          width="315"
          height="170"
          src="https://www.youtube.com/embed/r4UGSlEkweI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="mt-6">
        <img
          class=""
          src="~/assets/img/landing/video.png"
          alt="Monica Centri"
          width="100%"
          height="100%"
        />
      </div>
      <div class="mt-6">
        <!-- <img
          class=""
          src="~/assets/img/landing/video.png"
          alt="Monica Centri"
          width="100%"
          height="100%"
        /> -->
        <iframe
          width="315"
          height="170"
          src="https://www.youtube.com/embed/D_H9zjCvP6g"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Title prenota la seduta di prova body reset -->
      <div
        class="mx-auto font-bold text-white bg-redSecondary mt-16 mb-24 p-3 text-3xl rounded-3xl text-center"
      >
        Prenota la <br />
        seduta di prova <br />
        Body Reset
      </div>

      <!-- Section Review -->

      <!-- Review 1 -->
      <img
        class=""
        src="~/assets/img/landing/avatar1.png"
        alt="Monica Centri"
        width="70px"
        height="70px"
      />
      <div class="text-xl font-bold text-redSecondary mt-4 text-center">
        Giampiera Bardeglinu
      </div>
      <img
        class="mt-3"
        src="~/assets/img/landing/star.svg"
        alt="Monica Centri"
        width="190px"
      />
      <div class="mt-4 text-xl text-center font-medium">
        Disponibili, efficienti e <br />
        pazienti... ma soprattutto <br />
        attente nel comprendere lo <br />
        stato d'animo delle clienti
      </div>

      <!-- Review 2 -->
      <img
        class="mt-12"
        src="~/assets/img/landing/avatar2.png"
        alt="Monica Centri"
        width="70px"
        height="70px"
      />
      <div class="text-xl font-bold text-redSecondary mt-4 text-center">
        Gianrocco Reale
      </div>
      <img
        class="mt-3"
        src="~/assets/img/landing/star.svg"
        alt="Monica Centri"
        width="190px"
      />
      <div class="mt-4 text-xl text-center font-medium">
        Un luogo in cui ho trovato la <br />
        massima cordialità e <br />
        professionalità ma <br />
        soprattutto dedizione e reale <br />
        interesse nei confronti delle <br />
        esigenze del cliente. Centro <br />
        curato, ordinato ed <br />
        estremamente pulito. <br />
        Esperienza davvero piacevole <br />
        oltre le aspettative.
      </div>

      <!-- Review 3 -->
      <img
        class="mt-12"
        src="~/assets/img/landing/avatar3.png"
        alt="Monica Centri"
        width="70px"
        height="70px"
      />
      <div class="text-xl font-bold text-redSecondary mt-4 text-center">
        Domenica Albanese
      </div>
      <img
        class="mt-3"
        src="~/assets/img/landing/star.svg"
        alt="Monica Centri"
        width="190px"
      />
      <div class="mt-4 text-xl text-center font-medium">
        A volte facciamo tanti km <br />
        per recarci nella Spa e invece <br />
        abbiamo un oasi della <br />
        bellezza dentro casa. Un <br />
        ambiente super accogliente <br />
        e rilassante dove per qualche <br />
        ora ti liberi da tutti i pensieri <br />e ti affidi alla grande <br />
        professionalità di Monica e <br />
        delle sue collaboratrici per <br />rigenerarti e diventare più<br />bella.
      </div>

      <!-- Review 4 -->
      <img
        class="mt-12"
        src="~/assets/img/landing/avatar4.png"
        alt="Monica Centri"
        width="70px"
        height="70px"
      />
      <div class="text-xl font-bold text-redSecondary mt-4 text-center">
        Alessandro Paladino
      </div>
      <img
        class="mt-3"
        src="~/assets/img/landing/star.svg"
        alt="Monica Centri"
        width="190px"
      />
      <div class="mt-4 text-xl text-center font-medium">
        Centro davvero ottimo:<br />
        moderno, all’avanguardia e <br />attrezzato in ogni aspetto <br />
        nella cura della persona. <br />
        La pulizia e l’ordine, uniti <br />
        all’accoglienza e alla grande <br />
        professionalità del personale, <br />rendono la struttura unica <br />
        nel suo genere, attrattiva e <br />ricettiva alle esigenze del
        <br />cliente.<br /><br />Consiglio a pieni voti!
      </div>

      <!-- Title Body Reset -->
      <img
        class="mt-14"
        src="~/assets/img/landing/illustration4.svg"
        alt="Monica Centri"
        width="300px"
      />
      <img
        class="mx-auto mt-4 w-80"
        src="~/assets/img/landing/photo12.png"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />

      <div class="text-xl font-bold mx-4 text-center mt-6">
        Relax, benessere e bellezza in<br />un unico trattamento
      </div>

      <!-- Testi pre form -->
      <a name="formPrenotazione"></a>
      <div class="text-5xl font-bold text-redSecondary text-center mt-20">
        <span class="text-redPrimary">A 79€</span> invece<br />
        di 150€
      </div>
      <div class="text-3xl font-bold text-redPrimary text-center mt-4">
        I posti sono limitati
      </div>
      <div class="text-2xl font-semibold text-redSecondary text-center mt-4">
        Per noi ogni persona è una<br />
        storia da ascoltare, un<br />
        percorso da intraprendere<br />
        insieme
      </div>
      <div class="text-xl font-medium text-black text-center mt-4">
        I tuoi risultati sono i nostri<br />
        risultati!<br />
        Ci prenderemo tutto il tempo<br />
        necessario per raggiungere gli<br />
        obiettivi prefissati
      </div>

      <hr class="mt-12 border-t-2 border-redSecondary w-8/12" />

      <div class="text-3xl font-bold text-redPrimary text-center mt-12">
        Dopo aver compilato<br />il form...
      </div>
      <div class="text-2xl font-semibold text-redSecondary text-center mt-6">
        verrai ricontattata/o da<br />
        noi per prendere un<br />
        appuntamento
      </div>
      <div class="text-2xl font-medium text-black text-center mt-6">
        Sarà un primo momento di <br />
        consulenza in cui potresti<br />
        parlarci di cosa vorresti <br />
        cambiare del tuo corpo e<br />
        farci tutte le domande che <br />
        hai su Body Reset
      </div>

      <!-- FORM -->
      <div class="mt-12 w-full bg-redSecondary">
        <!-- Title BODY RESET -->
        <div class="text-white text-5xl text-center font-bold mt-20">
          BODY RESET
        </div>
        <div class="text-black text-3xl text-center font-bold mt-6">
          Relax, benessere e <br />
          bellezza in un unico <br />
          trattamento
        </div>
        <div class="text-black text-4xl text-center font-bold mt-12">
          <span class="text-white">IN PROMOZIONE <br /><br /></span> a
          <span class="text-white">87€</span> invece che <br />
          <span class="text-white">150€</span>
        </div>

        <div class="text-black text-2xl text-center font-medium mt-24">
          COMPILA IL FORM QUI SOTTO <br />
          PER ESSERE RICONTATTATO E <br />
          PRENOTARE LA TUA SEDUTA
        </div>

        <!-- Inizio Form -->
        <div class="mt-20 mx-8">
          <!-- Nome  -->
          <label for="Nome" class="text-lg text-black font-medium">Nome</label>
          <input
            type="text"
            id="Nome"
            name="Nome"
            placeholder="Mario"
            class="rounded-md bg-white p-4 w-full mb-4"
            v-model="nome"
          />
          <!-- Cognome  -->
          <label for="Cognome" class="text-lg text-black font-medium"
            >Cognome</label
          >
          <input
            type="text"
            id="Cognome"
            name="Cognome"
            placeholder="Rossi"
            class="rounded-md bg-white p-4 w-full mb-4"
            v-model="cognome"
          />
          <!-- Telefono  -->
          <label for="Telefono" class="text-lg text-black font-medium"
            >Telefono</label
          >
          <input
            type="tel"
            id="Telefono"
            name="Telefono"
            placeholder="332 789 412"
            class="rounded-md bg-white p-4 w-full mb-4"
            v-model="tel"
          />
          <!-- Email  -->
          <label for="Email" class="text-lg text-black font-medium"
            >Email</label
          >
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="mario@email.it"
            class="rounded-md bg-white p-4 w-full mb-4"
            v-model="email"
          />
          <!-- Sesso  -->
          <label for="Sesso" class="text-lg text-black font-medium"
            >Sesso</label
          >
          <select
            id="Sesso"
            name="Sesso"
            class="rounded-md bg-white p-4 w-full mb-4"
            v-model="sesso"
          >
            <option value="" disabled>Seleziona Sesso:</option>
            <option>Donna</option>
            <option>Uomo</option>
            <option>Altro</option>
          </select>
          <!-- Privacy -->
          <div class="font-medium text-md mt-6">
            Ho letto, compreso e accettato <br />
            l’informativa privacy
          </div>
          <div class="flex flex-row items-center">
            <input
              type="radio"
              id="checkPrivacy"
              name="checkPrivacy"
              :value="true"
              class="w-4 h-4"
              v-model="consensoPrivacy"
            />
            <label for="checkPrivacy" class="text-black text-sm ml-2"
              >Acconsento</label
            >
          </div>

          <!-- Marketing -->
          <div class="font-medium text-md mt-6">
            Acconsento al trattamento dei miei darti<br />
            per finalità di marketing
          </div>
          <div class="flex flex-row items-center justify-start">
            <div class="flex flex-row items-center">
              <input
                type="radio"
                id="checkMarketing"
                name="checkMarketing"
                :value="true"
                class="w-4 h-4"
                v-model="consensoMarketing"
              />
              <label for="checkMarketing" class="text-black text-sm ml-2"
                >Acconsento</label
              >
            </div>
            <div class="flex flex-row items-center ml-4">
              <input
                type="radio"
                id="checkMarketing"
                name="checkMarketing"
                :value="false"
                class="w-4 h-4"
              />
              <label for="checkMarketing" class="text-black text-sm ml-2"
                >Non acconsento</label
              >
            </div>
          </div>
        </div>

        <!-- Recaptcha -->
  

        <!-- Alert -->
        <div
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-8 mx-8"
          role="alert"
          v-show="showError"
        >
          <strong class="font-bold">Attenzione!</strong>
          <span class="block sm:inline">{{ errorMsg }}</span>
          <span
            class="absolute top-0 bottom-0 right-0 px-4 py-3"
            @click="showError = false"
          >
            <svg
              class="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </span>
        </div>

        <!-- Button -->
        <!-- onclick="window.location.href='/landing/invioCorretto';"   -->
        <div
          @click="inviaBTN()"
          class="text-redSecondary cursor-pointer text-3xl bg-white text-center font-bold rounded-xl py-5 w-9/12 mt-12 mb-16 relative left-1/2 transform -translate-x-1/2"
        >
          INVIA
        </div>
      </div>

      <!-- Sezione Contatti -->
      <div class="w-full bg-white mx-4 mb-4 text-center">
        <!--Posizione -->
        <img
          class="mx-auto mt-8 w-8 h-8"
          src="~/assets/img/landing/position.svg"
          alt="Monica Centri"
          width="100%"
          height="100%"
        />
        <a
          class="text-black text-xl text-center font-semibold mt-3"
          href="https://goo.gl/maps/vThDdXbFEzEKLxC4A"
          target="_blank"
          >Viale Gabriele D’Annunzio, 3, Vasto</a
        >
        <br />
        <a
          class="text-black text-xl text-center font-semibold mt-3"
          href="https://goo.gl/maps/8hFu63hQ2fTvaZbe9"
          target="_blank"
          >Viale Mattia e Mangiocco, 1, Lentella</a
        >
        <!-- Email -->
        <img
          class="mx-auto mt-8 w-8 h-8"
          src="~/assets/img/landing/email.svg"
          alt="Monica Centri"
          width="100%"
          height="100%"
        />
        <a class="text-black text-xl text-center font-semibold mt-3"
          >infomonicacentri@gmail.com</a
        >
        <!-- Numero -->
        <img
          class="mx-auto mt-8 w-8 h-8"
          src="~/assets/img/landing/phone.svg"
          alt="Monica Centri"
          width="100%"
          height="100%"
        />
        <a
          class="text-black text-xl text-center font-semibold mt-3"
          href="tel:+393920748016"
          >3920748016</a
        >
      </div>

      <!-- Footer -->
      <div class="bg-black text-white text-center mt-4 pt-8 pb-8 w-full">
        <a class="text-lg text-center font-semibold"
          >Privacy and cookie policy</a
        >
        <br />
        <a class="text-2xl text-center font-semibold">WWW.MONICACENTRI.COM</a>
      </div>
    </div>
  </div>
</template>

<script>
//import ginput from "@/components/ginput.vue";

export default {
  layout: "empty",
  data() {
    return {
      nome: "",
      cognome: "",
      tel: "",
      email: "",
      sesso: "",
      consensoPrivacy: false,
      consensoMarketing: false,
      errorMsg: "Hei",
      showError: false,
    };
  }, //data
  mounted() {}, //mounted
  created() {}, //created
  computed: {
    responsive() {
      switch (this.$mq) {
        case "sm":
          return true;
        case "md":
          return true;
        case "lg":
          return false;
      }
    },
    webShareApiSupported() {
      return navigator.share;
    },
  },

  methods: {
    async shareButton() {
      try {
        await navigator.share({
          title: "Monica Centri",
          text: "Non il solito Centro Estetico",
          url: "https://monicacentri.com/qr",
        });
        console.log("shared successfully");
      } catch (err) {
        console.log("Error: " + err);
      }
    },

    async inviaBTN() {
      if (this.controlloForm()) {
        const ip = await this.$axios
          .post(
            "https://vivicalascio.altervista.org/MonicaCentri/receiveForm.php",
            {
              nome: this.nome,
              cognome: this.cognome,
              tel: this.tel,
              email: this.email,
              sesso: this.sesso,
              consensoPrivacy: this.consensoPrivacy,
              consensoMarketing: this.consensoMarketing,
            },
            {}
          )
          .then((response) => {
            console.log("Inserimento Effettuato con successo");
            // console.log(response);
            this.$router.push({ path: "/landing/invioCorretto" });
          })
          .catch((error) => {
            console.error("Oh Error");
            this.errorMsg = "Qualcosa é andato storto, Riprovare";
            this.showError = true;
            console.error(error);
          });
      }
    },
    onSubmit(token) {
      document.getElementById("demo-form").submit();
    },
    controlloForm() {
      /* console.log("Dati inseriti: ");
      console.log(this.nome);
      console.log(this.cognome);
      console.log(this.tel);
      console.log(this.email);
      console.log(this.sesso);
      console.log(this.consensoPrivacy);
      console.log(this.consensoMarketing);
      */

      //Controllo Nome
      if (this.nome == "" || this.nome == null) {
        this.errorMsg = "Inserisci un nome";
        this.showError = true;
        return false;
      }
      //Controllo Telefono
      if (this.tel == "" || this.tel == null) {
        this.errorMsg = "Inserisci un numero di telefono";
        this.showError = true;
        return false;
      }

      //Controllo Email
      var email_valid =
        /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+$/;
      if (
        !email_valid.test(this.email) ||
        this.email == "" ||
        this.email == null
      ) {
        this.errorMsg = "Inserisci un email Valida";
        this.showError = true;
        return false;
      }

      //Controllo Privacy
      if (!this.consensoPrivacy) {
        this.errorMsg = "Accetta le normative sulla privacy";
        this.showError = true;
        return false;
      }

      this.showError = false;
      return true;
    },
  }, //methods
  components: {},
};
</script>

<style lang="scss" scoped></style>

