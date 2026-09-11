## Lähtökohta: valo aaltoliikkeenä

Valon aaltoluonteen puolesta puhuvat
- **diffraktio, taittuminen, heijastuminen** → selittyvät aaltojen summautumisella ja Huygensin periaatteella
- **väri ↔ aallonpituus**, valon nopeus sama kuin esim. mikroaalloilla
- **polarisaatio**, valo ei läpäise metallia
- **terminen säteily**: kuuman kappaleen varatut rakenneosat värähtelevät voimakkaasti → lähettävät SM-säteilyä (IR ja valo)

→ Valo on **sähkömagneettista aaltoliikettä**.

Mutta: kaikkia ilmiöitä aaltomalli ei selitä.

> **Solarium.** UVA tummentaa ihon välittömästi mutta ohimenevästi, lyhytaaltoisempi UVB muodostaa **melaniinia** → pitempikestoinen rusketus. Ruskettuminen on seurausta UV-säteilyn **absorptiosta**: säteilyn energia käynnistää iholla kemiallisia ilmiöitä. **Näkyvä valo ei ruskettaa, olipa se miten voimakasta hyvänsä.** Ratkaisevaa on siis aallonpituus, ei intensiteetti.

---

## Valosähköinen ilmiö
= **valo irrottaa metallista elektroneja**

**Havaintohistoria**
- **Hertz 1887**: kipinäpurkaukseen tarvittiin pienempi jännite, kun levyjä säteilytettiin UV-valolla
- Myöhemmin: UV-valo saa **negatiivisesti** varatun metallikappaleen menettämään varauksensa, **positiivisesti** varattu pysyy varattuna (→ poistuva varaus on negatiivista = elektroneja)

### Havainnot

| Havainto | |
| --- | --- |
| $\lambda >$ metallille ominainen raja-arvo | varausta **ei poistu**, vaikka intensiteettiä kasvatettaisiin |
| $\lambda <$ raja-arvo | varausta poistuu **heikossakin valossa välittömästi** |
| intensiteetin kasvatus (kun $\lambda$ riittävän pieni) | poistumisen **nopeus** kasvaa |

Useimmilla metalleilla ilmiö vaatii **ultraviolettivaloa**; näkyvä valo ei riitä.

### Miksi aaltomalli ei riitä
Klassisesti SM-aaltoliike tuo aineeseen energiaa **tasaisena virtana**:
- elektronien pitäisi irrota **aallonpituudesta riippumatta**, kunhan intensiteettiä kasvatetaan tai valaistaan tarpeeksi kauan
- heikossa valossa irtoamisen pitäisi **viivästyä**

Todellisuudessa elektroneja irtoaa **välittömästi** silloinkin, kun klassisen mallin mukaan energian keräämiseen menisi **vuosia**.
→ Aaltomalli **epäonnistuu**.

---

## Kokeellinen tutkiminen

**Laitteisto:** valokenno (tyhjiöputki, jossa **katodi** ja **anodi**), valonlähteinä **ledejä** (tunnetut aallonpituudet), säädettävä jännitelähde, herkkä virtamittari (nA) ja jännitemittari.

1. Lyhytaaltoinen valo osuu katodiin → elektroneja irtoaa → osa kulkeutuu anodille → piirissä kulkee **pieni sähkövirta**
2. Virta **kasvaa**, kun ledin kirkkautta kasvatetaan
3. Kytketään jännite **väärinpäin** (katodi +, anodi −) → sähkökenttä **jarruttaa** elektroneja
4. Jännitettä nostettaessa virta heikkenee; **pysäytysjännitteellä $U_0$** virta lakkaa kokonaan — eikä sitä saada kulkemaan intensiteettiä kasvattamalla

Pysäytysjännitteellä nopeimmatkin elektronit pysähtyvät juuri ennen anodia:

$$
\boxed{\ E_{k,max} = eU_0\ }
$$

> Irrotustyö vastaa **pinnasta** irtoavaa elektronia. Syvemmältä irtoavaan tarvitaan enemmän energiaa → pinnan elektroneilla on eniten liike-energiaa irtoamisen jälkeen.

### Mittaustulos (cesium)

| $\lambda$ / nm | $f$ / PHz | $U_0$ / V | $E_k$ / eV |
| --- | --- | --- | --- |
| 611 | 0,491 | 0,066 | 0,066 |
| 588 | 0,510 | 0,138 | 0,138 |
| 525 | 0,571 | 0,430 | 0,430 |
| 505 | 0,594 | 0,507 | 0,507 |
| 472 | 0,635 | 0,649 | 0,649 |

> Kun energian yksikkö on **elektronivoltti**, $E_k$:n ja $U_0$:n lukuarvot ovat samat.

Pisteet asettuvat **suoralle**:

$$
E_k = 4{,}1 \cdot 10^{-15}\ \mathrm{eVs} \cdot f - 2{,}0\ \mathrm{eV}
$$

$$
E_k = 6{,}6 \cdot 10^{-34}\ \mathrm{Js} \cdot f - 3{,}2 \cdot 10^{-19}\ \mathrm{J}
$$

**Eri metalleilla:** suorilla on **sama kulmakerroin**, mutta ne leikkaavat akselit eri kohdissa.

