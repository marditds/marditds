export const logos = require.context('../assets', true);

export const academicData = [{
    id: 'bitbeat',
    title: 'BitBeat',
    avatar: logos('./bitbeatLogo.png'),
    url: 'https://bitbeatshop.netlify.app',
    desc: 'Audio NFT Shop',
    // myrole: 'As a senior project for my Computer Science BS degree at California State University of Northridge, I served as the frontend developer using ReactJS to build and manage BitBeat\'s web application\'s frontend. I took on the responsibility of handling user registration, connecting the interface to the Moralis database, and fetching/ displaying user and audio data. Moreover, I successfully integrated the MetaMask crypto wallet and developed the audio player for seamless playback. Throughout the project, I actively participated in decision - making processes, contributing to the development of the user interface.'
    myrole: 'As part of my senior project for the BS degree in Computer Science at California State University, Northridge, I used ReactJS to develop the frontend of the web application for BitBeat. I connected the user interface to Moralis database for user registration and fetched/ displayed user and audio data. I integrated the MetaMask crypto wallet and created an audio player for minted audio playback within the website. Additionally, I actively participated in the decision-making process for the user interface design.'
}]