import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const navLinks = [
  { label: "Home", href: "https://coroneo.co/" },
  { label: "Über uns", href: "https://coroneo.co/ueber-uns/" },
  { label: "Leistungen", href: "https://coroneo.co/leistungen/" },
  { label: "Kontakt", href: "https://coroneo.co/kontakt/" },
  { label: "Termin buchen", href: "https://coroneo.co/termin-buchen/" },
];

const services = [
  {
    title: "Basis Arbeit",
    description:
      "Schneiden, Waschen, Föhnen – bei uns wird selbst Alltägliches zu etwas Besonderem.",
    action: "Infos",
    href: "https://coroneo.co/leistungen/basis-arbeit/",
  },
  {
    title: "Farbe rein bringen",
    description: "Wie bunt darf‘s denn sein? Wir sind Spezialisten für Farbe in allen Applikationsformen.",
    action: "Infos",
    href: "https://coroneo.co/leistungen/farbe-rein-bringen/",
  },
  {
    title: "Mehr Haar wagen",
    description: "Wir legen ein Schippchen drauf – Mit Extensions, Haarverdichtung und Haarverlängerung.",
    action: "Mehr",
    href: "https://coroneo.co/extensions/",
  },
  {
    title: "Hochzeit und Co.",
    description:
      "Beim Feiern muss alles perfekt sein. Wir sorgen dafür, dass das für Ihr Styling auf jeden Fall zutrifft.",
    action: "Infos",
    href: "https://coroneo.co/leistungen/festfrisuren/",
  },
];

const zweithaarDetails = [
  "Endlich wieder volles Haar?",
  "Kein Problem mit unserer Oberkopf-Haarverdichtung.",
  "Lange Haare in einer Stunde?",
  "Kein Problem. Wir beraten Sie gerne!",
  "Endlich wieder volles Haar? Kein Problem mit unserer Oberkopf-Haarverdichtung (Haarteile)",
  "Tape, Bonding, Clip in - Extension",
  "Umfangreiche Farbauswahl",
  "Asiatisches bis hin zu Eoropidem unbehandelten Haar",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="gradient-sheen">
        <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur">
          <div className="container flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Image
                src="https://coroneo.co/wp-content/uploads/2021/10/Logo_Coroneo_128.png"
                alt="Coroneo Friseure"
                width={128}
                height={38}
                className="h-8 w-auto"
              />
              <div className="hidden items-center gap-3 text-sm text-muted-foreground md:flex">
                <Link className="hover:text-foreground" href="tel:02811640430">
                  0281 1640430
                </Link>
                <span className="text-muted-foreground/40">|</span>
                <Link className="hover:text-foreground" href="mailto:info@coroneo.co">
                  info@coroneo.co
                </Link>
              </div>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Button asChild className="hidden lg:inline-flex">
              <Link href="https://coroneo.co/termin-buchen">Jetzt  buchen</Link>
            </Button>
          </div>
        </header>

        <section className="relative overflow-hidden border-b border-border/40">
          <div className="container grid gap-10 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <Badge className="w-fit">Coroneo Wesel</Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                  Individuelles Styling mit Köpfchen
                </h1>
                <p className="max-w-xl text-base text-muted-foreground md:text-lg">
                  Coroneo sorgt für
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="https://coroneo.co/leistungen/">Mehr Infos</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="https://www.instagram.com/coroneo_friseure_wesel/">
                    Instagram
                  </Link>
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="glass-panel rounded-3xl p-6">
                  <p className="text-sm text-muted-foreground">Terminvereinbarung</p>
                  <p className="mt-2 text-lg font-semibold">0281 1640430</p>
                </div>
                <div className="glass-panel rounded-3xl p-6">
                  <p className="text-sm text-muted-foreground">Details</p>
                  <p className="mt-2 text-lg font-semibold">info@coroneo.co</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-6 top-10 hidden h-40 w-40 rounded-full bg-primary/30 blur-3xl lg:block" />
              <div className="rounded-[32px] border border-border/50 bg-card/80 p-4 shadow-2xl">
                <Image
                  src="https://coroneo.co/wp-content/uploads/2023/05/friseur-coroneo-wesel.1.1-1024x771.png"
                  alt="friseur-coroneo-wesel.1.1"
                  width={1024}
                  height={771}
                  className="rounded-[24px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="container space-y-10 py-20">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <Badge variant="outline">Leistungen</Badge>
            <h2 className="text-3xl font-semibold text-white">Coroneo sorgt für</h2>
          </div>
          <Button asChild variant="secondary" className="hidden md:inline-flex">
            <Link href="https://coroneo.co/leistungen/">Mehr Infos</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="flex h-full flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-6">
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <Button asChild variant="ghost" className="w-fit px-0">
                  <Link href={service.href}>{service.action}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container grid gap-10 py-20 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <Badge>Beratung</Badge>
          <h2 className="text-3xl font-semibold text-white">
            Vereinbaren Sie gerne einen unverbindlichen Beratungstermin!
          </h2>
          <p className="text-muted-foreground">
            Wir nehmen uns Zeit für Sie! In unserem modernen Salon mitten in der Weseler Innenstadt steht unser Team für eine ausführliche Beratung zur Verfügung. Wir freuen uns auf Sie!
          </p>
          <p className="text-muted-foreground">
            Sie haben Fragen zu Haarteilen oder Haarverdichtungen und wünschen sich eine diskrete Beratung in einem separaten Raum. Kein Problem! Wir sind auf diese Eventualitäten vorbereitet.
          </p>
        </div>
        <div className="grid gap-6">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Beratung zur Haarteilen und Haarverdichtung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Wir sind ausgebildete Spezialisten im Bereich Zweithaar und Perücken und beraten Sie gerne unverbindlich.
              </p>
              <p className="text-sm text-muted-foreground">
                Wir unterstützen Sie bei der Abrechnung mit der Krankenkasse.
              </p>
            </CardContent>
          </Card>
          <div className="grid gap-4 rounded-3xl border border-border/50 bg-secondary/40 p-6">
            {zweithaarDetails.map((detail) => (
              <div key={detail} className="text-sm text-muted-foreground">
                {detail}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-6">
          <Badge variant="outline">MARKEN-QUALITÄT</Badge>
          <h2 className="text-3xl font-semibold text-white">Unsere Styling-Produkte</h2>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="https://coroneo.co/termin-buchen/">Terminvereinbarung</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://coroneo.co/kontakt/">Details</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-[32px] border border-border/50 bg-card/80 p-4 shadow-2xl">
          <Image
            src="https://coroneo.co/wp-content/uploads/2023/05/friseur-coroneo-wesel.2.3-771x1024.png"
            alt="friseur-coroneo-wesel.2.3"
            width={771}
            height={1024}
            className="rounded-[24px] object-cover"
          />
        </div>
      </section>

      <footer className="border-t border-border/40 py-10">
        <div className="container flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>Coroneo Wesel</span>
          <div className="flex flex-wrap gap-4">
            <Link href="https://coroneo.co/datenschutzerklaerung/">Datenschutz</Link>
            <Link href="https://coroneo.co/impressum/">Impressum</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
