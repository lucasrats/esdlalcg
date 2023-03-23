import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { Cartas, Cartas_constructor } from 'src/app/cartas/interfaces/carta.interface';
import { CardService } from 'src/app/cartas/services/card.service';

@Component({
  selector: 'app-mini-buscador',
  templateUrl: './mini-buscador.component.html',
  styleUrls: ['./mini-buscador.component.css']
})
export class MiniBuscadorComponent implements OnInit{

  @Output() onSubmit   : EventEmitter<FormGroup> = new EventEmitter();

  formBu: FormGroup;

  spheres: Array<any> = [
    { name: 'Tactics', value: 'tactics' },
    { name: 'Spirit', value: 'spirit' },
    { name: 'Leadership', value: 'leadership' },
    { name: 'Lore', value: 'lore' },
    { name: 'Neutral', value: 'neutral' },
    { name: 'Baggins', value: 'baggins' },
    { name: 'Fellowship', value: 'fellowship' }
  ];

  operators: Array<any> = [
    {name: '=', value: '=='},
    {name: '<', value: '>'},
    {name: '>', value: '>'}
  ];

  type_codes: Array<any> = [
    {  name: 'Héroe', value: 'hero'},
    {  name: 'Aliado', value: 'ally'},
    {  name: 'Vinculada', value: 'attachment'},
    {  name: 'Evento', value: 'event'},
    {  name: 'Misión de jugador', value: 'player-side-quest'},
    {  name: 'Contrato', value: 'contract'},
    {  name: 'Tesoro', value: 'treasure'}
  ];

