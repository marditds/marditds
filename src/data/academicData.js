export const logos = require.context('../assets', true);

export const academicData = [{
    id: 'bitbeat',
    title: 'BitBeat',
    avatar: logos('./bitbeatLogo.png'),
    url: 'https://bitbeatshop.netlify.app',
    desc: 'Audio NFT Shop',
    myrole: 'As part of my senior project for the BS degree in Computer Science at California State University, Northridge, I used ReactJS to develop the frontend of the web application for BitBeat. I connected the user interface to Moralis database for user registration and fetched/ displayed user and audio data. I integrated the MetaMask crypto wallet and created an audio player for minted audio playback within the website. Additionally, I actively participated in the decision-making process for the user interface design.',
    github: 'https://github.com/marditds/BitBeat',
    type: 'Academic - CSUN'

}]