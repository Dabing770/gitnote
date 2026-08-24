=SM säteilyn alalaji. Gamma ja UV säteiyn välissä
(Osin samat energiat kuin näillä, mutta eri syntymekanismi)

SM säteily synty kun varattu hiukkasta kiihdytetään (Fotoni on SM vuorovaikutuksen välittäjähiukkanen). 

## Röntgensäteily
= Röntgenaluee  SM säteily saadaan aikaiseksi kV jänniteellä kiihtyjä elktroneja törmäyttää metalliin.
- Osa elektronin energiasta muuttuu fotoniksi.
- Lyhytaaltoista → aallonpituus samaa suuruusluokkaa kuin atomien välinen etäisyys
	→ sopii aineen **atomitason rakenteen** tutkimiseen

### Syntytavat

**1. Synkrotroni**
- Lähes valonnopeuteen kiihdytetyt varatut hiukkaset kiertävät kiihdytinrengasta
- Käännöspaikoissa hiukkanen on voimakkaasti kiihtyvässä liikkeessä → lähettää SM säteilyä
- Tuottaa voimakasta **monokromaattista** röntgensäteilyä
- Erittäin kallis (satoja miljoonia – miljardeja €)
- Esim. FinEstBeAMS-säteilylinja MAX IV -laboratoriossa Ruotsissa

**2. Röntgenputki** (yleisin)
- Tyhjiöputki, jossa **hehkukatodi** ja **anodi**

## Röntgenputki

| Osa | Tehtävä |
| --- | --- |
| Hehkukatodi | Jännite lämmittää → elektroneja irtoaa |
| Kiihdytysjännite U | Kymmeniä kV, kiihdyttää elektronit katodilta anodille |
| Anodi (metallilevy) | Elektronit törmäävät → röntgensäteilyä |
| Jäähdytys | Vesikierto tai pyörivä anodi |

Levosta lähtevän elektronin liike-energia anodilla = sähkökentän tekemä työ:

$$
E_k = eU
$$

- Vain **n. 1 %** liike-energiasta muuttuu röntgensäteilyksi
- Loput **99 % lämmöksi** → anodia jäähdytettävä tehokkaasti

## Röntgenspektri

Intensiteetti aallonpituuden funktiona. Spektrissä kaksi osaa:

### 1. Jatkuva osa = jarrutussäteily
= Anodilla tapahtuvasta elektronien **hidastumisesta** aiheutuva säteily
- Jatkuva, koska elektroni ei luovuta liike-energiaansa kerralla vaan monin eri tavoin

**Minimiaallonpituus λ_min**
Elektroni ei voi luovuttaa enempää energiaa kuin sillä on. Energiaperiaate:

$$
\frac{hc}{\lambda_{min}} = eU
$$

$$
\lambda_{min} = \frac{hc}{eU}
$$

- λ_min riippuu **vain jännitteestä** (ei anodimateriaalista)
- U kasvaa → intensiteetit kasvavat ja λ_min siirtyy kohti **lyhyempiä** aallonpituuksia

### 2. Piikit = ominaissäteily
= Anodimateriaalin atomien virittymisestä syntyvä säteily

Syntymekanismi:
1. Kiihdytetty elektroni **ionisoi** anodin atomin → aukko matalalle energiatilalle
2. Atomi hakeutuu energeettisesti edullisimpaan tilaan
3. Korkeamman energiatilan elektroni täyttää aukon
4. Emittoituu fotoni, jonka energia = **energiatilojen erotus**

$$
hf = E_2 - E_1
$$

- Energiatilat ovat eri alkuaineilla erilaisia → piikkien aallonpituudet ovat **anodimateriaalille ominaisia**
- → spektristä voidaan **tunnistaa anodimateriaali**
- Pienillä jännitteillä ominaissäteilyä ei havaita (elektronin energia ei riitä ionisoimaan)

### Piikkien nimeäminen
Nimetään sen mukaan, **mille** energiatilalle elektroni siirtymässä **päätyy** (kuorimalli: K, L, M…)

