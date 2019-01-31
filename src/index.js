import { once } from 'lodash'

class AlertGenerator {
  constructor (containerEl) {
    this.containerEl = containerEl
  }

  _wrapContent (content) {
    if (!content) {
      return content
    }

    if (!content.nodeType) {
      const wrappedContent = document.createElement('p')
      wrappedContent.innerHTML = content
      return wrappedContent
    }

    return content
  }

  _createAlert (content) {
    const alertEl = document.createElement('div')
    alertEl.classList.add('notification')

    alertEl.classList.add('animated')
    alertEl.classList.add('fadeInLeft')

    alertEl.appendChild(this._wrapContent(content))

    return alertEl
  }

  _displayAlert (alertEl, hideAfterDelay) {
    this.containerEl.appendChild(alertEl)

    // close on click
    alertEl.addEventListener('click', (e) => {
      e.preventDefault()

      this._removeAlert(alertEl)
    })

    // close after delay
    if (hideAfterDelay) {
      window.setTimeout(() => {
        this._removeAlert(alertEl)
      }, hideAfterDelay)
    }
  }

  _removeAlert (alertEl) {
    if (this.containerEl.contains(alertEl)) {
      const safeRemoveChild = once(this.containerEl.removeChild.bind(this.containerEl, alertEl));

      ['webkitAnimationEnd', 'mozAnimationEnd', 'MSAnimationEnd', 'oanimationend', 'animationend']
        .forEach((eName) => {
          alertEl.addEventListener(eName, () => {
            safeRemoveChild()
          })
        })

      alertEl.classList.add('fadeOutLeft')

      const closeEvent = new window.CustomEvent(AlertGenerator.events.CLOSE)
      alertEl.dispatchEvent(closeEvent)
    }
  }

  alert (content, hideAfterDelay, type) {
    const alertEl = this._createAlert(content)
    alertEl.classList.add(`is-${type}`)

    this._displayAlert(alertEl, hideAfterDelay)

    return alertEl
  }

  success (content, hideAfterDelay) {
    return this.alert(content, hideAfterDelay, 'success')
  }

  danger (content, hideAfterDelay) {
    return this.alert(content, hideAfterDelay, 'danger')
  }

  warning (content, hideAfterDelay) {
    return this.alert(content, hideAfterDelay, 'warning')
  }

  primary (content, hideAfterDelay) {
    return this.alert(content, hideAfterDelay, 'primary')
  }

  link (content, hideAfterDelay) {
    return this.alert(content, hideAfterDelay, 'link')
  }

  info (content, hideAfterDelay) {
    return this.alert(content, hideAfterDelay, 'info')
  }
}

AlertGenerator.events = {
  CLOSE: 'alert.close'
}

export default AlertGenerator
