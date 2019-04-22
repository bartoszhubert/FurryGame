document.addEventListener('DOMContentLoaded', function() {
    
    function Furry() {
        this.x = 0
        this.y = 0
        this.direction = ''
    }
    function Coin() {
        this.x = Math.floor(Math.random() * 10)
        this.y = Math.floor(Math.random() * 10)
    }
    function Game() {
        this.furry = new Furry()
        this.coin = new Coin()
        this.score = 0
        this.odmiana = ''
        this.result = document.querySelector("#score div strong")
        this.board = document.querySelectorAll('#board > div')
        this.index = function index(x, y) {
            return x + (y * 10);
        }
        this.showFurry = function showFurry() {
            this.hideVisibleFurry()
            this.board[this.index(this.furry.x, this.furry.y)] && this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry')
        }
        this.showCoin = function showCoin() {
            this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin")
        }
        let self = this
        this.startGame = function startGame() {
            this.idSetInterval = setInterval(() => {
                self.moveFurry()
            }, 200);
        } 
        this.moveFurry = function moveFurry() {
            //this.hideVisibleFurry()
            if (this.furry.direction === "right") {
                this.furry.x++
 			}
 			else if (this.furry.direction === "left") {
    			this.furry.x--
 			}
 			else if (this.furry.direction === "up") {
    			this.furry.y--
 			}
 			else if (this.furry.direction === "down") {
    			this.furry.y++
            }
            console.log(this.furry.x, this.furry.y)
            this.showFurry()
            this.gameover()
            this.checkCoinCollision()
        }
        this.hideVisibleFurry = function hideVisibleFurry() {
            let posfur = document.querySelector('.furry')
            posfur && posfur.classList.remove('furry')
        }
        this.hideVisibleCoin = function hideVisibleCoin() {
            let poscoin = document.querySelector('.coin')
            poscoin && poscoin.classList.remove('coin')
        }
        this.switchFurry = function switchFurry(e){
            switch (e.which){
                case 37:
                    this.furry.direction = "left"
                    break
                case 38:
                    this.furry.direction = "up"
                    break
                case 39:
                    this.furry.direction = "right"
                    break
                case 40:
                    this.furry.direction = "down"
                    break
            }
        }
        this.checkCoinCollision = function checkCoinCollision() {
            if (this.furry.x == this.coin.x && this.furry.y == this.coin.y) {
                this.score++
                this.result.innerText = this.score
                this.hideVisibleCoin()
                this.coin = new Coin()
                this.showCoin()
            }
        }
        this.gameover = function gameover() {
            if (this.index(this.furry.x, this.furry.y) > 100 || this.index(this.furry.x, this.furry.y) < 0 || this.furry.x < 0 || this.furry.x > 9) {
                console.log('game over', this.furry.y)
                clearInterval(this.idSetInterval)
                this.hideVisibleFurry()
                this.hideVisibleCoin()
                if (this.score === 1) {
                    this.odmiana = 'punkt'
                } else if (this.score === 2 || this.score === 3 || this.score === 4) {
                    this.odmiana = 'punkty'
                } else {
                    this.odmiana = 'punktów'
                }
                confirm(`                           GAME OVER
                Twój wynik to ${this.score} ${this.odmiana}
                Chcesz zagrać ponownie?`)
                confirm && location.reload(true)
            }
        }
    }
    let game = new Game()
    game.showFurry()
    game.showCoin()
    game.startGame()
    game.moveFurry()
    document.addEventListener('keydown', function(e) {
        game.switchFurry(e)
    })
})