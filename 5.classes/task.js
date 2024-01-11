class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  set state(condition) {
    if (condition < 0) {
      this._state = 0;
    } else if (condition > 100) {
      this._state = 100;
    } else {
      this._state = condition;
    }
  }

  get state() {
    return this._state;
  }

  fix() {
    this.state *= 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (const book of this.books) {
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (const book of this.books) {
      if (book.name === bookName) {
        this.books.splice(book, 1);
        return book;
      }
    }
    return null;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    let object = { [subject]: [mark] };
    if (mark < 2 || mark > 5) {
      return null;
    }
    if (this.marks.hasOwnProperty(subject)) {
      let arr = Object.keys(this.marks);
      for (const i of arr) {
        if (i === subject) {
          this.marks[subject].push(mark);
        }
      }
    } else {
      Object.assign(this.marks, object);
    }
  }

  getAverageBySubject(subject) {
    if (this.marks.hasOwnProperty(subject)) {
      return this.marks[subject].reduce(
        (acc, marks) => acc + marks / this.marks[subject].length,
        0
      );
    } else {
      return 0;
    }
  }

  getAverage() {
    let arr = Object.keys(this.marks);
    let summ = 0;
    if (arr.length !== 0) {
      for (const i of arr) {
        summ += this.getAverageBySubject(i);
      }
      return summ / arr.length;
    } else {
      return 0;
    }
  }
}
