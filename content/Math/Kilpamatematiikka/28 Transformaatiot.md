---
title: "28 Transformaatiot"
source: "https://kurssi.matematiikkakilpailut.fi/28_transformaatiot.html"
author: "Olli Järviniemi"
---

<a id="title-block-header"></a>

# 28 Transformaatiot

Tekijä

Olli Järviniemi

<a id="johdanto"></a>

## 28.1 Johdanto

Tässä tekstissä käsitellään geometristen transformaatioiden hyödyntämistä geometrian tehtävissä. Ideoissa ei ole sinänsä mitään uutta – loppukädessä kaikki palautuu yhdenmuotoisiin kolmioihin, jotka ovat tuttuja. Tämä on kuitenkin hieman erilainen tapa katsoa geometrian kuvioita, ja tämä tapa on monesti hyödyllinen.

<a id="peilaukset"></a>

## 28.2 Peilaukset

Peilaukset ovat luonnostaan nousseet esiin tutkiessamme ortokeskuksia: kolmion $ABC$ ortokeskuksen peilaus sivun $BC$ yli sijaitsee kolmion $ABC$ ympärysympyrällä. Me oikeastaan todistimme ortokeskuksen olemassaolon tätä kautta. Tässä on vielä toinen ortokeskukseen liittyvä peilausominaisuus.

<a id="exr-ortopeili"></a>

**Tehtävä 28.1** Olkoon $ABC$ kolmio ja olkoon $H$ sen ortokeskus. Olkoon $H'$ pisteen $H$ peilaus sivun $BC$ keskipisteen yli. Osoita, että $AH'$ on kolmion $ABC$ ympärysympyrän halkaisija.

![Kolmio ABC katkoviivaisen ympärysympyränsä sisällä, kärki A ylhäällä vasemmalla sekä B ja C alhaalla. Kolmion ortokeskus H on merkitty, ja siitä on piirretty pistekatkoviivoin korkeusjanat kärkien kautta kantapisteisiin D, E ja F. Ortokeskuksen peilaus H' on merkitty ympärysympyrän kehälle vastapäätä kärkeä A, ja pisteet H ja H' on yhdistetty janalla.](28%20Transformaatiot.assets/ortokeskus.svg)

*Kolmion ortokeskus ja sen peilaus sivun keskipisteen yli.*

Kuvaan on lisätty korkeusjanat ja niiden kantapisteet, koska ne auttavat kuvion hahmottamisessa ja kulmanjahtauksessa.

Yritetään ensiksi todistaa, että $H'$ on ympärysympyrällä. Tämän todistamiseksi lienee helpointa osoittaa, että $\angle CH'B + \angle A = 180^{\circ}$. Mutta tämä on helppoa: $$\angle CH'B = \angle BHC = \angle EHF = 180^{\circ} - \angle A,$$ missä käytimme peilausominaisuutta ja sitä tietoa, että $AFHE$ on jännenelikulmio.

Todistetaan sitten, että $AH'$ on ympyrän halkaisija. Tätä varten osoitetaan, että $\angle H'BA = 90^{\circ}$. Käyttämällä peilausominaisuutta saadaan $$\angle H'BC = \angle HCB = \angle FCB = 90^{\circ} - \angle B,$$ missä viimeisessä askeleessa hyödynnetään suorakulmaista kolmiota $BFC$. Väite seuraa tästä.

Tämä oli melko suoraviivainen esimerkki: peilaus toimi vain tapana saada yhtä suuria kulmia. Seuraavassa vaikeammassa esimerkissä peilaukset toimivat työkaluna hankalien pituusehtojen käsittelemisessä.

<a id="exr-maol"></a>