  pack_code: Array<any> = [
    {  name: 'Cualquiera', value: ''},
    {  name: 'Caja Básica', value: 'Core'},
    {  name: 'Caja Básica Revisada (sólo campaña)', value: 'RevCore'},
    {  name: 'Las Penumbras del Bosque Negro', value: 'TDoM'},
    {  name: 'Enanos de Durin', value: 'DoD'},
    {  name: 'Elfos de Lorien', value: 'EoL'},
    {  name: 'Defensores de Gondor', value: 'DoG'},
    {  name: 'Jinetes de Rohan', value: 'RoR'},
    {  name: 'La Caza de Gollum', value: 'HfG'},
    {  name: 'Conflicto en la Carroca', value: 'CatC'},
    {  name: 'Viaje a Rhosgobel', value: 'JtR'},
    {  name: 'Las Colinas de Emyn Muil', value: 'HoEM'},
    {  name: 'Las Ciénagas de los Muertos', value: 'TDM'},
    {  name: 'Regreso al Bosque Negro', value: 'RtM'},
    {  name: 'Khazad-dûm', value: 'KD'},
    {  name: 'La Puerta del Cuerno Rojo', value: 'TRG'},
    {  name: 'Camino a Rivendel', value: 'RtR'},
    {  name: 'El Guardián del Agua', value: 'WitW'},
    {  name: 'La Larga Oscuridad', value: 'TLD'},
    {  name: 'Cimientos de Piedra', value: 'FoS'},
    {  name: 'Sombra y Llama', value: 'SaF'},
    {  name: 'Herederos de Númenor', value: 'HoN'},
    {  name: 'El Temor del Senescal', value: 'TSF'},
    {  name: 'El Bosque de Drúadan', value: 'TDF'},
    {  name: 'Encuentro en Amon Dîn', value: 'EaAD'},
    {  name: 'Asalto a Osgiliath', value: 'AoO'},
    {  name: 'La Sangre de Gondor', value: 'BoG'},
    {  name: 'El Valle de Morgul', value: 'TMV'},
    {  name: 'La Voz de Isengard', value: 'VoI'},
    {  name: 'La Trampa de las Tierras Brunas', value: 'TDT'},
    {  name: 'Las Tres Pruebas', value: 'TTT'},
    {  name: 'Problemas en Tharbad', value: 'TiT'},
    {  name: 'Nîn-in-Eilph', value: 'NiE'},
    {  name: 'El Secreto de Celebrimbor', value: 'CS'},
    {  name: 'La Corona Astada', value: 'TAC'},
    {  name: 'El Reino Perdido', value: 'TLR'},
    {  name: 'Los Páramos de Eriador', value: 'WoE'},
    {  name: 'Huida del Monte Gram', value: 'EfMG'},
    {  name: 'A través de las Landas de Etten', value: 'AtE'},
    {  name: 'La Traición de Rhudaur', value: 'ToR'},
    {  name: 'La Batalla de Carn Dûm', value: 'BoCD'},
    {  name: 'El Reino del Terror', value: 'TDR'},
    {  name: 'Angmar Despertado (sólo campaña)', value: 'AACE'},
    {  name: 'Los Puertos Grises', value: 'TGH'},
    {  name: 'La Huída del Tormentera', value: 'FotS'},
    {  name: 'La cosa de las profundidades', value: 'TitD'},
    {  name: 'El Templo de los Engañados', value: 'TotD'},
    {  name: 'Las ruinas anegadas', value: 'DR'},
    {  name: 'Tormenta en la Bahía Cobas', value: 'SoCH'},
    {  name: 'La ciudad de los corsarios', value: 'CoC'},
    {  name: 'Las Arenas de Harad', value: 'TSoH'},
    {  name: 'Los mûmakil', value: 'M'},
    {  name: 'Carrera por Harad', value: 'RAH'},
    {  name: 'Bajo las arenas', value: 'BtS'},
    {  name: 'La Serpiente Negra', value: 'TBS'},
    {  name: 'Las mazmorras de Cirith Gurat', value: 'DoCG'},
    {  name: 'Los Cruces del Poros', value: 'CoP'},
    {  name: 'Las tierras salvajes de Rhovanion', value: 'TWoR'},
    {  name: 'El Brezal Marchito', value: 'TWH'},
    {  name: 'Recorrido por Rhovanion', value: 'RAR'},
    {  name: 'Fuego en la Noche', value: 'FitN'},
    {  name: 'El Fantasma de Framsburgo', value: 'TGoF'},
    {  name: 'Monte Gundabad', value: 'MG'},
    {  name: 'El destino de las tierras asperas', value: 'TFoW'},
    {  name: 'Una Sombra en el Este', value: 'ASitE'},
    {  name: 'Ira y Perdición', value: 'WaR'},
    {  name: 'La ciudad de Ulfast', value: 'TCoU'},
    {  name: 'El desafío de los Aurigas', value: 'CotW'},
    {  name: 'Bajo las Montañas de Ceniza', value: 'UtAM'},
    {  name: 'La tierra del pesar', value: 'TLoS'},
    {  name: 'La fortaleza de Nurn', value: 'TFoN'},
    {  name: 'Sobre la colina y bajo la colina', value: 'OHaUH'},
    {  name: 'En el umbral', value: 'OtD'},
    {  name: 'Los Jinetes Negros', value: 'TBR'},
    {  name: 'El camino se oscurece', value: 'TRD'},
    {  name: 'La Traición de Saruman', value: 'ToS'},
    {  name: 'La Tierra de la Sombra', value: 'LoS'},
    {  name: 'La Llama del Oeste', value: 'FotW'},
    {  name: 'La Montaña de Fuego', value: 'MoF'},
    {  name: 'ALeP - Descendientes de Eorl', value: 'CoE'},
    {  name: 'ALeP - Conspiración de Aldburg', value: 'TAP'},
    {  name: 'ALeP - El Saneamiento de la Comarca', value: 'TSotS'},
    {  name: 'ALeP - Fuego en el Estemnet', value: 'FotE'},
    {  name: 'ALeP - El Paso de Rohan', value: 'TGoR'},
    {  name: 'ALeP - The Glittering Caves', value: 'TGC'},
    {  name: 'ALeP - Mustering of the Rohirrim', value: 'MotR'},
    {  name: 'ALeP - Blood in the Isen', value: 'BitI'},
    {  name: 'ALeP - The Nine are Abroad', value: 'TNaN'}
  ];

  classActive: boolean;
  hayError: boolean = false;
  cartas: Cartas_constructor[] = [];
  cartasAll: Cartas_constructor[] = [];
  cartaModal: Cartas_constructor = null!;
  numcarta: string  = '';

