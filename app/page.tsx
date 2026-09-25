import AttendanceConfirmation from "./components/attendance_confirmation_form";
import Header from "./components/header";
import MusicControl from "./components/music-control";

export default function Home() {

  return (
    <>
      <MusicControl />

      {/* Header + Hero */}
      <Header />
      {/* Header + Hero */}

      <main>
        <section className="section intro" id="story">
          <div className="section-label">01 — OUR STORY</div>
          <div className="two-col">
            <div>
              <p className="script">A love worth celebrating</p>
              <h2>From a beautiful beginning to forever.</h2>
            </div>
            <div className="story-copy">
              <p>Every love story has a beginning, but ours is a journey filled with friendship, laughter, prayer, growth
                and countless moments that brought two hearts closer.</p>
              <p>Now, with grateful hearts and joyful anticipation, we invite you to celebrate the next chapter with us.</p>
              <p className="signature">With love,<br /><strong>Temitope & Oladele</strong></p>
            </div>
          </div>
        </section>

        <section className="section journey" id="journey">
          <div className="section-label">02 — OUR JOURNEY</div>
          <div className="center-heading">
            <p className="script">The moments that led us here</p>
            <h2>Our Journey</h2>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-dot">01</div>
              <div><span>THE BEGINNING</span>
                <h3>When two paths crossed</h3>
                <p>For years, we had been attending the same church, Redeemed Christian Church of God. We served in the same youth department and had crossed paths many times, but neither of us imagined where our story would eventually lead.

One Sunday after church, during a youth relationship programme, we found ourselves sitting beside each other. The meeting was interactive, full of conversations and laughter, and somewhere in between it all came a simple question: “Are you in a relationship?”

The answer was “No.”

And somehow, that simple answer opened the door to a beautiful journey.</p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-dot">02</div>
              <div><span>THE JOURNEY</span>
                <h3>From friendship to love</h3>
                <p>A few days later, our conversations moved from the church hall to our DMs. What started as friendship slowly began to take a different shape.

We already knew each other, but we started getting to know each other in a new way—our dreams, our personalities, our faith, our hopes and the things that mattered to us.

After about two months, in August, friendship became a relationship. And just like that, a new chapter of our story began.</p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-dot">03</div>
              <div><span>THE YES</span>
                <h3>From Two families, one journey</h3>
                <p>On 14 January 2026, on her birthday, came another unforgettable moment: a proposal and a beautiful “Yes.” 💍

From that moment, our conversations became plans for a future together.

She met my parents in December, I met her parents in January, and on 13 July 2026, our families came together for our formal introduction.

What began between two people was becoming the joining of two families.</p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-dot">04</div>
              <div><span>FOREVER</span>
                <h3>The beginning of our forever</h3>
                <p>Looking back, it amazes us how a simple conversation after church could lead us here.

From strangers who admired each other from a distance, to friends, to partners, to two people preparing to spend the rest of their lives together.

On 05 December 2026, surrounded by our families, friends and loved ones, we will begin the next chapter of our story.

We may not know everything the future holds, but we know the One who holds our future.

And now, we choose forever.

Forever, by His Grace.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section celebration" id="celebration">
          <div className="section-label">03 — THE CELEBRATION</div>
          <div className="center-heading light">
            <p className="script">Save the date</p>
            <h2>Join us as we celebrate love</h2>
          </div>
          <div className="event-grid">
            <article className="event-card">
              <div className="event-icon">♡</div>
              <p className="event-label"></p>
              <h3>ENGAGEMENT</h3>
              <p className="editable">Venue name goes here<br />Anike Titilayo Hope Center,No 4, Bodunrin Street, Ile Ise Awo,
                Abeokuta. </p>
              <p className="editable">Time: 10:00 AM</p>
            </article>
            <article className="event-card featured">
              <div className="event-icon">✦</div>
              <p className="event-label">THE DATE</p>
              <h3>05 December 2026</h3>
              <p>Come dressed to celebrate, laugh, dance and make memories with us.</p>
              <a className="text-link" href="#rsvp">Confirm your attendance →</a>
            </article>
            <article className="event-card">
              <div className="event-icon">♧</div>
              <h3>RECEPTION</h3>
              <p className="editable">Reception venue goes here<br />Anike Titilayo Hope Center,No 4, Bodunrin Street, Ile Ise
                Awo, Abeokuta.</p>
              <p className="editable">Time: 1:00 PM</p>
            </article>
          </div>
        </section>

        <section className="section gallery" id="gallery">
          <div className="section-label">04 — OUR MOMENTS</div>
          <div className="center-heading">
            <p className="script">A few memories</p>
            <h2>Gallery</h2>
          </div>

          <section className="image-slider">
            <div className="slides">
              <img src="/images/img3.jpeg" alt="Photo 1" />
              <img src="/images/img6.jpeg" alt="Photo 2" />
              <img src="/images/img7.jpg" alt="Photo 3" />
              <img src="/images/img4.jpg" alt="Photo 4" />
              
            
            </div>
          </section>
        </section>

        <section className="section gift" id="gift">
          <div className="section-label">05 — WITH LOVE</div>
          <h2>Gifts & Wishes</h2>
          <p className="script">Your presence is our greatest gift</p>
          <div className="wishlist">
            <div className="wish-item"><span>HONEYMOON FUND</span><span className="placeholder">Surprise us</span></div>
            <div className="wish-item"><span>WASHING MACHINE</span><span className="placeholder">₦380,000</span></div>
            <div className="wish-item"><span>TELEVISION</span><span className="placeholder">₦400,000</span></div>
            <div className="wish-item"><span>FOOD PROCESSOR</span><span className="placeholder">₦75,000</span></div>
            <div className="wish-item"><span>i don't know </span><span className="placeholder">₦70,000</span></div>
            <div className="wish-item"><span>AIR FRYER </span><span className="placeholder">₦75,000</span></div>
            <div className="wish-item"><span>INVERTER</span><span className="placeholder">₦2,000,000</span></div>
            <div className="wish-item"><span>SANDWICH MAKER</span><span className="placeholder">₦50,000</span></div>
          </div>
          <div className="gift-card">
            <p>For friends and family who would like to bless us with a gift, details can be added below.</p>
            <div className="account">
              <strong>Bank / Gift Details</strong>
              <span>Bank Name: Opay</span>
              <span>Account Name: TEMITOPE & OLADELE</span>
              <span>Account Number: 8068384394</span>
            </div>
          </div>
        </section>

        <section className="section rsvp" id="rsvp">
          <div className="section-label">06 — RSVP</div>
          <div className="rsvp-box">
            <div>
              <p className="script">We would love to have you</p>
              <h2>Will you celebrate with us?</h2>
              <p>Please confirm your attendance so we can prepare a special place for you.</p>
            </div>
            <AttendanceConfirmation />
          </div>
        </section>

        <section className="map-section">
          <div className="map-placeholder">
            <div>
              <p className="script">Find us here</p>
              <h2>Abeokuta, Nigeria</h2>
              <a className="btn btn-outline" href="https://www.google.com/maps" target="_blank" rel="noopener">OPEN MAPS</a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      < footer >
        <div className="footer-mark">T'O</div>
        <h2>Forever '26</h2>
        <p>Temitope & Oladele</p>
        <p>05 December 2026 · Abeokuta, Nigeria</p>
        <p className="hashtag">#TOForever26</p>
      </footer >
      {/* Footer */}
    </>
  );
}