| Piikki | Siirtymä |
| --- | --- |
| Kα | n = 2 → n = 1 |
| Kβ | n = 3 → n = 1 |
| Lα | n = 3 → n = 2 |

- **Kα on yleensä korkein**
- λ(Kα) > λ(Kβ), koska Kα-siirtymässä vapautuva energia on pienempi

## Esimerkki 1 — anodimateriaali ja jännite

Röntgenputken spektristä:

**a) Anodimateriaali**
1. Lue spektristä Kα-piikin energia (tai aallonpituus, jolloin $E = hc/\lambda$)
2. Vertaa taulukkoarvoihin

| Aine | E(Kα) / keV |
| --- | --- |
| Alumiini | 1,49 |
| Rauta | 6,40 |
| Nikkeli | 7,47 |
| Kupari | 8,04 |

**b) Kiihdytysjännite**
1. Lue spektristä λ_min (kohta, jossa jatkuva spektri alkaa)
2. $$U = \frac{hc}{e\lambda_{min}}$$

## Sovellukset

### XRF — röntgenfluoresenssi
- Suurienerginen röntgensäteily **virittää** näytteen atomien elektroneja
- Viritystilojen purkautuessa vapautuvan **ominaissäteilyn spektri** → tunnistetaan näytteen alkuaineet
- Standardinäytteillä myös **pitoisuus**
- Esim. lyijyn etsiminen lasten tuotteista

### XRD — röntgendiffraktio
- Kiteinen aine toimii **kolmiulotteisena hilana**
- Säteen kuljettua aineen läpi ilmaisimella nähdään **diffraktiokuvio** → atomien välimatkat
- Rosalind Franklin (1950-luku): DNA:n kiderakenne → kierrerakenne (Image-51)
  → Watson & Crick laativat kaksoiskierremallin

## Braggin laki

Tarkastellaan **heijastunutta** röntgensäteilyä. Rinnakkaisista atomikerroksista heijastuvien säteiden matkaero on $2d\sin\theta$ (janat AB ja BC ovat kumpikin $d\sin\theta$).

Interferenssimaksimi, kun matkaero = aallonpituuden monikerta:

$$
2d\sin\theta = k\lambda
$$

- $d$ = atomitasojen välimatka
- $\lambda$ = säteilyn aallonpituus
- $\theta$ = säteilyn kulkusuunnan ja **atomitason** välinen kulma (HUOM: ei normaalin!)
- $k = 1, 2, 3, \dots$ = interferenssimaksimin kertaluku

### Hiukkassuihku
Myös hiukkasilla voidaan tutkia kiderakennetta samaan tapaan:
- Vahvistava interferenssi tapahtuu hiukkasilla, joiden **de Broglien aallonpituus** on matkaeroon sopiva
- Kiteillä voidaan myös **valikoida** tietyllä nopeudella liikkuvia hiukkasia

## Esimerkki 2 — interferenssimaksimien suunnat

**Tunnetut:** $d = 560\ \mathrm{pm}$, $\lambda = 0{,}240\ \mathrm{nm} = 240\ \mathrm{pm}$

**Ratkaisu**

Braggin laista:

$$
\sin\theta = \frac{k\lambda}{2d} = \frac{k \cdot 240\ \mathrm{pm}}{2 \cdot 560\ \mathrm{pm}} = 0{,}2143\,k
$$

| k | sin θ | θ |
| --- | --- | --- |
| 1 | 0,2143 | 12,4° |
| 2 | 0,4286 | 25,4° |
| 3 | 0,6429 | 40,0° |
| 4 | 0,8571 | 59,0° |
| 5 | 1,071 | ei ratkaisua (sin θ ≤ 1) |

**Vastaus:** Interferenssimaksimeja muodostuu suunnissa **12,4° ; 25,4° ; 40,0° ja 59,0°** atomitasoon nähden.

## Historia
- Wilhelm Röntgen löysi säteilyn; ensimmäinen röntgenkuva otettiin hänen vaimonsa kädestä (sormus näkyy selvästi)
- Luut näkyivät niin hyvin, että lääketieteelliset sovellukset olivat heti ilmeisiä
- **Ensimmäinen fysiikan Nobel-palkinto 1901**
