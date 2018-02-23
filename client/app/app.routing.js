"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var cryptomap_component_1 = require("./cryptomap.component");
var profile_component_1 = require("./profile.component");
var friends_component_1 = require("./friends.component");
var trading_component_1 = require("./trading.component");
var FAQ_component_1 = require("./FAQ.component");
var walletrequest_component_1 = require("./walletrequest.component");
var myWallet_component_1 = require("./myWallet.component");
var settings_component_1 = require("./settings.component");
var register_component_1 = require("./register.component");
var welcome_component_1 = require("./welcome.component");
var mapsmenu_component_1 = require("./mapsmenu.component");
var poststatus_component_1 = require("./poststatus.component");
var requestbitcoin_component_1 = require("./requestbitcoin.component");
var appRoutes = [
    {
        path: '',
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'request',
        component: requestbitcoin_component_1.RequestComponent
    },
    {
        path: 'mapsmenu',
        component: mapsmenu_component_1.MapsMenuComponent
    },
    {
        path: 'poststatus',
        component: poststatus_component_1.PostStatusComponent
    },
    {
        path: 'map',
        component: cryptomap_component_1.CryptoMapComponent
    },
    {
        path: 'trading',
        component: trading_component_1.tradingComponent
    },
    {
        path: 'friends',
        component: friends_component_1.FriendsComponent
    },
    {
        path: 'linkwallet',
        component: myWallet_component_1.WalletComponent
    },
    {
        path: 'newwallet',
        component: walletrequest_component_1.NewWalletComponent
    },
    {
        path: 'settings',
        component: settings_component_1.SettingsComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'FAQ',
        component: FAQ_component_1.FAQComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map