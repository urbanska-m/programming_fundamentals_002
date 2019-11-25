const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });

  describe("catalogueService.checkBook", () => {
    test("returns true if the book exists in the list", () => {
      expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
    });

    test("returns false if the book doesn't exist in the list", () => {
      expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
    });
  });

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with a given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
    });

    test("returns 0 if no books begin with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
    });
  });

  //Only work if case sensitive
  describe("catalogueService.countBooksByKeyword", () => {
    test("returns number of books containing a keyword", () => {
      expect(catalogueService.countBooksByKeyword("Assassin")).toBe(3);
    });

    test("returns number of books containing a keyword", () => {
      expect(catalogueService.countBooksByKeyword("Normal")).toBe(2);
    });

    test("returns number of books containing a keyword", () => {
      expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
    });

    // Function treats number as string. Makes sense to do this if this is how user would search for a title.
    test("returns number of books containing given number as keyword", () => {
      expect(catalogueService.countBooksByKeyword(2666)).toBe(1);
    });

    test("returns 0 if keyword is a number that doesn't appear in any titles", () => {
      expect(catalogueService.countBooksByKeyword(14)).toBe(0);
    });

    test("returns 0 if keyword is a boolean", () => {
      expect(catalogueService.countBooksByKeyword(true)).toBe(0);
    });

    test("returns 0 if keyword is an array", () => {
      expect(catalogueService.countBooksByKeyword([1, 2, 3])).toBe(0);
    });
});

  describe("catalogueService.getBooksByAuthor", () => {
    test("returns a list of books by a given author", () => {
      expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
        "A Tale of Two Cities by Charles Dickens",
        "Oliver Twist by Charles Dickens",
        "Great Expectations by Charles Dickens"]);
    });

    test("returns empty array when author not given", () => {
      expect(catalogueService.getBooksByAuthor()).toEqual([]);
    });

    test("returns a list of books by a given author, first name only", () => {
      expect(catalogueService.getBooksByAuthor("Charles")).toEqual([
        "A Tale of Two Cities by Charles Dickens",
        "Oliver Twist by Charles Dickens",
        "Great Expectations by Charles Dickens",
        "The Origin of Species by Charles Darwin"]);
      });

    test("returns a list of books by a given author, last name only", () => {
      expect(catalogueService.getBooksByAuthor("Mantel")).toEqual([
        "Wolf Hall by Hilary Mantel",
        "Bring Up The Bodies by Hilary Mantel",
        "A Place of Greater Safety by Hilary Mantel",
        "Giving Up the Ghost by Hilary Mantel",
        "The Assassination of Margaret Thatcher by Hilary Mantel"]);
    }); 
  });
});


