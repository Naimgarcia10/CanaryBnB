import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { FileUpload } from 'src/app/models/fileUpload_model';


@Injectable({
  providedIn: 'root'
})
export class FireStorageMngService {

  private basePath = '/profilePics';

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  pushFileToStorage(fileUpload: FileUpload): Observable<string> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
  
    return new Observable<string>(observer => {
      uploadTask.snapshotChanges().pipe(finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.db.list(this.basePath).push(fileUpload);
          observer.next(downloadURL); // Emitir el URL como valor del observable
          observer.complete(); // Completar el observable
        });
      })).subscribe();
    });
  }
  

  dowloadFileFromStorage(fileUrl: string): Observable<string> {
    const storageRef = this.storage.ref(fileUrl);
    return storageRef.getDownloadURL();
  }

}
