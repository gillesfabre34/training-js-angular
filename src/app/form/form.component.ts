import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Cat } from '../data/cat.model';
import { CatService } from '../data/cat.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() submitEvent = new EventEmitter<Cat>();

  cat?: Cat;
  catsForm: FormGroup = {} as FormGroup;
  wrongPass = false;

  constructor(private fb: FormBuilder, private catService: CatService) {
    this.catsForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      // catName: ['', [Validators.required, Validators.minLength(4)]],
      pass: ['', [Validators.required]],
      pass2: ['', [Validators.required]]
    },
      { validators: this.confirm});
  }

  confirm: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
      console.log('formmmm', group);
      if (group.get('pass2')?.value === group.get('pass')?.value) {
        return null;
      }
      return {passIncorrect: true};
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('SUBMIT cat', this.cat);
    this.catService.post(this.catsForm.get('catName')?.value)
      .subscribe((newCat: Cat) => {
        console.log('new cat:', newCat);
        this.submitEvent.emit(newCat);
        this.catService.getAll().subscribe((cats: Cat[]) => {
          console.log('all catsObservable:', cats);
        })
      });
  }
}
