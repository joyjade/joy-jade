const isDev = process.env.ELEVENTY_ENV === 'development';

// const baseUrl = isDev ? `localhost:8081` : `https://www.joy-jade.com/`;
const baseUrl = isDev ? `localhost:8081` : `localhost:8081`;

const site = {
  title: 'JJ',
  description: 'in dev',
  baseUrl,
}

module.exports = site;