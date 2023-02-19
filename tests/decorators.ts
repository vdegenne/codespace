import {decorateProperty} from '@lit/reactive-element/decorators/base.js'

const deco = (proto, name) => {
  console.log(proto)
  Object.defineProperty(proto, 'testtest', {
    value: 'hello',
    writable: false
  })
}

const deco2 = decorateProperty({
  finisher: (ctor, name) => {
    console.log(ctor)
  },
  descriptor: (prop) => ({
    value: 'yo',
    writable: true
  })
})

class Hey {
  @deco2
  myProp

  tastie() {
    console.log('yup')
  }
}


const h = new Hey()
console.log(h.myProp)