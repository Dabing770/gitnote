---
title: "32 Inversio"
source: "https://kurssi.matematiikkakilpailut.fi/32_inversio.html"
author: "Olli Järviniemi"
---

# 32  Inversio

Tekijä

Olli Järviniemi

## 32.1 Johdanto

Edellisessä geometrian tekstissä ja sen tehtävissä käsiteltiin muutamaa geometrista transformaatiota: peilauksia, skaalauksia, kiertoja ja siirtoja. Yksi tärkeä transformaatio kuitenkin puuttui: **inversio**. Tässä tekstissä esitellään inversio, käydään läpi sen perusominaisuudet ja annetaan pari esimerkkisovellusta kilpailutehtäviin.

Inversio on tähän mennessä käsitellyistä geometrian menetelmistä selvästi vaikein. Tästä syystä tämä teksti on tavallista pidempi. Etene rauhassa haukaten pieni pala kerrallaan.

## 32.2 Inversio

Peilauksessa valitaan suora tai piste, jonka yli peilataan. Skaalauksessa valitaan piste ja skaalauskerroin. Inversiossa puolestaan valitaan ympyrä.

Inversio $O$-keskisen, $r$-säteisen ympyrän suhteen määritellään seuraavasti: piste $P$ kuvataan sellaiseksi pisteeksi $P'$, joka on puolisuoralla $OP$ ja jolla $OP \cdot OP' = r^2$. Alla on muutama piste ja niiden kuvaukset, kun tehdään inversio kuvan ympyrän suhteen.

![Ympyrä, jonka keskipiste on O, sekä sen ulko- ja sisäpuolella pisteitä ja niiden kuvapisteet heittomerkillä merkittyinä. Kukin piste ja sen kuva ovat samalla keskipisteestä O lähtevällä puolisuoralla, jotka on piirretty katkoviivalla. Kaukana O:sta olevat pisteet P ja Q kuvautuvat lähelle O:ta, lähellä oleva piste T kuvautuu kauas, ja ympyrän kehällä oleva piste S pysyy paikallaan.](assets/inversioPisteet.svg)

*
Kuva 32.1: Joidenkin pisteiden kuvaukset inversion jälkeen. Kuvausta merkitään laittamalla pisteen nimen perään heittomerkki.
*

Erityisesti todetaan, että pistettä $O$ lähellä olevat pisteet, kuten $T$, kuvautuvat kauas. Vastaavasti kaukana olevat pisteet, kuten $P$ ja $Q$, kuvautuvat lähelle. Piste $R$ on tältä väliltä ja sen kuvaus $R'$ ei myöskään ole kovin kaukana tai lähellä pistettä $O$. Ympyrällä oleva piste $S$ on juuri sillä etäisyydellä, että sen kuvaus $S'$ on yhtä kaukana pisteestä $O$ kuin piste $S$, eli $S'$ ja $S$ ovat sama piste.

## 32.3 Inversion ominaisuuksia

Alla listataan inversion tärkeimmät ominaisuudet. Näitä on paljon (seitsemän kappaletta). Listan sisältöä avataan todistuksessa kuvien avulla.

**

**Lause 32.1 (Inversion ominaisuuksia)** Inversiolla $O$-keskisen, $r$-säteisen ympyrän suhteen on seuraavat ominaisuudet.

1. Inversion toistaminen kahdesti on sama kuin ei tekisi mitään.

2. Inversioympyrän pisteet pysyvät paikoillaan.

3. Jos suora kulkee pisteen $O$ läpi, niin inversion jälkeen suora on edelleen suora (mutta suoran pisteet ovat vaihtaneet paikkaa suoralla).

4. Jos pisteet $P$ ja $Q$ kuvautuvat pisteiksi $P'$ ja $Q'$, niin $PP'QQ'$ on jännenelikulmio.

5. Jos suora ei kulje pisteen $O$ läpi, niin inversion jälkeen suora on kuvautunut ympyräksi, joka kulkee pisteen $O$ läpi.

6. Jos ympyrä kulkee pisteen $O$ läpi, niin inversion jälkeen ympyrä on kuvautunut suoraksi, joka ei kulje pisteen $O$ läpi.

