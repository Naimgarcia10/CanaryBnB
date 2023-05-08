import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { UserModel } from '../../models/user_model';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FireStorageMngService } from '../../shared/FireStorage-Mng/fire-storage-mng.service';
import { Observable } from 'rxjs/internal/Observable';
import { FileUpload } from '../../models/fileUpload_model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb:FormBuilder, private auth: AuthService, private router: Router, private storage:AngularFireStorage, private storageMng: FireStorageMngService){ }

  user: UserModel = new UserModel();
  urlImg!: Observable<string>;
  fileUpload!: FileUpload;
  urlImage!: string;

  ngOnInit() {
  }

  formRegister = this.fb.group({
    'fullname': ['', [Validators.required, Validators.minLength(3)]],
    'birthdate': ['', [Validators.required, Validators.minLength(6)]],
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
    'password2': ['', [Validators.required, Validators.minLength(6)]],
    'profilePic': ''
  });

  get fullname(){
    return this.formRegister.get('fullname') as FormControl;
  }

  get birthdate(){
    return this.formRegister.get('birthdate') as FormControl;
  }

  get email(){
    return this.formRegister.get('email') as FormControl;
  }

  get password(){
    return this.formRegister.get('password') as FormControl;
  }

  get password2(){
    return this.formRegister.get('password2') as FormControl;
  }

  get profilePic(){
    return this.formRegister.get('profilePic') as FormControl;
  }

  registerAction(): void{
    if (this.formRegister.valid) {
      this.user.email = this.formRegister.get('email')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      this.user.password = this.formRegister.get('password')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      this.user.fullname = this.formRegister.get('fullname')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      this.user.birthdate = this.formRegister.get('birthdate')!.value ?? ''; // agregamos el ! y ?? para manejar posible valor nulo
      this.user.profilePic = this.formRegister.get('profilePic')!.value ?? '';
      if(this.user.profilePic == ''){
        this.user.profilePic = 'https://firebasestorage.googleapis.com/v0/b/canarybnb-db.appspot.com/o/profilePics%2FprofilePic_dummy.png?alt=media&token=dedbe568-4a76-43ba-9f3f-0becca46f25c'; 
      }else{
        this.user.profilePic = this.urlImage;
      }
      this.auth.register(this.user);
      this.formRegister.reset();
    }
  }

  onUpload(e:any) : void{
    this.fileUpload = new FileUpload(e.target.files[0]);
    this.storageMng.pushFileToStorage(this.fileUpload).subscribe({
      next: (url: string) => {
        this.urlImage = url;
      }
    });
  }

  getUrlImg(): string{
    var urlImage : string = '';
    this.urlImg.subscribe({
      next: (url: string) => {
        urlImage = url;
      }
    });
    return urlImage; 
  }
}