---
title: 3 Aaltohiukkasdualismi
subject: Physics
topic: Aaltohiukkasdualismi — Comptonin sironta, fotonin liikemäärä, de Broglien aallonpituus
tags:
  - fysiikka
  - kvanttifysiikka
  - aaltohiukkasdualismi
  - comptonin-sironta
  - de-broglie
language: fi
created: 2026-09-26
source: FY8 luku 3 Aaltohiukkasdualismi (oppikirjan teksti, käyttäjän antama)
status: notes
---

# Aaltohiukkasdualismi

> [!SUMMARY]
> Sähkömagneettisella säteilyllä on sekä aalto- että hiukkasluonne. Hiukkasluonne ilmenee vuorovaikutuksessa aineen kanssa (valosähköinen ilmiö, [[2 Fotonimalli|fotonimalli]], Comptonin sironta) ja aaltoluonne interferenssissä ja diffraktiossa. Comptonin sironta osoittaa, että fotonilla on liikemäärä $p = h/\lambda$. Vastaavasti de Broglie esitti vuonna 1924, että myös hiukkasilla on aallonpituus $\lambda = h/p$. Heikon valon diffraktiokokeessa molemmat luonteet havaitaan samassa kokeessa.

## Elektronimikroskooppi — miksi tarvitaan lyhyttä aallonpituutta

Useimmat virukset ovat niin pieniä, ettei niitä voi nähdä tavallisella mikroskoopilla (esim. elektronimikroskooppikuva SARS-CoV-2-viruksista).

- **Kohteen tarkasteluun käytetyn säteilyn aallonpituus asettaa rajan mikroskoopin erotuskyvylle.**
- Optisella mikroskoopilla raja on samaa suuruusluokkaa kuin näkyvän valon alueen **pienin aallonpituus**.
- Elektronimikroskooppi käyttää valon sijasta **elektronisuihkua**, joka käyttäytyy lyhytaaltoisen aaltoliikkeen tavoin.
- Parhaimmillaan elektronimikroskooppi erottaa jopa **0,1 nm** kokoiset yksityiskohdat.

---

## Comptonin sironta

### Klassinen malli: Thomsonin sironta

Klassisen mallin mukaan sähkömagneettisen säteilyn **aallonpituus ei muutu** sironnassa:

- Aineeseen osuva SM-säteily saa aineen elektronit värähtelemään aaltoliikkeen taajuudella.
- Elektronit lähettävät puolestaan SM-aaltoliikettä **samalla taajuudella**.
- Ilmiötä kutsutaan **Thomsonin sironnaksi**.
- Tarpeeksi pitkäaaltoinen säteily, kuten näkyvä valo, siroaa klassisen mallin mukaisesti.

### Havainto: spektrissä on toinen, pitempi aallonpituus

- Aineesta sironneen **röntgensäteilyn** spektrissä havaitaan alkuperäisen aallonpituuden lisäksi **toinen, suurempi aallonpituus**.
- Se poikkeaa alkuperäisestä sitä enemmän, mitä **suurempaan kulmaan** säteily on sironnut.
- Ilmiötä kutsutaan **Comptonin sironnaksi**, ja se havaitaan vain hyvin pienillä aallonpituuksilla (röntgen- tai gammasäteily).

### Fotonimallin selitys

Comptonin sironta voidaan selittää fotonimallilla. Vuorovaikutuksessa voidaan erottaa kaksi osaa, joista kumpikin erikseen noudattaa energian vaihtoa kuvaavaa lakia $E = hf$:

- Aineeseen saapuvan valon fotoni luovuttaa elektronille energian $E_1 = hf_1$.
- Samanaikaisesti elektroni säteilee fotonin, jonka energia on $E_2 = hf_2$.
- Fotonien energioiden erotus on

$$
\Delta E = hf_2 - hf_1 = h\Delta f
$$

- Erotusta vastaava energia siirtyy elektronille.

> [!WARNING] Merkintätavasta
> Oppikirjan tekstissä erotus on kirjoitettu muodossa $\Delta E = hf_2 - hf_1$, mutta koska sironnut fotoni on pienempienerginen ($f_2 < f_1$), erotus on negatiivinen. Kyseessä on siis **fotonin energian muutos**; elektronin saama energia on $E_1 - E_2 = h(f_1 - f_2)$, suuruudeltaan sama. Tämä huomautus on lisäys, ei oppikirjan tekstiä.

