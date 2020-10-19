import { connect } from 'react-redux';
import NavBar from './NavBar';
import { changeLanguage, changeTheme, logoutUser } from '../../redux/actions/sessionActions';
import { createStructuredSelector } from 'reselect';
import { selectLanguage, selectTheme, selectAccessToken } from '../../redux/selectors/sessionSelector';
import { ThemeKeyType } from '../../redux/types/sessionType';

export type IStateProps = {
  changeLanguage: (language: string) => void;
  changeTheme: (theme: ThemeKeyType) => void;
  logoutUser: () => void;
  language: string | null;
  theme: ThemeKeyType;
  accessToken: string | null;
}

const mapDispatchToProps = {
  changeLanguage,
  changeTheme,
  logoutUser,
}

const mapStateToProps = createStructuredSelector({
  language: selectLanguage(),
  theme: selectTheme(),
  accessToken: selectAccessToken(),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)