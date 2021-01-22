class Tool {
  constructor(displayName, element, contentType = "inner") {
    this.displayName = displayName;
    this.element = element;
    this.contentType = contentType;
    this.contentElement = this.isIterable() ? this.element[0] : this.element;
  }

  isIterable() {
    if (this.element == null) {
      return false;
    }
    return typeof this.element[Symbol.iterator] === "function";
  }

  isExisting() {
    if (
      (this.isIterable() && this.element.length > 0) ||
      (!this.isIterable() &&
        this.element !== null &&
        this.element !== undefined)
    ) {
      return true;
    }
    return false;
  }

  showFirstOccurenceContent() {
    if (this.isExisting()) {
      let content = "";
      if (this.contentType == "inner") {
        return this.contentElement.textContent;
      } else {
        return this.contentElement.getAttribute(this.contentType);
      }
    }
    console.log();
    return "";
  }

  countOccurences() {
    if (this.isExisting() && this.isIterable()) {
      return this.element.length;
    }
    if (this.isExisting() && !this.isIterable()) {
      return 1;
    }
    return 0;
  }
}