Selitys sille, miksi sironneen fotonin energia on pienempi ja miksi erotus riippuu sirontakulmasta, vaatii **lisäyksen hiukkasmalliin**: vuorovaikutuksessa fotonilla on energian lisäksi myös **liikemäärä**.

---

## Fotonin liikemäärä

- SM-säteilyn ja aineen välisessä vuorovaikutuksessa liikemäärät muuttuvat **kvantteina** ja **kokonaisliikemäärä säilyy**.
- Fotonin liikemäärä:

$$
\boxed{\ p = \frac{E}{c} = \frac{hf}{c} = \frac{h}{\lambda}\ }
$$

- $E$ = fotonin energia
- $f$ ja $\lambda$ = säteilyn taajuus ja aallonpituus
- $c$ = valon nopeus tyhjiössä

> [!NOTE] Lisäys
> Oppikirjan kaavakuva fotonin liikemäärästä ei välittynyt tekstin mukana. Selitteet ($E$, $f$, $\lambda$, $c$) ja myöhempi tekstin maininta $p = h/\lambda$ ovat oppikirjasta; kaava on kirjoitettu näiden perusteella.

Comptonin sironta muistuttaa **hiukkasten kimmoista törmäystä**: liikemäärä ja energia säilyvät.

### Miksi vaikutus riippuu sirontakulmasta

- Fotonien energioiden erotus ja samalla elektronille siirtyvä energia $\Delta E$ **kasvaa sirontakulman kasvaessa**.
- **Energian säilyminen ei selitä** tätä riippuvuutta, koska energialla ei ole suuntaa.
- Kokeellisesti $\Delta E$ on **suurin sirontakulmalla 180°** eli säteilyllä, joka siroaa suoraan tulosuuntaan:
  - elektronin liike-energian ja liikemäärän muutos on tällöin suurin
  - myös fotoniin liittyvä liikemäärän muutos on suurin takaisin tulosuuntaan sironneella säteilyllä, koska saapuvan ja sironneen fotonin suunnat eroavat tällöin eniten
  - tämä on sopusoinnussa **liikemäärän säilymislain** kanssa: elektronin liikemäärän muutos ja fotoniin liittyvä liikemäärän muutos ovat yhtä suuret ja vastakkaismerkkiset
- **Muilla sirontakulmilla** liikemääriä tarkastellaan **vektoreina**. Energian ja liikemäärän säilymislaeista sekä oletuksesta $p = h/\lambda$ voidaan johtaa Comptonin sironnan laki, joka pitää yhtä koetulosten kanssa ja osoittaa oletuksen fotonin liikemäärästä oikeaksi.

---

## Comptonin sironnan laki

Kun aineessa tapahtuu Comptonin sirontaa, tulosuuntaan nähden kulmaan $\theta$ sironneessa säteilyssä havaitaan aineeseen saapuvan säteilyn aallonpituuden **lisäksi toinen, pitempi aallonpituus**. Aallonpituuksien erotus $\Delta\lambda$ on

$$
\boxed{\ \Delta\lambda = \frac{h}{m_e c}\left(1 - \cos\theta\right)\ }
$$

- $m_e$ = elektronin massa
- $h$ = Planckin vakio
- $c$ = valon nopeus tyhjiössä
- $\theta$ = sirontakulma tulosuuntaan nähden

> [!NOTE] Lisäys
> Oppikirjan kaava ei välittynyt tekstin mukana (kuva). Vakiot ja selitteet ovat oppikirjan tekstistä, ja laki on kirjoitettu tässä standardissa muodossa. Vakiolla on arvo $\dfrac{h}{m_e c} = 2{,}43\ \mathrm{pm}$, mikä on kätevä sirontakulmien laskemisessa.

---

## Esimerkki 1 — Comptonin sironta

Ainenäytteeseen kohdistetaan röntgensäteilyä, jonka aallonpituus on 225,3 pm. Aineessa tapahtuu Comptonin sirontaa.

**a)** Kuinka suuri on näytteestä 65,00°:n kulmaan sironneessa säteilyssä havaittava **toinen aallonpituus**?
**b)** Kuinka suuri on tällöin elektronin Comptonin sironnassa saama **energia**?

