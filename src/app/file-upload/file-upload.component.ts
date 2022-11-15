import { Component } from '@angular/core';
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
	input = "";
	modalStyle = "";
	clickedImage: string;
	description = "";
  newInput = "";
  testImage: ImageFile;
  

	onInputUpdate(event: any)
	{
		this.input = (event.target as HTMLInputElement).value;
		console.log(this.input);
	}
	
	onClick(currentImg: ImageFile)
	{
    this.testImage = currentImg;
		this.description = currentImg.description;
		this.clickedImage = currentImg.url;
		this.msg = currentImg.description;
		this.modalStyle = "display: contents";
	}

	onExitModal()
	{
		this.modalStyle = "display: none";
	}

  onSaveDescription()
  {
    this.testImage.description = this.newInput
    this.description = this.testImage.description;
    this.newInput = "";
  }
	
	selectFile(event: any) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		/*if (!this.input) {
			this.msg = 'Please give the image a description!';
			event.target.files.splice(0);
			return;
		}*/
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
		this.msg = "";
		this.image = new ImageFile();
		this.image.description = this.input;
		this.image.url = reader.result; 
		this.images.push(this.image);	
		}
	}
}
