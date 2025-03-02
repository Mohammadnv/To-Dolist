import { Component, model, OnInit } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import {FormsModule} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';




@Component({
    selector: 'app-todos',
    templateUrl: 'todo.component.html',
    imports: [InputGroupModule,InputGroupAddonModule,ButtonModule,FormsModule,DialogModule,Dialog,InputTextModule]
})

export class TodosComponent implements OnInit {
    constructor() { }

    task = '';
    todolist : {id:number , name:string , complet:boolean} []= [];
    showdialog : boolean = false


    addtask(){
        this.todolist.push({id : this.todolist.length+1 , name: this.task, complet: false })
        this.task = ''
    }

    deletetask(id:number){
        this.todolist = this.todolist.filter((i) => i.id != id)
        
    }

    opendialog(){
        this.showdialog = true;
    }



    edittask(){
       
    }


    

    ngOnInit() { }
}