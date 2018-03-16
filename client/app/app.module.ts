import { NgModule, ApplicationRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent }  from './LoginComponents/home.component';
import { FriendsComponent }  from './ProfileComponents/friends.component';
import { FAQComponent } from './NavBarComponents/FAQ.component';
import { ProfileComponent }  from './ProfileComponents/profile.component';
import { CryptoMapComponent }  from './MapsComponents/cryptomap.component';
import { TradingComponent} from './TradingComponents/trading.component';
import { WalletComponent }  from './WalletComponents/myWallet.component';
import { NewWalletComponent }  from './WalletComponents/walletrequest.component';
import { SettingsComponent }  from './NavBarComponents/settings.component';
import { RegisterComponent }  from './LoginComponents/register.component';
import { routing } from './app.routing';
import { AuthService } from './services/auth.service';
import { WelcomeComponent } from './LoginComponents/welcome.component';
import { PostStatusComponent } from './StatusComponents/poststatus.component';
import { RequestComponent } from './StatusComponents/requestbitcoin.component';
import { TransactionsComponent } from './StatusComponents/blockchainActivity.component';
import { LoginComponent } from './LoginComponents/login.component'
import { MlabsSearchComponent } from './MlabsComponents/MlabsSearchResults.component';
import { ViewMapComponent } from './MapsComponents/viewMap.component'
import { StatsComponent } from './StatusComponents/blockstats.component'
import { PoolComponent } from './StatusComponents/postpoolstatus.component'
import { SendBTCComponent } from './WalletComponents/sendbtc.component'
import { PostBalanceComponent } from './StatusComponents/postbal.component';
import { FlagComponent } from './StatusComponents/flag.component';
import { GlobalComponent } from './MlabsComponents/global.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notauth.guard';
import { CryptonewsComponent } from './NewsComponents/cryptonews.component';
import { ConvertComponent } from './WalletComponents/convert.component';

@NgModule({
  imports:      [
     BrowserModule,
     routing,
     HttpModule,
     ReactiveFormsModule,
     FormsModule],
  declarations: 
  [ AppComponent,
    HomeComponent, 
    ProfileComponent,
    CryptoMapComponent,
    FriendsComponent,
    StatsComponent,
    WalletComponent,
    RequestComponent,
    PoolComponent,
    ConvertComponent,
    PostBalanceComponent,
    GlobalComponent,
    MlabsSearchComponent,
    PostStatusComponent,
    ViewMapComponent,
    SendBTCComponent,
    FlagComponent,
    TransactionsComponent,
    NewWalletComponent,
    FAQComponent,
    TradingComponent,
    SettingsComponent,
    RegisterComponent,
    WelcomeComponent,
    LoginComponent,
    CryptonewsComponent ],
  exports: [  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, AuthService, AuthGuard, NotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
