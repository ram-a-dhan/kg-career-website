import ReactGA from 'react-ga';

export const clickGA = (category, action) => {
  ReactGA.event({
    category,
    action
  });
};
