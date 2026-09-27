# Luku 6 — Röntgensäteily: vastaukset ja ratkaisut

> Tehtävät: [[Luku 6 - Tehtävät]]
> Lähde: [[6 Röntgensäteily]]

Ratkaisuissa käytetään vakioita $hc = 1240\ \mathrm{eV\,nm}$, $e = 1{,}602\cdot10^{-19}\ \mathrm{C}$ ja $h = 6{,}626\cdot10^{-34}\ \mathrm{J\,s}$.

---

## 1. Röntgenputken raja-aallonpituus

**a)** Sähkökentän tekemä työ = elektronin liike-energia: $E_k = eU$.

$$E_k = 1{,}602\cdot10^{-19}\ \mathrm{C} \cdot 35{,}0\cdot10^{3}\ \mathrm{V} = 5{,}61\cdot10^{-15}\ \mathrm{J} = 35{,}0\ \mathrm{keV}$$

Minimiaallonpituus energiaperiaatteesta $\dfrac{hc}{\lambda_{min}} = eU$:

$$\lambda_{min} = \frac{hc}{eU} = \frac{1240\ \mathrm{eV\,nm}}{35{,}0\cdot10^{3}\ \mathrm{eV}} \approx 3{,}54\cdot10^{-2}\ \mathrm{nm} = 35{,}4\ \mathrm{pm}$$

（关键：$hc$ 用 eV·nm，$eU$ 用 eV，单位自动配套。）

**b)** $\lambda_{min} = \dfrac{1240}{50{,}0\cdot10^{3}} \approx 2{,}48\cdot10^{-2}\ \mathrm{nm} = 24{,}8\ \mathrm{pm}$

Spektri muuttuu:
- **Jatkuva osa:** $\lambda_{min}$ siirtyy kohti lyhyempiä aallonpituuksia (koska $E_k$ kasvaa) ja koko jatkuvan osan intensiteetti kasvaa (suurempi virta energisempiä elektroneja).
- **Piikit:** pysyvät **täsmälleen samoilla aallonpituuksilla**, koska ne riippuvat vain anodimateriaalin energiatasoista. Niiden intensiteetti kasvaa, koska useampi elektroni pystyy ionisoimaan anodin atomin.

**c)** Pienin mahdollinen aallonpituus on 24,8 pm, joten **0,020 nm = 20 pm ei ole mahdollinen** 50,0 kV:n putkella (fotonin energia olisi suurempi kuin elektronin liike-energia).

Tarvittava jännite:

$$U = \frac{hc}{e\lambda_{min}} = \frac{1240\ \mathrm{eV\,nm}}{0{,}020\ \mathrm{nm}} = 6{,}2\cdot10^{4}\ \mathrm{V} = 62\ \mathrm{kV}$$

---

## 2. Anodimateriaalin tunnistus ja ominaissäteilyn kynnys

**a)** $E = \dfrac{hc}{\lambda} = \dfrac{1240\ \mathrm{eV\,nm}}{0{,}154\ \mathrm{nm}} \approx 8{,}05\cdot10^{3}\ \mathrm{eV} = 8{,}05\ \mathrm{keV}$

Taulukon mukaan 8,04 keV vastaa **kuparia**. (Piikki on siis Cu Kα.)

**b)** $U = \dfrac{hc}{e\lambda_{min}} = \dfrac{1240\ \mathrm{eV\,nm}}{0{,}0413\ \mathrm{nm}} \approx 3{,}00\cdot10^{4}\ \mathrm{V} = 30{,}0\ \mathrm{kV}$

**c)** Ominaissäteily edellyttää, että kiihdytetty elektroni **ionisoi** anodin atomin K-kuoren. Kuparilla siihen tarvitaan 8,98 keV, mutta 8,0 kV antaa elektronille vain 8,0 keV → K-kuoren aukkoja ei synny → **Kα-piikkiä ei havaita** (vain jatkuva jarrutussäteily).

Pienin jännite on siis

$$U_{min} = 8{,}98\ \mathrm{kV}$$

