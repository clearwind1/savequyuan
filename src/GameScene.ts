/**
 * Created by pior on 16/5/4.
 */

class GameScene extends GameUtil.BassPanel
{
    public constructor()
    {
        super();
    }
    public init()
    {
        this.showbg();
    }

    private showbg()
    {

    }

    private static _inst: GameScene;
    public static _i(): GameScene
    {
        if(this._inst == null)
        {
            this._inst = new GameScene();
        }

        return this._inst;
    }
}