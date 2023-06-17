AFRAME.registerComponent('info-message', {
  schema: {
    htmlSrc: { type: 'selector' },
    startOpened: { default: false }
  },
  init: function () {
    var sceneEl = this.el.sceneEl;
    var messageEl = this.messageEl = document.createElement('div');
    var startOpened = this.data.startOpened;
    this.toggleInfoMessage = this.toggleInfoMessage.bind(this);

    messageEl.classList.add('a-info-message');
    messageEl.setAttribute('aframe-injected', '');

    var closeButtonEl = this.closeButtonEl = document.createElement('button');
    closeButtonEl.innerHTML = 'X';
    closeButtonEl.classList.add('a-close-button-info');
    closeButtonEl.onclick = this.toggleInfoMessage;

 

    this.addStyles();
    sceneEl.appendChild(messageEl);

    this.messageEl.style.display = startOpened ? '' : 'none';

    var myButton = document.getElementById('mensaje');
    myButton.addEventListener('click', this.toggleInfoMessage);
  },

  update: function () {
    var messageEl = this.messageEl;
    messageEl.innerHTML = this.data.htmlSrc.data;
    messageEl.appendChild(this.closeButtonEl);
  },

  addStyles: function () {
    var css =
      '.a-info-message{border-radius: 10px; position: absolute; width: 400px;' +
      'height: 320px; background-color: white; border: 3px solid rgba(0,0,0,.75);' +
      'bottom: 22px; left: 22px; color: rgb(51, 51, 51); padding: 20px 15px 0 15px;' +
      'font-size: 11pt; line-height: 20pt;}' +

      '.a-info-message a{border-bottom: 1px solid rgba(53,196,232,.15); color: #1497b8;' +
      'position: relative; text-decoration: none; transition: .05s ease;}' +

      '@media only screen and (min-width: 1200px) {' +
      '.a-info-message {font-size: 12pt}}' +

      '@media only screen and (max-width: 600px) {' +
      '.a-info-message {left: 20px; right: 20px; bottom: 60px; width: auto}}' +

      '@media only screen and (max-height: 600px) {' +
      '.a-info-message {left: 20px; bottom: 20px; height: 250px}}' +

      '.a-close-button-info{width: 25px; height: 25px; padding: 0;' +
      'top: 10px; right: 10px; position: absolute; color: white;' +
      'font-size: 12px; line-height: 12px; border: none; background-color: #ef2d5e;' +
      'border-radius: 5px; font-weight: medium}' +

      '.a-close-button-info:hover{background-color: #b32146; color: white}' +
      '.a-info-message-container {position: absolute; left: 80px; bottom: 20px;}' +
      '.a-info-message-button {background: rgba(0, 0, 0, 0.20) ' + this.infoMessageButtonDataURI + ' 50% 50% no-repeat;}' +
      '.a-info-message-button {background-size: 90% 90%; border: 0; bottom: 0; cursor: pointer; min-width: 134px; min-height: 54px; padding-right: 0; padding-top: 0; position: absolute; right: 80; transition: background-color .05s ease; -webkit-transition: background-color .05s ease; z-index: 9999; border-radius: 8px; touch-action: manipulation;}' +
      '.a-info-message-button:active, .a-info-message-button:hover {background-color: #ef2d5e;}';

    var style = document.createElement('style');
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
  },

  toggleInfoMessage: function () {
    var display = this.messageEl.style.display;
    display = display === 'none' ? '' : 'none';
    this.messageEl.style.display = display;
  },

  

  infoMessageButtonDataURI: 'url(assets/img/insButton3.png)'

});