Tarkistus: tällä jännitteellä $\lambda_{min} = \dfrac{1240}{8{,}98\cdot10^{3}} \approx 0{,}138\ \mathrm{nm}$. Koska Kα:n aallonpituus 0,154 nm **>** $\lambda_{min}$, Kα-fotoni on energialtaan pienempi kuin elektronin liike-energia → se voi hyvin syntyä. (Huomaa, ettei kynnysjännite ole Kα-fotonin energia jaettuna $e$:llä, vaan K-kuoren **ionisaatioenergia** jaettuna $e$:llä. 离子化所需能量大于 Kα 光子能量。)

---

## 3. Braggin laki ja kidetutkimus

**a)** Braggin laki $2d\sin\theta = k\lambda$:

$$\sin\theta = \frac{k\lambda}{2d} = \frac{k\cdot 0{,}154\ \mathrm{nm}}{2\cdot 0{,}282\ \mathrm{nm}} = 0{,}2730\,k$$

| k | $\sin\theta$ | $\theta$ |
| --- | --- | --- |
| 1 | 0,2730 | 15,9° |
| 2 | 0,5461 | 33,1° |
| 3 | 0,8191 | 55,0° |
| 4 | 1,092 | ei ratkaisua ($\sin\theta \le 1$) |

→ Maksimit suunnissa **15,9°, 33,1° ja 55,0°** atomitasoon nähden; kertaluvuille $k \ge 4$ ei saada maksimia.

**b)** $k = 1$, joten

$$d = \frac{\lambda}{2\sin\theta} = \frac{0{,}154\ \mathrm{nm}}{2\cdot\sin 21{,}5^\circ} = \frac{0{,}154\ \mathrm{nm}}{2\cdot 0{,}3665} \approx 0{,}210\ \mathrm{nm} = 210\ \mathrm{pm}$$

**c)** $\sin\theta = \dfrac{k\cdot 0{,}100}{0{,}564} = 0{,}1773\,k$, ja ehto $\sin\theta \le 1$ antaa $k \le 5{,}64$ → **5 maksimia**:

| k | $\sin\theta$ | $\theta$ |
| --- | --- | --- |
| 1 | 0,1773 | 10,2° |
| 2 | 0,3546 | 20,8° |
| 3 | 0,5319 | 32,1° |
| 4 | 0,7092 | 45,2° |
| 5 | 0,8865 | 62,4° |

Lyhyempi aallonpituus → useampia kertalukuja mahtuu ehtoon $\sin\theta \le 1$ (samalla kulmaerottelu paranee, mikä on diffraktion etu).

---

## 4. Hiukkassuihku ja de Broglien aallonpituus

**a)** de Broglien aallonpituus $\lambda = \dfrac{h}{p}$:

$$p = \frac{h}{\lambda} = \frac{6{,}626\cdot10^{-34}\ \mathrm{J\,s}}{0{,}150\cdot10^{-9}\ \mathrm{m}} \approx 4{,}42\cdot10^{-24}\ \mathrm{kg\,m/s}$$

$$v = \frac{p}{m_n} = \frac{4{,}42\cdot10^{-24}}{1{,}675\cdot10^{-27}} \approx 2{,}64\cdot10^{3}\ \mathrm{m/s} \approx 2{,}6\ \mathrm{km/s}$$

$$E_k = \frac{p^2}{2m_n} = \frac{(4{,}42\cdot10^{-24})^2}{2\cdot1{,}675\cdot10^{-27}} \approx 5{,}8\cdot10^{-21}\ \mathrm{J} \approx 3{,}6\cdot10^{-2}\ \mathrm{eV}$$

(Huomaa: terminen neutroni, jonka liike-energia on kymmeniä millielektronivoltteja — siksi "termiset neutronit" sopivat kidetutkimukseen.)

**b)** $\sin\theta = \dfrac{k\lambda}{2d} = \dfrac{k\cdot0{,}150}{0{,}504} = 0{,}2976\,k$

| k | $\sin\theta$ | $\theta$ |
| --- | --- | --- |
| 1 | 0,2976 | 17,3° |
| 2 | 0,5952 | 36,5° |
| 3 | 0,8929 | 63,2° |
| 4 | 1,190 | ei ratkaisua |

→ **3 maksimia**: 17,3°, 36,5° ja 63,2°.

