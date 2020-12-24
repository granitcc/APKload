import React,{useState} from 'react';
import {IntlProvider} from 'react-intl'
import * as locales from './languages/locale.js'
import translate from './languages/translate'
import {DataLocaleStorage} from './localestorage'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SigninPage from './pages/signin'
import SingupPage from './pages/singup'
import Home from './pages';
import ContactusPage from './pages/contactus';
import AboutusPage from './pages/aboutus';
import SubmitapkPage from './pages/submitapk';
import PaymentPage from './pages/payment'
import ApkloadinstallPage from './pages/apkloadinstall';
import InstallPage from './pages/install';
import ApkloadappfeaturesPage from './pages/apkloadappfeatures';
import DiscoverPage from './pages/discover';
import {localecontext} from './context/localcontext'
import GamesDetailPage from './pages/gamesdetail';
import GamesPage from './pages/games.js';
import AppPages from './pages/app';
import BlogPages from './pages/blog';



function App() {
  const [locale,setLocale] = useState(DataLocaleStorage.getLocale() || locales.en )
   
  return (
    <IntlProvider locale={locale} formats={{number:"en"}} messages={translate[locale]}> 
    <localecontext.Provider value={{locale,setLocale}} >

    <Router>

       <Switch>
         <Route path="/" component={Home} exact />
         <Route path="/signin" component={SigninPage} exact />
         <Route path="/singup" component={SingupPage} exact />
         <Route path="/contactus" component={ContactusPage} exact />
         <Route path="/aboutus" component={AboutusPage} exact />
         <Route path="/submitapk" component={SubmitapkPage} exact />
         <Route path="/payment" component={PaymentPage} exact />
         <Route path="/apkloadinstall" component={ApkloadinstallPage} exact />
         <Route path="/install" component={InstallPage} exact />
         <Route path="/apkloadappfeatures" component={ApkloadappfeaturesPage} exact />
         <Route path="/discover" component={DiscoverPage} exact />
         <Route path="/gamesdetail" component={GamesDetailPage}  exact  />
         <Route path="/games" component={GamesPage}  exact  />
         <Route path="/app" component={AppPages}  exact  />
         <Route path="/blog" component={BlogPages}  exact  />



         
          </Switch>
      
    </Router>
    </localecontext.Provider>
    </IntlProvider>
  );
}

export default App;
