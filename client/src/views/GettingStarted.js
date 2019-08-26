import React from 'react';
import { CenterPiece } from '../styles/GenStyling';
import { SpiralBar } from '../styles/ImgStyling';
import { TopHeader, ContentSlate, Section, SecHeader, Tip } from '../styles/GetStartStyling';

const GettingStarted = () => (
  <CenterPiece>
    <SpiralBar />
    <TopHeader>Beginner's Guide to Uncharted Suns</TopHeader>
    <ContentSlate>
      <Section>
        <SecHeader>Getting Started</SecHeader>
        <hr/>
        <p>
          Uncharted Suns – or UcS – is an open source science fiction series where you – the members – get an
          opportunity to create star nations, corporations, organizations, and characters in the universe.
          There are many ways to take part in US. You can also write your own stories, but most people are
          going to get their start in US building their own group within the verse. We’ll assume you have
          created an account, but if you haven’t, click the “Login” button in the upper right-hand corner
          and create an account!
        </p>
        <p>
          If you are curious about what you can do and how to do it, visit our “How To” section.
        </p>
      </Section>
      <Section>
        <SecHeader>Your Homepage</SecHeader>
        <hr/>
        <p>
          The first place you’ll want to visit is your homepage. The quickest way to get to it is by clicking
          the “Profile” icon after you log in. From there you can access all of the key features of the site.
          Learn more about your homepage by visiting Your Homepage.
        </p>
        <Tip>
          <span style={{fontWeight: 'bolder'}}>Tip!</span> Access to a lot of the key features of the profile page – like to your nations, corporations,
          factions, inventory, and messages – can be had by clicking the 3 horizontal bars in the upper
          right-hand corner and accessing the drop-down menu.
        </Tip>
      </Section>
      <Section>
        <SecHeader>Learning the Universe</SecHeader>
        <hr/>
        <p>
          Before adding content of your own, it’s a good idea to peruse preexisting articles, such as the
          timeline, communications, and a few star-nation pages to get a feel for the universe. Your best
          source of information will often be other members, so feel free to ask questions in the forum or
          find members live on our Discord Server. Here are some other great starting points:
        </p>
        <ul>
          <li>
            UcS Timeline – Learn about the history of the ‘verse from mankind’s first trip to Mars to the
            founding of some of the largest star nations in the galaxy.
          </li>
          <li>
            Faster Than Light Travel (MAG Drive) – Learn about Faster Than Light Travel and near Faster
            Than Light travel in the UcS Universe.
          </li>
          <li>
            Interstellar Communications – Figure out how communications across the stars work in
            Uncharted Suns including everything from couriers to the famous Ansibles.
          </li>
          <li>
            Types of Starships – Learn about the military and civilian starships that roam the galaxy.
          </li>
          <li>
            Types of Starship Weaponry – Now that you know the ships, learn how to arm them.
          </li>
          <li>
            Types of Starcraft – The lesser cousins of starships, learn about the small craft that duck and
            dodge between planets and stars.
          </li>
        </ul>
      </Section>
      <Section>
        <SecHeader>Adding to the 'Verse</SecHeader>
        <hr/>
        <p>
          Once you’ve learned a little about the US universe, feel free to add content. Just make sure to keep
          it within the constraints of the universe’s technology and lore-friendly realism, and new users are
          limited to only one “sphere of influence,” as explained in the “How to Make a Star Nation” page. Feel
          free to add as many corporations, factions, characters, starships, or whatever you need to help
          expose your ideas to everyone else or give background for a story or roleplay.
        </p>
        <p>
          If you think your content needs improvement, just ask the founder, crew members, or another member
          for assistance.
        </p>
      </Section>
      <Section>
        <SecHeader>Becoming Canon</SecHeader>
        <hr/>
        <p>
          Once you are satisfied with your content, it’s time to make it canon. Becoming canon is the highest
          honor your content can get in US. It becomes part of the permanent lore of the universe and will
          find its way into other player’s stories, creations, and games. To learn more about this process,
          read the “becoming canon” section of our “how to.”
        </p>
      </Section>
    </ContentSlate>
  </CenterPiece>
);

export default GettingStarted;
// export default class GettingStarted extends React.Component {

// }