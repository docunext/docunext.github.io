---
title: Flash AS3 Example with addEventListener
date: 2009-11-30
---
Here is an example of Flash ActionScript 3 with addEventListener:

Test.hx

<pre class="sh_javascript">
package;
import flash.display.MovieClip;
import flash.events.Event;
import flash.events.EventDispatcher;
import flash.Lib;
class Test extends MovieClip {
    private var s:MovieClip;
    private var z:MovieClip;
    private var eventDispatcher:EventDispatcher;
    private var dir:Int;
    public static function main() {
        new Test();
    }
    public function new(){
        super();
        trace("New");
        dir = 1;
         eventDispatcher = new EventDispatcher ();
         var tf = new flash.text.TextField();
         tf.text = "Hello World !";
         // add it to the display list
         s = new MovieClip();
         s.addChild(tf);
         Lib.current.addChild(s);
         s.y = 40;
         Lib.current.addEventListener (Event.ENTER_FRAME, mover);
    }
    function mover(event:Event):Void {
        if (s.x == 100) {
            dir = -1;
        }
        if (s.x == 1) {
            dir = 1;
        }
        s.x = s.x + dir;
        s.scaleX = s.scaleX + dir/10;
        s.scaleY = s.scaleY + dir/10;
    }
}
</pre>

compile.hxml

<pre>
-main Test
-swf-version 9
-swf test.swf
</pre>

