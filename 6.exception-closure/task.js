function parseCount(i) {
    if (Number.isNaN(Number.parseFloat(i))) {
		throw new Error("Невалидное значение");
    } else {
        return Number.parseFloat(i);		
    }
}

function validateCount(i) {
	try {
		return parseCount(i);
	} catch (error){
		return error;
	}	
}

class Triangle {
	constructor(side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;

		if ((this.side1 + this.side2) < this.side3 || (this.side1 + this.side3) < this.side2 || (this.side2 + this.side3) < this.side1) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}
	
	get perimeter() {
		try {
			return this.side1 + this.side2 + this.side3;
		} catch(error){
			return new Error("Ошибка! Треугольник не существует");
		}		
	}	
 
	get area () {
		let halfP = this.perimeter/2;
		return Number(Math.sqrt(halfP*(halfP-this.side1)*(halfP-this.side2)*(halfP-this.side3)).toFixed(3));		
	}	
}

function getTriangle(side1, side2, side3) {
	try {
		return new Triangle(side1, side2, side3);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}			
		}		
	}
}