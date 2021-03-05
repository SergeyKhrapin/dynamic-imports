import * as Module from './index2'
// The code below isn't executed until a code inside a module is complete
console.log('code after STATIC import');

function renderContent(msg) {
    const fragment = new DocumentFragment()
    const main = document.getElementById('main')
    const h2 = document.createElement('h2')
    const span = document.createElement('span')

    h2.innerText = 'This is so-called "below the fold" content'
    span.innerText = msg

    fragment.append(h2)
    fragment.append(span)
    main.append(fragment)
}

async function scrollHandler() {
    if (window.scrollY >= 200) {
        const { message } = await import('./index2')
        // If we do not use await - the code below will be executed immediately, not waiting for import
        console.log('code after DYNAMIC import');
        renderContent(message)
        window.removeEventListener('scroll', scrollHandler)
    }
}

// Load a module only when page is scrolled down
window.addEventListener('scroll', scrollHandler)
