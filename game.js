class Game{
    constructor(){
        
    }

    

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
            
          
          }

          form = new Form();
          form.display();
          
        }
        coin1=createSprite(350,350,50,50);
        coin1.addImage(blackcoin);
        coin2=createSprite(350,329,10,10);
        coin2.addImage(browncoin);
        coin3=createSprite(332,370,10,10);
        coin3.addImage(blackcoin);
        coin4=createSprite(350,370,10,10);
        coin4.addImage(browncoin);
        coin5=createSprite(328,330,10,10);
        coin5.addImage(blackcoin);
        coin6=createSprite(330,350,10,10);
        coin6.addImage(browncoin);
        coin7=createSprite(372,350,10,10);
        coin7.addImage(browncoin);
        coin8=createSprite(370,330,10,10);
        coin8.addImage(blackcoin);
        coin9=createSprite(350,310,10,10);
        coin9.addImage(blackcoin);
        coin10=createSprite(392,350,10,10);
        coin10.addImage(blackcoin);
        coin11=createSprite(313,350,10,10);
        coin11.addImage(blackcoin);
        coin12=createSprite(370,370,10,10);
        coin12.addImage(blackcoin);
        coin13=createSprite(350,388,10,10);
        coin13.addImage(blackcoin);
        coins = createGroup(coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10,coin11,coin12,coin13);
        hole1=createSprite(58,67,30,30);
        hole1.visible=false;
        hole2=createSprite(635,67,30,30);
        hole2.visible=false;
        hole3=createSprite(58,630,30,30);
        hole3.visible=false;
        hole4=createSprite(635,630,30,30);
        hole4.visible=false;
        holes = createGroup(hole1,hole2,hole3,hole4);
        borders=createGroup(border1,border2,border3,border4);
        border1=createSprite(345,55,548,10);
        border2=createSprite(43,350,10,548);
        border3=createSprite(348,647,546,10);
        border4=createSprite(651,350,10,548);
        borders=createEdgeSprites();
        
        
            

        striker = createSprite(350,140,20,20);
        striker.addImage(carromstriker);
        striker.scale=0.1;

        

        
    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",(data)=>{
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            background("black");
            image(carromboard,0,0,700,700);
        }
        if(keyDown("UP_ARROW")){
            striker.velocityX=0;
            striker.velocityY=+10;


            striker.velocityY=+5;
        }

        if(striker.isTouching(borders)){
            striker.bounceOff(borders);
        }


        
            
            



        

        

        drawSprites();        
        

    }
}
 