**c)** Braggin ehto toteutuu tietyllä kulmalla vain, jos $\lambda$ (siis nopeus) on juuri sopiva: $\lambda = \dfrac{2d\sin\theta}{k}$ ja edelleen $v = \dfrac{h}{m\lambda} = \dfrac{hk}{2dm\sin\theta}$. Kaksinkertainen nopeus tarkoittaa puolikasta aallonpituutta ($\lambda = 0{,}075$ nm) → $\sin\theta = 0{,}2976k \cdot \tfrac12 = 0{,}1488k$: maksimit syntyisivät eri kulmissa (8,6°; 17,3°; 26,4°; …). Kiinteällä kulma-asetelmalla (esim. 17,3°) nopea neutroni ei siis toteuta ehtoa $k\lambda = 2d\sin\theta$ kokonaisluvulla $k$ — kide **valikoi** tietyt nopeudet. （这是中子单色器/速度选择器的原理。）

---

## 5. Teho, hyötysuhde ja jäähdytys

**a)** $P = UI = 60{,}0\cdot10^{3}\ \mathrm{V} \cdot 20{,}0\cdot10^{-3}\ \mathrm{A} = 1{,}20\cdot10^{3}\ \mathrm{W} = 1{,}20\ \mathrm{kW}$

Röntgenteho: $0{,}01\cdot1{,}20\ \mathrm{kW} \approx 12\ \mathrm{W}$

**b)** Lämpöteho $P_{\text{lämpö}} = 1{,}20\ \mathrm{kW} - 12\ \mathrm{W} \approx 1{,}19\ \mathrm{kW} = 1188\ \mathrm{W}$

$$P = \frac{m}{t}c_{\text{vesi}}\Delta T \quad\Rightarrow\quad \frac{m}{t} = \frac{P}{c_{\text{vesi}}\Delta T} = \frac{1188\ \mathrm{W}}{4190\ \mathrm{J/(kg\,K)}\cdot15{,}0\ \mathrm{K}} \approx 1{,}9\cdot10^{-2}\ \mathrm{kg/s}$$

→ jäähdytysvettä noin **19 g/s** (noin 1,1 litraa minuutissa).

**c)** $\lambda_{min} = \dfrac{1240\ \mathrm{eV\,nm}}{60{,}0\cdot10^{3}\ \mathrm{eV}} \approx 2{,}07\cdot10^{-2}\ \mathrm{nm} = 20{,}7\ \mathrm{pm}$

Fotonin keskimääräinen energia $E = 20\ \mathrm{keV} = 3{,}20\cdot10^{-15}\ \mathrm{J}$:

$$N = \frac{P_{\text{röntgen}}}{E} = \frac{12\ \mathrm{W}}{3{,}20\cdot10^{-15}\ \mathrm{J}} \approx 3{,}7\cdot10^{15}\ \mathrm{s^{-1}}$$

→ noin **3,7 biljoonaa röntgenfotonia sekunnissa**.

**d)** Koska 99 % tehosta muuttuu lämmöksi, anodi kuumenisi ilman jäähdytystä sulamispisteeseen sekunneissa (tässä yli 1 kW yhteen pieneen pisteeseen). Ratkaisuja: **vesikierto** anodin sisällä ja **pyörivä anodi**, joka jakaa lämmön suurelle pinnalle. Lisäksi käytetään korkean sulamispisteen metalleja (W) ja fokusoivaa elektronisuihkua — 焦点越小图像越清晰，但热负荷越集中，这两者互相制约。

---

## 6. XRF-analyysi ja kideanalysaattori

**a)** Taulukon perusteella: 1,49 keV = **alumiini**, 6,40 keV = **rauta**, 8,04 keV = **kupari**.

**b)** $\lambda = \dfrac{hc}{E}$:
- Al: $\lambda = \dfrac{1240}{1490} \approx 0{,}832\ \mathrm{nm} = 832\ \mathrm{pm}$
- Fe: $\lambda = \dfrac{1240}{6400} \approx 0{,}194\ \mathrm{nm} = 194\ \mathrm{pm}$
- Cu: $\lambda = \dfrac{1240}{8040} \approx 0{,}154\ \mathrm{nm} = 154\ \mathrm{pm}$

