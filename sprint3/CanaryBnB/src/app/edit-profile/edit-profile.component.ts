import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { UserModel } from '../models/user_model';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FireStorageMngService } from '../shared/FireStorage-Mng/fire-storage-mng.service';
import { Observable } from 'rxjs/internal/Observable';
import { FileUpload } from '../models/fileUpload_model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})

export class EditProfileComponent {
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private storage: AngularFireStorage, private storageMng: FireStorageMngService) { }

  user: UserModel = new UserModel();
  urlImg!: Observable<string>;
  fileUpload!: FileUpload;
  urlImage!: string;

  ngOnInit() {
  }

  formEditProfile = this.fb.group({
    'fullname': ['', [Validators.minLength(3)]],
    'birthdate': ['', [Validators.minLength(6)]],
    'password': ['', [Validators.minLength(6)]],
    'password2': ['', [Validators.minLength(6)]],
    'profilePic': ''
  });

  get fullname() {
    return this.formEditProfile.get('fullname') as FormControl;
  }

  get birthdate() {
    return this.formEditProfile.get('birthdate') as FormControl;
  }

  get password() {
    return this.formEditProfile.get('password') as FormControl;
  }

  get password2() {
    return this.formEditProfile.get('password2') as FormControl;
  }

  get profilePic() {
    return this.formEditProfile.get('profilePic') as FormControl;
  }

  /* registerAction(): void{
    if (this.formEditProfile.valid) {
      this.user.email = this.formEditProfile.get('email')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      this.user.password = this.formEditProfile.get('password')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      this.user.fullname = this.formEditProfile.get('fullname')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      this.user.birthdate = this.formEditProfile.get('birthdate')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      this.user.profilePic = this.formEditProfile.get('profilePic')!.value ?? '';
      if(this.user.profilePic == ''){
        this.user.profilePic = 'https://firebasestorage.googleapis.com/v0/b/canarybnb-db.appspot.com/o/profilePics%2FprofilePic_dummy.png?alt=media&token=dedbe568-4a76-43ba-9f3f-0becca46f25c'; 
      }else{
        this.user.profilePic = this.urlImage;
      }
      this.auth.register(this.user);
      this.formEditProfile.reset();
    }
  } */

  editProfielAction() {
    const form = this.formEditProfile; 
    const newData: { [key: string]: any } = {};

    for (const controlName of Object.keys(form.controls)) {
      const control = form.get(controlName);
      const valor = control?.value;
      if (valor !== '') {
        newData[controlName] = valor;
      }
    }

    console.log(newData);

    const user_email = localStorage.getItem('user_email') ?? '';

    if ('password' in newData) {
      this.auth.changePassword(user_email, newData['password']);
      delete newData['password'];
    }

    
    

    this.auth.updateProfile(user_email, newData);

  }

  onUpload(e: any): void {
    this.fileUpload = new FileUpload(e.target.files[0]);
    this.storageMng.pushFileToStorage(this.fileUpload).subscribe({
      next: (url: string) => {
        this.urlImage = url;
      }
    });
  }

  getUrlImg(): string {
    var urlImage: string = '';
    this.urlImg.subscribe({
      next: (url: string) => {
        urlImage = url;
      }
    });
    return urlImage;
  }
}