> [!NOTE] Lisäys
> Oppikirjan ratkaisusivut eivät välittyneet tekstin mukana. Ratkaisu on laskettu tässä oppikirjan kaavoilla.

**a) Aallonpituuden muutos ja toinen aallonpituus**

$$
\Delta\lambda = \frac{h}{m_e c}\left(1-\cos\theta\right) = 2{,}43\ \mathrm{pm}\cdot\left(1-\cos 65{,}00^\circ\right) = 2{,}43\ \mathrm{pm}\cdot 0{,}5774 = 1{,}401\ \mathrm{pm}
$$

$$
\lambda' = \lambda + \Delta\lambda = 225{,}3\ \mathrm{pm} + 1{,}401\ \mathrm{pm} = 226{,}7\ \mathrm{pm}
$$

**b) Elektronin saama energia**

Käytetään arvoa $hc = 1239{,}8\ \mathrm{keV\,pm}$:

$$
E = \frac{hc}{\lambda} = \frac{1239{,}8\ \mathrm{keV\,pm}}{225{,}3\ \mathrm{pm}} = 5{,}503\ \mathrm{keV}
$$

$$
E' = \frac{hc}{\lambda'} = \frac{1239{,}8\ \mathrm{keV\,pm}}{226{,}70\ \mathrm{pm}} = 5{,}469\ \mathrm{keV}
$$

$$
\Delta E = E - E' = 5{,}503\ \mathrm{keV} - 5{,}469\ \mathrm{keV} = 0{,}034\ \mathrm{keV} \approx 34\ \mathrm{eV} \approx 5{,}4\cdot10^{-18}\ \mathrm{J}
$$

**Vastaus:** a) 226,7 pm  b) 34 eV