**c)** $\sin\theta = \dfrac{k\lambda}{2d} = \dfrac{\lambda}{0{,}402\ \mathrm{nm}}$, kun $k = 1$:
- Fe: $\sin\theta = \dfrac{0{,}194}{0{,}402} = 0{,}482 \Rightarrow \theta \approx 28{,}8^\circ$
- Cu: $\sin\theta = \dfrac{0{,}154}{0{,}402} = 0{,}384 \Rightarrow \theta \approx 22{,}6^\circ$
- Al: $\sin\theta = \dfrac{0{,}832}{0{,}402} = 2{,}07 > 1$ → **1. kertaluvun maksimia ei synny**. Ehdosta $2d\sin\theta = \lambda$ seuraa $d \ge \lambda/2 = 0{,}42\ \mathrm{nm}$: analysaattorin on oltava "karkeampi" (suurempi $d$), jotta pitkä aallonpituus voidaan mitata. （长波长需要更大的晶面间距或更小的掠射角。）

**d)** Ominaissäteilyn **intensiteetti** on verrannollinen kyseisen alkuaineen atomien määrään näytteessä. Kun mitataan tunnettuja standardinäytteitä, saadaan kalibraointikäyrä (intensiteetti vs. pitoisuus), jota vasten tuntemattoman näytteen piikin intensiteetti muunnetaan pitoisuudeksi. Matriisivaikutukset ja näytteen paksuus on huomioitava.

---

## 7. Käsitetehtävä: jarrutussäteily ja ominaissäteily

**a)** Jarrutussäteily syntyy, kun anodiin törmäävä elektroni **hidastuu** metallin ytimien Coulombin kentässä. Elektroni ei menetä liike-energiaansa yhdellä kertaa vaan voi menettää mitä tahansa osan siitä, joten emittoituvien fotonien energiat muodostavat jatkuvan jakauman. Jyrkkä raja $\lambda_{min}$ seuraa energiaperiaatteesta: elektroni ei voi luovuttaa enempää energiaa kuin $eU$, joten $\dfrac{hc}{\lambda} \le eU$ eli $\lambda \ge \dfrac{hc}{eU}$. Yhtään lyhyempää fotonia ei siis voi syntyä → spektrin lyhytaaltoinen pää katkeaa terävästi.

**b)** $\lambda_{min}$ määräytyy vain elektronin liike-energiasta $E_k = eU$, joka on sama riippumatta anodimateriaalista. Piikit syntyvät anodin **atomien energiatasojen erotuksista** $hf = E_2 - E_1$; nämä tasot ovat kullekin alkuaineelle ominaiset, joten piikkien paikat ovat anodimateriaalin "sormenjälki". Siksi anodimateriaali voidaan tunnistaa spektristä.

**c)** Ominaissäteily edellyttää K-kuoren (tai muun sisäkuoren) ionisaatiota, johon tarvitaan tietty minimienergia. Pienellä jännitteellä $eU$ ei riitä tähän → vain jarrutussäteilyä havaitaan. Jännitteen kasvaessa piikkien paikat eivät muutu, koska energiatasojen erot ovat atomin sisäisiä vakioita; sen sijaan piikkien **intensiteetti** kasvaa (useampi elektroni ylittää ionisaatiokynnyksen).

**d)** Koska röntgenfotonin energia on kymmeniä keV, mutta elektronin vuorovaikutus aineen kanssa tapahtuu pääosin törmäyksissä ja virityksissä, jotka päätyvät lämmöksi: tyypillisesti vain noin 1 % liike-energiasta muuttuu säteilyksi. Seuraukset: anodi kuumenee voimakkaasti → tarvitaan tehokas jäähdytys (vesikierto, pyörivä anodi), korkea hyötysuhde on mahdoton, ja siksi esim. kuvantamisessa käytetään suuria jännitteitä ja pulsseja energian säästämiseksi. （这也是为什么同步辐射/加速器光源在需要高强度时更受青睐。）

---

## 8. Käsitetehtävä: röntgensäteilyn käyttö ja Braggin laki

