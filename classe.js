class Obj{

  set_visible = true

  constructor(x,y,w,h, image){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.image = image
  }

  draw(){
    if (this.set_visible) {
      var img = new Image()
      img.src = this.image
      canvas.drawImage(img, this.x, this.y, this.w, this.h)
    }
  }

  collide(obj){
    if (this.x < obj.x + obj.w &&
        this.x + this.w > obj.x &&
        this.y < obj.y + obj.h &&
        this.y + this.h > obj.y)
        {
          return true
        }else {
          return false
        }
  }
}

class Text{
  texto = ""
  constructor(text){
    this.texto = text
  }
  draw_text(size, font, x, y, color){
    canvas.font = size + "px" + " " + font
    canvas.fillStyle = color
    canvas.fillText(this.texto, x, y)
  }
  update_text(valor){
    this.texto = valor
  }
}

class Shoot extends Obj{
  move(){
    this.x +=10
  }
}

class Zumbi extends Obj{
  velocidade = Math.random()*(12 - 2) + 2
  move(){
    this.x -= this.velocidade
  }
}
class Img extends Obj{
  
}
