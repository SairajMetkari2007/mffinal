class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement ("h2");
      this.reset = createButton('RESET');
      this.text = createElement("h4");
      this.text2 = createElement("h4");
      this.text3 = createElement("h4");
      this.text4 = createElement("h4");
      this.text5 = createElement("h4");
      this.text6 = createElement("h4");
      this.text7 = createElement("h4");
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.text.hide();
      this.text2.hide();
      this.text3.hide();
      this.text4.hide();
      this.text5.hide();
      this.text6.hide();
      this.text7.hide();
      
    }
  
    display(){
      this.title.html(" Sairaj's MultiplayerFighter");
      this.title.position(displayWidth/2-200, 0);
      this.button.position(displayWidth/2, displayHeight/2);
      this.input.position(displayWidth/2-150,displayHeight/2-80);
      this.reset.position(0,displayHeight);
      
      this.text.html("1.Press 'P' key to Punch");
      this.text.position(displayWidth/2-220,displayHeight/2+30)
      this.text2.html("2.Press 'K' key to Kick");
      this.text2.position(displayWidth/2-220,displayHeight/2+30+30)
      this.text3.html("3.Press 'A' key to move Left");
      this.text3.position(displayWidth/2-220,displayHeight/2+60+30)
      this.text4.html("4.Press 'D' key to move Right");
      this.text4.position(displayWidth/2-220,displayHeight/2+90+30)
      this.text5.html("5. If your fighter dissapear on the edges just move to the opposite directions of the egdes");
      this.text5.position(displayWidth/2-220,displayHeight/2+120+30)
      this.text6.html("6. Its a multiplayer game play it with your friends");
      this.text6.position(displayWidth/2-220,displayHeight/2+150+30)
      this.text7.html("7. You can punch or kick the other player only if you are touching the other fighter");
      this.text7.position(displayWidth/2-220,displayHeight/2+180+30)
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2-70,displayHeight/4);
      });
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
       
      });
    }
  }
  