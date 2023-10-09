import { useContext } from 'react';
import ToggleSwitch from '../toggleSwitch';
import { ThemeContext } from '../../ThemeContext';
import githubMark from '/assets/icons/github-mark.svg';
import githubMarkWhite from '/assets/icons/github-mark-white.svg';

const Header = () => {
  const { state } = useContext(ThemeContext);
  let githubIcon = state.themeMode === 'dark' ? githubMarkWhite : githubMark;

  return (
    <header className="h-16 bg-orange-200 dark:bg-orange-800 flex items-center justify-center">
      <div className="absolute left-0 ml-2">
        <a href="https://www.github.com/prateek1998" target="_blank">
          <img width="42px" src={githubIcon} className="logo" alt="github profile" />
        </a>
      </div>
      <h2 className="text-xl md:text-3xl font-bold text-orange-700 dark:text-orange-200 capitalize">
        Contact list app
      </h2>
      <div className="absolute right-0 mr-2">
        <ToggleSwitch />
      </div>
    </header>
  );
};

export default Header;
