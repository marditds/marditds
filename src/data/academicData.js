import { logos } from "./professionalData";

export const logo = require.context('../assets', true);

export const academicData = [{
    id: 'bitbeat',
    title: 'BitBeat Audio NFT Shop',
    avatar: logos('./bitbeatLogo.png'),
    url: 'https://bitbeatshop.netlify.app'
}]