**a)** Röntgensäteilyn aallonpituus (noin 10–1000 pm) on **samaa suuruusluokkaa kuin atomien välinen etäisyys kiteessä** (tyypillisesti 100–500 pm). Diffraktio ja interferenssi antavat rakennetietoa vain, kun aallonpituus on samaa suuruusluokkaa kuin tutkittavat yksityiskohdat; näkyvän valon aallonpituus (400–700 nm) on tuhansia kertoja liian pitkä. Siksi röntgensäteily paljastaa kidehilan rakenteen.

**b)** Braggin tarkastelussa interferenssi syntyy **rinnakkaisista atomikerroksista** heijastuvien säteiden matkaerosta $2d\sin\theta$, jossa $\theta$ on säteen ja tason välinen kulma — matkaero lasketaan tason suunnasta, joten kulma on määriteltävä samalla tavalla (jos käytetään normaalia, kaava saa muodon $2d\cos\alpha$). Maksimeja on useita, koska $k$ voi saada arvot 1, 2, 3, … kunhan $\sin\theta \le 1$. Suurempi $k$ tarkoittaa suurempaa matkaeroa eli suurempaa kulmaa: $\sin\theta = \dfrac{k\lambda}{2d}$ kasvaa $k$:n mukana.

**c)** **Synkrotroni:** varatut hiukkaset kiihdytetään lähes valonnopeuteen ja ne kulkevat kiihdytinrenkaassa; käännöskohdissa tapahtuu voimakas kiihtyvyys → säteilyä. Spektri on erittäin intensiivinen, helposti säädettävä ja **monokromaattinen**; laitos maksaa satoja miljoonia – miljardeja euroja (esim. FinEstBeAMS MAX IV:ssä). **Röntgenputki:** elektronit törmäytetään metallianodiin; spektrissä on laaja **jarrutussäteilyn jatkumo** + anodimateriaalin piikit, teho ja monokromaattisuus ovat paljon heikompia, mutta laite on pieni ja edullinen.

**d)** **XRF (röntgenfluoresenssi):** suurienerginen röntgensäteily virittää näytteen atomien sisäkuoria; viritystilan purkautuessa syntyvästä ominaissäteilyn spektristä **tunnistetaan alkuaineet** ja standardinäytteiden avulla niiden pitoisuudet. **XRD (röntgendiffraktio):** näytteen läpi kulkenut tai siitä diffraktoitunut säde tuottaa **diffraktiokuvion**, josta saadaan atomien väliset etäisyydet ja kiderakenne (Braggin laki). Historialliset esimerkit: Rosalind Franklinin 1950-luvulla ottamat röntgendiffraktiokuvat (Image-51) paljastivat DNA:n kierrerakenteen, ja Wilhelm Röntgenin työ toi **ensimmäisen fysiikan Nobel-palkinnon vuonna 1901**.

---

## Huomioita muistiinpanoista

- Kirjoitusasuja kannattaa korjata: "Röntgenaluee" → **röntgenalue**, "kiihtyjä elktroneja" → **kiihdytettyjä elektroneja**, "varattu hiukkasta" → **varattua hiukkasta**, "SM säteily" → **sähkömagneettinen säteily** (SM = sähkömagneettinen), "Jäähdytys | Vesikierto tai pyörivä anodi" ✓.
- Muistiinpanoissa sanotaan "**Kα on yleensä korkein**". Tämä tarkoittaa **intensiteetiltään** korkeinta piikkiä (siirtymä 2 → 1 on todennäköisin), ei suurinta energiaa — energiaa koskee seuraava rivi: $\lambda(\mathrm{K\alpha}) > \lambda(\mathrm{K\beta})$. Kannattaa kirjoittaa auki, ettei synny väärinkäsitystä.
- Muistiinpanoista puuttuu yksi olennainen kynnysperiaate: **ominaissäteilyn syntyminen vaatii, että $eU$ ylittää kyseisen kuoren ionisaatioenergian**, ei Kα-fotonin energiaa. Kuparilla K-ionisaatio on 8,98 keV, kun Kα-fotonin energia on vain 8,04 keV. Tehtävä 2c harjoittelee juuri tätä.
- Kaaviot: $\lambda_{min}$-riippuvuutta jännitteestä kannattaa havainnollistaa piirtämällä kaksi spektrikäyrää samaan kuvaan (esim. 35 kV ja 50 kV) — piikit samoilla paikoilla, $\lambda_{min}$ siirtynyt.