| Suoran piirre | Merkitys |
| --- | --- |
| **kulmakerroin** | **Planckin vakio $h$** — sama kaikille metalleille (sama vakio kuin Planckin kvanttihypoteesissa) |
| **pystyakselin leikkaus** | **irrotustyö $-W$** — metallille ominainen |
| **vaaka-akselin leikkaus $(f_0,0)$** | **rajataajuus** = pienin taajuus, jolla elektroneja vielä irtoaa ($E_k = 0$) |

Useimmilla metalleilla $f_0$ on **UV-alueella**.

---

## Valosähköisen ilmiön laki

$$
\boxed{\ E_k = hf - W\ }
$$

- $E_k$ = irronneen elektronin **suurin mahdollinen** liike-energia
- $h$ = Planckin vakio
- $f$ = säteilyn taajuus
- $W$ = **irrotustyö**, metallille ominainen energia elektronin irrottamiseen pinnasta

**Rajataajuus:** $E_k = 0 \Rightarrow$

$$
f_0 = \frac{W}{h}
$$

**Tulkinta (Einstein):** valo luovuttaa energiaa **annoksittain, kvantteina**. Kvantin energia riippuu **taajuudesta**, ei intensiteetistä. Osa kvantin energiasta kuluu irrotustyöhön, loppu jää elektronin liike-energiaksi. Jos $hf < W$, elektroni **ei irtoa** lainkaan.

> Intensiteetin kasvattaminen lisää **kvanttien lukumäärää** (→ enemmän elektroneja), ei yksittäisen kvantin energiaa (→ ei suurempaa $E_k$:ta).

### Valokvantin energia

$$
\boxed{\ E = hf = \frac{hc}{\lambda}\ }
$$

> **Einstein** sai fysiikan Nobel-palkinnon **1921** erityisesti valosähköisen ilmiön selityksestä. **Planck** muotoili mustan kappaleen säteilyn lain ja kvanttihypoteesin.

---

## Esimerkki 1 — cesium, $W = 2{,}1\ \mathrm{eV}$

**a) Kynnystaajuus**

$$
f_0 = \frac{W}{h} = \frac{2{,}1 \cdot 1{,}602\cdot10^{-19}\ \mathrm{J}}{6{,}626\cdot10^{-34}\ \mathrm{Js}} = 5{,}1\cdot10^{14}\ \mathrm{Hz}
$$

(vastaa aallonpituutta $\lambda_0 = c/f_0 \approx 590\ \mathrm{nm}$ → cesiumilla ilmiö tapahtuu jo **näkyvällä valolla**)

**b) $\lambda = 355\ \mathrm{nm}$**

Fotonin energia:

$$
E = \frac{hc}{\lambda} = \frac{1240\ \mathrm{eV\,nm}}{355\ \mathrm{nm}} = 3{,}49\ \mathrm{eV}
$$

$$
E_{k,max} = hf - W = 3{,}49\ \mathrm{eV} - 2{,}1\ \mathrm{eV} = \mathbf{1{,}4\ eV} \approx 2{,}2\cdot10^{-19}\ \mathrm{J}
$$

**c) Miksi liike-energia voi olla pienempikin?**
Irrotustyö $W$ koskee **pinnasta** irtoavaa elektronia. Syvemmältä irtoavan elektronin irrottamiseen kuluu **enemmän** energiaa, ja elektroni voi menettää energiaa törmäyksissä matkalla ulos → jäljelle jää vähemmän liike-energiaa. Siksi $hf - W$ on vain **yläraja**.

---

## Fotonit

Elektronin ja valokvantin vuorovaikutus muistuttaa **hiukkasten törmäystä**. Siksi säteilyä kuvataan hiukkasmaisina **fotoneina**.

**Fotoni** = sähkömagneettisen vuorovaikutuksen **kvantti**
- energia $E = hf$
- käyttäytyy vuorovaikutuksessa **hiukkasen** tavoin

| Malli | Selittää hyvin | Ei selitä |
| --- | --- | --- |
| **Fotonimalli** | vuorovaikutus aineen kanssa (valosähköinen ilmiö, absorptio, emissio) | interferenssi |
| **Aaltomalli** | interferenssi, diffraktio, polarisaatio | valosähköinen ilmiö |

Etenemistä kuvattaessa fotonilla tarkoitetaan **säteilykentän tilaa** — yhtä vapausastetta, joka kuljettaa energiaa tietyllä taajuudella. Yksinkertaistaen etenevä säteily voidaan mieltää fotonisuihkuksi, mutta **fotonit voidaan havaita vain vuorovaikutustapahtumissa**.

---

## Esimerkki 2 — fotonin energia 2,2 eV

**a) Aallonpituus**

$$
E = \frac{hc}{\lambda} \;\Rightarrow\; \lambda = \frac{hc}{E} = \frac{1240\ \mathrm{eV\,nm}}{2{,}2\ \mathrm{eV}} = 5{,}6\cdot10^{2}\ \mathrm{nm} = 5{,}6\cdot10^{-7}\ \mathrm{m}
$$

**b) Millaista säteilyä?**
560 nm on **näkyvän valon** alueella (400–700 nm) → **kellanvihreä valo**.

---

## Muistilista

- $E = hf = hc/\lambda$ — fotonin energia
- $E_k = hf - W$ — valosähköisen ilmiön laki
- $E_{k,max} = eU_0$ — pysäytysjännite
- $f_0 = W/h$ — rajataajuus
- $hc = 1240\ \mathrm{eV\,nm}$ — kätevä muunnos
- $1\ \mathrm{eV} = 1{,}602\cdot10^{-19}\ \mathrm{J}$
