// const pattern= /(http|https):\/\/([a-z0-9][a-z0-9-_\.]*\.|)[a-z0-9][a-z0-9-_\.]*\.[a-z]{2,}(:\d{2,}|)(\/*|\/[^\s]+)/g

// const str= 'hoangan hoan nam luong https://fullstack.edu.vn hoan lam dat duong https://fullstack.edu.vn manh'

// const url= str.match(pattern)
// console.log(url);

// const str= `hoangan.web@gmail.com`

// const pattern= /^([A-Za-z0-9][\w\.-]+@)[\w-]+\.[\w-]{2,4}$/

// const result = str.match(pattern)

// console.log(result);


// const pattern= /^(?:http|https):\/\/(?:[a-z0-9][a-z0-9-_\.]*\.|)[a-z0-9][a-z0-9-_\.]*\.([a-z]{2,})(?::\d{2,}|)(?:\/*|\/[^\s]+)$/

// const url= `https://fullstack.edu.vn/khoa-hoc/fullstack-nodejs`

// const result= url.match(pattern)

// console.log(result);


const pattern= /((?:http|https):\/\/((?:[a-z0-9][a-z0-9-_\.]*\.|)[a-z0-9][a-z0-9-_\.]*\.[a-z]{2,}(?::\d{2,}|)(?:\/*|\/[^\s]+)))/gi

let content= 'hoangan hoan nam luong https://fullstack.edu.vn hoan lam dat duong https://vnexpress.net manh'

// content= content.replace(pattern, `<button>Link</button>`)
content= content.replace(pattern, `<a href="$1" target="_blank">$2</a>`)

document.body.innerHTML= content