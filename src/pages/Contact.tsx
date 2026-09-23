import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const [n, i] = useState({
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    }),
    [l, o] = useState(!1),
    [q, setQ] = useState(""),
    u = (g) => {
      const { name: v, value: j } = g.target;
      i((x) => ({
        ...x,
        [v]: j,
      }));
    },
    [p, m] = useState(!1),
    h = async (g) => {
      g.preventDefault();
      m(!0);
      setQ("");
      try {
        const r = await fetch("https://formsubmit.co/ajax/a.regragui@rmpartners.fr", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            "Nom complet": n.name,
            Entreprise: n.company,
            Email: n.email,
            Téléphone: n.phone,
            Objet: n.subject,
            Message: n.message,
            _subject: "Nouvelle demande de contact — RM Partners",
          }),
        });
        const d = await r.json().catch(() => null);
        if (!r.ok || !d || d.success === false || d.success === "false")
          throw new Error(
            d && d.message
              ? d.message
              : "Le serveur d'envoi a refusé la requête (code " + r.status + ").",
          );
        o(!0);
        setTimeout(() => {
          (i({
            name: "",
            company: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          }),
            o(!1));
        }, 7e3);
      } catch (e) {
        setQ(e && e.message ? e.message : "Erreur inconnue lors de l'envoi.");
      } finally {
        m(!1);
      }
    };
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contactez-nous"
        description="Contactez RM Partners, votre expert-comptable à Paris 8. Formulaire de contact, téléphone, email et plan d'accès à nos bureaux."
      />
      <Header />
      <main className="flex-1">
        <section className="relative flex items-center rm-banner-hero">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/contact-hero.jpg"
              alt="Contactez-nous"
              className="w-full h-full object-cover rm-hero-img"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/55 via-primary/40 to-primary/25" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-5">Contact</p>
            <h1 className="text-white mb-6 max-w-3xl">Contactez-nous</h1>
            <p className="text-lg text-white/85 max-w-2xl">
              Nous sommes à votre écoute pour répondre à vos questions et vous accompagner dans vos
              projets.
            </p>
          </div>
        </section>
        <section className="rm-section bg-white">
          <div className="container mx-auto px-4">
            <div className="rm-fade-up max-w-2xl mx-auto text-center mb-16 md:mb-20">
              <div className="rm-eyebrow justify-center">
                <span>Contact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-heading mt-4">Contactez-nous</h2>
              <div className="w-16 h-0.5 bg-accent rounded mx-auto mt-6">{""}</div>
              <p className="text-foreground/70 mt-6 leading-relaxed text-lg">
                Une question, un projet ? Notre équipe vous répond rapidement, par téléphone, e-mail
                ou directement à notre cabinet parisien.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
              <div className="rm-fade-up">
                <h3 className="text-xl font-bold text-heading mb-2">Nos coordonnées</h3>
                <div className="divide-y divide-border">
                  <a
                    href="https://maps.google.com/?q=61+rue+la+Boétie+75008+Paris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 py-5"
                  >
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                        Adresse
                      </p>
                      <p className="text-heading font-semibold leading-snug">
                        61 rue la Boétie
                        <br />
                        75008 Paris
                      </p>
                    </div>
                  </a>
                  <a href="tel:+33603406853" className="flex items-start gap-4 py-5">
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                        Téléphone
                      </p>
                      <p className="text-heading font-semibold">+33 6 03 40 68 53</p>
                    </div>
                  </a>
                  <a href="mailto:a.regragui@rmpartners.fr" className="flex items-start gap-4 py-5">
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                        Email
                      </p>
                      <p className="text-heading font-semibold break-all">
                        a.regragui@rmpartners.fr
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 py-5">
                    <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                        Horaires
                      </p>
                      <p className="text-heading font-semibold leading-snug">
                        Lun - Ven : 9h - 18h
                        <br />
                        Sur rendez-vous
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border mt-8 h-72">
                  <iframe
                    src="https://www.google.com/maps?q=61+rue+la+Boétie+75008+Paris&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation RM Partners"
                  />
                </div>
              </div>
              <div className="rm-fade-up">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-heading mb-2">Envoyez-nous un message</h3>
                </div>
                {l ? (
                  <div className="bg-accent/5 border border-accent/30 rounded-2xl p-10 text-center">
                    <h3 className="text-2xl font-bold text-heading mb-2">Merci !</h3>
                    <p className="text-foreground/70">
                      Votre demande a bien été envoyée. Nous vous remercions de votre confiance et
                      vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={h}
                    className="bg-secondary/40 border border-border rounded-2xl p-8 md:p-10 space-y-6"
                  >
                    {q && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700 flex items-start gap-2">
                        <span>⚠️</span>
                        <span>Échec de l'envoi : {q}</span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2 text-heading"
                        >
                          Nom complet *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={n.name}
                          onChange={u}
                          required={!0}
                          placeholder="Jean Dupont"
                          className="w-full bg-white border border-border text-foreground placeholder:text-muted-foreground rounded-xl h-12 focus-visible:ring-accent focus-visible:border-accent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium mb-2 text-heading"
                        >
                          Entreprise
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={n.company}
                          onChange={u}
                          placeholder="Votre entreprise"
                          className="w-full bg-white border border-border text-foreground placeholder:text-muted-foreground rounded-xl h-12 focus-visible:ring-accent focus-visible:border-accent"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2 text-heading"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={n.email}
                          onChange={u}
                          required={!0}
                          placeholder="jean@example.com"
                          className="w-full bg-white border border-border text-foreground placeholder:text-muted-foreground rounded-xl h-12 focus-visible:ring-accent focus-visible:border-accent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-2 text-heading"
                        >
                          Téléphone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={n.phone}
                          onChange={u}
                          placeholder="+33 1 XX XX XX XX"
                          className="w-full bg-white border border-border text-foreground placeholder:text-muted-foreground rounded-xl h-12 focus-visible:ring-accent focus-visible:border-accent"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2 text-heading"
                      >
                        Objet
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={n.subject}
                        onChange={u}
                        placeholder="Objet de votre demande"
                        className="w-full bg-white border border-border text-foreground placeholder:text-muted-foreground rounded-xl h-12 focus-visible:ring-accent focus-visible:border-accent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-heading"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={n.message}
                        onChange={u}
                        required={!0}
                        placeholder="Décrivez votre demande..."
                        className="w-full min-h-32 bg-white border border-border text-foreground placeholder:text-muted-foreground rounded-xl focus-visible:ring-accent focus-visible:border-accent"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={p}
                      className="w-full bg-accent text-white font-bold hover:bg-accent/90 hover:scale-[1.02] transition-all duration-300 rounded-xl py-6 flex items-center justify-center gap-2 shadow-lg"
                    >
                      {p ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin">
                            {""}
                          </div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande<span>→</span>
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
