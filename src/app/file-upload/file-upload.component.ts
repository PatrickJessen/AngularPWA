import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import { ImageFile } from './imageFile';


@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

	//url; //Angular 8
	url: any; //Angular 11, for stricter type
	msg = "";
  images: Array<ImageFile> = new Array<ImageFile>();
  image: ImageFile;

  onClick(currentImg: ImageFile)
  {
    this.msg = currentImg.description;
  }
	
	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
      this.msg = "";
      this.image = new ImageFile();
      this.image.description = 'test';
			this.image.url = reader.result; 
      this.images.push(this.image);
      console.log(this.images[0].description);
		}
	}
}
