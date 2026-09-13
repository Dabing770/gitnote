---
title: "27 Funktionaaliyhtälöt"
source: "https://kurssi.matematiikkakilpailut.fi/27_funktionaaliyhtälöt.html"
author: "Olli Järviniemi"
---

# 27  Funktionaaliyhtälöt

Tekijä

Olli Järviniemi

## 27.1 Johdanto

Funktionaaliyhtälöt on tehtävätyyppi, jossa ei pidä ratkaista yhtälöstä tuntematonta muuttujaa vaan tuntematon funktio annetun tiedon perusteella. Tässä on esimerkki.

**

**Tehtävä 27.1** Määritä kaikki funktiot $f$, jotka toteuttavat seuraavat ehdot: - $f$ ottaa sisään kokonaislukuja, - $f$:n arvot ovat kokonaislukuja ja - $f(x) + f(x+y) = 2x + f(y)$ kaikilla kokonaisluvuilla $x$ ja $y$.

Ideana tällaisessa tehtävässä on sijoittaa lukujen $x$ ja $y$ paikalle joitakin lukuja ja saada tätä kautta informaatiota funktiosta $f$. Esimerkiksi tässä tehtävässä voitaisiin kokeilla, mitä yhtälö sanoo, kun $x = 0$ ja $y = 0$. Tällöin pätee $f(0) + f(0) = 0 + f(0)$ eli $f(0) = 0$.

Nyt jos tehdään toinen sijoitus, jossa $y = 0$ (ja $x$ on mikä vain kokonaisluku), saadaan

$$f(x) + f(x) = 2x + f(0).$$

 Käyttämällä tietoa $f(0) = 0$ saadaan tästä, että $f(x) = x$ kaikilla kokonaisluvuilla $x$. Huomataan, että tämä funktio todella toteuttaa yhtälön. Se on siis funktionaaliyhtälön uniikki ratkaisu.

Tässä tekstissä käsitellään helpomman pään funktionaaliyhtälöitä sekä kerrotaan yleisiä ideoita, joita funktionaaliyhtälötehtävissä voi hyödyntää.

## 27.2 Pohjustusta

Tässä on aluksi hieman notaatiota. Palautetaan mieleen, että kokonaislukujen joukkoa merkitään merkinnällä $\mathbb{Z}$, rationaalilukujen $\mathbb{Q}$ ja reaalilukujen $\mathbb{R}$. Joskus näkee myös luonnollisten lukujen joukkoa merkittävän $\mathbb{N}$, mutta kannattaa välttää luonnollisista luvuista puhumista: ei ole yksimielisyyttä siitä, onko $0$ luonnollinen luku. Sen sijaan positiivisia kokonaislukuja voi merkitä $\mathbb{Z}_+$. Funktiota, joka ottaa sisään lukuja joukosta $A$ ja jonka arvot ovat joukon $B$ alkioita merkitään $f: A \to B$.

Sitten itse aiheeseen. Tässä on lyhyesti muutamia yleisiä ideoita, joita funktionaaliyhtälöissä käytetään.

Sääntö numero 1: **Haluamme asioiden sieventyvän**, usein hinnalla millä hyvänsä. Alussa esitetyssä esimerkkitehtävässä saatiin lausekkeet $f(x), f(x+y)$ ja $f(y)$ saamaan sama arvo asettamalla $x = 0$ ja $y = 0$. Yhtälö sieveni ja saimme hyödyllistä informaatiota, nimittäin $f(0) = 0$. Seuraavassa sijoituksessa $y = 0$ oli samaa ajatusta: oikean puolen $f(y)$ katoaa ja vasemman puolen termit $f(x)$ ja $f(x+y)$ ovat molemmat yhtä suuria.

Usein hyödyllisiä sijoituksia sieventymisen saamiseen ovat esimerkiksi sijoitukset $x = 0$, $y = 1$, $x = y$, $x = -y$ ja niin edelleen. On kuitenkin hyvin tehtäväkohtaista, millä sijoituksilla juuri kyseisen yhtälön lausekkeet saadaan sieventymään. Esimerkiksi jos yhtälössä esiintyy lauseke $f(x - f(y))$, voi sijoitus $x = f(y)$ olla järkevä.

Tässä on muita neuvoja:

