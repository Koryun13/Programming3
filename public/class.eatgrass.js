Animal = require('./animal');

module.exports = class Xotaker extends Animal {

    constructor(x, y, index) {
        super(x, y, index);
        this.energy = Math.round(Math.random() * 6);
        this.multiply = Math.round(Math.random() * 6);
        this.speed = 4;
        matrix[this.y][this.x] = this.index;
    }

    sharjvel() {
        var vand1;
        vand1 = this.yntrelVandak(0);
        var vand = vand1[Math.floor(Math.random() * vand1.length)];
        if (vand && this.multiply >= this.speed / 4) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 2;
            this.multiply = 0;
        }
    }

    utel() {
        this.energy--;
        this.multiply++;
        var num = [1, 1.5];
        var num_choice = num[Math.floor(Math.random() * num.length)];
        var vand1;
        vand1 = this.yntrelVandak(num_choice);
        var vand = vand1[Math.floor(Math.random() * vand1.length)];
        if (vand && this.multiply >= this.speed / 4) {
            this.energy += this.speed;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 2;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                }
            }
        }
        else this.sharjvel();

    }

    bazmanal() {
        if (this.index % 2 == 0) {
            var Ffinder = this.yntrelVandak(this.index + 0.5)
            if (Ffinder) {
                var vand1;
                vand1 = this.yntrelVandak(0);
                var vand = vand1[Math.floor(Math.random() * vand1.length)];
                if (vand && this.energy >= this.speed) {
                    this.energy = 1;
                    var newxotaker = new Xotaker(vand[0], vand[1], 2);
                    xotakerArr.push(newxotaker);
                }
            }

        }

    }

    mahanal() {
        if (this.energy >= this.speed / 4) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
    }
}