> Spektrissä näkyy edelleen myös alkuperäinen aallonpituus 225,3 pm, koska osa säteilystä siroaa muuttumattomana ([[#Klassinen malli: Thomsonin sironta|Thomsonin sironta]]).

---

## Valon paine: aurinkopurje

Valon vuorovaikutuksissa ilmenevää **hiukkasluonnetta** voidaan käyttää hyödyksi avaruusluotainten kiihdyttämisessä:

- Aurinkopurjeeseen osuvien auringonvalon fotonien **törmäykset** aiheuttavat voiman.
- Voima muuttaa avaruusluotaimen **liikemäärää**.

---

## Heikon valon diffraktio

Valon **aalto-ominaisuudet** ilmenevät tilanteissa, joissa valoaallot interferoivat (diffraktio). **Hiukkasominaisuudet** ilmenevät vuorovaikutuksessa aineen kanssa (valosähköinen ilmiö, Comptonin sironta). Molemmat voidaan havaita **samassa kokeessa** tutkimalla hyvin heikon valon diffraktiota.

### Koelaitteisto

- Valonlähteenä **hehkulamppu**, jonka valo on suodatettu yksiväriseksi ja himmennetty erittäin heikoksi.
- Valo kulkee **kaksoisraosta**.
- Intensiteettijakauma määritetään siirtämällä **kapeaa ilmaisinrakoa** valon reitin poikki ja mittaamalla raon läpi kulkeneen valon voimakkuus.
- Ilmaisimena **valomonistinputki**, joka on tarpeeksi herkkä havaitsemaan yksittäisiä valokvantteja.
- Aikayksikössä havaittujen **fotonien lukumäärä on verrannollinen valon intensiteettiin**.
- Laitteistoon kuuluvat myös **sulkija**, **oskilloskooppi** ja **laskuri**.

### Valomonistinputki (lisätieto laitteistosta)

Putkessa on valolle herkkä **fotokatodi** ja sarja askelittain nousevaan potentiaaliin kytkettyjä **dynodeja**:

1. Putkeen saapuva fotoni irrottaa fotokatodilta **elektronin**, joka kiihtyy sähkökentässä.
2. Elektroni osuu ensimmäiseen dynodiin → törmäys irrottaa joukon **sekundaarielektroneja**.
3. Ne kiihtyvät ja osuvat seuraavaan dynodiin irrottauttaen lisää elektroneja, ja niin edelleen.
4. Elektronien määrä kasvaa dynodiketjussa **monituhatkertaiseksi** → putkesta saadaan tarpeeksi voimakas **jännitepulssi** mitattavaksi.

- Putkesta saadaan **erillisiä jännitepulsseja**, jotka havaitaan oskilloskoopilla. Ne vastaavat **yksittäisiä valon kvantteja eli fotoneja**.
- Valon vuorovaikutus katodimateriaalin kanssa on **kvantittunut**: valo käyttäytyy kuin katodiin osuva hiukkassuihku.

### Havainnot

| Tilanne | Havainto |
| --- | --- |
| Kaksoisrako auki | Samanlainen diffraktiokuvio minimeineen ja maksimeineen kuin klassiselle aaltoliikkeelle (esim. laservalo) |
| Toinen rako suljettu | Kaksoisraon diffraktio muuttuu **yhden raon diffraktioksi**: havaitaan vain **leveä keskusmaksimi** |
| Kohdat, joissa kaksoisraolla on **minimi** | Toisen raon sulkeminen aiheuttaa **intensiteetin kasvun** |
| Anturi (esim. digikameran kuvakenno) ilmaisimen tilalla | Yksittäisten fotonien osumien jakaumasta muodostuu **diffraktiokuvio** |

Niinkin heikko valo, että siitä havaitaan **yksittäisiä fotoneja**, käyttäytyy kuten rakosysteemin läpi kulkeva aaltoliike, jossa aallot summautuessaan vahvistavat tai heikentävät toisiaan.

> Vastaava koe tehtiin moduulissa **FY7 mikroaalloilla**: [[12 Interferenssi ja diffraktio rakosysteemissä]].

### Aaltohiukkasdualismi

- Koe vahvistaa käsityksen, että valolla ja yleensä SM-säteilyllä on **sekä aalto- että hiukkasluonne**.
- Valoa voidaan kuvata aalto- ja hiukkasmalleilla, ja **kussakin tilanteessa kannattaa valita ilmiötä ymmärrettävämmin selittävä malli**.
- Valon kulkua kaksoisraon läpi ei kannata mallintaa klassisten hiukkasten suihkuna, koska **klassiset hiukkaset eivät interferoi keskenään**.
- Heikossa valossa konkreettinen hiukkastulkinta on vielä hankalampi: laitteistossa kulkisi kerrallaan vain **yksi** valohiukkanen, jonka pitäisi kulkea **molemmista raoista** ja interferoida itsensä kanssa.
- Kysymys siitä, onko valo perusolemukseltaan aaltoja vai hiukkasia, **ei ole modernin fysiikan näkökulmasta mielekäs**. Myöskään ajatus siitä, että valo vaihtaisi olemustaan tilanteen mukaan, ei ole perusteltu.
- Sähkömagneettiselle säteilylle on ominaista **aaltohiukkasdualismi**: säteilyllä on sekä hiukkasten että aaltoliikkeen ominaisuuksia.

### Epädeterministinen luonne

- Heikon valon diffraktiokokeessa havaitaan myös **kvanttimekaniikan epädeterministinen luonne**.
- Kvanttimekaniikka on pohjimmiltaan **todennäköisyyksiin perustuva teoria**, jonka perusteella voidaan ennustaa diffraktiota vastaava **osumakohtien todennäköisyysjakauma**.
- Pitkään jatkuvassa kokeessa yksittäisistä fotonihavainnoista muodostuu **vähitellen** diffraktiokuvio, joka vastaa teorian ennustetta.
- **Yksittäisten fotonien täsmällisiä osumakohtia ei voi ennustaa etukäteen.** Teoria kertoo vain sen, millä todennäköisyydellä esimerkiksi seuraavaksi rekisteröity fotoni havaitaan tietyllä diffraktiokuvion alueella.

---

## Hiukkasten aaltoluonne

Vuonna **1924 Louis de Broglie** esitti vallankumouksellisen hypoteesin:

> Koska sähkömagneettisella säteilyllä oli havaittu hiukkasluonne, vastaavasti **hiukkassäteilyllä pitää olla aaltoluonne**.

Hypoteesi ennusti, että sekä SM-säteilylle että hiukkassäteilylle pätee **sama liikemäärän ja aallonpituuden toisiinsa liittävä laki**.

### De Broglien laki

$$
\boxed{\ \lambda = \frac{h}{p}\ }
\qquad \text{eli} \qquad
\boxed{\ p = \frac{h}{\lambda}\ }
$$

- $\lambda$ = aaltoluonteessa ilmenevä aallonpituus
- $p$ = hiukkasluonteessa ilmenevä liikemäärä

### Kokeellinen vahvistus

- **1927**: havaittiin elektronisuihkun **diffraktio nikkelikiteessä**; kokeen perusteella pystyttiin määrittämään suihkun elektronien aallonpituus → tulos vahvisti de Broglien hypoteesin.
- Hiukkasen aallonpituutta $\lambda = h/p$ kutsutaan **de Broglien aallonpituudeksi**.
- Myöhemmissä tutkimuksissa hiukkassuihkun diffraktio on havaittu monenlaisilla **atomaarisilla hiukkasilla ja jopa molekyyleillä**.

### Elektronidiffraktio grafiitissa

Laitteessa hiukkassäteily tuotetaan **elektronitykillä** ja ohut **grafiittikide** toimii kaksiulotteisena **läpäisyhilana**:

1. Elektronitykki (A) tuottaa elektronisuihkun (B).
2. Suihku läpäisee grafiittikiteen (C).
3. Kiteen läpäissyt suihku muodostaa diffraktiokuvion **loisteaineeseen** (D).
4. Diffraktiomaksimit näkyvät **samankeskisinä renkaina** (E).

> **Havainto:** Kun kiihdytysjännite nostetaan 3000 voltista 5000 volttiin, diffraktiomaksimien **säde pienenee**. Elektronien aallonpituus siis **lyhenee**, kun niiden nopeus ja siten myös liikemäärä kasvaa.

### Aineen rakenteen tutkiminen

Sähkökentässä muutaman kilovoltin jännitteellä kiihdytettyjen elektronien ja ydinreaktioilla tuotettujen neutronien aallonpituudet ovat tyypillisesti **samaa suuruusluokkaa kuin atomien etäisyydet kiinteissä aineissa**. Myös **röntgensäteilyn** aallonpituus on samalla alueella.

→ Kaikkien näiden säteilylajien diffraktiota käytetään **aineen rakenteen tutkimiseen** (ks. [[6 Röntgensäteily]]).

---

## Esimerkki 2 — elektronin de Broglien aallonpituus

Elektronidiffraktion tutkimuslaitteessa elektroneja kiihdytetään 2,0 kV:n jännitteellä. Kuinka suuri on kiihdytettyjen elektronien de Broglien aallonpituus?

> [!NOTE] Lisäys
> Oppikirjan ratkaisusivu ei välittynyt tekstin mukana. Ratkaisu on laskettu tässä oppikirjan kaavoilla.

Kiihdytyksessä sähkökenttä tekee työn $E_k = eU$:

$$
E_k = eU = 1{,}602\cdot10^{-19}\ \mathrm{C}\cdot 2{,}0\cdot10^{3}\ \mathrm{V} = 3{,}2\cdot10^{-16}\ \mathrm{J}
$$

Koska $E_k = \dfrac{p^2}{2m_e}$, saadaan liikemäärä:

$$
p = \sqrt{2m_eE_k} = \sqrt{2\cdot 9{,}109\cdot10^{-31}\ \mathrm{kg}\cdot 3{,}2\cdot10^{-16}\ \mathrm{J}} = 2{,}4\cdot10^{-23}\ \mathrm{kg\,m/s}
$$

De Broglien laki:

$$
\lambda = \frac{h}{p} = \frac{6{,}626\cdot10^{-34}\ \mathrm{Js}}{2{,}416\cdot10^{-23}\ \mathrm{kg\,m/s}} = 2{,}7\cdot10^{-11}\ \mathrm{m} = 27\ \mathrm{pm}
$$

**Vastaus:** 27 pm (0,027 nm)

> [!NOTE] Lisäys
> Laskussa käytetty relaation $E_k = p^2/2m_e$ on tällä jännitteellä tarkka (elektronit ovat selvästi epärelativistisia, $\lambda$ muuttuisi relativistisella korjauksella alle promillen).

---

## Modernin fysiikan jälkeen

**Kvanttifysiikka ja suhteellisuusteoria** ovat laajentaneet fysiikan kykyä mallintaa todellisuutta. Perustutkimuksessa tehdään edelleen uusia merkittäviä läpimurtoja, jotka vahvistavat mallien ennusteita:

- **2012**: Higgsin hiukkanen havaittiin kokeellisesti.
- **2016**: gravitaatioaallot havaittiin.

### Ratkaisemattomia ongelmia

- Miksi **gravitaatio on niin heikko** verrattuna muihin vuorovaikutuksiin?
- Missä piilevät **pimeä aine** ja **pimeä energia**, joita maailmankaikkeuden rakennetta ja laajenemista kuvaavat mallit ennustavat?

### Pyrkimys yhtenäiseen teoriaan

- Fysiikan kehitykselle on ollut olennaista pyrkimys selittää **yhä suurempia kokonaisuuksia samojen perusperiaatteiden pohjalta** → aiemmin erilliset osa-alueet ovat yhdistyneet samaan teoriapohjaan.
- Modernissa fysiikassa haasteellinen tavoite on **kvanttifysiikan ja suhteellisuusteorian yhdistäminen**:
  - samaan tilanteeseen sovellettuna teoriat voivat antaa toisistaan **poikkeavia ennusteita**
  - esimerkiksi suhteellisuusteorian mukaan mustasta aukosta ei voi paeta mitään, kun taas kvanttifysiikka ennustaa, että musta aukko lähettää heikkoa sähkömagneettista säteilyä
  - koska havaintodataa on toistaiseksi mahdotonta saada, ei ole kyetty kokeellisesti todentamaan, kumpi malli on oikeassa
- Ensimmäinen osa-alue, jossa ristiriidaton yhdistäminen onnistui, on **kvanttisähködynamiikka (QED, Quantum electrodynamics)**: se kuvaa sähköisesti varattujen hiukkasten fotonien välityksellä tapahtuvia vuorovaikutuksia.
- Edelleen tavoitteena on löytää yhteinen tekijä, joka selittää **kaikki neljä perusvuorovaikutusta**: vahva ja heikko vuorovaikutus, sähkömagneettinen vuorovaikutus ja gravitaatio. Erityisesti **gravitaation liittäminen** kolmeen muuhun on osoittautunut haastavaksi.
- Jos vuorovaikutusten yhdistymistä kuvaava malli eli **Kaiken teoria** onnistutaan muodostamaan ja osoittamaan päteväksi, se antaa yhteisen teoriapohjan kaikille tunnetuille ilmiöille → voidaan katsoa siirrytty modernia fysiikkaa seuraavaan aikakauteen.

---

## Muistilista

- $p = \dfrac{E}{c} = \dfrac{hf}{c} = \dfrac{h}{\lambda}$ — fotonin liikemäärä
- $\Delta\lambda = \dfrac{h}{m_e c}\left(1-\cos\theta\right)$ — Comptonin sironnan laki, $\dfrac{h}{m_e c} = 2{,}43\ \mathrm{pm}$
- $\lambda = \dfrac{h}{p}$ — de Broglien aallonpituus (myös SM-säteilylle)
- $E_k = eU = \dfrac{p^2}{2m_e}$ — kiihdytetyn elektronin liike-energia ja liikemäärä
- $hc = 1240\ \mathrm{eV\,nm} = 1239{,}8\ \mathrm{keV\,pm}$
- Thomsonin sironta: $\lambda$ ei muutu (klassinen malli); Comptonin sironta: $\lambda$ kasvaa, $\Delta\lambda$ kasvaa kulman kasvaessa (suurin kulmalla 180°)
- Heikon valon diffraktio: yksittäiset fotonit muodostavat **vähitellen** diffraktiokuvion → aaltohiukkasdualismi ja kvanttimekaniikan todennäköisyysluonne

## Liittyvät

- [[2 Fotonimalli]]
- [[6 Röntgensäteily]]
- [[12 Interferenssi ja diffraktio rakosysteemissä]] (FY7: vastaava koe mikroaalloilla)
- [[4 Spektri ja vetyatomi]]

## Lähde

- FY8, luku 3 *Aaltohiukkasdualismi* — oppikirjan teksti (käyttäjän antama)
- Oppikirjan kuvat eivät välittyneet tekstin mukana; kuvatekstit on säilytetty ja kuvien sisältö on selitetty sanallisesti.
- Merkinnällä **Lisäys** varustetut kohdat (fotonin liikemäärän kaava, Comptonin sironnan laki, esimerkkien 1 ja 2 ratkaisut) eivät ole oppikirjan tekstiä, vaan ne on täydennetty oppikirjan antamilla tiedoilla ja standardeilla kaavoilla.
