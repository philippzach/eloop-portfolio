import React from 'react'
import { Link, Element } from 'react-scroll'
import { Link as GatsbyLink } from 'gatsby'
import Container from '../Container/containerfaqquestions'
import './faq.css'
import Download from './sectionfaq_download'

const Faq = () => (
  <>
    <div>
      <ul className="faqnav">
        <li className="faqnavitem">
          <GatsbyLink
            to="general"
            smooth={true}
            className="faqnavlink"
            to="/de/pricing"
          >
            Preise
          </GatsbyLink>
        </li>
        <li className="faqnavitem">
          <Link to="rules" smooth={true} className="faqnavlink" href="#rules">
            Während der Miete
          </Link>
        </li>
        <li className="faqnavitem">
          <Link
            to="accidents"
            smooth={true}
            className="faqnavlink"
            href="#accidents"
          >
            Laden & Parken
          </Link>
        </li>

        <li className="faqnavitem">
          <GatsbyLink
            to="newrules"
            smooth={true}
            className="faqnavlink"
            to="#newrules"
          >
            Regeln
          </GatsbyLink>
        </li>
        <li className="faqnavitem">
          <GatsbyLink
            to="general"
            smooth={true}
            className="faqnavlink"
            to="/de/terms"
          >
            AGB
          </GatsbyLink>
        </li>
      </ul>
    </div>
    <Container>
      <Download headline="Gebrauchsanleitung zum Download" />
      <div class="">
        <Element name="general">
          <h3>Allgemein</h3>
        </Element>
        <details>
          <summary id="faq-costs">Wie viel kosten die Autos?</summary>
          <div className="wrapper">
            <p>
              Die Preise für die unterschiedlichen Modelle findest du hier 
              <a href="https://eloop.at/de/pricing">
                https://eloop.at/de/pricing
              </a>
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-costs">
            Was bedeutet Bestpreis-Garantie und wie kommen eure Preise Zustande?
          </summary>
          <div className="wrapper">
            <p>
              Unser Pricing Algorithmus garantiert dir, dass du immer zum
              billigsten Preis fährst. Du kannst einfach losfahren und wenn der
              Stundenpreis billiger wird wie der Minutenpreis, wechselst du
              automatisch in den für dich billigeren Tarif. Dasselbe gilt
              natürlich auch für jede weitere angefangene Stunde und den
              Tagespreis. Dadurch brauchst du dich nicht vor einer Fahrt
              entscheiden, welches Paket du wählst bzw. wie lange du ein Auto
              brauchst.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-how">Wie kann ich den Service nutzen?</summary>
          <div className="wrapper">
            <p>
              Alles was du brauchst ist unsere App und eine Kreditkarte. Lade
              dir dazu einfach unsere App im App-Store oder Play-Store herunter.
              Nachdem du dich registriert hast, kannst du unsere E-Cars
              verwenden. Du findest die verfügbaren Autos in der App. Mit dieser
              kannst du die Fahrzeuge auch öffnen und dann direkt losfahren.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-onlyvienna">
            Darf ich mit den Autos nur in Wien fahren?
          </summary>
          <div className="wrapper">
            <p>
              Nein. Mit unseren E-Cars kannst du ohne zusätzliche Gebühren in
              der gesamten EU fahren. Die Autos müssen lediglich für das
              Abmieten wieder in unserem Geschäftsgebiet stehen.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-onlyvienna">
            Wie buche ich ein Stunden- oder Tagespaket?
          </summary>
          <div className="wrapper">
            <p>
              Das musst du nicht vor der Fahrt machen. Fahr einfach los und der
              Tarif wechselt automatisch in das günstigere Stunden- oder
              Tagespaket.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-age">Gibt es ein Mindestalter?</summary>
          <div className="wrapper">
            <p>
              Das Mindestalter ist 18 Jahre. Ansonsten brauchst du nur einen
              gültigen Führerschein und eine Kreditkarte.
            </p>
          </div>
        </details>

        <details>
          <summary id="faq-charge">Muss ich die Autos selber laden?</summary>
          <div className="wrapper">
            <p>
              Nein. Wenn du merkst, dass der Akku des E-Cars sich dem Ende
              neigt, dann versuche deine Fahrt bitte möglichst bald
              abzuschließen. Du kannst das E-Car auch selber aufladen, wenn du
              es länger verwenden willst. Bitte beachte dazu, dass eine Fahrt
              nicht beendet werden darf, solange das E-Car an einer Ladesäule
              angesteckt ist.  Du kannst unsere Autos an allen Wien Energie
              Ladestationen gratis aufladen. Die Ladekarte befindet sich im
              Fahrzeug.
            </p>
          </div>
        </details>

        <details>
          <summary id="faq-payment">Welche Zahlungsmittel gibt es?</summary>
          <div className="wrapper">
            <p>Die Bezahlung erfolgt derzeit ausschließlich per Kreditkarte.</p>
          </div>
        </details>

        <details>
          <summary id="faq-homezone">Was bedeutet Home Zone?</summary>
          <div className="wrapper">
            <p>
              Das ist unser Geschäftsgebiet, in welchem du unsere E-Cars
              abstellen kannst. Fahren kannst du natürlich auch außerhalb!
            </p>
          </div>
        </details>
      </div>
      <div class="" style={{ marginTop: '1.45em' }}>
        <Element name="rules">
          <h3>Während der Miete</h3>
        </Element>
        <details>
          <summary id="faq-smoking">
            Das Ladekabel lässt sich nicht vom Auto entfernen!?
          </summary>
          <div className="wrapper">
            <p>
              Um das Ladekabel zu entriegeln, entsperre das Auto mit dem
              Schlüssel, der sich im Fahrzeug befindet. Je nach Modell, musst du
              hin und wieder zweimal auf „Entsperren“ drücken. Stecke dann das
              Ladekabel zuerst beim Auto aus und anschließend bei der
              Ladestation.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-animals">
            Die Miete lässt sich nicht beenden!?
          </summary>
          <div className="wrapper">
            <p>
              Sollte es beim ersten Versuch nicht klappen, versichere dich, dass
              alle Türen, der Kofferraum bzw. die Heckklappe und die Fenster
              geschlossen sind und versuche erneut die Miete zu beenden.
              Vergewissere dich außerdem, dass du dich in der Home Zone
              befindest. Das siehst du entweder in der App oder im Auto an der
              LED-Lampe. Wenn diese grün leuchtet befindest du dich innerhalb
              der Home Zone und wenn diese rot leuchtet, befindest du dich
              außerhalb. Hin und wieder braucht das Auto kurz Zeit, um zu
              überprüfen, ob alles geschlossen ist. Wenn es beim zweiten oder
              dritten Versuch immer noch nicht klappt, kontaktiere unser
              Support-Team.
            </p>
          </div>
        </details>
      </div>
      <div class="" style={{ marginTop: '1.45em' }}>
        <Element name="accidents">
          <h3>Laden & Parken</h3>
        </Element>
        <details>
          <summary id="faq-accident">
            Wie und wo kann ich ein E-Car laden?
          </summary>
          <div className="wrapper">
            <p>
              Du kannst unsere Autos an allen Wien Energie Ladestationen
              innerhalb von Wien gratis laden. An allen anderen Stationen musst
              du den Ladevorgang selber bezahlen. Zum Laden kannst du das Auto
              einfach zu einer beliebigen Ladestelle stellen. Das Ladekabel
              befindet sich im Kofferraum des E-Cars. Steck ein Ende an der
              Ladestation an und das andere am E-Car. Halte anschließend die
              Ladekarte an den RFID-Reader an der Station. Sobald die Lichter an
              der Station durchgehend blau leuchten, hat der Ladevorgang
              begonnen. Bitte beachte, dass du während eines Ladevorgangs das
              Auto nicht abmieten darfst.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-damage">Wie beende ich eine Miete?</summary>
          <div className="wrapper">
            <p>
              Stell dazu einfach das E-Car in der Home Zone ab, steig aus,
              schließ die Tür und beende mittels der App die Miete. Sollte dies
              nicht funktionieren, kontaktiere und per Mail oder telefonisch.
              Versichere dich zusätzlich, ob du auf einem erlaubten Parkplatz
              stehst. Genauere Infos zu den erlaubten Parkplätzen findest du in
              den AGB.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-breakdown">Wo darf ich parken?</summary>
          <div className="wrapper">
            <p>
              Grundsätzlich kannst du unsere E-Cars an den meisten öffentlichen
              Parkplätzen parken. Wir empfehlen dir dich vor dem Abmieten zu
              versichern, dass du nicht auf einem privaten oder gewerblichen
              Parkplatz (Supermärkte, Behörden etc.), Anrainer-Parkplatz oder
              einem Parkplatz mit einem Spitzenhalteverbot stehst. Genauere
              Infos dazu findest du in den AGB.
            </p>
          </div>
        </details>
      </div>
      <div class="" style={{ marginTop: '1.45em' }}>
        <Element name="newrules">
          <h3>Regeln</h3>
        </Element>
        <details>
          <summary id="faq-phone-charging">Ist Rauchen erlaubt?</summary>
          <div className="wrapper">
            <p>Nein. Rauchen ist in allen E-Cars verboten.</p>
          </div>
        </details>
        <details>
          <summary id="faq-insurance">Sind Tiere erlaubt?</summary>
          <div className="wrapper">
            <p>
              Ja du darfst Tiere gerne mitnehmen, allerdings nur in
              Transportboxen. Ohne diese müssen Tiere leider draußen bleiben.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-insurance">Ist Alkohol erlaubt?</summary>
          <div className="wrapper">
            <p>
              Als FahrerIn musst du in unseren Autos 0,0 Promille haben.
              Ansonsten ist der Versicherungsschutz nicht aktiv.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-insurance">
            Darf ich den/die FahrerIn wechseln?
          </summary>
          <div className="wrapper">
            <p>
              Nein. Der User der das E-Car angemietet hat, darf grundsätzlich
              auch als einziger damit fahren. Ausnahmen findest du in den AGB.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-insurance">Ist Essen oder Trinken erlaubt?</summary>
          <div className="wrapper">
            <p>
              Beides ist natürlich erlaubt. Allerdings solltest du bitte darauf
              achten, dass du das Auto so zurücklässt, wie du es vorgefunden
              hast.
            </p>
          </div>
        </details>
      </div>
      <div class="" style={{ marginTop: '1.45em' }}>
        <Element name="misc">
          <h3>Schäden und Unfälle</h3>
        </Element>
        <details>
          <summary id="faq-phone-charging">
            Was mache ich bei einem Verkehrsunfall?
          </summary>
          <div className="wrapper">
            <p>
              Bitte stell zunächst sicher, dass Niemand verletzt wurde und
              sichere die Unfallstelle ordnungsgemäß ab! Bitte rufe in jedem
              Fall die Polizei. Dies gilt auch bei kleineren Schäden. Es ist in
              jedem Fall deine Pflicht, dir den Namen des oder der anderen
              beteiligten Autohalter, das Kennzeichen und das polizeiliche
              Aktenzeichen zu notieren und uns umgehend einen schriftlichen
              Unfallbericht zukommen zu lassen. Bitte kontaktiere auch umgehend
              unseren Kundenservice! Die Kontaktdaten findest du in unserer App.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-insurance">
            Was mache ich, wenn ich einen Schaden bemerke?
          </summary>
          <div className="wrapper">
            <p>
              Bitte öffne dazu unsere App. Du kannst hier Schäden an den E-Cars
              melden. Ansonsten kannst du auch unseren Kundenservice
              kontaktieren. Die Kontaktdaten findest du ebenfalls in der App.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-insurance">Was mache ich bei einer Panne?</summary>
          <div className="wrapper">
            <p>
              Bitte kontaktiere umgehend unseren Kundenservice. Die Kontaktdaten
              findest du in der App.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-insurance">
            Was passiert, wenn ich ein E-Car leer fahre?
          </summary>
          <div className="wrapper">
            <p>
              Wenn du ein E-Car komplett leer fährst, musst du leider selber die
              Abschleppkosten und die Servicekosten begleichen. Bitte achte
              stets darauf, dass du das E-Car rechtzeitig abstellst.
            </p>
          </div>
        </details>
      </div>
      <div class="" style={{ marginTop: '1.45em' }}>
        <Element name="misc">
          <h3>Sonstige Fragen</h3>
        </Element>
        <details>
          <summary id="faq-phone-charging">
            Kann ich mein Smart Phone im Auto laden?
          </summary>
          <div className="wrapper">
            <p>
              Ja natürlich. Alle unsere E-Cars sind mit Multi-Ladekabel
              ausgestattet.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-insurance">
            Was passiert, wenn ich durchs Radar fahre?
          </summary>
          <div className="wrapper">
            <p>
              Die Strafe musst du leider selber bezahlen. Du erhältst dazu eine
              Benachrichtigung per E-Mail von uns.{' '}
            </p>
          </div>
        </details>
      </div>
      <div class="" style={{ marginTop: '1.45em' }}>
        <Element name="payment">
          <h3>Bezahlung</h3>
        </Element>
        <details>
          <summary id="faq-howtopay">
            Wie kann ich meine Fahrten bezahlen?
          </summary>
          <div className="wrapper">
            <p>
              Derzeit bieten wir ausschließlich Kreditkarten als Zahlungsmittel
              an. Die User sind verpflichtet, genügend Geld auf der verwendeten
              Karte zu haben, um den Eloop-Service nutzen zu können.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-cc-decline">
            Meine Kreditkarte wurde abgelehnt. Was kann ich tun?
          </summary>
          <div className="wrapper">
            <p>
              Bitte stelle zunächst sicher, dass deine Kreditkarte nicht
              abgelaufen ist und dass der Kreditrahmen ausreicht bzw. genügend
              Geld auf der Karte ist, um deine Fahrten bezahlen zu können. Wenn
              dies der Fall ist und es trotzdem nicht funktioniert, kontaktiere
              uns bitte direkt unter 
              <a href="mailto:office@eloop.at">office@eloop.at</a>
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-cc-notcharged">
            Der offene Betrag konnte nicht von meiner Kreditkarte abgebucht
            werden. Was kann ich tun?
          </summary>
          <div className="wrapper">
            <p>
              Wir versuchen insgesamt 3 mal den Betrag von der Kreditkarte
              abzubuchen. Sollte dies nicht funktionieren, liegt es höchst
              wahrscheinlich daran, dass die Kreditkarte abgelaufen oder zu
              wenig Kreditrahmen bzw. Geld auf der Karte ist. Die User sind
              verpflichtet, denn offenen Betrag baldmöglichst zu begleichen.
              Bitte kontaktiere uns dazu direkt unter 
              <a href="mailto:office@eloop.at">office@eloop.at</a>
            </p>
          </div>
        </details>
      </div>
    </Container>
  </>
)

export default Faq
