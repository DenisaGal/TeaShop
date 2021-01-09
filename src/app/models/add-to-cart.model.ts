export class AddToCart {
	user: string;
	key: string;
	name: string;
	quantity: number;
	price: number;
	url: string;
	file: File;

	constructor(file: File) {
  		this.file = file;
  	}
}