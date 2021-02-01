class Form{

    constructor(){

        
                this.input = createInput("name");
                this.greeting = createElement("h2");
                this.reset = createButton("Reset");
                
                this.button = createButton("play");
                this.tutorial = createButton("Tutorial");
                this.play = createButton("Play");
                
        
            }
        
        
            hide(){
        
                this.greeting.hide();
                this.button.hide();
                this.input.hide();
        
            }
        
             display(){
        
                var title =createElement("h1");
                title.html("Carrom Board");
                title.position(displayWidth/2-50,0); 
              
                
                
        
                
                this.input.position(displayWidth/2-40,displayHeight/2-80);
        
                
                this.button.position(displayWidth/2+100,displayHeight/2);
                this.reset.position(displayWidth-200,30);
                this.tutorial.position(displayWidth/2+300,displayHeight/2);
                this.play.position(displayWidth/2+600,displayHeight/2);
        
                this.button.mousePressed(()=>{
                    this.input.hide();
                    this.button.hide();
                    this.tutorial.hide();
                    this.play.hide();

                    player.name = this.input.value();
                    playerCount+=1;
                    player.index = playerCount;
                    player.update();
                    player.updateCount(playerCount);
                    this.greeting.html("Hello " + player.name)
                    this.greeting.position(displayWidth/2 - 70, displayHeight/4);
                  });
        
                this.reset.mousePressed(()=>{
        
                    game.updateState(0);
                    player.updateCount(0);
                    
                })
             }
            }
    
