import Vue from 'vue'
import { TvToast, spawn, removeElement } from 'tv-toast'

import options from './options'

export default (ctx, inject) => {

  const toasts = document.createElement('div')

  toasts.classList.add(
    'z-40', 'fixed', 'inset-0', 'flex', 'flex-col-reverse', 'items-end', 'justify-center',
    'px-4', 'py-6', 'pointer-events-none', 'sm:p-6', 'sm:items-end', 'sm:justify-end'
  )

  if (options.defaults.containerClasses) {
    toasts.classList.add(options.defaults.containerClasses)
  }
  toasts.setAttribute('id', 'toasts')
  document.body.appendChild(toasts)

  const ToastProgrammatic = {
    show (props) {
      if (typeof props === 'string') props = { message: props }
      return spawn('toasts', props, TvToast, Vue, options)
    },
    success (props) {
      return spawn('toasts', {type: 'success', message: props}, TvToast, Vue, options)
    },
    info (props) {
      return spawn('toasts', {type: 'info', message: props}, TvToast, Vue, options)
    },
    danger (props) {
      return spawn('toasts', {type: 'danger', message: props}, TvToast, Vue, options)
    },
    warning (props) {
      return spawn('toasts', {type: 'warning', message: props}, TvToast, Vue, options)
    },
  }
  inject('toast', ToastProgrammatic)
}
