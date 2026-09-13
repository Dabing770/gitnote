---
title: "03 Aritmetiikan peruslause"
source: "https://kurssi.matematiikkakilpailut.fi/03_aritmetiikan_peruslause.html"
author: "Olli Järviniemi"
---

<a id="title-block-header"></a>

# 3 Aritmetiikan peruslause

Tekijä

Olli Järviniemi

<a id="johdanto"></a>

## 3.1 Johdanto

Lukuteorian perusta on alkuluvut ja yksikäsitteinen alkutekijähajotelma. Tässä tekstissä käsitellään näitä aiheita ja niiden sovelluksia.

<a id="alkuluvut"></a>

## 3.2 Alkuluvut

Alkulukujen käsite on tuttu yläkoulusta:

<a id="def-alkuluku"></a>

**Määritelmä 3.1** Kokonaisluku $p > 1$ on **alkuluku**, jos se on jaollinen vain yhdellä ja itsellään.

Lukua $30$ pienemmät alkuluvut ovat täten $$2, 3, 5, 7, 11, 13, 17, 19, 23, 29.$$

Alkuluvuista voi kysyä monia kiinnostavia kysymyksiä. Ehkäpä luontevin on seuraava: montako niitä on? Tähän vastaa seuraava lause.

<a id="thm-äärettömästi"></a>

**Lause 3.1 (Äärettömästi alkulukuja)** Alkulukuja on äärettömän monta.

Alkulukuja on siis paljon enemmän kuin yllä listatut muutama ensimmäinen!

Lauseen todistukseen palataan tämän tekstin loppupuolella.

<a id="aritmetiikan-peruslause"></a>

## 3.3 Aritmetiikan peruslause

Seuraava tulos on tärkein syy sille, minkä takia alkuluvuista puhutaan niin paljon.

<a id="thm-aritmetiikan-peruslause"></a>

**Lause 3.2 (Aritmetiikan peruslause)** Jokainen positiivinen kokonaisluku voidaan esittää alkulukujen tulona täsmälleen yhdellä tavalla.

Tätä esitystä alkulukujen tulona kutsutaan luvun **alkutekijähajotelmaksi**.

Tässä on muutaman ensimmäisen luvun alkutekijähajotelmat:

- $2 = 2$
- $3 = 3$
- $4 = 2 \cdot 2$
- $5 = 5$
- $6 = 2 \cdot 3$
- $7 = 7$
- $8 = 2 \cdot 2 \cdot 2$
- $9 = 3 \cdot 3$
- $10 = 2 \cdot 5$
- $11 = 11$
- $12 = 2 \cdot 2 \cdot 3$

Ja vielä yhtenä esimerkkinä $90$ voidaan kirjoittaa tulona $2 \cdot 3 \cdot 3 \cdot 5$. Tietysti tulon tekijöiden järjestystä voidaan vaihtaa (esimerkiksi $90 = 5 \cdot 3 \cdot 2 \cdot 3$), mutta tämän ajatellaan olevan sama esitys luvulle $90$.

Aritmetiikan peruslause siis sanoo, että alkuluvut ovat eräänlaisia ”rakennuspalikoita”, joista muut luvut koostuvat. Luvun alkutekijähajotelman tutkiminen on usein hyödyllinen idea lukuteorian ongelmissa, koska tämä kertoo, millaisista palikoista luku rakentuu.

Lausetta ei todisteta vielä, koska todistus on yllättävän vaikea. Todistukseen palataan myöhemmin, kun on saatu enemmän lukuteorian osaamista.

<a id="hyödyllisyys"></a>

## 3.4 Hyödyllisyys

Demonstroidaan aritmetiikan peruslauseen hyödyllisyyttä esimerkkien kautta.

<a id="esimerkki-1-jaollisuus"></a>

### 3.4.1 Esimerkki 1: Jaollisuus

Mietitään seuraavaa jaollisuuteen liittyvää ongelmaa: Mikä on pienin (positiivinen kokonais)luku, joka on jaollinen kullakin luvuista $1, 2, 3$ ja $4$? Tai pienin, joka on jaollinen kullakin luvusta $1, 2, 3, \ldots, 10$?

