import { Component, HostListener, AfterViewInit, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
    NUMBER_OF_PAGES:number = 0;
    currentPage : number = 0; // this is used to control selected index color
    isSidebarOpen: boolean = false;

    constructor() {
    }
    ngOnInit(): void {
        AOS.init();
    }

    ngAfterViewInit(): void {
        this.NUMBER_OF_PAGES = document.getElementsByClassName('page').length;
    }

    scrollTo(el : HTMLElement) {
        const y: number = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    sideBarToggle() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

    @HostListener("window:scroll")
    onWindowScroll(){
        const pageHeight = this.getDocumentHeight() / this.NUMBER_OF_PAGES;
        this.currentPage = Math.floor((window.scrollY + pageHeight/2) / pageHeight); // middle of the page
    }

    // helper function to get the correct document height
    getDocumentHeight() : number {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    }
}
