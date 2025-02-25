import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {

  foto="biscoito.png"

  biscoito(){
    if (this.foto=="biscoito.png"){
      this.foto="biscoito-aberto.png"
    } else{
      this.foto="biscoito.png"
    }
  }

}
