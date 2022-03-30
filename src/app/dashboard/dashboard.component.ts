import { Component, OnInit } from '@angular/core';
import { Like } from '../modules/likes.module';
import { HeroService } from '../services/hero.service';
import { trigger, state, style, animate, transition} from '@angular/animations'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('btnState', [
      state('inactive', style({
        transform: 'scale(0.5)',
        opacity: 0,

      })),
      state('active', style({
        opacity: 0.8,
        transform: 'scale(1.1)',

      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))

    ]),
    trigger('colorLike', [
      state('0', style({
        color: 'black'

      })),
      state('5', style({
        color: 'blue'

      })),
      state('10', style({
        color: 'green'

      })),


    ]),
  ]
})
export class DashboardComponent implements OnInit {

  arraySkills: any = [];
  arrayLoading: any = [];

  likeState : any = [];
  colorLikeState : any = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

    this.heroService.getAllLikes().subscribe(resp => {
      this.arraySkills = resp;
      this.arrayLoading = this.arraySkills.map(() => false); //monta array de loading para cada card
      this.likeState = this.arraySkills.map(() => 'active'); //monta array dos estados de cada card para incrementar cada um 
      this.colorLikeState = this.arraySkills.map(() => '0'); //monta array dos estados de cada card para verificar a quantidade de like e mudar a cor

    });

  }

  addLike(idSkill: any): void{
    this.arrayLoading[idSkill] = true;
    this.likeState[idSkill] = 'inactive';

    this.heroService.getLike(idSkill).subscribe(resp => {    
      let countNew = resp[0].countLike + 1;

      countNew >= 5 ? this.colorLikeState[idSkill] = '5' : '0';
      countNew > 10 ? this.colorLikeState[idSkill] = '10' : '0';

      let index = this.arraySkills.findIndex((val: any) => val.id == idSkill);
      let dataLike: Like = {id: resp[0].id, title: resp[0].title, desc: resp[0].desc, countLike: countNew};

      this.arraySkills[index] = dataLike;
      this.likeState[idSkill] = 'active';
      this.arrayLoading[idSkill] = false;

      this.heroService.incrementLike(dataLike).subscribe(resp => {
      })
      
    });
  }


}
