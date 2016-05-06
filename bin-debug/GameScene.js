/**
 * Created by pior on 16/5/4.
 */
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        _super.call(this);
    }
    var d = __define,c=GameScene;p=c.prototype;
    p.init = function () {
        this.showbg();
    };
    p.showbg = function () {
    };
    GameScene._i = function () {
        if (this._inst == null) {
            this._inst = new GameScene();
        }
        return this._inst;
    };
    return GameScene;
})(GameUtil.BassPanel);
egret.registerClass(GameScene,"GameScene");
