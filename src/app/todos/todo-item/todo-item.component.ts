import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  chkComplete!: FormControl;
  txtInput!: FormControl;

  editando: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.chkComplete = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
  }

  edit(){
    this.editando = true;
    setTimeout(()=>{
      this.txtInputFisico.nativeElement.select();
    },1)
  }

  endEdit(){
    this.editando = false;
  }

}
