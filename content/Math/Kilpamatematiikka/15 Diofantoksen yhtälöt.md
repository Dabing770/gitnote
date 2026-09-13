---
title: "15 Diofantoksen yhtälöt"
source: "https://kurssi.matematiikkakilpailut.fi/15_Diofantoksen_yhtälöt.html"
author: "Olli Järviniemi"
---

# 15  Diofantoksen yhtälöt

Tekijä

Olli Järviniemi

## 15.1 Johdanto

Diofantoksen yhtälöt tarkoittavat yhtälöitä, joille halutaan etsiä (positiiviset) kokonaislukuratkaisut. Tutkitaan esimerkiksi yhtälöä

$$x^2 - y^2 = 123.$$

 On helppo nähdä, että tällä on ratkaisuja reaalilukujen joukossa (esimerkiksi $x = \sqrt{123}$, $y = 0$). On kuitenkin vaikeampaa selvittää, onko olemassa kokonaislukuja $x$ ja $y$, joilla yhtälö toteutuu.

Diofantoksen yhtälöt ovat melko yleisiä kansallisissa kilpailuissa. Yksi tärkeä syy on se, että niissä pääsee käyttämään monenlaisia menetelmiä ja ideoita (näistä lisää alla). Tämän seurauksena ratkaiseminen vaatii luovuutta ja ongelmanratkaisutaitoja, mikä tekee tehtävistä hyviä matematiikkakilpailuihin.

Alla esitetään yleisiä ideoita ja menetelmiä Diofantoksen yhtälöiden ratkaisemiseksi. Tärkeimpiä perusmenetelmiä on kolme: tekijöihinjako, modulotarkastelut ja epäyhtälöt.

## 15.2 Tekijöihinjako

**

**Tehtävä 15.1** Etsi kaikki positiiviset kokonaisluvut $x$ ja $y$, joilla

$$x^2 - y^2 = 123.$$

Avainidea tehtävän ratkaisemiseksi on huomata, että vasen puoli jakautuu kahden neliön erotuksena tekijöihin: $x^2 - y^2 = (x-y)(x+y)$. tutkittava yhtälö voidaan siis kirjoittaa muodossa

$$(x-y)(x+y) = 123.$$

 Tämä tarkoittaa, että joidenkin kahden positiivisen kokonaisluvun tulo on $123$. (Koska $x+y$ on positiivinen, niin myös toisen tekijän $x-y$ tulee olla positiivinen.)

Miten kahden positiivisen kokonaisluvun tulo voi olla $123$? Tätä varten tutkitaan luvun $123$ alkutekijähajotelmaa, joka on

$$123 = 3 \cdot 41.$$

 Täten on kaksi eri tapaa esittää $123$ kahden positiivisen kokonaisluvun tulona, nimittäin $123 = 1 \cdot 123$ ja $123 = 3 \cdot 43$. Huomataan vielä, että $x-y < x+y$, joten saadaan seuraavat tapaukset:

**Tapaus 1.** $x-y = 1$ ja $x+y = 123$. Tämä yhtälöpari osataan ratkaista (yläkoulussa opetetuilla menetelmillä). Saadaan $x = 62$ ja $y = 61$.

**Tapaus 2.** $x-y = 3$ ja $x+y = 41$. Tästä puolestaan saadaan ratkaisu $x = 22, y = 19$.

Yhtälöllä on siis tasan kaksi ratkaisua positiivisten kokonaislukujen joukossa: $(x, y) = (62, 61)$ ja $(x, y) = (22, 19)$.

**