Ensimmäistä kysymystä varten voidaan käydä läpi pieniä lukuja ja huomata, että $12$ on pienin ehdon täyttävä luku. Jälkimmäisessä kysymyksessä vastaus on kuitenkin niin iso, ettei käsin läpikäynti ole järkevää. Tarvitaan jotain älykkäämpää.

Ideana on miettiä ongelmaa alkutekijähajotelmien kautta. Otetaan luku, joka on jaollinen luvuilla $1, 2, \ldots, 10$. Mitä sen alkutekijähajotelmasta voidaan sanoa?

- Koska luku on jaollinen luvulla $2$, sen alkutekijähajotelmassa on vähintään yksi kakkonen.
- Koska luku on jaollinen luvulla $3$, sen alkutekijähajotelmassa on vähintään yksi kolmonen.
- Koska luku on jaollinen luvulla $4$, sen alkutekijähajotelmassa on vähintään kaksi kakkosta.
- Koska luku on jaollinen luvulla $5$, sen alkutekijähajotelmassa on vähintään yksi vitonen.
- Koska luku on jaollinen luvulla $6$, sen alkutekijähajotelmassa on vähintään yksi kakkonen ja vähintään yksi kolmonen (mutta tämän me tiesimmekin jo).
- Koska luku on jaollinen luvulla $7$, sen alkutekijähajotelmassa on vähintään yksi seiska.
- Koska luku on jaollinen luvulla $8$, sen alkutekijähajotelmassa on vähintään kolme kakkosta.
- Koska luku on jaollinen luvulla $9$, sen alkutekijähajotelmassa on vähintään kaksi kolmosta.
- Koska luku on jaollinen luvulla $10$, sen alkutekijähajotelmassa on vähintään yksi kakkonen ja vähintään yksi vitonen (mutta tämänkin me tiesimme jo).

Kokoamalla saadut tiedot huomataan, että alkutekijähajotelmassa on lukuja $2, 3, 5$ ja $7$ vähintään $3, 2, 1$ ja $1$ kappaletta. Pienin tämän ehdon toteuttava luku on tietysti se luku, jonka alkutekijähajotelmassa ei ole mitään ylimääräistä, eli $$2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5 \cdot 7.$$ Laskemalla hieman saadaan, että tämä luku on $2520$.

<a id="esimerkki-2-tekijät"></a>

### 3.4.2 Esimerkki 2: Tekijät

Kuinka monella luvulla luku $12$ on jaollinen?

On helppo tutkia kaikki luvut yhdestä kahteentoista ja huomata, että luvun $12$ jakavat seuraavat luvut: $$1, 2, 3, 4, 6, 12.$$ Näitä lukuja kutsutaan luvun $12$ **tekijöiksi**. Luvulla $12$ on siis kuusi tekijää.

Laskeminen menee kuitenkin työläämmäksi ja virheen mahdollisuus kasvaa, kun tutkittava luku on suuri. Kuinka monta tekijää on esimerkiksi luvulla $90$ tai $1010$? Taulukointi ei tunnu enää niin hyvältä idealta.

Lisäksi voi miettiä syvällisempää kysymystä: miksi joillakin luvuilla on paljon enemmän tekijöitä kuin toisilla? Esimerkiksi luvulla $12$ on kuusi tekijää, kun taas vaikkapa luvulla $62$ on vain neljä tekijää ($1$, $2$, $31$ ja $62$), vaikka $62$ on paljon suurempi kuin $12$. Eikö suuremmilla luvuilla pitäisi olla enemmän tekijöitä?

Näihin kysymyksiin saa vastauksia tutkimalla lukujen alkutekijähajotelmia. Otetaan esimerkiksi luku $12$. Sen alkutekijähajotelma on $2 \cdot 2 \cdot 3$. Helppo tapa muodostaa luvun $12$ tekijöitä on valita joitakin näistä alkutekijöistä ja kertoa ne keskenään. Huomataankin, että kaikki edellä listatuista tekijöistä saadaan muodostettua tällä tavalla:

- Tekijä $1$: ”ei valita mitään”
- Tekijä $2$: valitaan $2$
- Tekijä $3$: valitaan $3$
- Tekijä $4$: valitaan kaksi kappaletta kakkosia
- Tekijä $6$: valitaan $2$ ja $3$
- Tekijä $12$: valitaan kaksi kakkosta ja kolmonen

