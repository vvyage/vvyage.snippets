import throttle from 'lodash.throttle';

class watcher {
  constructor(opt, callback) {
    if (typeof callback !== 'function') {
      throw new Error('no callback');
    }
    this.el = opt.el || window.document;
    this.hotHeight = opt.hotHeight || 800;
    this.throttleCallback = throttle(callback, opt.throttle || 1500, {
      trailing: false
    });
    if (this.el === window.document) {
      this.docMode = true;
    }
    this.listener = (evt) => {
      let restHeight;
      if (this.docMode) {
        const scrollHeight = Math.max(window.document.documentElement.scrollHeight, window.document.body.scrollHeight);
        const scrollTop = Math.max(window.document.documentElement.scrollTop, window.document.body.scrollTop);
        restHeight = scrollHeight - scrollTop - window.innerHeight;
      } else if (this.el.length > 0) {
        this.throttleCallback();
        return;
      } else {
        restHeight = this.el.scrollHeight - this.el.scrollTop - this.el.clientHeight;
      }
      if (restHeight <= this.hotHeight) {
        this.throttleCallback();
      }
    };
    this.isBinded = false;
  }

  bind() {
    if (this.isBinded) {
      return;
    }
    if (this.el.length > 0) {
      window.addEventListener('scroll', this.listener, false);
    } else {
      this.el.addEventListener('scroll', this.listener, false);
    }
    this.isBinded = true;
  }
  unbind() {
    if (!this.isBinded) {
      return;
    }
    if (this.el.length > 0) {
      window.removeEventListener('scroll', this.listener, false);
    } else {
      this.el.removeEventListener('scroll', this.listener, false);
    }
    this.isBinded = false;
  }
}

export default watcher;