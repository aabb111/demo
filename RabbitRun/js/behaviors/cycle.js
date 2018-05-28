CycleBehavior = function (duration, interval) {
   this.duration = duration || 1000;  
   this.lastAdvance = 0;
   this.interval = interval;
};

CycleBehavior.prototype = {
   execute: function (sprite,
                         now,
                         fps,
                         context,
                         lastAnimationFrameTime) {
      if (this.lastAdvance === 0) {
         this.lastAdvance = now;
      }

      if (now - this.lastAdvance > this.duration) {
         sprite.artist.advance();
         this.lastAdvance = now;
      }
      else if (this.interval &&
          sprite.artist.cellIndex === 0) {
         if (now - this.lastAdvance > this.interval) {
            sprite.artist.advance();
			      this.lastAdvance = now;
		     }
      }
   }
};
