import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../data/base/service';
import { EmployeeModel } from '../../../../domain/interfaces/model/Model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  formValue!: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  employees: any;
  isEditing: boolean = false;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  panelOpenState = false;

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.api.getClientes().subscribe((resp) => {
      this.employees = resp;
    });
  }

  // deleteEmployee(id: string) {
  //   this.api.delete(id).subscribe((resp) => {
  //     this.getAllEmployees();
  //     alert('Employee Deleted');
  //   });
  // }




}
