import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.models';
import * as actions from '../todo.actions';


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

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.chkComplete = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkComplete.valueChanges.subscribe(valor=>{
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    })
  }

  edit(){
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(()=>{
      this.txtInputFisico.nativeElement.select();
    },1)

  }

  endEdit(){
    this.editando = false;

    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) {
      return;
    }

    this.store.dispatch(
        actions.edit({
        id: this.todo.id,
        texto: this.txtInput.value,
      })
    );
  }

}