**Ratkaisujoukon keksiminen.** Tehtävissä pyydetään usein löytämään kaikki ratkaisut. Miltei aina helpoin vaihe on keksiä kaikki ratkaisut ja vaikeampi puoli on todistaa, että muita ei ole. Vaikeampi puoli on vielä vaikeampi, jos ei olekaan keksinyt kaikkia ratkaisuja yhtälölle, koska tällöin voi vahingossa yrittää todistaa jotakin, joka ei päde.

**Konkreettisten arvojen selvittäminen.** Usein tekemällä ”pieniä” sijoituksia voi saada selvitettyä, mitä ovat esimerkiksi $f(0)$ ja $f(1)$. Tämä tietysti auttaa. Joskus voidaan käyttää induktiivista päättelyä muidenkin arvojen laskemiseksi.

**Työkalupakki.** Vaikeissa tehtävissä pitää usein tehdä useampia sijoituksia, joiden kautta saadaan erilaista informaatiota funktiosta. Monet sijoitukset antavat informaatiota, joka ei auta tehtävän ratkaisemiseen. Onkin hyödyllistä miettiä, mitkä tiedot ovat hyödyllisiä ja mitkä eivät. Usein **yksinkertaiset tulokset ovat hyviä.** Tieto ”$f(f(x)) = x$ kaikilla $x$” on lähtökohtaisesti hyödyllisempi kuin ”$f(f(x) + 2x) = 3f(x) + x^2$ kaikilla negatiivisilla $x$”.

