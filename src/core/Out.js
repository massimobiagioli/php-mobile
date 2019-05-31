export default class {

  static show(id) {
    const target = document.getElementById(id);
    target.style.display = 'block';
  }

  static hide(id) {
    const target = document.getElementById(id);
    target.style.display = 'hide';
  }

}