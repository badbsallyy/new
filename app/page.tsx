import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const primaryServices = [
  {
    title: "Basis Arbeit",
    description:
      "Schneiden, Waschen, Föhnen – bei uns wird selbst Alltägliches zu etwas Besonderem.",
  },
  {
    title: "Farbe rein bringen",
    description:
      "Wie bunt darf‘s denn sein? Wir sind Spezialisten für Farbe in allen Applikationsformen.",
  },
  {
    title: "Mehr Haar wagen",
    description:
      "Wir legen ein Schippchen drauf – Mit Extensions, Haarverdichtung und Haarverlängerung.",
  },
  {
    title: "Festfrisuren",
    description:
      "Hochzeit und Co.: Beim Feiern muss alles perfekt sein. Wir sorgen dafür, dass das für Ihr Styling auf jeden Fall zutrifft.",
  },
  {
    title: "Zweithaar",
    description:
      "Wir sind ausgebildete Spezialisten im Bereich Zweithaar und Perücken und beraten Sie gerne unverbindlich. Wir unterstützen Sie bei der Abrechnung mit der Krankenkasse.",
  },
  {
    title: "Haarverdichtung",
    description:
      "Endlich wieder volles Haar? Kein Problem mit unserer Oberkopf-Haarverdichtung.",
  },
];

const hairDetailHighlights = [
  "Lange Haare in einer Stunde? Kein Problem. Wir beraten Sie gerne!",
  "Endlich wieder volles Haar? Kein Problem mit unserer Oberkopf-Haarverdichtung (Haarteile)",
  "Tape, Bonding, Clip in - Extension",
  "Umfangreiche Farbauswahl",
  "Asiatisches bis hin zu Eoropidem unbehandelten Haar",
  "Terminvereinbarung",
];

const productHighlights = [
  "Beratung zur Haarteilen und Haarverdichtung",
  "MARKEN-QUALITÄT",
  "Unsere Styling-Produkte",
];

const quickLinks = [
  "Home",
  "Über uns",
  "Leistungen",
  "Basis Arbeit",
  "Farbe rein bringen",
  "Zweithaar",
  "Haarteile",
  "Perücken",
  "Extensions",
  "Haarverlängerung",
  "Haarverdichtung",
  "Haare glätten",
  "Festfrisuren",
  "Kontakt",
  "Termin buchen",
  "Kontaktformular",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,74,74,0.12),_rgba(8,10,18,0.95)_55%),_linear-gradient(180deg,_#07080d_0%,_#0c0f1c_100%)] text-white">
      <div className="hero-glow">
        <header className="container flex items-center justify-between py-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold">
              C
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Coroneo Friseure
              </p>
              <p className="font-display text-lg">Coroneo Wesel</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
            {quickLinks.slice(0, 6).map((item) => (
              <a key={item} className="hover:text-white" href="#">
                {item}
              </a>
            ))}
          </nav>
          <Button variant="secondary" className="hidden lg:inline-flex">
            Jetzt buchen <ArrowUpRight className="h-4 w-4" />
          </Button>
        </header>

        <section className="container grid items-center gap-10 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Badge>Individuelles Styling mit Köpfchen</Badge>
            <h1 className="font-display text-4xl leading-tight md:text-6xl">
              Coroneo Wesel <span className="gradient-text">sorgt für .</span>
            </h1>
            <p className="text-lg text-white/70">
              Jetzt buchen · 0281 1640430 · info@coroneo.co
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>
                Termin buchen <CalendarDays className="h-4 w-4" />
              </Button>
              <Button variant="secondary">
                Mehr Infos <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <span>Instagram</span>
              <span>Phone-alt</span>
              <span>Mail-bulk</span>
            </div>
          </div>
          <div className="space-y-4">
            <Card className="shadow-glow">
              <CardHeader>
                <CardTitle>Coroneo sorgt für .</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-white/70">
                {hairDetailHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
                <Button variant="secondary" className="w-full">
                  Details <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <section className="container space-y-10 pb-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Leistungen
            </p>
            <h2 className="font-display text-3xl md:text-4xl">
              Coroneo sorgt für
            </h2>
          </div>
          <Button variant="secondary">Jetzt buchen</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {primaryServices.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-white/70">
                <p>{service.description}</p>
                <Button variant="ghost" className="justify-start px-0">
                  Infos <ArrowUpRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container grid gap-8 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>MARKEN-QUALITÄT</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-sm text-white/70">
            {productHighlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
            <p>Vereinbaren Sie gerne .</p>
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Wir nehmen uns Zeit für Sie!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-white/70">
            <p>
              In unserem modernen Salon mitten in der Weseler Innenstadt steht
              unser Team für eine ausführliche Beratung zur Verfügung. Wir freuen
              uns auf Sie!
            </p>
            <p>
              Sie haben Fragen zu Haarteilen oder Haarverdichtungen und wünschen
              sich eine diskrete Beratung in einem separaten Raum. Kein Problem!
              Wir sind auf diese Eventualitäten vorbereitet.
            </p>
            <Button variant="secondary">Besuch Uns</Button>
          </CardContent>
        </Card>
      </section>

      <section className="border-t border-white/10 bg-white/5">
        <div className="container grid gap-8 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h3 className="font-display text-3xl">Kontakt</h3>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Berliner Tor Platz 2, 46483 Wesel</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>0281 1640430</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@coroneo.co</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>Kontaktformular</Button>
              <Button variant="secondary">Termin buchen</Button>
            </div>
          </div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Öffnungszeiten</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-white/70">
              <p>Montags geschlossen</p>
              <p>Dienstags- Freitags 09:00 – 18:00</p>
              <p>Samstags 08:30 – 14:00</p>
              <p>Sonntags geschlossen</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="container grid gap-8 py-12 text-sm text-white/60 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="font-display text-lg text-white">Coroneo Wesel</p>
            <p>Impressum</p>
            <p>Datenschutz</p>
          </div>
          <div className="space-y-2">
            <p className="font-display text-lg text-white">Navigation</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="font-display text-lg text-white">Kontakt</p>
            <p>Berliner Tor Platz 2, 46483 Wesel</p>
            <p>0281 1640430</p>
            <p>info@coroneo.co</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