**Kommentti.** Vaikka ratkaisu on melko lyhyt ja tehtävä [15.1](15 Diofantoksen yhtälöt.md#exr-dio1) on helpommasta päästä Diofantoksen yhtälöitä, niin silti tehtävän ratkaisemiseksi tarvittiin useampi eri menetelmä: tekijöihinjako, aritmetiikan peruslause ja yhtälöparin ratkaisu.

Annetussa yhtälössä tekijöihinjako oli melko helppo nähdä. Tehtävästä olisi saanut hieman vaikeamman antamalla yhtälön muodossa $x^2 = 123 + y^2$. Kyseessä on täsmälleen sama yhtälö, mutta tällä kertaa tekijöihinjako on vaikeampi keksiä. Tehtäviä ratkoessa kannattaa siis miettiä, voiko yhtälön kirjoittaa uudelleen kätevämpään muotoon.

## 15.3 Modulotarkastelut

Modulotarkastelujen idea on yksinkertainen: jos kaksi kokonaislukua ovat yhtä suuria, niin ne ovat myös samat modulo $m$ millä tahansa modulolla $m$. Hyödyllisyys perustuu siihen, että yhtälöiden ratkaiseminen modulo $m$ on melko helppoa. Nyt jos esimerkiksi yhtälöllä ei ole ratkaisua modulo $m$ jollain $m$, ei sillä voi olla ollenkaan kokonaislukuratkaisuja.

Seuraava esimerkki selventää tilannetta.

**

**Tehtävä 15.2** Etsi kaikki positiiviset kokonaisluvut $x$ ja $y$, joilla

$$x^2 - 3y^2 = 123.$$

Yhtälö on samannäköinen aiemmin esitetyn esimerkin kanssa, mutta tällä kertaa tekijöihinjakoa ei tunnu löytyvän. Käytämme siis muunlaisia menetelmiä.

Idea: tutkitaan yhtälöä modulo $4$.

Oletetaan, että on olemassa kokonaisluvut $x$ ja $y$, joilla $x^2 - 3y^2 = 123$. Tällöin tietysti pätee myös

$$x^2 - 3y^2 \equiv 123 \pmod{4}.$$

 Oikean puolen lasketaan olevan $3 \pmod{4}$. Entä vasen puoli?

Taulukoimalla neljä mahdollista vaihtoehtoa saadaan selville, mitä arvoja $x^2$ voi saada modulo $4$:

- Jos $x \equiv 0 \pmod{4}$, niin $x^2 \equiv 0^2 \equiv 0 \pmod{4}.$

- Jos $x \equiv 1 \pmod{4}$, niin $x^2 \equiv 1^2 \pmod{4}$.

- Jos $x \equiv 2 \pmod{4}$, niin $x^2 \equiv 2^2 \equiv 0 \pmod{4}$.

- Jos $x \equiv 3 \pmod{4}$, niin $x^2 \equiv 3^2 \equiv 1 \pmod{4}$.

Vastaavalla taulukoinnilla huomataan, että $-3y^2$ saa vain arvoja $0$ ja $1$ modulo $4$.[^1](15 Diofantoksen yhtälöt.md#fn1) Eli luku $x^2 - 3y^2$ on joko $0, 1$ tai $2$ modulo $4$. Erityisesti se ei ole koskaan $3 \pmod{4}$.

^1 Tämä oikeastaan seuraa suoraan yllä tehdystä taulukoinnista ja siitä, että $-3y^2 \equiv y^2 \pmod{4}$.

Tämä on ristiriita. Siis ei ole olemassa kokonaislukuja $x$ ja $y$, joilla $x^2 - 3y^2 = 123$.

**

**Kommentti.** Kaksi tärkeää pointtia modulotarkasteluihin liittyen:

Ensinnäkin kuten huomattiin, usein on varsin helppoa tarkistaa, onko Diofantoksen yhtälöllä ratkaisuja vaikkapa modulo $4$: muuttujilla on vain neljä mahdollista arvoa modulo neljä, ja ne kaikki voidaan käydä läpi.

Toiseksi ratkaisu alkoi sillä, että valittiin moduloksi nimenomaan luku $4$. Kysymys kuuluu: mistä keksitään, mikä modulo valitaan? Alla on lyhyt vastaus.

Esimerkiksi yhtälön $x^2 - 3y^2 = 123$ tapauksessa kannattaa yrittää valita sellainen modulo $m$, että $x^2 - 3y^2$ saa vain vähän eri arvoja modulo $m$. Ratkaisun tapauksessa $m = 4$ polynomi $x^2 - 3y^2$ ei saa arvoa $3 \pmod{4}$, mistä haluttu ristiriita seuraa.

Tässä valossa $m = 3$ olisi myös ollut erinomainen arvaus: tällöin $x^2 - 3y^2 \equiv x^2 \pmod{3}$, ja intuitiivisesti yhden muuttujan polynomi saa vähemmän arvoja kuin kahden muuttujan polynomi. Tässä yhtälössä arvaus ei kuitenkaan toimi, koska yhtälöllä $x^2 - 3y^2 \equiv 123 \pmod{3}$ on ratkaisu: oikea puoli on $0 \pmod{3}$, joten voidaan valita $x \equiv y \equiv 0 \pmod{3}$.

Millä $m$:n arvoilla $x^2 - 3y^2$ (tai jokin muu lauseke) sitten saa vain vähän arvoja modulo $m$? Tämä on vaikea kysymys, jonka vastaaminen vaatii voimakkaampia lukuteorian menetelmiä kuin tähän asti käydyt, eli emme voi käsitellä sitä kunnolla tässä.

Lyhyt vastaus on, että pienet modulot ovat parempia kuin isot. Toisin sanoen jos jokin modulo on toimiakseen, niin yleensä se on pieni tai myös pieni modulo toimii. Konkreettisesti, esimerkiksi modulot $2, 3, 4, 5, 7, 8, 9$ ja $16$ voivat olla hyviä.

Oli miten oli, kannattaa vain kokeilla eri vaihtoehtoja ja miettiä, mikä toimii tähän tiettyyn ongelmaan. On kuitenkin tärkeä muistaa, että modulotarkastelut eivät aina toimi. Jos yhtälöllä esimerkiksi on jokin kokonaislukuratkaisu, niin sillä on tietysti ratkaisu modulo $m$ millä tahansa $m$. Jos siis modulotarkastelut eivät tunnu auttavan, kannattaa miettiä muita menetelmiä.

## 15.4 Epäyhtälöt

**

**Tehtävä 15.3** Etsi kaikki positiiviset kokonaisluvut $x$ ja $y$, joilla $x^2 + y^2 = 123$.

Ratkaisu: Oletetaan, että $x$ ja $y$ ovat yhtälön jokin ratkaisu. Selvästi pätee $x^2 < x^2 + y^2 = 123$. Täten $x < \sqrt{123} < 12$, eli $x$ on jokin luvuista $1, 2, \ldots, 11$. Käymällä vaihtoehdot läpi huomataan, ettei ratkaisuja ole.

Tämä on yksinkertaisuutensa vuoksi melko tylsä esimerkki. Otetaan hieman vaikeampi esimerkki, joka myös perustuu epäyhtälöihin.

**

**Tehtävä 15.4** Määritä kaikki positiiviset kokonaisluvut $m$ ja $n$, joilla $m \mid n+1$ ja $n \mid m+1$.

(Tämä ei ehkä heti näytä Diofantoksen yhtälöltä, mutta tehtävän voi muotoilla yhtälöiden kautta: $n+1 = am$ ja $m+1 = bn$, missä $a, b, m$ ja $n$ ovat positiivisia kokonaislukuja.)

Ratkaisu perustuu seuraavaan yksinkertaiseen huomioon: jos $a$ ja $b$ ovat positiivisia kokonaislukuja, joilla $a$ jakaa $b$:n, niin $a \le b$.

Ideatasolla tehtävän ensimmäinen ehto kertoo, että $m$ on suunnilleen enintään $n$ ja toinen kertoo, että $n$ on suunnilleen enintään $m$. Täten $m$ ja $n$ ovat suunnilleen yhtä suuria, mistä tehtävä on helppo viimeistellä.

Tässä on yksityiskohdat. Ensimmäisestä ehdosta saadaan $m \le n+1$. Toisesta ehdosta saadaan $n \le m+1$, eli $n-1 \le m$. Siis

$$n-1 \le m \le n+1.$$

 Käydään eri tapaukset läpi.

**Tapaus 1.** $m = n-1$. Tällöin toinen ehto $n \mid m+1$ tietysti toteutuu, ja ensimmäisen ehdon $m \mid n+1$ voi kirjoittaa muotoon $n-1 \mid n+1$. Tätä voidaan sieventää: koska $n-1 \mid n-1$, niin nyt $n-1 \mid (n+1) - (n-1) = 2$. Tämä toteutuu vain kun $n = 2$ tai $n = 3$, eli saadaan ratkaisut $(m, n) = (1, 2), (2, 3)$.

**Tapaus 2.** $m = n$. Tällöin $n \mid n+1$, joten $n = 1$ on ainoa ratkaisu.

**Tapaus 3.** $m = n+1$. Tämä on symmetrinen tapauksen 1 kanssa. Saadaan ratkaisut $(m, n) = (2, 1), (3, 2)$.

Siis kaikki ratkaisut ovat $(m, n) = (1, 1), (1, 2), (2, 1), (2, 3), (3, 2)$.

## 15.5 Vielä yksi esimerkki

Seuraava esimerkki on hieman erilainen aikaisempiin yhtälöihin verrattuna: siinä on muuttujia eksponenteissa. Tehtävä on jo selvästi vaikeampi.

**

**Tehtävä 15.5** Etsi kaikki positiiviset kokonaisluvut $x$ ja $y$, joilla

$$3^x - 2^y = 1.$$

Haluamme siis selvittää kaikki kakkosen ja kolmosen potenssit, jotka ovat yhden päässä toisistaan. Ensimmäiset kakkosen potenssit ovat

$$1, 2, 4, 8, 16, 32, 64, \ldots$$

 ja ensimmäiset kolmosen potenssit ovat

$$1, 3, 9, 27, 81, \ldots$$

 Löytyy ainakin kaksi ratkaisua: $3 - 2 = 1$ ja $9 - 8 = 1$. Siis $x = y = 1$ ja $x = 2, y = 3$ ovat ratkaisuja yhtälölle. Muita pieniä ratkaisuja ei näytä löytyvän.

Miten hyökkäämme? Epäyhtälöt eivät tunnu auttavan, koska voi olla olemassa suuria lukuja $x$ ja $y$, joilla $3^x$ ja $2^y$ ovat lähellä toisiaan. Tekijöihinjakoakaan ei tunnu löytyvän ainakaan suoraan: olemme tottuneet jakamaan polynomeja tekijöihin, mutta eksponenttilausekkeisiin työkalut eivät pure.

Yritetään siis modulotarkasteluja. Emme tietenkään voi löytää moduloa $m$ niin, ettei yhtälöllä $3^x - 2^y \equiv 1 \pmod{m}$ olisi yhtäkään ratkaisua: tietysti $x = y = 1$ ja $x = 2, y = 3$ ovat edelleen ratkaisuja. Mutta kenties tätä kautta saadaan jotakin tietoa.

Kokeillaan pieniä moduloita. Kakkonen ei auta: saamme $3^x \equiv 1 \pmod{2}$, mikä tietysti pätee. Kolmosesta saadaan $-2^y \equiv 1 \pmod{3}$, eli $2^y \equiv 2 \pmod{3}$. Nähdään, että tämä pätee täsmälleen silloin, kun $y$ on pariton.

Edistystä: saimme lukua $y$ koskevaa tietoa! Tämä ei tunnu yksinään riittävän, joten yritetään saada lisää informaatiota.

Kokeillaan moduloa $4$. Huomionarvoista on, että $2^y \equiv 0 \pmod{4}$ paitsi jos $y = 1$. Tapaus $y = 1$ on kuitenkin helppo, joten tutkitaan vain tapausta $y \ge 2$. Tällöin yhtälö $3^x - 2^y = 1$ tulkittuna modulo neljä antaa

$$3^x \equiv 1 \pmod{4}.$$

 Tästä saadaan, että $x$ on parillinen.

Voisimme tutkia vielä lisää moduloita ja yrittää saada lisää informaatiota luvuista $x$ ja $y$. Tieto $x$:n parillisuudesta kuitenkin riittää:

Koska $x$ on parillinen, voidaan kirjoittaa $x = 2z$ jollain kokonaisluvulla $z$. Sijoitetaan tämä yhtälöön $3^x - 2^y = 1$ ja siirretään $-2^y$ ja $1$ eri puolille yhtälöä:

$$3^{2z} - 1 = 2^y.$$

 Vasen puoli on kahden neliön erotus!

$$(3^z - 1)(3^z + 1) = 2^y.$$

 Kahden luvun tulo voi olla kakkosen potenssi vain jos kumpikin tulontekijä on kakkosen potenssi. Toisaalta $3^z - 1$ ja $3^z + 1$ ovat kahden päässä toisistaan. Ainoat kahden päässä toisistaan olevat kakkosen potenssit ovat $2$ ja $4$. Täten $z = 1$ eli $x = 2$ ja $y = 3$.

Siis ainoat ratkaisut yhtälölle ovat $x = y = 1$ ja $x = 2, y = 3$.

**

**Kommentti.** Ratkaisu käytti kaikkia tähän mennessä käsiteltyjä ideoita! Modulotarkastelut astuivat kuvaan heti alussa. Tämän jälkeen huomattiin tekijöihinjako. Lopussa todettiin, että kakkosten potenssien etäisyydet ovat yli kaksi muissa kuin pienissä tapauksissa (hyvin helppo epäyhtälö, mutta epäyhtälö kuitenkin).

(Tehtävän voi tosin ratkaista pelkästään kongruensseilla käyttämällä moduloita $16, 9$ ja $5$.)

## 15.6 Tehtäviä

Kukin yllä esitetyistä kolmesta pääideasta esiintyy useammassa alla annetussa tehtävässä. Pidä ne siis mielessä! Mutta kuten aina, muitakin ideoita voi tarvita.

**Tehtävä 1.** Etsi kaikki positiiviset kokonaisluvut $x$ ja $y$, joilla $x^2 = 101 + xy$.

**Tehtävä 2.** Etsi kaikki positiiviset kokonaisluvut $x$ ja $y$, joilla $x^2 = 3y^2 + 5$.

**Tehtävä 3.** Etsi kaikki positiiviset kokonaisluvut $a, b$ ja $c$, joilla $a + b + c = abc$.

**Tehtävä 4.** Etsi kaikki positiiviset kokonaisluvut $x$ ja $n$, joilla $x^2 + 1 = n!$. (Tässä $n! = n \dot (n-1) \cdot \ldots \cdot 2 \cdot 1$ on [Laskennallinen kombinatoriikka](09 Laskennallinen kombinatoriikka.md) -tekstistä tuttu kertoma.)

**Tehtävä 5.** Etsi kaikki positiiviset kokonaisluvut $a, b$ ja $c$, joilla $\frac{1}{a} + \frac{1}{b} + \frac{1}{c}$ on kokonaisluku.

**Tehtävä 6.** Etsi kaikki positiiviset kokonaisluvut $x$ ja $y$, joilla $2^x + x + 1 = 2^y$.

**Tehtävä 7.** Etsi kaikki positiiviset kokonaisluvut $n$ ja $m$, joilla $m^2 = n^2 + 3n$.

**Tehtävä 8.** Osoita, että yhtälöllä $a^2 + b^2 = c^2$ on äärettömän monta ratkaisua positiivisissa kokonaisluvuissa.

---

原文：[https://kurssi.matematiikkakilpailut.fi/15_Diofantoksen_yhtälöt.html](https://kurssi.matematiikkakilpailut.fi/15_Diofantoksen_yhtälöt.html)
