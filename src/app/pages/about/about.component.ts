import {
  Component,
  OnInit
} from '@angular/core';
import {
  AboutService
} from '../../shared/services/about/about.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit {

  lerningScroll = document.getElementById('lerning-scroll');

  constructor(private aboutService: AboutService) {
    console.log('Native window obj', aboutService.nativeWindow.scrollY);
  }

  ngOnInit(): void {

    this.lerningScroll = document.getElementById('lerning-scroll');

    // console.log('Works ==>', this.lerningScroll);


  }


  ngAfterViewChecked(){
    console.log('this.lerningScroll ==>', this.lerningScroll);
    this.aboutService.nativeWindow.addEventListener('scroll', () => {
      if (this.aboutService.nativeWindow.scrollY <= 300) {
        // lerningScroll.style.right = `${window.scrollY/4}px`
        // console.log('style.right ==>', this.lerningScroll.style);
        // this.lerningScroll.style.right = `${this.aboutService.nativeWindow.scrollY/10}px`
      }
    })
      window.scroll({
        top: 0,
        behavior: 'smooth'
    })

  }


  scrollEfect(){
    if (window.scrollY <= 300){
      // this.lerningScroll.style.right = `${window.scrollY/4}px`
    }

  }
    // onScroll() {

    // }


    // top = document.getElementById('lerning-scroll');

    //   window.addEventListener('scroll', function (event)) {
    // if (window.scrollY <= 300) {
    //   lerningScroll.style.right = `${window.scrollY/4}px`
    // }

    //   if (window.scrollY<=300) {
    //     top.style.left= `${window.scrollY/4}px`;
    //   }





}