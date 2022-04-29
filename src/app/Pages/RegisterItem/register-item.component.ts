import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-item',
  templateUrl: './register-item.component.html',
  styleUrls: ['./register-item.component.css']
})
export class RegisterItemComponent implements OnInit {
  file:any = null;
  imageShow: any= '';
  constructor() { }

  ngOnInit(): void {

  }

  onFileChanges(event: any): void {
    this.file = event[0].base64;   
  }
  
} 