  @Input()
  slotsPadre: Cartas_constructor[] = [];

  @Input()
  heroesPadre: Cartas_constructor[] = [];

  @Output()
  eventoCopias = new EventEmitter<Cartas_constructor>();

  constructor( private fb: FormBuilder,
    private cardService: CardService ) {

    this.formBu = this.fb.group({
      name: new FormControl(),
      sphere_code: this.fb.array(['tactics','spirit','leadership','lore','neutral','baggins','fellowship']),
      pack_code: new FormControl(),
      type_codes_minib: this.fb.array(['hero']),

    });
    this.classActive = true;

    this.formBu.controls['pack_code'].setValue('', {onlySelf: true});

  }

  ngOnInit(): void {
    
    this.cardService.getAllCardsConstructor().subscribe( cartas => {
      this.cartasAll = cartas;
      this.cartas = cartas;

      if(this.slotsPadre != null){
        this.slotsPadre.forEach( slot => {
          let result = this.cartas.filter(carta => carta.code == slot.code);
          result[0].copias = slot.copias;
        });
      }

      if(this.heroesPadre != null){
        this.heroesPadre.forEach( heroe => {
          let result = this.cartas.filter(carta => carta.code == heroe.code);
          result[0].copias = heroe.copias;
        });
      }

      this.filtrarEnJson();
      
    });
  }

  buscar( formulario: FormGroup<any>) {
    this.hayError = false;

    console.log(formulario.value);
    
    this.cardService.getCards(formulario).subscribe( cartas => {
      console.log(cartas);
      
      this.cartas = cartas as Cartas_constructor[];
    })
  }

  onCheckboxChangeSphere(e:any) {
    //console.log(e.target.title);
    //como el data-bs-toggle parece tener conflicto con los eventos change y click del propio checkbox. Apañamos y preparamos el array de otra forma mirando la clase active
    
    const checkArray: FormArray = this.formBu.get('sphere_code') as FormArray;
    
    //if (e.target.checked) {
    if (e.target.parentNode.className.indexOf('active') > -1){
      checkArray.push(new FormControl(e.target.title));
      
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.title) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    //console.log(checkArray);
    
    this.filtrarEnJson();
  }

  onCheckboxChangeType(e:any) {
    const checkArray: FormArray = this.formBu.get('type_codes_minib') as FormArray;
    
    //if (e.target.checked) {
    if (e.target.parentNode.className.indexOf('active') > -1){
      checkArray.push(new FormControl(e.target.title));
      
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.title) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    //console.log(checkArray);
    
    this.filtrarEnJson();
  }

  filtrarEnJson(){

    var arrFilter: any = {sphere_code: [], type_code: []};

    Object.keys(this.formBu.controls).forEach( valor => {
      
      if(this.formBu.controls[valor].value != null && this.formBu.controls[valor].value != ''){
        
        switch(valor){
          case 'sphere_code':
            arrFilter.sphere_code = this.formBu.controls[valor].value;
            break;

          case 'type_codes_minib':
            arrFilter.type_code = this.formBu.controls[valor].value;
            break;

          case 'name':
            arrFilter.name = this.formBu.controls[valor].value;
            break;
          
        }
      }
    });

    let result = this.cartasAll.filter(carta => {

    for (var key in arrFilter) {
        
        if(arrFilter[key] != ""){
          var conditionEval = null;
          switch(key){
              case "sphere_code":
                  if(!arrFilter[key].toString().toLowerCase().includes(carta[key].toLowerCase())){
                      return false;
                  }
                  break;

              case "type_code":
                  if(!arrFilter[key].toString().toLowerCase().includes(carta[key].toLowerCase())){
                      return false;
                  }
                  break;

              case "name":
                if(!carta[key].toLowerCase().includes(arrFilter[key].toLowerCase())){
                  return false;
                }
                break;
          }
        }
    }
    
    return true;
    });

    this.cartas = result;
    
  }

  async checkCantidad( id: string, cantidad: number){

    var arrFilter: any = {code: id};

    let result = await this.cartasAll.filter(carta => carta.code == id);
    result[0].copias = cantidad;

    this.eventoCopias.emit(result[0]);

  }

}
