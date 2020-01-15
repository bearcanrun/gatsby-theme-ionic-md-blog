import Typography from 'typography';
import Github, { IDefaultStyles } from 'typography-theme-github';

Github.overrideThemeStyles = (): IDefaultStyles => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  };
};

delete (Github as any).googleFonts; // eslint-disable-line

const typography = new Typography(Github);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;