**Tehtävä 28.2** Olkoon $ABC$ kolmio, jossa $AC > AB$. Piste $X$ sijaitsee suoralla $AB$ niin, että $B$ ja $X$ ovat eri puolilla pistettä $A$ ja $BX = CA$. Piste $Y$ sijaitsee janalla $AC$ niin, että $CY = BA$. Piste $P$ on janan $BC$ keskinormaalin leikkauspiste suoran $XY$ kanssa. Osoita, että $\angle BPC + \angle BAC = 180^{\circ}$.

![Kolmio ABC, kärki A ylhäällä sekä B ja C alhaalla. Sivua AB on jatkettu kärjen A ohi pisteeseen X. Sivulla AC on piste Y. Suora XY ja sivun BC keskinormaali leikkaavat pisteessä P, joka on katkoviivoin yhdistetty pisteeseen X ja sivun BC keskipisteeseen.](28%20Transformaatiot.assets/MAOLalku.svg)

*Kolmio $ABC$ ja erikoisilla ehdoilla määriteltyjä pisteitä.*

Tehtävässä on monia erikoisia piirteitä. Pisteet $X$ ja $Y$ ovat jo itsessään melko epätyypillisiä, puhumattakaan pisteestä $P$. Lisäksi tehtävänannon loppu yllättää: kaikki muu viittaa siihen, että kyseessä on ”pituustehtävä”, mutta todistettava väite onkin kulmaehto.

