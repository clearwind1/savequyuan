/**
 * Created by pior on 16/4/11.
 */
var GameOverScene = (function (_super) {
    __extends(GameOverScene, _super);
    function GameOverScene() {
        _super.call(this);
    }
    var d = __define,c=GameOverScene;p=c.prototype;
    p.init = function () {
        this.normalover = 1;
        this.score = 1000;
        this.show();
    };
    p.show = function () {
        var discover = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 0.6, 0xffffff);
        this.addChild(discover);
        var bg = new GameUtil.MyBitmap(RES.getRes('overframe_png'), this.mStageW / 2, this.mStageH / 2);
        this.addChild(bg);
        var tex;
        if (this.normalover != 2) {
            tex = '您的成绩\n' + this.score;
        }
        else {
            tex = '你把人都捞出来了\n还怎么玩啊？';
        }
        var timetext = new GameUtil.MyTextField(this.mStageW / 2, bg.y - 244, 40);
        timetext.setText(tex);
        timetext.textAlign = egret.HorizontalAlign.CENTER;
        timetext.textColor = 0xec7907;
        this.addChild(timetext);
        var offy = 133;
        var playagainbtn = new GameUtil.Menu(this, 'redbtnframe_png', 'redbtnframe_png', this.playagain);
        playagainbtn.addButtonImg('playagainbtn_png');
        playagainbtn.x = this.mStageW / 2;
        playagainbtn.y = bg.y - offy;
        this.addChild(playagainbtn);
        var sharebtn = new GameUtil.Menu(this, 'greenbtnframe_png', 'greenbtnframe_png', this.sharegame);
        sharebtn.addButtonImg('sharebtn_png');
        sharebtn.x = this.mStageW / 2;
        sharebtn.y = playagainbtn.y + 146;
        this.addChild(sharebtn);
        var sc = window.screen.availWidth / GameUtil.GameConfig.DesignWidth;
        this.gameDiv = document.getElementById("gameDiv");
        this.myImg = document.createElement("img");
        this.myImg.src = "http://h5.sxd55.com/qrcode.png";
        this.myImg.width = 200 * sc;
        this.myImg.height = 200 * sc;
        this.myImg.style.left = (window.screen.availWidth / 2 - this.myImg.width / 2) + "px";
        this.myImg.style.top = (window.screen.availHeight / 2 + (sharebtn.height / 2 + 20) * sc) + "px";
        this.myImg.style.position = "absolute";
        this.gameDiv.appendChild(this.myImg);
        this.myImg.style.display = "block"; //显示
        //myImg.style.display = "none";       //隐藏
    };
    p.playagain = function () {
        this.gameDiv.removeChild(this.myImg);
        //this.parent.removeChild(this);
        //GameScene._i().reset();
        GameUtil.GameScene.runscene(new StartGameScene());
    };
    p.sharegame = function () {
        var discont = new egret.DisplayObjectContainer();
        this.addChild(discont);
        var self = this;
        var discover = GameUtil.createRect(0, 0, this.mStageW, this.mStageH, 0.6);
        discont.addChild(discover);
        discover.touchEnabled = true;
        discover.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            self.removeChild(discont);
        }, this);
        var sharetip = new GameUtil.MyBitmap(RES.getRes('sharetip_png'), this.mStageW, 0);
        sharetip.setanchorOff(1, 0);
        discont.addChild(sharetip);
        if (this.normalover == 0) {
            SharePage._i().setdesctext('我已创下' + this.score + '高分，邀你一起拯救屈原');
        }
        else if (this.normalover == 1) {
            SharePage._i().setdesctext('我为了拯救屈原都把汨罗江填满了，你也来试试？');
        }
        else {
            SharePage._i().setdesctext('我把游戏玩出BUG了，游戏不给我玩了，2333');
        }
    };
    return GameOverScene;
})(GameUtil.BassPanel);
egret.registerClass(GameOverScene,"GameOverScene");
