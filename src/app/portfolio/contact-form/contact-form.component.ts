import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators, UntypedFormGroup, NgForm } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private builder: UntypedFormBuilder, private contact: ContactService) { }

  FormData: UntypedFormGroup;

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      headingClass: 'display-3',
      useSmallerHeadings: true,
    },
    {
      viewClasses: 'd-flex d-md-none',
      headingClass: '',
      useSmallerHeadings: true,
    },
  ];


  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new UntypedFormControl('', [Validators.required]),
      Email: new UntypedFormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new UntypedFormControl('', [Validators.required])
    })
  }


  onSubmit(FormData) {
    console.log(this.FormData.value)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

}
