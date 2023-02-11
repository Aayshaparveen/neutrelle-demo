import "./style.css";
import React from "react";
const OurMission = () => {
  return (
    <>
      <div className="Main-container">
        <div>
          <img
            className="left-img"
             src="./image/illustration-mission-page-left-1.png" />
            
        </div>
        <div className="Mission-container">
          <h2 className="main-heading">Our Mission</h2>
          <div className="img-box1">
            <img src="./image/icon-quote-left-1.png"></img>
          </div>
          <h2 className="sub-heading">
            Carbon capture and storage is extremely important, but it isnt
            everything ... To create a stable and healthy world, it is
            biodiversity that we ought to be cherishing.
          </h2>
          <div className="img-box2">
            <img src="./image/icon-quote-right-1.png"></img>
          </div>
          <div className="para-container">
            <p>
              The idea of Neutrelle was born in response to the 2021 COP26
              Climate Conference in our home city of Glasgow. We were faced with
              two seemingly unreconcilable drivers ; Our automotive passion and
              our desire to minimise our impact on the planet.
            </p>
            <p>
              We began measuring the emissions from our vehicles and worked
              locally planting native tree species to balance them out. We
              decided to create an easy way for other automotive enthusiasts to
              make a positive impact on the planet through their passion and
              make sustainable motoring simpler. From this idea Neutrelle became
              what it is today.
            </p>
            <p>
              There are many benefits to the planet of the woodlands that we
              create, in addition to the carbon sequestration potential. One of
              these is the opportunity to enhance local biodiversity and secure
              ecosystems. Our projects are undertaken with this in mind and thus
              comprise a mix of species which allows biodiversity to flourish.
              Diverse woodlands have greater resilience
            </p>
          </div>
          <div>
            <h2 className="bottom-heading">Extraordinary Experiences</h2>
          </div>
          <div className="para-container2">
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div>
            <h2 className="heading3">Our Core Values</h2>
          </div>
          <div className="para-container3">
            <p>
              Committed to educating society about environmental awareness and
              the increasing impact of carbon footprints, Neutrelle is confident
              of bringing a change and reducing the planet's deterioration.
            </p>
            <ul>
              <li>Renewable fuels as ideal alternatives</li>
              <li>Limiting global warming with biofuels</li>
              <li>Dedicated to reducing the fuel carbon footprint</li>
            </ul>
          </div>
          <div className="values-box">
            <div className="img-box">
              <img src="./image/values.png"></img>
            </div>
            <div className="para-container4">
              <p>
                Another key pillar of our mission is creating woodland spaces
                that people can enjoy. We want woodlands and green spaces to be
                accessible and benefit everyone. It has been shown that spending
                time in nature can improve mental health and well-being.
              </p>
              <p>
                Time in nature has even been prescribed to patients by the NHS
                to treat a plethora of ailments. We believe that no
                reforestation project can be a complete success if it does not
                also benefit people.
              </p>
            </div>
          </div>
          <div className="para-container5">
            <p>
              Neutrelle was founded on the principle of sustainable motoring. We
              all know that to address the climate emergency we must phase out
              fossil fuels as quickly as possible. Neutrelle exists to provide a
              sustainable transition from fossil fuel use to carbon neutral
              sustainable motoring. Achieving this will only be possible when a
              drop-in fossil fuel alternative is readily available.
            </p>
            <p>
              We are committed to supporting the development of carbon neutral
              fuels to reach this transition point as soon as possible. The good
              news for automotive enthusiasts is that more talent is being
              deployed in this area than ever before. For example, in 2026
              Formula 1 will use a drop-in carbon neutral fuel in it’s Hybrid V6
              Power units. The development to bring these fuels to market for
              consumer use is underway but must be accelerated to reach out
              climate goals.
            </p>
          </div>
          <div className="last-img-box1">
            <img src=".//image/icon-quote-left-1.png"></img>
          </div>
          <h2 className="sub-heading2">
            E fuels offer such a wonderful opportunity ... the carbon circle is
            completely neutral so the carbon utilised to produce that fuel is
            the same quantity as the carbon emitted from the internal combustion
            engine. It means that the engines do not add anything to the carbon
            dioxide in the atmosphere.
          </h2>
          <br />
          <span>- Ross Brawn</span>
          <div className="last-img-box2">
            <img src="./image/icon-quote-right-1.png"></img>
          </div>
          <div className="para-container6">
            <p>
              For automotive enthusiasts motorsport is an expression of pure
              joy. Racing series around the world are making efforts to become
              more sustainable and we are committed to aiding this process. A
              lot of great work has been done carried out in this area however,
              there is still much waste which is very difficult to recycle.
            </p>
            <p>
              We aim to repurpose the hard to recycle waste in an effort to
              fully close the loop for motorsport. Some of our first projects
              have been working with Formula Student teams in the UK to promote
              sustainable practises in aspiring motorsport engineers and foster
              the next generation of talent.
            </p>
          </div>
          <div className="last-para">
            <p>
              Transparency is at the heart of the Neutrelle mission. Alongside
              geotagging every tree we plant, in the event of selling your
              vehicle we make it possible to transfer the impact status of the
              vehicle to the new owner. This ensures the positive impact status
              of the vehicle can be carried with it for miles to come.
            </p>
          </div>
        </div>
        <div>
          <img
            className="right-img"
            src="./image/illustration-mission-page-right.png"
          ></img>
        </div>
      </div>
      <div className="last-impact">
        <div className="section">
          <div className="box1">
            <h2>Let's decarbonise our World!</h2>
          </div>
          <div className="box2">
            <button className="impact-button">
              <a href="./ImpactCalculator">Make your Impact</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
