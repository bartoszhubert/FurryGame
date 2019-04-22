/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function() {\r\n    \r\n    function Furry() {\r\n        this.x = 0\r\n        this.y = 0\r\n        this.direction = ''\r\n    }\r\n    function Coin() {\r\n        this.x = Math.floor(Math.random() * 10)\r\n        this.y = Math.floor(Math.random() * 10)\r\n    }\r\n    function Game() {\r\n        this.furry = new Furry()\r\n        this.coin = new Coin()\r\n        this.score = 0\r\n        this.odmiana = ''\r\n        this.result = document.querySelector(\"#score div strong\")\r\n        this.board = document.querySelectorAll('#board > div')\r\n        this.index = function index(x, y) {\r\n            return x + (y * 10);\r\n        }\r\n        this.showFurry = function showFurry() {\r\n            this.hideVisibleFurry()\r\n            this.board[this.index(this.furry.x, this.furry.y)] && this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry')\r\n        }\r\n        this.showCoin = function showCoin() {\r\n            this.board[this.index(this.coin.x, this.coin.y)].classList.add(\"coin\")\r\n        }\r\n        let self = this\r\n        this.startGame = function startGame() {\r\n            this.idSetInterval = setInterval(() => {\r\n                self.moveFurry()\r\n            }, 200);\r\n        } \r\n        this.moveFurry = function moveFurry() {\r\n            //this.hideVisibleFurry()\r\n            if (this.furry.direction === \"right\") {\r\n                this.furry.x++\r\n \t\t\t}\r\n \t\t\telse if (this.furry.direction === \"left\") {\r\n    \t\t\tthis.furry.x--\r\n \t\t\t}\r\n \t\t\telse if (this.furry.direction === \"up\") {\r\n    \t\t\tthis.furry.y--\r\n \t\t\t}\r\n \t\t\telse if (this.furry.direction === \"down\") {\r\n    \t\t\tthis.furry.y++\r\n            }\r\n            console.log(this.furry.x, this.furry.y)\r\n            this.showFurry()\r\n            this.gameover()\r\n            this.checkCoinCollision()\r\n        }\r\n        this.hideVisibleFurry = function hideVisibleFurry() {\r\n            let posfur = document.querySelector('.furry')\r\n            posfur && posfur.classList.remove('furry')\r\n        }\r\n        this.hideVisibleCoin = function hideVisibleCoin() {\r\n            let poscoin = document.querySelector('.coin')\r\n            poscoin && poscoin.classList.remove('coin')\r\n        }\r\n        this.switchFurry = function switchFurry(e){\r\n            switch (e.which){\r\n                case 37:\r\n                    this.furry.direction = \"left\"\r\n                    break\r\n                case 38:\r\n                    this.furry.direction = \"up\"\r\n                    break\r\n                case 39:\r\n                    this.furry.direction = \"right\"\r\n                    break\r\n                case 40:\r\n                    this.furry.direction = \"down\"\r\n                    break\r\n            }\r\n        }\r\n        this.checkCoinCollision = function checkCoinCollision() {\r\n            if (this.furry.x == this.coin.x && this.furry.y == this.coin.y) {\r\n                this.score++\r\n                this.result.innerText = this.score\r\n                this.hideVisibleCoin()\r\n                this.coin = new Coin()\r\n                this.showCoin()\r\n            }\r\n        }\r\n        this.gameover = function gameover() {\r\n            if (this.index(this.furry.x, this.furry.y) > 100 || this.index(this.furry.x, this.furry.y) < 0 || this.furry.x < 0 || this.furry.x > 9) {\r\n                console.log('game over', this.furry.y)\r\n                clearInterval(this.idSetInterval)\r\n                this.hideVisibleFurry()\r\n                this.hideVisibleCoin()\r\n                if (this.score === 1) {\r\n                    this.odmiana = 'punkt'\r\n                } else if (this.score === 2 || this.score === 3 || this.score === 4) {\r\n                    this.odmiana = 'punkty'\r\n                } else {\r\n                    this.odmiana = 'punktów'\r\n                }\r\n                confirm(`                           GAME OVER\r\n                Twój wynik to ${this.score} ${this.odmiana}\r\n                Chcesz zagrać ponownie?`)\r\n                confirm && location.reload(true)\r\n            }\r\n        }\r\n    }\r\n    let game = new Game()\r\n    game.showFurry()\r\n    game.showCoin()\r\n    game.startGame()\r\n    game.moveFurry()\r\n    document.addEventListener('keydown', function(e) {\r\n        game.switchFurry(e)\r\n    })\r\n})\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });