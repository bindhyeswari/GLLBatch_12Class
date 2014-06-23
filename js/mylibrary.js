HTMLElement.prototype.addGoogleLink = function (position, text) {
    var a = document.createElement('a');
    a.innerHTML = text;
    a.href = '';
    this.appendChild(a);
};