Usein on myös hyödyllistä miettiä, mitä arvoja funktio saa ja voiko sama luku esiintyä useampaan kertaan funktion arvona.[^1](27 Funktionaaliyhtälöt.md#fn1)

^1 Funktiota sanotaan **injektioksi**, jos ehdosta $f(a) = f(b)$ seuraa $a = b$ eli jos $f$ ei saa samaa arvoa useampaan kertaan. Funktiota $f: A \to B$ sanotaan **surjektioksi**, jos kaikilla $b \in B$ on olemassa vähintään yksi $a \in A$, jolla $f(a) = b$ eli jos $f$ saa jokaisen arvon vähintään kerran.

## 27.3 Esimerkkitehtäviä

Kuva kertoo enemmän kuin tuhat sanaa ja esimerkki kertoo enemmän kuin tuhat yleistä ohjetta. Alla käydään muutama erilainen tehtävä läpi.

**

**Tehtävä 27.2** Etsi kaikki funktiot $f: \mathbb{Z}_+ \to \mathbb{Z}_+$, joilla

$$f(x)^2 - f(y)^2 = x^2 - y^2$$

 kaikilla $x, y \in \mathbb{Z}_+$.

Tehdään pieniä sijoituksia. Sijoitus $x = 1, y = 1$ antaa $0 = 0$, eli se ei auta. Sijoituksella $x = 2, y = 1$ saadaan

$$f(2)^2 - f(1)^2 = 3.$$

 Siis kahden positiivisen kokonaisluvun neliöden erotus on $3$. Tämä onnistuu vain, jos neliöt ovat $2^2 = 4$ ja $1^2 = 1$. Täten $f(1) = 1$ ja $f(2) = 2$.

On (ainakin) kaksi tapaa miten tästä voi jatkaa. Yksi tapa on tehdä sijoitus $x = 3, y = 2$, todeta että $f(3) = 3$ ja jatkaa induktiivisesti.

Tässä on toinen, suoraviivaisempi tapa. Tehdään sijoitus $y = 1$. Saadaan

$$f(x)^2 - 1 = x^2 - 1$$

 eli

$$f(x)^2 = x^2$$

 eli

$$f(x) = x.$$

 Siis ainoa potentiaalinen ratkaisu on $f(x) = x$. Tämä myös selvästi toteuttaa annetun yhtälön.

Yhtälöllä on täten täsmälleen yksi ratkaisu $f$: se $f$, jolla $f(x) = x$ kaikilla $x \in \mathbb{Z}_+$.

Seuraava tehtävä on klassikko.

**

**Tehtävä 27.3** Määritä kaikki funktiot $f: \mathbb{Q} \to \mathbb{Q}$, joilla

$$f(x + y) = f(x) + f(y)$$

 kaikilla $x, y \in \mathbb{Q}$.

Huomataan, että ratkaisut muotoa $f(x) = kx$ toteuttavat yhtälön. Käy niin, että ne ovat ainoat.

Sijoitus $x = 0, y = 0$ antaa $f(0) = f(0) + f(0)$, eli $f(0) = 0$. Huomataan kuitenkin, että esimerkiksi luvun $f(1)$ arvoa ei pystytä suoraan selvittämään, koska se vaihtelee eri ratkaisujen välillä: jos $f(x) = x$, niin $f(1) = 1$, ja jos $f(x) = 7x$, niin $f(1) = 7$.

Tutkitaan aluksi yksinkertaisuuden vuoksi tapausta $f(1) = 1$. Nyt

$$f(2) = f(1 + 1) = f(1) + f(1) = 2,$$

$$f(3) = f(2 + 1) = f(2) + f(1) = 3,$$

$$f(4) = f(3 + 1) = f(3) + f(1) = 4$$

 ja niin edelleen. Induktiolla nähdään, että $f(n) = n$ kaikilla positiivisilla kokonaisluvuilla $n$.

Negatiivisiin kokonaislukuihin päästään myös käsiksi. Sijoitus $x = n, y = -n$ antaa

$$f(n + (-n)) = f(n) + f(-n),$$

 ja koska $f(0) = 0$ ja $f(n) = n$, saadaan tästä $f(-n) = -n$. Siis $f(m) = m$ kaikilla kokonaisluvuilla $m$.

Miten päästään käsiksi epäkokonaislukuihin? Yksinkertaisin esimerkkitapaus on luvun $f(1/2)$ selvittäminen. Tämä onnistuu seuraavasti:

$$f(1) = f(1/2 + 1/2) = f(1/2) + f(1/2).$$

 Koska $f(1) = 1$, seuraa tästä $f(1/2) = 1/2$.

Vastaavaan tapaan onnistuu arvon laskeminen vaikka pisteessä $1/3$ toteamalla, että

$$\begin{multline*}
f(1) = f(1/3 + 1/3 + 1/3) = f(1/3) + f(1/3 + 1/3) \\ = f(1/3) + f(1/3) + f(1/3),
\end{multline*}$$

 eli $3f(1/3) = f(1)$. Yleisesti nähdään, että arvo pisteessä $p/q$, missä $q$ on positiivinen kokonaisluku, saadaan hyödyntämällä monta kertaa yhtälöä $f(x+y) = f(x) + f(y)$ seuraavasti:

$$\begin{align*}
f(p) &=
f(p/q + p/q + p/q + \ldots + p/q) \\ &=
f(p/q) + f(p/q + p/q + \ldots + p/q) \\ &=
f(p/q) + f(p/q) + f(p/q + \ldots + p/q) \\
&\phantom{=}\vdots \\
&= q \cdot f(p/q).
\end{align*}$$

 Koska $f(p) = p$ kaikilla kokonaisluvuilla $p$, pätee nyt

$$f(p/q) = p/q.$$

 Tiedämme siis funktion $f$ arvon kaikissa rationaalilukupisteissä, joten tapaus $f(1) = 1$ on käsitelty.

Entä yleinen tapaus? Ei ole kovin vaikea nähdä, että tämä hoituu samaan tapaan kuin tapaus $f(1) = 1$. Voi oikeastaan huomata, että jos funktio $f(x)$ on sellainen, jolla

$$f(x+y) = f(x) + f(y),$$

 ja jos funktio $g(x)$ määritellään olemaan $g(x) = k \cdot f(x)$ jollain vakiolla $k$, niin myös funktiolla $h$ pätee

$$g(x+y) = g(x) + g(y).$$

 Ratkaisuja voi siis kertoa jollakin vakiolla. Täten jos $f(x)$ on sellainen ratkaisu yhtälölle, jolla vaikka $f(1) = 3$, ja määritellään $g(x) = 1/3 \cdot f(x)$, niin pätee $g(1) = 1$ ja $g(x+y) = g(x) + g(y)$. Edellisen päättelyn nojalla $g(x) = x$ ja täten $f(x) = 3x$.[^2](27 Funktionaaliyhtälöt.md#fn2)

^2 Tarkkaan ottaen tapauksessa $f(1) = 0$ esitettyä temppua ei voi käyttää. Ei ole kuitenkaan vaikeaa muokata tapauksen $f(1) = 1$ todistusta toimimaan tapaukseen $f(1) = 0$.

Täten huomataan, että ainoat ratkaisut ovat muotoa $f(x) = kx$.

**

**Kommentti.** Tehtävän yhtälöä kutsutaan Cauchyn funktionaaliyhtälöksi. Se on ehkäpä tärkein funktionaaliyhtälö, mitä kilpailutehtävissä esiintyy. Joissakin tehtävissä nimittäin voi välivaiheiden kautta saada selville, että tehtävän funktio toteuttaa yhtälön $f(x+y) = f(x) + f(y)$. Tällöin voidaan päätellä, että $f(x) = kx$.[^3](27 Funktionaaliyhtälöt.md#fn3)

^3 Varoituksen sana: Jos $f$ onkin määritelty reaaliluvuilla rationaalilukujen sijasta, on Cauchyn yhtälöllä muitakin ratkaisuja kuin $f(x) = kx$. Tällöin tarvitaan muutakin tietoa, jotta voidaan päätellä, että $f(x) = kx$.

**

**Tehtävä 27.4** Määritä kaikki funktiot $f: \mathbb{Z} \to \mathbb{Z}$, joilla

$$f(m - n + f(n)) = f(m) + f(n)$$

 kaikilla $m, n \in \mathbb{Z}$.

Mitä ratkaisuja yhtälöllä on? Selvästi $f(x) = 0$ kaikilla $x$ on yksi ratkaisu. Huomataan myös, että $f(x) = 2x$ kaikilla $x$ on toinen ratkaisu. (Yleisesti voi olla hyvä idea tutkia, mitkä lineaarisista funktioista $f(x) = ax + b$ kelpaavat, jottei helppoja ratkaisuja jää huomaamatta.) Osa tehtävän vaikeudesta tulee siitä, että yhtälöllä on kaksi eri ratkaisua, jotka pitää jotenkin saada ”eroteltua” toisistaan.

Tehdään yksinkertaisia sijoituksia. Sijoitus $m = n = 0$ antaa $f(f(0)) = 2f(0)$. Sijoitus $n = 0$ antaa

$$f(m + f(0)) = f(m) + f(0).$$

 Sijoittamalla tähän $m = -f(0)$ saadaan asioita sieventymään: saadaan $f(0) = f(-f(0)) + f(0)$ eli

$$f(-f(0)) = 0.$$

 On siis olemassa luku $a$, jolla $f(a) = 0$. Tämä on hyvä tieto.

Sijoittamalla yhtälöön $m = n = a$ saadaankin nyt $f(a - a + 0) = 0 + 0$ eli $f(0) = 0$. Siis $f(x)$ saa arvon $0$ (ainakin) pisteessä $x = 0$.

Yritetään sitten muita sijoituksia. Koetetaan tehdä sellainen sijoitus, että saadaan asioita kumoutumaan. Yksi tapa on yrittää valita $m$ ja $n$ niin, että vasemman puolen $f(m - n + f(n))$ on sama kuin oikean puolen $f(m)$, mutta tämä onnistuu vain jos $f(n) = n$. Toinen tapa on yrittää valita $m$ ja $n$ niin, että vasemman puolen $f(m - n + f(n))$ on sama kuin oikean puolen $f(n)$. Tämä onnistuu: tehdään sijoitus

$$m = 2n - f(n).$$

 Tästä seuraa

$$f(2n - f(n)) = 0.$$

Mitä tämä kertoo? Tämä kertoo, että $f(n) = 2n$ kaikilla $n$ tai $f$:llä on muitakin nollakohtia kuin $0$. Ensimmäisessä tapauksessa olemme tyytyväisiä: olemme saaneet ratkaistua, mikä $f$ on. Tutkitaan siis toista tapausta.

Olemme siis löytäneet luvun $a \neq 0$, jolla $f(a) = 0$. Tätä on hyvä käyttää sijoituksissa. Sijoitetaan $n = a$. Saadaan

$$f(m - a) = f(m).$$

 Tämä tarkoittaa, että $f$ on **jaksollinen** eli että $f$:n arvot toistuvat aina tietyn ajan välein. Tämä on hyvin vahva tieto!

Alamme olla maalisuoralla. Enää pitää todistaa, että jos $f$ on jaksollinen, niin sen tulee olla nollafunktio. Tämä ei ole kuitenkaan aivan helppoa: yksinkertaiset sijoitukset eivät tunnu auttavan.

Toimiva idea on miettiä, mitä arvoja $f$ saa.

Koska $f$:n arvot toistuvat, saa se vain äärellisen monta arvoa. Otetaan suurin niistä: sanotaan, että $f$ saa suurimman arvonsa $y$ (muun muassa) pisteessä $x$. Nyt tekemällä sijoituksen $m = x, n = x$ saadaan

$$f(x - x + f(x)) = f(x) + f(x)$$

 eli

$$f(y) = 2y.$$

 Siis $f$ saa myös arvon $2y$. Mutta koska $y$ oli suurin arvo, jonka $f$ saa, niin tulee päteä $2y \le y$, eli $y \le 0$. Täten $f$ ei saa positiivisia arvoja.

Vastaavasti jos $z$ on pienin arvo, jonka $f$ saa, niin valitsemalla $m$:n ja $n$:n niin, että $f(m) = f(n) = z$ saadaan, että $f$ saa myös arvon $2z$. Tästä seuraa, että $2z \ge z$, eli $z \ge 0$. Täten $f$ ei saa negatiivisia arvoja.

Täten ainoa arvo, jonka $f$ saa, on nolla. Siis $f$ on nollafunktio.

**

**Kommentti.** Tehtävää voi lähestyä myös injektiivisyystarkastelulla. (Funktiota kutsutaan injektiiviseksi, jos ehdosta $f(x) = f(y)$ seuraa $x = y$ eli jos $f$ ei saa samaa arvoa useampaan kertaan. Injektiivisyys on usein hyödyllinen tulos.)

Jos tehtävän funktio on injektio, niin sijoittamalla $m = 0$ ja käyttämällä tietoa $f(0) = 0$ saadaan $f(-n + f(n)) = f(n)$ eli injektiivisyydellä $-n + f(n) = n$, eli $f(n) = 2n$.

Jos tehtävän funktio ei ole injektio, eli $f(a) = f(b) = y$ joillain $a \neq b$, niin sijoittamalla $n = a$ saadaan $f(m - a + y) = f(m) + y$ ja sijoittamalla $n = b$ saadaan $f(m - b + y) = f(m) + y$. Siis $f(m - a + y) = f(m - b + y)$. Täten $f$:n arvot toistuvat $a-b$ luvun välein. Tästä ratkaisun voi viimeistellä kuten yllä.

## 27.4 Tehtäviä

**Tehtävä 1.** Määritä kaikki funktiot $f: \mathbb{R} \to \mathbb{R}$, joilla

$$f(x) - f(y) = x-y$$

 kaikilla $x, y \in \mathbb{R}$.

**Tehtävä 2.** Määritä kaikki funktiot $f: \mathbb{Z}_+ \to \mathbb{Z}_+$, joilla

$$n + f(m) \mid f(n) + m$$

 kaikilla $n, m \in \mathbb{Z}_+$.

**Tehtävä 3.** Määritä kaikki funktiot $f: \mathbb{R} \to \mathbb{R}$, joilla

$$f(x) + 2f(-x) = 3x^2$$

 kaikilla $x \in \mathbb{R}$.

**Tehtävä 4.** Määritä kaikki funktiot $f: \mathbb{Z}_+ \to \mathbb{Z}_+$, joilla pätee $f(n) < f(n+1)$ ja $f(mn) = f(m)f(n)$ kaikilla $m, n \in \mathbb{Z}_+$.

**Tehtävä 5.** Määritä kaikki funktiot $f: \mathbb{Z} \to \mathbb{Z}$, joilla

$$f(n + f(m)) = f(n) + m$$

 kaikilla $n, m \in \mathbb{Z}$.

**Tehtävä 6.** Määritä kaikki funktiot $f: \mathbb{R} \to \mathbb{R}$, joilla

$$f(xf(y) + x) = xy + f(x)$$

 kaikilla $x, y \in \mathbb{R}$.

**Tehtävä 7.** Määritä kaikki funktiot $f: \mathbb{R} \to \mathbb{R}$, joilla

$$f(x^2 + f(y)) = xf(x) + y$$

 kaikilla $x, y \in \mathbb{R}$.

---

原文：[https://kurssi.matematiikkakilpailut.fi/27_funktionaaliyhtälöt.html](https://kurssi.matematiikkakilpailut.fi/27_funktionaaliyhtälöt.html)