Haluttu kulmaehto ei ole tällaisenaan kovin luonnollinen. Se kannattaa tulkita niin, että pisteen $P$ peilaus janan $BC$ yli on kolmion $ABC$ ympärysympyrän kehällä.<a id="fnref1"></a>[^1](#fn1)

<a id="fn1"></a>

^1 Ympärysympyrä näyttelee roolia, vaikkei sitä tehtävässä erikseen mainitakaan. Tämä ei ole mitenkään epätyypillistä. Tästä syystä on usein hyvä idea piirtää kolmion $ABC$ ympärysympyrä kuvaan.

<a id="trans-MAOL2"></a>

![Edellinen kuvio täydennettynä kolmion ABC katkoviivaisella ympärysympyrällä. Piste P on peilattu sivun BC yli pisteeksi Q, joka osuu ympärysympyrän kehälle. Pisteet P ja Q on yhdistetty katkoviivalla.](28%20Transformaatiot.assets/MAOLv2.svg)

*Pisteen $P$ peilaus pisteeksi $Q$. Haluamme osoittaa, että $Q$ on kolmion $ABC$ ympärysympyrällä.*

Tämä auttaa hieman, mutta moni kysymys kaipaa vielä vastausta. Mitä pisteet $X$ ja $Y$ ”ovat”? Ja miten ne liittyvät pisteeseen $Q$? Miten saamme muutettua pituusehdot kulmaehdoiksi?

Olemme jo peilanneet pisteen $Q$. On luontevaa peilata myös pisteet $X$ ja $Y$, yrityksenä saada yhdistettyä pisteet $X$ ja $Y$ pisteeseen $Q$. Yksi luonteva idea on peilata $X$ ja $Y$ suoraan sivun $BC$ yli. On kuitenkin parempi peilata $X$ ja $Y$ sivun $BC$ keskipisteen yli. Näin pituusehtoja saadaan käsiteltyä paremmin.

![Sama kuvio, johon on lisätty pisteiden X ja Y peilaukset sivun BC keskipisteen kautta, pisteet X' ja Y'. Piste Q on yhdistetty katkoviivalla pisteeseen X', ja pisteet A, X', Y' ja Q asettuvat samalle suoralle, kulman A puolittajalle.](28%20Transformaatiot.assets/MAOLv3.svg)

*Peilataan myös pisteet $X$ ja $Y$. Haluamme osoittaa, että $Q$ on kolmion $ABC$ ympärysympyrällä.*

Pari huomiota: Ensinnäkin $BYCY'$ ja $BXCX'$ ovat peilausominaisuuksista johtuen suunnikkaita. Toiseksi käyttämällä annettuja pituusehtoja ja suunnikasominaisuutta saadaan $$AB = CY = BY',$$ eli $ABY'$ on tasakylkinen kolmio. Vastaavasti $ACX'$ on tasakylkinen.

Tehtävä alkaa ratkeamaan tästä. Kolmion $BAY'$ huippukulmaksi saadaan suunnikkaita käyttämällä $$\angle Y'BA = \angle Y'BC + \angle CBA = \angle C + \angle B.$$ Täten kantakulmat ovat $\angle A/2$. Erityisesti $\angle BAY' = \angle A/2$, eli $Y'$ on kulman $\angle BAC$ kulmanpuolittajalla. Vastaavasti myös $X'$ on tällä kulmanpuolittajalla. Tämä tarkoittaa, että pisteet $A, X', Y'$ ja siten myös $Q$ ovat kaikki samalla suoralla.

Siis $Q$ on kolmion $ABC$ kärjestä $A$ piirretyn kulmanpuolittajan leikkauspiste sivun $BC$ keskinormaalin kanssa. Toisaalta tiedetään, että jos $M$ on kolmion $ABC$ ympärysympyrän kaaren $BC$ keskipiste, niin se on tällä kulmanpuolittajalla ja keskinormaalilla. Täten $Q$ ja $M$ ovat sama piste. Siis $Q$ on kolmion $ABC$ ympärysympyrällä, mikä on haluttu väite.

**Kommentti.** Tarinan opetus: Peilauksien hyödyllisyys perustuu siihen, että niillä voi liikuttaa pisteitä ilman, että (jotkin) pituudet tai kulmat muuttuvat. Jos siis kuviossa on yhtä pitkiä janoja, jotka ovat ”kaukana toisistaan” tai ”väärissä paikoissa”, voi peilauksilla yrittää korjata tilannetta.

Kierroilla on samanlaiset ominaisuudet ja käyttökohteet. Peilaus pisteen suhteen onkin oikeastaan $180$ asteen kierto.

<a id="skaalaukset"></a>

## 28.3 Skaalaukset

Yksi tilanne, jota voi miettiä skaalausten kautta, koskee kolmion mediaaneja (joita käsiteltiin [Pituusgeometriaa](10%20Pituusgeometriaa.md)-tekstin tehtävissä).

![Kolmio ABC, jonka jokaisesta kärjestä on piirretty mediaani vastakkaisen sivun keskipisteeseen: A pisteeseen D, B pisteeseen E ja C pisteeseen F. Mediaanit leikkaavat painopisteessä G. Sivujen keskipisteet D, E ja F on lisäksi yhdistetty keskijanakolmioksi.](28%20Transformaatiot.assets/mediaanit.svg)

*Kolmion mediaanit ja painopiste.*

Kuviosta löytyy muutamakin skaalaus. Jos kuviota skaalataan keskipisteenä $A$ kertoimella $2$ kuvautuu piste $F$ pisteeksi $B$ ja piste $E$ pisteeksi $C$. Tästä seuraa, että $FE$ ja $BC$ ovat yhdensuuntaisia. (Kyse on vain yhdenmuotoisista kolmioista.) Jos taas tehdään skaalaus keskipisteellä $G$ ja kertoimella $-2$ (eli skaalataan ensin kertoimella $2$ ja peilataan sitten pisteen $G$ yli), niin pisteet $D, E$ ja $F$ kuvautuvat pisteiksi $A, B$ ja $C$.

Tässä tapauksessa skaalaus ei ehkä kerro mitään uutta, mutta joissain tehtävissä skaalaus on hyvä tapa ajatella tilannetta. Esitetään tästä esimerkki.

<a id="exr-ympyrasivunta"></a>

**Tehtävä 28.3** Kaksi ympyrää sivuaa toisiaan sisäpuolisesti pisteessä $T$. Ulomman ympyrän jänne $AB$ sivuaa sisempää ympyrää pisteessä $P$. Osoita, että suora $TP$ puolittaa kulman $\angle BTA$.

![Iso ympyrä ja sen sisällä pienempi ympyrä, jotka sivuavat toisiaan pisteessä T ympyröiden vasemmalla reunalla. Ison ympyrän jänne AB kulkee kärkien A (ylhäällä) ja B (oikealla alhaalla) välillä ja sivuaa pientä ympyrää pisteessä P. Pisteestä T on piirretty janat kärkiin A ja B sekä katkoviivainen jana pisteeseen P.](28%20Transformaatiot.assets/OOOO.svg)

*Sivuavia ympyröitä, tangentti ja kulmanpuolittaja.*

Ajatus on, että isompi ympyrä saadaan skaalaamalla pienempää ympyrää. Tilanteen hahmottamiseksi lisätään kuvioon muutama piste.

![Sama kahden sisäkkäin sivuavan ympyrän kuvio täydennettynä apupistein. Isomman ympyrän keskipiste O ja pienemmän keskipiste O' on merkitty. Janat TA ja TB leikkaavat pienen ympyrän pisteissä A' ja B', jotka on yhdistetty janalla; tämä jana A'B' on yhdensuuntainen jänteen AB kanssa.](28%20Transformaatiot.assets/OOOOv3.svg)

*Kuvio apupistein varustettuna.*

Ideana on, että skaalauksen seurauksena monet kuviosta löytyvistä kolmioista ovat yhdenmuotoisia keskenään. Tästä saadaan laskettua kulmia.

Aluksi huomataan, että $T, O$ ja $O'$ ovat ympyröiden sivuamisominaisuuden nojalla samalla suoralla (sekä $TO$ että $TO'$ ovat kohtisuorassa pisteeseen $T$ piirrettyyn tangenttiin nähden). Tästä seuraa muun muassa, että $TOA$ ja $TO'A'$ ovat tasakylkisiä kolmioita, joilla on yhtä suuret kantakulmat $\angle OTA = \angle O'TA'$, eli ne ovat yhdenmuotoisia.

Kehäkulmalauseen keskuskulmaversion nojalla nyt saadaan lisää yhtä suuria kulmia. Esimerkiksi $AB$ ja $A'B'$ ovat yhdensuuntaisia, koska kehäkulmalauseen keskuskulmaversiolla $$\angle A'B'T = \frac{\angle A'O'T}{2} = \frac{\angle AOT}{2} = \angle ABT.$$

Muuta emme oikeastaan tarvitsekaan. Tehtävä ratkeaa tästä käyttämällä kehäkulmalauseen tangenttiversiota ja sitten janojen $A'B'$ ja $AB$ yhdensuuntaisuutta: $$\angle B'A'P = \angle B'PB = \angle PB'A',$$ joten kehäkulmalauseen nojalla $\angle B'TP = \angle PTA'$.

**Kommentti.** Yleisesti skaalatessa jana kuvautuu sen kanssa yhdensuuntaiseksi janaksi, ja skaalatessa ympyrää on lopputuloskin ympyrä. Tämä enemmän tai vähemmän perustelee, miksi $AB$ ja $A'B'$ ovat yhdensuuntaisia.

<a id="tehtäviä"></a>

## 28.4 Tehtäviä

**Tehtävä 1.** Suorakulmion $ABCD$ sisällä on sellainen piste $P$, että $\angle DPA + \angle BPC = 180^{\circ}$. Osoita, että $\angle PBA = \angle ADP$.

![Suorakulmio ABCD, kärki A ylhäällä vasemmalla, B alhaalla vasemmalla, C alhaalla oikealla ja D ylhäällä oikealla. Suorakulmion sisällä on piste P, joka on yhdistetty janoilla kaikkiin neljään kärkeen.](28%20Transformaatiot.assets/suorakulmio.svg)

*Tehtävä 1*

**Tehtävä 2.** Olkoon $M$ kolmion $ABC$ sivun $BC$ keskipiste. Osoita, että $AM \le (AB + AC)/2$.

![Kolmio ABC, kärki A ylhäällä sekä B ja C alhaalla. Kärjestä A on piirretty jana sivun BC keskipisteeseen M.](28%20Transformaatiot.assets/mediaani.svg)

*Tehtävä 2*

**Tehtävä 3.** Mitä seuraavassa kuvassa tapahtuu?

![Kolmio ABC pistekatkoviivoin, ympärillään sen ympärysympyrä. Ortokeskus H on merkitty, ja siitä lähtee säteitä eri suuntiin. Toinen, pienempi ympyrä kulkee yhdeksän merkityn pisteen kautta: kolmion sivujen keskipisteiden, kolmen korkeusjanan kantapisteen sekä ortokeskuksen ja kärkien välisten janojen keskipisteiden. Kuvaan on merkitty runsaasti pisteitä myös näiden peilauksina ortokeskuksen suhteen.](28%20Transformaatiot.assets/yhdeksan.svg)

*Tehtävä 3*

**Tehtävä 4.** Ympyrällä on jänne $AB$. Piirretään pienempi ympyrä, joka on tangentti jänteelle $AB$ pisteessä $P$ ja ympyrälle pisteessä $T$. Olkoon $M$ sen kaaren $AB$, joka ei sisällä pistettä $T$, keskipiste. Osoita, että $M, P$ ja $T$ ovat samalla suoralla.

![Ympyrä, jonka jänne AB kulkee kärkien A (vasemmalla ylhäällä) ja B (oikealla ylhäällä) välillä. Piste M on ympyrän alareunassa, jänteen alapuolisen kaaren keskellä. Pienempi ympyrä sivuaa jännettä AB pisteessä P ja isoa ympyrää pisteessä T. Pisteet M ja T on yhdistetty katkoviivalla.](28%20Transformaatiot.assets/circlesegment.svg)

*Tehtävä 4*

**Tehtävä 5.** Olkoon $I$ kolmion $ABC$ sisäympyrän keskipiste. Olkoon $D$ sisäympyrän sivuamispiste sivun $BC$ kanssa, ja olkoon $P$ sellainen sisäympyrän piste, että $DP$ on sisäympyrän halkaisija. Kolmion $ABC$ kärjen $A$ vastainen sivuympyrä sivuaa janaa $BC$ pisteessä $Q$. Osoita, että $A, P$ ja $Q$ ovat samalla suoralla.

![Kolmio ABC, kärki A ylhäällä sekä B ja C alhaalla. Kolmion sisään on piirretty sisäympyrä keskipisteenään I; se sivuaa sivua BC pisteessä D, ja P on sivuamispisteen D vastakkainen piste sisäympyrän halkaisijan päässä. Kolmion alapuolelle on piirretty kärjen A vastainen sivuympyrä keskipisteenään J, joka sivuaa suoraa BC pisteessä Q sekä sivujen AB ja AC jatkeita.](28%20Transformaatiot.assets/sivuympyra.svg)

*Tehtävä 5*

**Tehtävä 6.** Olkoon $ABCD$ jännenelikulmio. Olkoot $X$ ja $Y$ kolmioiden $ABC$ ja $BCD$ ortokeskukset. Osoita, että $AXYD$ on suunnikas.

![Jännenelikulmio ABCD ympyrän kehällä, kärjet A ylhäällä vasemmalla, B alhaalla vasemmalla, C alhaalla oikealla ja D ylhäällä oikealla. Lävistäjät AC ja BD on piirretty harmaalla. Piste X on kolmion ABC ortokeskus ja piste Y kolmion BCD ortokeskus.](28%20Transformaatiot.assets/AXYD.svg)

*Tehtävä 6*

---

原文：[https://kurssi.matematiikkakilpailut.fi/28_transformaatiot.html](https://kurssi.matematiikkakilpailut.fi/28_transformaatiot.html)
