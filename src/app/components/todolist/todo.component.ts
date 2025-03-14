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
    newtask = '';
    selectedTaskId: number | null = null;


    addtask(){
        this.todolist.push({id : this.todolist.length+1 , name: this.task, complet: false })
        this.task = ''
    }

    deletetask(id:number){
        this.todolist = this.todolist.filter((i) => i.id != id)
        
    }

    opendialog(taskId: number) {
        this.selectedTaskId = taskId;
        const taskToEdit = this.todolist.find(task => task.id === taskId);
        if (taskToEdit) {
            this.newtask = taskToEdit.name;
        }
        this.showdialog = true;
    }
    

    savenewtask() {
        if (this.selectedTaskId !== null) {
            const taskToEdit = this.todolist.find(task => task.id === this.selectedTaskId);
            if (taskToEdit) {
                taskToEdit.name = this.newtask;
            }
        }
        this.newtask = '';
        this.showdialog = false;
        this.selectedTaskId = null;
    }
    

    ngOnInit() { }
}