7. Jos ympyrä ei kulje pisteen $O$ läpi, niin inversion jälkeen ympyrä on kuvautunut ympyräksi, joka ei myöskään kulje pisteen $O$ läpi.

Tiivistäen: suorat ja ympyrät kuvautuvat joko suoriksi tai ympyröiksi riippuen siitä, kulkevatko ne pisteen $O$ kautta vai eivät. Voi auttaa ajatella, että suora on vain ympyrä, jolla on äärettömän suuri säde, jolloin lauseen pääpointti (kohdat (iii), (v), (vi), (vii)) voidaan tiivistää muotoon ”ympyrät kuvautuvat ympyröiksi”.

Otetaan todistus askel kerrallaan.

**Kohta (i).** Valitaan jokin piste $P$ ja tutkitaan, mitä tapahtuu, kun tehdään inversio kahdesti peräkkäin.

![Ympyrä, jonka keskipiste on O, sekä ympyrän ulkopuolinen piste P ja sen kuva P' ympyrän sisällä. Molemmat pisteet ovat samalla O:sta lähtevällä katkoviivalla piirretyllä puolisuoralla.](assets/todistusI.svg)

*Piste ja sen kuva inversion jälkeen. Kuvausta merkitään laittamalla pisteen nimen perään heittomerkki.*

Pisteen $P$ kuva inversion jälkeen on se piste $P'$, jolla $OP \cdot OP' = r^2$. Kun inversio tehdään uudestaan, kuvautuu piste $P'$ sellaiseksi pisteeksi $P''$, jolla $OP' \cdot OP'' = r^2$. Näistä kahdesta yhtälöstä saadaan $OP = OP''$, eli $P$ ja $P''$ ovat samalla etäisyydellä pisteestä $O$. Toisaalta ne ovat molemmat puolisuoralla $OP'$, joten ne ovat sama piste.

**

**Kommentti.** Jos teemme kaksi inversiota eri ympyröiden suhteen, voi lopputulos olla jotain aivan muuta kuin aloitustilanne. Sama juttu pätee esimerkiksi peilauksilla: peilaus saman suoran suhteen kahdesti putkeen on sama kuin ei tekisi mitään, mutta peilaus kahden eri suoran suhteen voi antaa ties mitä. Onneksi tehtävissä ei käytännössä koskaan tarvita inversiota useamman kuin yhden ympyrän suhteen.

**Kohta (ii).** (Vertaa kuvan [32.1](32 Inversio.md#fig-inv) pisteeseen $S$.) Jos $P$ on piste ympyrän kehällä ja $P'$ on pisteen $P$ kuvaus inversion jälkeen, niin pätee $OP = r$ ja $OP \cdot OP' = r^2$. Täten $OP' = r$, mistä seuraa $P = P'$.

**Kohta (iii).**

![Pisteen O kautta kulkeva suora ja O-keskinen ympyrä. Suoralla ovat piste P ympyrän ulkopuolella ja sen kuva P' ympyrän sisällä; inversiossa pisteet vaihtavat paikkaa mutta pysyvät samalla suoralla.](assets/todistusIII.svg)

*Inversio vaihtaa pisteiden $P$ ja $P'$ paikat.*

Inversion määritelmän perusteella jokainen suoran piste $P$ kuvautuu suoralle johonkin pisteeseen $P'$. Kohdan (i) nojalla piste $P'$ kuvautuu inversiossa pisteeksi $P$. Siis pisteet $P$ ja $P'$ vain vaihtavat paikkaa.

**

**Kommentti.** Tilanne on hieman samankaltainen kuin jos inversion sijasta peilaisimme pisteet $O$:n suhteen: pisteet vaihtavat paikkaa, mutta suora näyttää edelleen suoralta.

**Kohta (iv).** Tämä väite alkaa jo olla vaikeampi. Ideana on, että tilanne muistuttaa vahvasti pisteen potenssia. Käytämmekin pisteen potenssia toiseen suuntaan.

![O-keskinen ympyrä sekä kaksi pistettä P ja Q ja niiden kuvat P' ja Q'. Pisteet P, P', Q ja Q' ovat kaikki samalla pistekatkoviivalla piirretyllä ympyrällä eli muodostavat jännenelikulmion. Katkoviivat kulkevat O:sta pisteiden kautta.](assets/todistusPP.svg)

*Kaksi pistettä ja niiden inversiot antavat jännenelikulmion.*

Kolmiot $OPQ'$ ja $OQP'$ ovat yhdenmuotoisia (sks), koska niillä on yhteinen kulma kärjessä $O$ ja

$$\frac{OP}{OQ'} = \frac{\frac{r^2}{OP'}}{\frac{r^2}{OQ}} = \frac{OQ}{OP'}.$$

 Täten $\angle OPQ' = \angle P'QO$, eli pisteet ovat samalla ympyrällä.

**Kohta (v).** Tämäkään väite ei ole itsestäänselvä. Tilanne on esitetty seuraavassa kuvassa.

![O-keskinen ympyrä, jonka kehän sininen suora leikkaa pisteissä A ja B. Suora ei kulje O:n kautta. Suoran kuva inversiossa on pistekatkoviivalla piirretty ympyrä, joka kulkee pisteiden O, A ja B kautta. Suoran kaukainen piste X kuvautuu O:ta lähellä olevaksi pisteeksi X', ja O:ta lähellä oleva piste P kuvautuu kaukaiseksi pisteeksi P'.](assets/todistusIV.svg)

*Inversiossa pisteen $O$ kautta kulkematon suora (kuvassa sinisellä) kuvautuu pisteen $O$ kautta kulkevaksi ympyräksi (kuvassa katkoviivalla).*

Tutkitaan hieman kuvaa ennen todistusta. Huomataan ensinnäkin, että kuvan tapauksessa sininen suora leikkaa $O$-keskisen ympyrän kahdessa pisteessä $A$ ja $B$. Nämä pysyvät inversion seurauksena paikoillaan (kohta (ii)). Siis jos inversion seurauksena suorasta todella tulee pisteen $O$ kautta kulkeva ympyrä, niin kyseinen ympyrä on kolmion $OAB$ ympärysympyrä.

On myös havainnollistavaa miettiä, mitä tapahtuu suoran niille pisteille, jotka ovat todella kaukana pisteestä $O$. Kuvassa yksi tällainen piste on $X$. Tämä piste kuvautuu hyvin lähelle pistettä $O$ (kuvan piste $X'$). Siis sinisen suoran kaukana olevat pisteet kuvautuvat punaisen ympyrän pistettä $O$ lähellä oleviksi pisteiksi. Vastaavasti sinisen suoran $O$:ta lähellä olevat pisteet (kuten kuvan piste $P$) vastaavat punaisen ympyrän kaukana olevia pisteitä (piste $P'$).

Annetaan sitten väitteelle todistus. Todistus pyörii seuraavan kuvan ympärillä.

![O-keskinen ympyrä ja sininen suora, jolta on valittu kolme pistettä P, Q ja R. Näiden kuvat P', Q' ja R' sekä keskipiste O ovat samalla pistekatkoviivalla piirretyllä ympyrällä. Kuvaan on piirretty janat O:sta pisteisiin R, P' ja Q'.](assets/todistusIV3.svg)

*Valitaan siniseltä suoralta kolme pistettä $P, Q$ ja $R$. Osoitetaan, että $O, P', Q'$ ja $R'$ ovat samalla ympyrällä.*

Olkoot $P, Q$ ja $R$ jotkin suoran pisteet, ja olkoot niiden kuvat inversion jälkeen $P', Q'$ ja $R'$. Todistetaan, että $O, P', Q'$ ja $R'$ ovat samalla ympyrällä. Ideana on jahdata kulmia käyttäen kohdan (iv) tulosta. Kulmanjahtaus on helppoa, koska jännenelikulmioita on niin monta.

Kohdan (iv) tulos sanoo nimittäin, että nelikulmiot

$$PP'Q'Q, \quad PP'RR' \quad \text{ja} \quad QQ'RR'$$

ovat jännenelikulmioita. Tämä tieto ja se, että pisteet $P, Q$ ja $R$ ovat samalla suoralla, antavat

$$\angle OQ'P' = 180^{\circ} - \angle P'PQ = \angle RPP' = \angle RR'P' = 180^{\circ} - \angle P'R'O,$$

mikä on haluttu väite.

![Sama kuvio kuin edellä, mutta pisteisiin Q', P ja R' on merkitty viisi numeroitua kulmaa. Osa kulmista on punaisia ja osa sinisiä, ja punaisen ja sinisen kulman summa on 180 astetta. Kulmien avulla seurataan todistuksen kulmanjahtausta.](assets/todistusIV4.svg)

*Todistuksen kulmanjahtaus kulkee kuvaan merkittyjen kulmien kautta. Punaisen ja sinisen kulma summa on $180^{\circ}$.*

**Kohta (vi).** Samanlainen todistus kuin kohdassa (v) toimii. Tämä käy järkeen: jos tiedämme, että suora kuvautuu ympyräksi, niin kohdan (i) nojalla ympyrä kuvautuu suoraksi.

**Kohta (vii).** Viimeinen rutistus. Esimerkki kohdan tilanteesta on esitetty seuraavassa kuvassa.

![O-keskinen ympyrä ja sen sisällä pienempi sininen ympyrä, joka ei kulje O:n kautta. Sinisen ympyrän kuva inversiossa on pistekatkoviivalla piirretty ympyrä, joka sekään ei kulje O:n kautta.](assets/todistusVI.svg)

*Sinisen ympyrän inversio on ympyrä, kuvassa katkoviivalla.*

Todistetaan väite. Todistusta varten valitaan sinisen ympyrän se halkaisija $AB$, jolla $O, A$ ja $B$ ovat samalla suoralla, sekä jokin ympyrän piste $C$. Tavoite on osoittaa, että $C'$ on ympyrällä, jonka halkaisija on $A'B'$.

![O-keskinen ympyrä ja sininen ympyrä, jonka halkaisijan päätepisteet ovat A ja B ja jolta on valittu piste C. Pisteiden kuvat A', B' ja C' ovat kauempana O:sta; katkoviiva yhdistää pisteet B', C' ja A', ja harmaat janat kulkevat O:sta pisteisiin A' ja C'.](assets/todistusVI2.svg)

*Valitaan ympyrältä piste $C$ ja pyritään osoittamaan, että $C'$ on ympyrällä, jonka halkaisija on $A'B'$.*

Käytämme taas kohdan (iv) tulosta jännenelikulmioiden saamiseksi. Tässä kuviossa

$$AA'C'C \quad \text{ja} \quad BB'C'C$$

 ovat jännenelikulmioita. Loppu on kulmanjahtausta: käyttämällä jännenelikulmiota $AA'C'C$ saadaan

$$\angle C'A'B' = 180^{\circ} - \angle ACC' = \angle OCA$$

 ja jännenelikulmiosta $BB'C'C$ saadaan

$$\angle A'B'C' = 180^{\circ} - \angle C'B'B = \angle BCC'.$$

 Enää todetaan, että koska $\angle ACB = 90^{\circ}$, niin kulmien $\angle OCA$ ja $\angle BCC'$ summa on $90$ astetta. Yllä saatujen yhtälöiden nojalla nyt myös kulmien $\angle C'A'B'$ ja $\angle A'B'C'$ summa on $90$ astetta, eli $\angle B'C'A'$ on suora kulma.

Lauseen todistus on valmis!

## 32.4 Esimerkkitehtävä

Esitetään sitten esimerkkitehtävä, jossa inversiota käytetään tositilanteessa.

**

**Tehtävä 32.1** Olkoot $\omega_1$ ja $\omega_2$ ympyröitä, joilla on sama säde ja jotka leikkaavat kahdessa pisteessä $X_1$ ja $X_2$. Olkoon $\omega$ ympyrä, joka on ulkopuolisesti tangentti ympyrälle $\omega_1$ pisteessä $T_1$ ja sisäpuolisesti tangentti ympyrälle $\omega_2$ pisteessä $T_2$. Osoita, että suorien $X_1T_1$ ja $X_2T_2$ leikkauspiste on ympyrällä $\omega$.

![Kaksi samankokoista toisensa leikkaavaa ympyrää omega-1 ja omega-2, joiden leikkauspisteet ovat X1 ja X2. Kolmas ympyrä omega sivuaa ympyrää omega-1 ulkopuolisesti pisteessä T1 ja ympyrää omega-2 sisäpuolisesti pisteessä T2. Katkoviivasuorat X1T1 ja X2T2 kohtaavat ympyrän omega kehällä.](assets/EGMO.svg)

*Paljon ympyröitä ja sivuamispisteitä.*

Ratkaisun rakenne on seuraava: suoritetaan inversio, jonka jälkeen saadaan toisenlainen ongelma, joka osataan ratkaista. (Ratkaisu on kuitenkin pitkä, koska inversion suorittaminen vaatii tekemistä. Lisäksi alussa pohditaan hieman, miksi inversio toimii ja miten inversio kannattaa tehdä.)

Mikä tekee tehtävästä niin otollisen inversiolle? Lyhyt vastaus: kuviossa on paljon ympyröitä.

Pidempi vastaus: Inversion avulla voimme muuttaa ympyröitä suoriksi (lauseen kohta (vi)). Kuviosta tekee erityisen vaikean se, että siinä on ympyröiden sivuamispisteitä. Tilanne on kuitenkin paljon helpompi, jos toinen ympyröistä saadaan inversion avulla muutettua suoraksi. Tällöin tutkittavaksi jää ympyrä ja sen tangentti, mikä on paljon tutumpi kuvio.

Suoritetaan siis inversio. Minkä ympyrän suhteen? Tämä on hieman huono kysymyksen asettelu. Yleensä oleellisinta on miettiä, mikä valitaan ympyrän *keskipisteeksi*. Ympyrän säteellä on harvemmin väliä.

Keskipisteeksi kannattaa valita sellainen piste, jonka kautta kulkee paljon ympyröitä (jotta lauseen kohdan (vi) avulla ne saadaan muutettua suoriksi, jolloin niitä on helpompi käsitellä). Jokaisen pisteistä $X_1, X_2, T_1$ ja $T_2$ kautta kulkee kaksi ympyrää, joten kannattaa valita jokin niistä. Vaihtoehdot on siis saatu rajattua neljään. Lisäksi pisteet $X_1$ ja $X_2$ ovat symmetrisiä toistensa suhteen (ja pisteet $T_1$ ja $T_2$ ovat myös melkein symmetrisiä toisiinsa nähden). Vaihtoehtoja on siis käytännössä vain pari: valitaan joko $X_1$ tai $T_1$. Tässä tutkitaan inversiota, jonka keskipiste on $X_1$.[^1](32 Inversio.md#fn1)

^1 Miksi $X_1$ eikä $T_1$? Tämän voi löytää kokeilemalla (kaksi vaihtoehtoa ei ole niin paljon). Toinen tapa on ottaa huomioon, että ympyröillä $\omega_1$ ja $\omega_2$ on sama säde. Inversio $X_1$ keskipisteenä säilyttää symmetrian näiden ympyröiden välillä, kun taas jos $T_1$ olisi keskipiste, niin tätä tietoa olisi vaikea hyödyntää.

Suoritamme siis inversion, jonka inversioympyrän keskipiste on $X_1$. Säteellä ei ole väliä – valitaan vaikka säde niin, että ympyrä kulkee pisteen $X_2$ kautta. Mietitään sitten, mitä kuvan suorille ja ympyröille tapahtuu.

![Sama ympyröiden kuvio kuin edellä, mutta siihen on lisätty punainen ympyrä, jonka keskipiste on X1 ja joka kulkee pisteen X2 kautta. Tämän punaisen ympyrän suhteen tehdään inversio.](assets/EGMO2.svg)

*Tehdään inversio kuvan punaisen ympyrän suhteen.*

- $X_2$:n kuva $X_2'$ on sama kuin $X_2$.

- $T_1'$ on piste puolisuoralla $X_1T_1$ (jossakin punaisen ympyrän ulkopuolella).

- $T_2'$ on piste puolisuoralla $X_1T_2$ (jossakin punaisen ympyrän ulkopuolella).

- Ympyrä $\omega_1$ kuvautuu suoraksi (lauseen kohta (vi)). Tämä suora kulkee pisteiden $X_2'$ ja $T_1'$ kautta, koska pisteet $X_2$ ja $T_1$ ovat ympyrällä $\omega_1$.

- Ympyrä $\omega_2$ kuvautuu suoraksi (lauseen kohta (vi)). Tämä suora kulkee pisteiden $X_2'$ ja $T_2'$ kautta, koska pisteet $X_2$ ja $T_2$ ovat ympyrällä $\omega_2$.

- Ympyrä $\omega$ kuvautuu ympyräksi (lauseen kohta (vii)). Tämä ympyrä kulkee pisteiden $T_1'$ ja $T_2'$ kautta. Lisäksi se sivuaa niitä suoria, joiksi $\omega_1$ ja $\omega_2$ kuvautuvat, koska $\omega$ sivuaa ympyröitä $\omega_1$ ja $\omega_2$.

Vielä yksi juttu: Tehtävänannossa on mainittu, että ympyröiden $\omega_1$ ja $\omega_2$ säteet ovat samat. Tämä tarkoittaa, että ne ovat symmetrisiä suoran $X_1X_2$ suhteen. Tästä seuraa, että ympyröiden kuvaukset ovat myös symmetrisiä eli että $X_1X_2'$ puolittaa suorien $\omega_1'$ ja $\omega_2'$ välisen kulman.

Yhdistämällä nämä tiedot saadaan seuraava kuva, joka kertoo tilanteen inversion jälkeen.

![Inversion jälkeinen kuvio. Ympyrät omega-1 ja omega-2 ovat kuvautuneet kahdeksi suoraksi omega-1' ja omega-2', jotka leikkaavat pisteessä X2', ja ympyrä omega on kuvautunut näitä suoria sivuavaksi ympyräksi omega'. Suorilla ovat sivuamispisteet T1' ja T2'. Punainen inversioympyrä on yhä näkyvissä hahmottamisen tueksi.](assets/EGMOinv.svg)

*Tilanne inversion jälkeen. Kuvan suorat vastaavat ympyröitä $\omega_1$ ja $\omega_2$ sekä ympyrä vastaa ympyrää $\omega$. Inversioympyrällä (punaisella ympyrällä) ei ole enää mitään virkaa – se vain helpottaa inversion hahmottamista.*

Nyt meillä on siis aivan uusi kuvio ja aivan uusi tehtävä. Ratkaistaan se!

Paitsi vielä pitää miettiä, mikä todistettava väite oikeastaan on. Alkuperäisessä tehtävässä halusimme todistaa, että suorat $X_1T_1$ ja $X_2T_2$ ja ympyrä $\omega$ leikkaavat samassa pisteessä. Inversion jälkeen

- suora $X_1T_1$ vastaa suoraa $X_1T_1'$ (lauseen kohta (iii))

- suora $X_2T_2$ vastaa kolmion $X_1X_2'T_2'$ ympärysympyrää (lauseen kohta (v))

- ympyrä $\omega$ vastaa inversion jälkeisen kuvion ympyrää $\omega'$.

Todistettava väite voidaan siis kirjoittaa seuraavasti: Olkoon $K$ on kuvion ympyrän ja kolmion $X_1X_2'T_2'$ ympärysympyrän leikkauspiste. Osoita, että pisteet $X_1, K$ ja $T_1'$ ovat samalla suoralla.

![Inversion jälkeinen kuvio, jossa on kaksi leikkaavaa ympyrää: ympyrä omega' sekä kolmion X1, X2' ja T2' ympärysympyrä. Ympyröiden toinen leikkauspiste on K. Pisteet X1 ja T1' on yhdistetty pistekatkoviivalla, ja tavoitteena on osoittaa, että X1, K ja T1' ovat samalla suoralla.](assets/EGMOinv2.svg)

*$K$ on kuvan ympyröiden leikkauspiste. Osoita, että $X_1, K$ ja $T_1'$ ovat samalla suoralla.*

Tämä uusi tehtävä ei ole kovin vaikea: se oikeastaan ratkeaa suoraan kulmanjahtauksella. Alla on yksityiskohdat. (Lukija voi yrittää ratkoa tehtävän itse ennen ratkaisun lukemista.)

**Ratkaisu.** Merkitään $\alpha = \angle T_2'X_2'X_1$, jolloin suorien väliset kulmat ovat $2\alpha$ ja $180^{\circ} - 2\alpha$.

Tavoitteena on osoittaa, että

$$\angle T_2'KX_1 = \alpha
 \qquad(32.1)$$

 ja

$$\angle T_1'KT_2' = 180^{\circ} - \alpha.
 \qquad(32.2)$$

 Näistä seuraa, että $T_1'KX_1 = 180^{\circ}$, mikä on todistettava väite.

Väite [32.1](32 Inversio.md#eq-1) seuraa suoraan jännenelikulmiosta $X_1X_2'KT_2'$ kehäkulmalauseella: $\angle T_2'KX_1 = \angle T_2'X_2'X_1 = \alpha$.

Väite [32.2](32 Inversio.md#eq-2) vaatii enemmän työtä. Koska $X_2'T_1'$ ja $X_2'T_2'$ ovat tangentteja ympyrälle, ne ovat yhtä pitkiä ja $X_2'T_1'T_2'$ on tasakylkinen kolmio. Täten

$$\angle T_2'T_1'X_2' = \angle X_2'T_2'T_1' = \alpha.$$

 Nyt käyttämällä kehäkulmalauseen tangenttiversiota saadaan, että kolmion $KT_1'T_2'$ lyhyempää kaarta $T_1'T_2'$ vastaavan kehäkulman suuruus on $\alpha$. Täten pidempää kaarta vastaava kehäkulma on

$$\angle T_1'KT_2' = 180^{\circ} - \alpha,$$

 mikä on haluttu väite.

Ratkaisu on vihdoin valmis!

**

**Kommentti.** Ratkaisu oli pitkä, mutta sen voi tiivistää muutamaan sanaan: ”Inversio pisteen $X_1$ suhteen, sitten kulmanjahtaus.”

Huono puoli on, että inversion tekeminen vaatii keskittymistä ja kärsivällisyyttä. Inversion tekeminen onneksi helpottuu ja nopeutuu kunhan kokemusta on enemmän.

Hyvä puoli on se, että (joissain tilanteissa) inversio muuttaa tehtävän paljon helpommaksi. Tässä esimerkissä alkuperäinen tehtävä on oikeasti aika vaikea. Sen sijaan inversion jälkeinen konfiguraatio oli sellainen, josta väite seurasi kohtuullisen yksinkertaisella kulmanjahtauksella.

## 32.5 Tehtäviä

Loppupään tehtävissä on saatavilla vihje, joka kertoo, minkä ympyrän suhteen inversio kannattaa tehdä.

**Tehtävä 1.** Alla olevassa kuvassa on annettu $O$-keskinen ympyrä (punaisella) sekä muita muotoja. Hahmottele mielessäsi, miltä muotojen inversiot näyttävät ja mihin ne sijoittuvat, kun suoritetaan inversio punaisen ympyrän suhteen.

![Punainen O-keskinen ympyrä sekä sen ympärillä muita muotoja: kaksi pienempää ympyrää, kaksi janaa ja pisteet O ja P. Muodot on annettu, jotta lukija voi hahmotella, miltä niiden inversiot näyttävät.](assets/inversioHahmottelu.svg)

*Tehtävä 1.*

**Tehtävä 2.** Janat $AD, BE$ ja $CF$ ovat (teräväkulmaisen) kolmion $ABC$ korkeusjanat. Tehdään inversio, jonka keskipiste on $A$ ja säde $\sqrt{AD \cdot AH}$. Mihin pisteet $B, C, D, E, F$ ja $H$ kuvautuvat?

![Teräväkulmainen kolmio ABC ja sen kolme korkeusjanaa AD, BE ja CF, jotka leikkaavat toisensa ortokeskuksessa H. Kärjen A ympärille on piirretty inversioympyrä. Kuvaan on merkitty pisteet A, B, C, D, E, F ja H.](assets/ortokeskuskuvio.svg)

*Tehtävä 2.*

**Tehtävä 3.** Ympyrällä on jänne $AB$. Piirretään pienempi ympyrä, joka on tangentti jänteelle $AB$ pisteessä $P$ ja ympyrälle pisteessä $T$. Olkoon $M$ sen kaaren $AB$, joka ei sisällä pistettä $T$, keskipiste. Osoita, että $M, P$ ja $T$ ovat samalla suoralla.

![Ympyrä, jolla on jänne AB, sekä pienempi ympyrä, joka sivuaa jännettä AB pisteessä P ja isompaa ympyrää pisteessä T. Piste M on sen kaaren AB keskipiste, joka ei sisällä pistettä T. Katkoviiva kulkee pisteiden M ja T kautta ja näyttää pisteiden M, P ja T asettuvan samalle suoralle.](assets/circlesegment.svg)

*Tehtävä 3.*

**

**
Vihje: Minkä ympyrän suhteen inversio kannattaa tehdä?
**
Valitse inversioympyräksi ympyrä, jonka keskipiste on $M$ ja joka kulkee pisteiden $A$ ja $B$ kautta.

**Tehtävä 4.** Kaksi ympyrää sivuaa toisiaan sisäpuolisesti pisteessä $T$. Ulomman ympyrän jänne $AB$ sivuaa sisempää ympyrää pisteessä $P$. Osoita, että suora $TP$ puolittaa kulman $\angle BTA$.

![Kaksi ympyrää, jotka sivuavat toisiaan sisäpuolisesti pisteessä T. Ulomman ympyrän jänne AB sivuaa sisempää ympyrää pisteessä P. Kuvaan on piirretty janat TA ja TB sekä katkoviivalla suora TP, jonka väitetään puolittavan kulman ATB.](assets/OOOO.svg)

*Tehtävä 4.*

**

**
Vihje: Minkä ympyrän suhteen inversio kannattaa tehdä?
**
Valitse inversioympyräksi ympyrä, jonka keskipiste on $T$ ja säde mikä tahansa.

**Tehtävä 5.** Olkoon $ABC$ kolmio. Olkoon $D$ kärjestä $A$ piirretyn korkeusjanan kanta ja olkoot $X$ ja $Y$ pisteestä $D$ janoille $AB$ ja $AC$ piirrettyjen korkeusjanojen kantapisteet. Olkoon $Z$ janojen $BY$ ja $CX$ leikkauspiste. Olkoon $\omega_1$ ympyrä, jonka keskipiste on $A$ ja säde $AD$, ja olkoon $\omega_2$ kolmion $XYZ$ ympärysympyrä. Osoita, että $\omega_1$ ja $\omega_2$ sivuavat toisiaan.

![Kolmio ABC, jonka kärjestä A piirretyn korkeusjanan kanta on D. Pisteestä D on piirretty kohtisuorat sivuille AB ja AC, ja niiden kantapisteet ovat X ja Y; suorat BY ja CX leikkaavat pisteessä Z. Kuvassa on lisäksi A-keskinen ympyrä, jonka säde on AD, sekä kolmion XYZ ympärysympyrä, joiden väitetään sivuavan toisiaan. Suorat kulmat on merkitty punaisella.](assets/kisatehtava.svg)

*Tehtävä 5.*

**

**
Vihje: Minkä ympyrän suhteen inversio kannattaa tehdä?
**
Valitse inversioympyräksi ympyrä, jonka keskipiste on $D$ ja säde mikä tahansa.

---

原文：[https://kurssi.matematiikkakilpailut.fi/32_inversio.html](https://kurssi.matematiikkakilpailut.fi/32_inversio.html)
