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
            to="/en/pricing"
          >
            Pricing
          </GatsbyLink>
        </li>
        <li className="faqnavitem">
          <Link to="rules" smooth={true} className="faqnavlink" href="#rules">
            Rules
          </Link>
        </li>
        <li className="faqnavitem">
          <Link
            to="accidents"
            smooth={true}
            className="faqnavlink"
            href="#accidents"
          >
            Accidents & Damage
          </Link>
        </li>
        <li className="faqnavitem">
          <Link
            to="payment"
            smooth={true}
            className="faqnavlink"
            href="#payment"
          >
            Payment
          </Link>
        </li>
        <li className="faqnavitem">
          <GatsbyLink
            to="general"
            smooth={true}
            className="faqnavlink"
            to="/en/terms"
          >
            Terms & Conditions
          </GatsbyLink>
        </li>
      </ul>
    </div>
    <Container>
      <Download headline="User manuals to download" />
      <div class="">
        <Element name="general">
          <h3>General</h3>
        </Element>
        <details>
          <summary id="faq-costs">
            What does Best Price Guarantee mean and how are your prices
            determined?
          </summary>
          <div className="wrapper">
            <p>
              Our pricing algorithm guarantees you that you always drive at the
              cheapest price. You can just start a trip and if the hourly rate
              is cheaper than the minute rate, you automatically switch to the
              cheaper rate for you. The same applies, for each additional hour
              and the daily price. As a result, you do not need to decide which
              package to choose or how long you need a car before starting a
              trip.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-how">How can I use the service?</summary>
          <div className="wrapper">
            <p>
              Everything you need is our app, a valid driving licence and a
              credit card. Just download the app in the App Store or Play Store.
              After registering, you can use our e-cars. You can find the
              available cars in the app. You can choose a car and book it
              upfront. When you stand in front of a car, you can unlock it by
              using the app. Next get in the car, press start and enjoy your
              ride!
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-onlyvienna">Where am I allowed to drive?</summary>
          <div className="wrapper">
            <p>
              With our e-cars, you are allowed to drive in the entire EU without
              any additional charges. The car just needs to be back in our home
              zone for ending a trip.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-age">Whats the minimum age to use Eloop?</summary>
          <div className="wrapper">
            <p>
              The minimum age is 18 years. Otherwise, you only need a valid
              driver's license and a credit card.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-charge">
            Do I have to charge the e-car by myself?
          </summary>
          <div className="wrapper">
            <p>
              No. If you notice that the battery of the e-car is coming to an
              end, then please try to complete your ride as soon as possible.
              You can also charge the e-car yourself if you want to use it
              longer. Please note that a ride may not be completed as long as
              the e-car is plugged into a charging station. You can charge our
              cars for free at all Wien Energie charging stations in Vienna. The
              charging card is located in the vehicle.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-charge-where">
            How and where can I charge an e-car?
          </summary>
          <div className="wrapper">
            <p>
              You can charge our cars for free at all Wien Energie charging
              stations in Vienna. At all other stations you have to pay for the
              charging yourself (this also applies for Wien Energie charging
              stations outside of Vienna). For charging you can simply put the
              car to any available charging station. The charging cable is
              located in the trunk of the e-car. Connect one end to the charging
              station and the other to the e-car. Then hold the charging card to
              the RFID reader at the station. As soon as the lights on the
              station turn green, the charging process has started. You can lock
              the car now (The BMW i3 will stop charging when you unlock the car
              while charging). Please note that you are not allowed to end a
              trip while the e-car is charging. However you can pause a trip
              during the charging process and continue it afterwards.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-payment">
            Which payment methods are supported?
          </summary>
          <div className="wrapper">
            <p>Currently we only support credit card payments.</p>
          </div>
        </details>
        <details>
          <summary id="faq-parking">Where can I park?</summary>
          <div className="wrapper">
            <p>
              You can park our e-cars at almost all public car parks. Please
              make sure before ending your trip that you are not on a private or
              commercial parking lot (supermarkets, government agencies, etc.),
              residents parking or a parking lot where parking is not allowed on
              certain days or at certain times, which includes loading and
              delivery areas. More detailed information can be found here{' '}
              <a href="https://eloop.at/en/terms">https://eloop.at/terms/</a>{' '}
              point 8.6.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-homezone">What does Home Zone mean?</summary>
          <div className="wrapper">
            <p>
              This is our area where you are allowed to start or end your trips
              and . But of course you are allowed to drive outside!
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-finishtrip">How do I finish a trip?</summary>
          <div className="wrapper">
            <p>
              First, make sure that you are in the Home Zone. Then simply stop
              the e-car at a parking spot, close the doors and finish the trip
              with the app. In addition, make sure that you are standing in a
              permitted parking lot. More detailed information about the allowed
              parking spaces can be found here{' '}
              <a href="https://eloop.at/en/terms">https://eloop.at/terms/</a>{' '}
              point 8.6.
            </p>
          </div>
        </details>
      </div>
      <div class="" style={{ marginTop: '1.45em' }}>
        <Element name="rules">
          <h3>Rules</h3>
        </Element>
        <details>
          <summary id="faq-smoking">Is smoking allowed?</summary>
          <div className="wrapper">
            <p>No. Smoking is prohibited in all e-cars.</p>
          </div>
        </details>
        <details>
          <summary id="faq-animals">Can I bring my pet?</summary>
          <div className="wrapper">
            <p>
              Yes you are welcome to take animals, but only in transport boxes.
              Without them, animals have to stay outside.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-alcohol">Is alcohol allowed?</summary>
          <div className="wrapper">
            <p>
              No. As a driver, your level of alcohol in the blood must be zero.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-change-driver">
            Is it allowed to switch drivers during a trip?
          </summary>
          <div className="wrapper">
            <p>
              No. The user who has rented the e-car is exclusively allowed to
              drive.{' '}
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-food">Are food and beverages allowed?</summary>
          <div className="wrapper">
            <p>
              Both are allowed inside the cars. However, please make sure that
              you leave the car as you found it.
            </p>
          </div>
        </details>
      </div>
      <div class="" style={{ marginTop: '1.45em' }}>
        <Element name="accidents">
          <h3>Accidents & Damage</h3>
        </Element>
        <details>
          <summary id="faq-accident">
            What do I do in a traffic accident?
          </summary>
          <div className="wrapper">
            <p>
              First, make sure that no one was injured and secure the scene of
              the accident properly! Please call the police in any case. This
              also applies to minor damages. In any case, it is your duty to
              take note of the name of the other car holder (s) involved, the
              number plate and the police file number, and to send us a written
              accident report immediately. Please contact our customer service
              right away as well! The contact details can be found in our app.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-damage">
            What do I do if I notice any damages?
          </summary>
          <div className="wrapper">
            <p>
              Please open our app. You can report damages here. Otherwise, you
              can also contact our customer service. The contact details can
              also be found in the app.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-breakdown">
            What do I do in the event of a breakdown?
          </summary>
          <div className="wrapper">
            <p>
              Please contact our customer service immediately. The contact
              details can be found in the app.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-empty">What happens if I empty an e-car?</summary>
          <div className="wrapper">
            <p>
              If you drive an e-car completely empty, you have to pay the towing
              costs and the service costs yourself. Please always make sure that
              you stop the e-car with enough charge left.
            </p>
          </div>
        </details>
      </div>
      <div class="" style={{ marginTop: '1.45em' }}>
        <Element name="misc">
          <h3>Other Questions</h3>
        </Element>
        <details>
          <summary id="faq-phone-charging">
            Can I charge my smartphone in the car?
          </summary>
          <div className="wrapper">
            <p>
              Yes of course. All our e-cars are equipped with multi-charging
              cables.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-insurance">Are the cars insured?</summary>
          <div className="wrapper">
            <p>Yes. All e-cars have a liability insurance.</p>
          </div>
        </details>
        <details>
          <summary id="faq-penalty">
            What happens if I drive through a speed trap?
          </summary>
          <div className="wrapper">
            <p>
              Well, this happens. Unfortunately, you have to pay the penalty
              yourself. You will receive a notification by e-mail from us.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-empty-phone">
            What happens if my smartphone battery goes flat during the rental
            process?
          </summary>
          <div className="wrapper">
            <p>
              The rental process continues until you end your trip with the app.
              So please make sure that the smartphone has enough battery to
              complete a rental process. You will also find multi-charging
              cables, which are compatible to most phones in our E-Cars.
            </p>
          </div>
        </details>
      </div>
      <div class="" style={{ marginTop: '1.45em' }}>
        <Element name="payment">
          <h3>Payment</h3>
        </Element>
        <details>
          <summary id="faq-howtopay">How can I pay for my trips?</summary>
          <div className="wrapper">
            <p>
              Currently, credit card is the only supported payment method. If
              you use a debit card, please make sure that you have enough money
              on your card to use the Eloop service.
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-cc-decline">
            My credit card was declined. What can I do?
          </summary>
          <div className="wrapper">
            <p>
              First, make sure that your credit card has not expired and that
              the credit limit is sufficient. When using a debit card please
              also check that there is enough money on the card to pay for your
              trips. If this is the case and it still does not work, please
              contact us directly by mail -{' '}
              <a href="mailto:office@eloop.at">office@eloop.at</a>
            </p>
          </div>
        </details>
        <details>
          <summary id="faq-cc-notcharged">
            The open amount could not be debited from my credit card. What can I
            do?
          </summary>
          <div className="wrapper">
            <p>
              We try a total of 3 times to debit the amount from the credit
              card. If this does not work, it is most likely because the credit
              card has expired or there is not enough credit or money on the
              card. The users are obliged to settle the outstanding amount as
              soon as possible. Please contact us directly by mail -{' '}
              <a href="mailto:office@eloop.at">office@eloop.at</a>
            </p>
          </div>
        </details>
      </div>
    </Container>
  </>
)

export default Faq
