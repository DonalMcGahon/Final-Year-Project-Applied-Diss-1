"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var status_model_1 = require("../DataModals/status.model");
var status_model_2 = require("../DataModals/status.model");
var blockstats_modal_1 = require("../DataModals/blockstats.modal");
var pools_modal_1 = require("../DataModals/pools.modal");
var blockticker_modal_1 = require("../DataModals/blockticker.modal");
var status_model_3 = require("../DataModals/status.model");
var request_modal_1 = require("../DataModals/request.modal");
var StatusService = /** @class */ (function () {
    // Http Contructor for setting up connection
    function StatusService(http) {
        this.http = http;
    }
    StatusService.prototype.getAllStatus = function () {
        return this.http.get('http://localhost:3000/Tx/Local/All')
            .map(function (data) {
            console.log("got here 1!");
            var extracted = data.json();
            var msgArray = [];
            console.log("got extracted here!");
            var status;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                status = new status_model_1.Status(element.username, element.date, element.title, element.text, element.valueAtTime, element.sentAmount, element.bitcoinAddress, element.receivingAddress, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    StatusService.prototype.getStatusByUsername = function (user) {
        return this.http.get('http://localhost:3000/Tx/Local/' + user)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                status = new status_model_1.Status(element.username, element.date, element.title, element.text, element.valueAtTime, element.sentAmount, element.bitcoinAddress, element.receivingAddress, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    StatusService.prototype.getBalStatusByUsername = function (user) {
        return this.http.get('http://localhost:3000/Tx/Local/bal/' + user)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                status = new status_model_2.BalStatus(element.username, element.date, element.title, element.text, element.balance, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    StatusService.prototype.getStatsStatusByUsername = function (user) {
        return this.http.get('http://localhost:3000/Tx/Local/stats/' + user)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                status = new blockstats_modal_1.StatsStatus(element.username, element.date, element.title, element.text, element.market_price_usd, element.hash_rate, element.total_fees_btc, element.n_btc_mined, element.n_tx, element.n_blocks_mined, element.totalbc, element.n_blocks_total, element.estimated_transaction_volume_usd, element.blocks_size, element.miners_revenue_usd, element.nextretarget, element.difficulty, element.estimated_btc_sent, element.miners_revenue_btc, element.total_btc_sent, element.trade_volume_btc, element.trade_volume_usd, element.timestamp, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    StatusService.prototype.getPoolStatusByUsername = function (user) {
        return this.http.get('http://localhost:3000/Tx/Local/pools/' + user)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                status = new pools_modal_1.PostPools(element.username, element.date, element.title, element.text, element.Unknown, element.GBMiners, element.SlushPool, element.KanoCKPool, element.BitFury, element.AntPool, element.F2Pool, element.ViaBTC, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    StatusService.prototype.getPriceStatusByUsername = function (user) {
        return this.http.get('http://localhost:3000/Tx/Local/price/' + user)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                status = new blockticker_modal_1.PostTicker(element.username, element.date, element.title, element.text, element.last, element.buy, element.sell, element.symbol, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    StatusService.prototype.getFlagsStatusByUsername = function (user) {
        return this.http.get('http://localhost:3000/Tx/Local/flag/' + user)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                status = new status_model_3.FlagStatus(element.username, element.date, element.title, element.text, element.locationName, element.contact, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    StatusService.prototype.getReqStatusByUsername = function (user) {
        return this.http.get('http://localhost:3000/Tx/Local/requests/' + user)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var status;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                status = new request_modal_1.ReqStatus(element.username, element.date, element.title, element.text, element.amount, element.address, element.lat, element.long);
                msgArray.push(status);
            }
            return msgArray;
        });
    };
    StatusService.prototype.getTxById = function (id) {
        return this.http.get('http://localhost:3000/Tx/' + id)
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                message = new status_model_1.Status(element.username, element.date, element.title, element.text, element.valueAtTime, element.sentAmount, element.bitcoinAddress, element.receivingAddress, element.lat, element.long);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    StatusService.prototype.saveBalPost = function (Tx) {
        console.log(Tx);
        var body = JSON.stringify(Tx);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/Tx/Status/bal', body, { headers: headers });
    };
    StatusService.prototype.saveStatsPost = function (Tx) {
        console.log(Tx);
        var body = JSON.stringify(Tx);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/Tx/Status/stats', body, { headers: headers });
    };
    StatusService.prototype.savePoolPost = function (Tx) {
        console.log(Tx);
        var body = JSON.stringify(Tx);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/Tx/Status/pool', body, { headers: headers });
    };
    StatusService.prototype.savePricePost = function (Tx) {
        console.log(Tx);
        var body = JSON.stringify(Tx);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/Tx/Status/price', body, { headers: headers });
    };
    StatusService.prototype.saveFlagPost = function (Tx) {
        console.log(Tx);
        var body = JSON.stringify(Tx);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/Tx/Status/flag', body, { headers: headers });
    };
    StatusService.prototype.saveReqPost = function (Tx) {
        console.log(Tx);
        var body = JSON.stringify(Tx);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/Tx/Status/request', body, { headers: headers });
    };
    StatusService.prototype.saveTx = function (Tx) {
        console.log(Tx);
        var body = JSON.stringify(Tx);
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/Tx/Status/reg', body, { headers: headers });
    };
    StatusService.prototype.deleteStatusWithTitle = function (t) {
        console.log(t);
        return this.http
            .delete('http://localhost:3000/Tx/Status/Remove/' + t);
    };
    StatusService.prototype.deleteBalStatusWithTitle = function (t) {
        console.log(t);
        return this.http
            .delete('http://localhost:3000/Tx/BalStatus/Remove/' + t);
    };
    StatusService.prototype.deleteStatsStatusWithTitle = function (t) {
        console.log(t);
        return this.http
            .delete('http://localhost:3000/Tx/StatsStatus/Remove/' + t);
    };
    StatusService.prototype.deletePoolStatusWithTitle = function (t) {
        console.log(t);
        return this.http
            .delete('http://localhost:3000/Tx/PoolStatus/Remove/' + t);
    };
    StatusService.prototype.deletePriceStatusWithTitle = function (t) {
        console.log(t);
        return this.http
            .delete('http://localhost:3000/Tx/PriceStatus/Remove/' + t);
    };
    StatusService.prototype.deleteFlagStatusWithTitle = function (t) {
        console.log(t);
        return this.http
            .delete('http://localhost:3000/Tx/FlagStatus/Remove/' + t);
    };
    StatusService.prototype.deleteReqStatusWithTitle = function (t) {
        console.log(t);
        return this.http
            .delete('http://localhost:3000/Tx/ReqStatus/Remove/' + t);
    };
    StatusService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], StatusService);
    return StatusService;
}());
exports.StatusService = StatusService;
//# sourceMappingURL=status.service.js.map