Tämä toimii myös yleisesti. Jos luvun alkutekijähajotelma on vaikkapa $5 \cdot 7 \cdot 7 \cdot 11$, ei sen tekijöiden alkutekijähajotelmissa voi olla mitään muita alkulukuja kuin $5, 7$ ja $11$.

Tästä seuraa, että luvun alkutekijähajotelman kautta saadaan laskettua sen tekijöiden määrä. Tutkitaan nyt vaikka lukua $90$. Sen alkutekijähajotelma on $2 \cdot 3 \cdot 3 \cdot 5$. Tekijät saadaan käymällä seuraava prosessi läpi:

1. Valitaan nolla tai yksi kappaletta lukua $2$
2. Valitaan nolla, yksi tai kaksi kappaletta lukua $3$
3. Valitaan nolla tai yksi kappaletta lukua $5$

Esimerkiksi jos ensimmäisessä vaiheessa valitsemme yhden kappaleen, toisessa kaksi ja kolmannessa vaiheessa nolla kappaletta kyseisen vaiheen lukua, saadaan tekijä $2 \cdot 3 \cdot 3 = 18$.

Ensimmäisessä vaiheessa valinta voidaan tehdä $2$ tavalla, toisessa vaiheessa $3$ ja kolmannessa $2$ tavalla. Vaihtoehtoja on siis<a id="fnref1"></a>[^1](#fn1) yhteensä $2 \cdot 3 \cdot 2 = 12$, eli luvulla $90$ on $12$ tekijää.

<a id="fn1"></a>

^1 Tässä käytetään tuloperiaatetta, joka kertoo, että tapojen määrä saadaan tällaisessa tilanteessa laskettua kertolaskulla. Tästä on hieman lisää [Laskennallinen kombinatoriikka](09%20Laskennallinen%20kombinatoriikka.md) -tekstissä.

Palataan vielä kysymykseen ”Eikö suuremmilla luvuilla pitäisi olla enemmän tekijöitä?” Kysymys on oikeilla jäljillä: isoilla luvuilla on *keskimäärin* enemmän tekijöitä kuin pienillä luvuilla. Mutta tietysti poikkeuksia löytyy. Ääriesimerkkinä toimii alkuluvut: millä tahansa alkuluvulla on vain kaksi tekijää.

<a id="esimerkki-3-äärettömästi-alkulukuja"></a>

### 3.4.3 Esimerkki 3: Äärettömästi alkulukuja

Aiemmin väitettiin, että alkulukuja on äärettömästi. Tässä on todistus väitteelle. Todistus on epäsuora: sen sijaan että esimerkiksi keksisimme menetelmän, jolla saa varmasti generoitua äärettömästi alkulukuja, todistamme ettei yksinkertaisesti ole mahdollista, että alkulukuja olisi vain äärellisen monta.

Kuvitellaan, että alkulukuja olisi vain äärellisen monta. Otetaan ne kaikki ja kerrotaan ne keskenään. Lisätään lukuun yksi. Miltä tämän luvun alkutekijähajotelma näyttää? Se ei voi sisältää lukua $2$: ennen ykkösen lisäämistä luku oli jaollinen kahdella, joten enää se ei ole. Vastaavasti alkutekijähajotelmassa ei ole lukuja $3$ tai $5$ tai ylipäätään mitään alkulukua. Tämä ei tietenkään käy, koska jokaisella ykköstä suuremmalla luvulla on vähintään yksi alkutekijä.

<a id="alkutekijähajotelman-laskeminen-käytännössä"></a>

## 3.5 Alkutekijähajotelman laskeminen käytännössä

Miten käytännössä lasketaan jonkin suuren luvun alkutekijähajotelma? Tarkastellaan esimerkiksi lukua $1010$.

Alkutekijähajotelman etsimisen sijasta käytännössä puhutaan usein luvun jakamisesta (alku)tekijöihin. Idea on, että jaamme lukua sen tekijöillä. Tässä tapauksessa huomaamme, että $1010$ on parillinen, joten kirjoitetaan $1010 = 2 \cdot 505$. Jatketaan etsimällä luvun $505$ alkutekijähajotelma. Luku ei ole jaollinen kahdella tai kolmella, mutta viidellä se on: $505 = 5 \cdot 101$.

Luku $101$ ei ole jaollinen kahdella, kolmella eikä viidellä. Laskemalla lisää huomataan, ettei se ole jaollinen myöskään seitsemällä. Alkaa tuntua siltä, että $101$ on alkuluku. Miten tästä voidaan varmistua?

Yksi tapa on käydä läpi kaikki luvut kahdesta sataan ja katsoa, ettei $101$ ole jaollinen millään niistä. Tämä on kuitenkin hyvin työlästä. Yritetään keksiä parempi tapa.

Kuvitellaan, että $101$ ei ole alkuluku, joten sen alkutekijähajotelmassa olisi vähintään kaksi alkulukua. Kuinka suuria ne voisivat olla? Vähintään yhden niistä pitää olla enintään $10$: muutenhan alkutekijöiden tulo olisi vähintään $11 \cdot 11 = 121 > 101$, mikä ei tietenkään sovi.

Siis jotta voimme varmistua siitä, että $101$ on alkuluku, riittää käydä läpi vain ne alkuluvut, jotka ovat enintään $10$. Tämän me teimmekin jo. Koska $101$ ei ole jaollinen millään luvuista $2, 3, 5$ ja $7$, on se alkuluku.

Täten luvun $1010$ alkutekijähajotelma on $$1010 = 2 \cdot 5 \cdot 101.$$

**Kommentti.** Yleisesti jos haluaa todistaa, että $n$ on alkuluku, riittää varmistaa ettei $n$ ole jaollinen millään alkuluvulla, joka on enintään neliöjuuri luvusta $n$. Idea on sama kuin edellä: Jos $n$ ei olisi alkuluku, olisi sillä vähintään kaksi alkutekijää. Vähintään yhden niistä tulee olla enintään $\sqrt{n}$, koska muuten alkutekijöiden tulo olisi yli $\sqrt{n} \cdot \sqrt{n} = n$, mikä ei käy.

<a id="tehtäviä"></a>

## 3.6 Tehtäviä

**Tehtävä 1.**

Luettele kaikki lukua $100$ pienemmät alkuluvut.

**Tehtävä 2.**

Laske lukujen $50$, $91$ ja $2016$ alkutekijähajotelmat. Laske myös näiden lukujen tekijöiden määrät.

**Tehtävä 3.**

Mitkä luvuista $400, 401, 402, \ldots, 410$ ovat alkulukuja?

**Tehtävä 4.**

1. Mikä on suurin luku, joka jakaa molemmat luvuista $120$ ja $216$? (Tätä lukua kutsutaan lukujen $120$ ja $216$ **suurimmaksi yhteiseksi tekijäksi** ja sitä merkitään $\text{syt}(120, 216)$.)

2. Mikä on pienin luku, joka on jaollinen molemmilla luvuista $15$ ja $18$? (Tätä lukua kutsutaan lukujen $15$ ja $18$ **pienimmäksi yhteiseksi jaettavaksi** ja sitä merkitään $\text{pyj}(15, 18)$.)

**Tehtävä 5.** Perustele seuraava väite: jos $n$ on sellainen kokonaisluku, että $12n$ on jaollinen luvulla $35$, niin myös $n$ itse on jaollinen luvulla $35$.

**Tehtävä 6.** Onko olemassa sellaista positiivista kokonaislukua $n$, että $2n$ on jonkin kokonaisluvun neliö (eli toinen potenssi) ja $3n$ on jonkin kokonaisluvun kuutio (eli kolmas potenssi)?

**Tehtävä 7.** Osoita, että jos $n$ on neliöluku, niin luvulla $n$ on pariton määrä tekijöitä. Osoita, että muussa tapauksessa luvulla $n$ on parillinen määrä tekijöitä.

**Tehtävä 8.** Kuinka moneen nollaan luku $1 \cdot 2 \cdot 3 \cdot 4 \cdot \ldots \cdot 24 \cdot 25$ päättyy?

---

原文：[https://kurssi.matematiikkakilpailut.fi/03_aritmetiikan_peruslause.html](https://kurssi.matematiikkakilpailut.fi/03_aritmetiikan_peruslause.html)
